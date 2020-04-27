let admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();
const functions = require('firebase-functions');
const sortByDistance = require('sort-by-distance'); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Função que cadastra o usuário no banco e retorna para ele os possíveis matchs que estão ao redor */

/* Verificamos qual o gênero o usuário que foi modificado deseja encontrar para podermos 
  retornar para ele somente o que escolheu
*/
exports.cadastra_usuario = functions.firestore
  .document('usuarios/{userId}').onCreate( (snap, context) => {
    const usuario_logado = snap.data();
    const buscando = usuario_logado.buscando;
    const usuario_uid = context.params.userId
    const long = usuario_logado.localizacao.longitude;
    const lat = usuario_logado.localizacao.latitude;
    if (buscando ===  'Ambos'){
      return trazer_ambos(usuario_logado, usuario_uid, long, lat);
    } else {
      return trazer_sexo_escolhido(usuario_logado, usuario_uid, buscando, long, lat);
    }
})

/* Caso o novo usuário queira ambos os sexos, verificamos no array de usuarios_cadastrados
  quem também quer uma pessoa do mesmo sexo que o usuario que foi modificado é.
*/
async function trazer_ambos(usuario_logado, usuario_uid, long, lat) {
  return firestore.collection('usuarios').get()
    .then(snapshot => {
      var possiveis_matchs = [];
      snapshot.forEach(doc => {
        const usuario_match = doc.data();
        if ((usuario_match.uid !== usuario_uid) 
              && (usuario_match.buscando === usuario_logado.sexo 
                    || usuario_match.buscando === 'Ambos')
        ){
          possiveis_matchs.push({
            longitude: usuario_match.localizacao.longitude,
            latitude: usuario_match.localizacao.latitude,
            usuario_match
          });    
        }     
        return ordenar_por_distancia(possiveis_matchs, long, lat, usuario_uid);  
      })
      return true
    }).catch(error => {console.log('Erro ao trazer os usuarios(ambos): ', error);})
}

/* Caso o novo usuário queira um sexo específico, verificamos no array de usuarios_cadastrados
  quem também quer uma pessoa do mesmo sexo que o usuario que foi modificado é.
*/
async function trazer_sexo_escolhido(usuario_logado, usuario_uid, buscando, long, lat) {
  var possiveis_matchs = [];
  firestore.collection('usuarios').where('sexo', '==', buscando).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const usuario_match = doc.data();
        if ((usuario_match.uid !== usuario_uid)  
           && (usuario_match.buscando === usuario_logado.sexo 
              || usuario_match.buscando === 'Ambos')
        ){  
          possiveis_matchs.push({
            longitude: usuario_match.localizacao.longitude,
            latitude: usuario_match.localizacao.latitude,
            usuario_match
          });
        }
      })
      return ordenar_por_distancia(possiveis_matchs, long, lat, usuario_uid);
    }).catch(error => {
      console.log('Erro ao trazer os usuarios(sexo escolhido): ', error.message);
    });
}

/* Retorna um array ordenado com os usuarios que estão próximos (do mais próximo ao
  mais longe) ao usuário modificado.
*/
async function ordenar_por_distancia(possiveis_matchs, long, lat, usuario_uid) {
  const coordenadas = { yName: 'latitude', xName: 'longitude'};  
  const localizacao_usuario_logado = { longitude: long, latitude: lat};
  const resultado_localizacao = sortByDistance(
    localizacao_usuario_logado, 
    possiveis_matchs, 
    coordenadas
  );
  var usuarios_proximos = [];
  resultado_localizacao.forEach(element => {
    usuarios_proximos.push(
      element.usuario_match
    );
  })
  return salva_usuarios_proximos(usuarios_proximos, usuario_uid);
}

/* Salva um array de objetos na collection do novo usuário contendo os usuários próximos
*/
async function salva_usuarios_proximos(usuarios_proximos, usuario_uid) {
  const usuarios = Object.assign({}, usuarios_proximos);
  return firestore.collection('usuarios').doc(usuario_uid).collection('usuarios_proximos').doc(usuario_uid)
    .set(usuarios)
    .catch( error => {
      console.log('Não foi possivel salvar os usuarios próximos: ', error.message)
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Função que faz update na collection estante para retirar os usuários que foram migrados para a
  collection mensagem.
*/

/* Caso o usuário_logado mande mensagem para alguém que está no Bookshelf, retiramos este do array --estante-- para que não apareça mais no Bookshelf. 
*/

exports.update_estante = functions.https.onRequest((req, res) => {
  firestore.collection('usuarios').doc(req.body.data.uid)
    .collection('estante').doc(req.body.data.uid).get()
    .then(snapshot => {
      const usuarios_na_estante = Object.assign([], snapshot.data());
      var nova_estante = usuarios_na_estante.filter(doc => doc.uid !== req.body.data.match_uid);
      nova_estante = Object.assign({}, nova_estante);
      return salva_nova_estante(nova_estante, req.body.data.uid)
    })
    .catch(error => { console.log('Erro ao deletar o usuário na estante. ', error.message)})
  res.status(200).send(console.log('Usuário deletado da estante.'));
})

async function salva_nova_estante(nova_estante, uid) {
  return firestore.collection('usuarios').doc(uid)
    .collection('estante').doc(uid).set(nova_estante)
    .then(() => console.log('Update feito na estante'))
    .catch(error => { console.log('Erro ao fazer update dos usuários na estante. ', error.message)})
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* listening collection usuarios */
/* Função utilizada para fazer update da collection usuários próximos.
  Para acontecer o update um dos segintes parâmetros deve ter seu valor mudado:
        o valor do swipedAll ser mudado para true
        ou a localização ser atualizada com novos valores
*/
exports.update_usuarios_proximos = functions.firestore
  .document('usuarios/{userId}').onWrite((change, context) => {
    const usuario_modificado = change.after.data();
    const usuario_sem_modificacao = change.before.data();

    const houve_modificacao_latitude = (
      usuario_sem_modificacao.localizacao.latitude !== usuario_modificado.localizacao.latitude ? true : false
    );
  
    const houve_modificacao_longitude = (
      usuario_sem_modificacao.localizacao.longitude !== usuario_modificado.localizacao.longitude ? true : false
    );

    if( usuario_modificado.swipedAll === true ) {
      return buscar_usuarios(usuario_modificado)
    } 

    if ( houve_modificacao_latitude || houve_modificacao_longitude ) {
      return buscar_usuarios(usuario_modificado)
    }
    return true
})

/* Retorna um array com todos os usuários cadastrados no banco */
async function buscar_usuarios(usuario_modificado) {
  var usuarios_cadastrados = [];
  firestore.collection('usuarios').get().then(snapshot => {      
    snapshot.forEach(doc => {
      const usuarios = doc.data();
      usuarios_cadastrados.push(usuarios);  
    })     
    return pega_usuarios_swiped(usuarios_cadastrados, usuario_modificado)
  }).catch(error => {
    console.log('Não foi possível retornar a busca pelos usuários cadastrados. ',error.message);
  });    
}

/* Retorna um array com as pessoas que já apareceram no feed do usuario atual, caso a collection 
  usuarios_swiped esteja populada, caso não esteja, segue o fluxo normal para cadastrar os
  novos usuários
*/
async function pega_usuarios_swiped(usuarios_cadastrados, usuario_modificado) {
  firestore.collection('usuarios').doc(usuario_modificado.uid)
    .collection('usuarios_swiped').doc(usuario_modificado.uid)
    .get().then(snapshot => {
      if (snapshot.exists) {
        const usuarios_swiped = Object.assign([], snapshot.data());
        return compara_estante_e_proximos(usuarios_cadastrados, usuarios_swiped, usuario_modificado); 
      } else {
        return info_usuario_modificado(usuarios_cadastrados, usuario_modificado)
      }
    }).catch( error => {
      console.log('Não foi possível retornar os usuarios_swiped. ', error.message)
    });
}

/* Compara o array de usuarios_cadastrados com o array de usuarios_swiped e retorna um novo array 
  contendo somente os usuários que não estão no usuarios_swiped  
*/
async function compara_estante_e_proximos(usuarios_cadastrados, usuarios_swiped, usuario_modificado) {
  //Find values that are in result2 but not in result1
  const novos_usuarios = usuarios_cadastrados.filter(novo => {
    return !usuarios_swiped.some(existente => {
        return novo.uid === existente.uid;
    });
  });
  return info_usuario_modificado(novos_usuarios, usuario_modificado);
}

/* Após as comparações iniciais, verificamos qual o gênero o usuário que foi modificado deseja encontrar
  para podermos retornar para ele somente o que escolheu
*/
async function info_usuario_modificado(novos_usuarios, usuario_modificado){
  const buscando = usuario_modificado.buscando;
  const long = usuario_modificado.localizacao.longitude;
  const lat = usuario_modificado.localizacao.latitude;
  if (buscando ===  'Ambos'){
    return retorna_ambos_sexos(usuario_modificado, long, lat, novos_usuarios);
  } else {
    return retorna_sexo_escolhido(usuario_modificado, long, lat, novos_usuarios);
  }
}

/* Caso o usuário modificado queira ambos os sexos, verificamos no array de usuarios_cadastrados
  quem também quer uma pessoa do mesmo sexo que o usuario que foi modificado é.
*/
async function retorna_ambos_sexos(usuario_modificado, long, lat, novos_usuarios) {
  var usuarios_match = [];
  novos_usuarios.forEach(dados_novos_usuarios => {
    if ((dados_novos_usuarios.uid !== usuario_modificado.uid) 
          && (dados_novos_usuarios.buscando === usuario_modificado.sexo 
                || dados_novos_usuarios.buscando === 'Ambos')
    ){
      usuarios_match.push({
        longitude: dados_novos_usuarios.localizacao.longitude,
        latitude: dados_novos_usuarios.localizacao.latitude,
        dados_novos_usuarios
      });    
    }         
  })
  return ordena_por_distancia(usuarios_match, long, lat, usuario_modificado)
}

/* Caso o usuário modificado queira um sexo específico, verificamos no array de usuarios_cadastrados
  quem também quer uma pessoa do mesmo sexo que o usuario que foi modificado é.
*/
async function retorna_sexo_escolhido(usuario_modificado, long, lat, novos_usuarios) {
  var usuarios_match = [];
  novos_usuarios.forEach(dados_novos_usuarios => {
    if ((dados_novos_usuarios.sexo === usuario_modificado.buscando)
          && (dados_novos_usuarios.uid !== usuario_modificado.uid)  
          && (dados_novos_usuarios.buscando === usuario_modificado.sexo 
          || dados_novos_usuarios.buscando === 'Ambos')
     ){  
        usuarios_match.push({
          longitude: dados_novos_usuarios.localizacao.longitude,
          latitude: dados_novos_usuarios.localizacao.latitude,
          dados_novos_usuarios
        });
      }
  });  
  return ordena_por_distancia(usuarios_match, long, lat, usuario_modificado);
}

/* Retorna um array ordenado com os usuarios que estão próximos (do mais próximo ao
  mais longe) ao usuário modificado.
*/
async function ordena_por_distancia(usuarios_match, long, lat, usuario_modificado) {
  const sortByDistance = require('sort-by-distance'); 
  const coordenadas = { yName: 'latitude', xName: 'longitude'};  
  const localizacao_usuario_logado = { longitude: long, latitude: lat};
  const resultado_localizacao = sortByDistance(
    localizacao_usuario_logado, 
    usuarios_match, 
    coordenadas
  );
  var usuarios_proximos = [];
  resultado_localizacao.forEach(element => {
    usuarios_proximos.push(
      element.dados_novos_usuarios,
    );
  })
  return salva_novos_usuarios_proximos(usuarios_proximos, usuario_modificado);
}

/* Salva um array de objetos na collection do usuário modificado contendo os novos usuários próximos
*/
async function salva_novos_usuarios_proximos(usuarios_proximos, usuario_modificado) {
  const usuarios_novos = Object.assign({}, usuarios_proximos);
  return firestore.collection('usuarios').doc(usuario_modificado.uid)
    .collection('usuarios_proximos').doc(usuario_modificado.uid)
    .set(usuarios_novos)
    .then(() => modifica_swipedAll(usuarios_novos, usuario_modificado))
    .catch( error => {
      console.log('Não foi possivel salvar os novos usuários próximos. ', error.message)
    });
}

/* Verifica se o objeto usuarios_novos está vazio, se sim, o swipedAll continua como true,
  caso não, seta o swipedAll para false
*/
async function modifica_swipedAll(usuarios_novos, usuario_modificado) {
  if( !(Object.entries(usuarios_novos).length === 0 
      && usuarios_novos.constructor === Object)) 
  {
    return firestore.collection('usuarios').doc(usuario_modificado.uid)
      .set({swipedAll: false}, { merge: true })
  } else { return null }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.refresh_usuarios_proximos = functions.https.onRequest((req, res) => {
  firestore.collection('usuarios').doc(req.body.data.uid)
    .collection('usuarios_proximos').doc(req.body.data.uid).get()
    .then(snapshot => {
      const usuarios_proximos = Object.assign([], snapshot.data());
      return usuarios_swiped(usuarios_proximos, req.body.data.uid)
    })
    .catch(error => { console.log('Erro ao buscar os usuários próximos. ', error.message)})
  res.status(200).send(console.log('O refresh no usuarios_proximos foi realizado.'));
})

async function usuarios_swiped(usuarios_proximos, uid) {
  firestore.collection('usuarios').doc(uid)
    .collection('usuarios_swiped').doc(uid).get()
    .then(snapshot => {
      if (snapshot.exists) {
        const usuarios_swiped = Object.assign([], snapshot.data());
        return compara_proximos_e_estante(usuarios_proximos, usuarios_swiped, uid)
      } else {
        return console.log('Não existem usuarios na estante');
      }
    })
    .catch(error => { console.log('Não foi possível retornar os usuarios_swiped. ', error.message)})
}

async function compara_proximos_e_estante(usuarios_proximos, usuarios_swiped, uid) {
  //Find values that are in result2 but not in result1
  const usuarios_existentes = usuarios_proximos.filter(novo => {
    return !usuarios_swiped.some(existente => {
        return novo.uid === existente.uid;
    });
  });
  return refresh_usuarios_proximos(usuarios_existentes, uid);
}

async function refresh_usuarios_proximos(usuarios_existentes, uid) {
  const usuarios_novos = Object.assign({}, usuarios_existentes);
  return firestore.collection('usuarios').doc(uid)
    .collection('usuarios_proximos').doc(uid).set(usuarios_novos)
    .then(() => console.log('Refresh feito na collection usuarios_proximos.'))
    .catch(error => { console.log('Erro ao fazer refresh do usuarios_proximos. ', error.message)})
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////