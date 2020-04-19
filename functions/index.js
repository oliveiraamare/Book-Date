let admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();
const functions = require('firebase-functions');
const sortByDistance = require('sort-by-distance'); 

/* Cadastra o usuário no banco e retorna para ele os possíveis matchs que estão ao redor */

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

async function salva_usuarios_proximos(usuarios_proximos, usuario_uid) {
  const usuarios = Object.assign({}, usuarios_proximos);
  return firestore.collection('usuarios').doc(usuario_uid).collection('usuarios_proximos').doc(usuario_uid)
    .set(usuarios)
    .catch( error => {
      console.log('Não foi possivel salvar os usuarios próximos: ', error.message)
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Caso o usuário_logado mande mensagem para alguém que está no Bookshelf, retiramos este do array --estante--
 para que não apareça mais no Bookshelf. 
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
  firestore.collection('usuarios').doc(uid)
    .collection('estante').doc(uid).set(nova_estante)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** listening usuarios_manipulados * /

exports.update_usuarios_proximos = functions.firestore
  .document('usuarios/{userId}/{messageCollectionId}/{messageId}').onWrite((change, context) => {
    console.log('ocorreu uma nova mudança')
    if(change.after.exists){
      return buscar_dados()
    } else {
      return null
    }
})

async function buscar_dados() {
  var usuarios_cadastrados = [];
  firestore.collection('usuarios').get().then(snapshot => {      
    snapshot.forEach(doc => {
      const usuarios = doc.data();
      usuarios_cadastrados.push(usuarios);  
    })     
    return tratar_usuarios(usuarios_cadastrados)
  }).catch(error => {
    console.log('Erro ao trazer os dados do usuário logado: ', error.message);
  });    
}

async function tratar_usuarios(usuarios_cadastrados){
  usuarios_cadastrados.forEach(snapshot => {
    const usuario = snapshot;
    return (pega_usuarios_swiped(usuarios_cadastrados, usuario))
  })
}

async function pega_usuarios_swiped(usuarios_cadastrados, usuario) {
  firestore.collection('usuarios').doc(usuario.uid)
    .collection('usuarios_swiped').doc(usuario.uid)
    .get().then(snapshot => {
      if (snapshot.exists) {
        const usuarios_swiped = Object.assign([], snapshot.data());
        return compara_estante_e_proximos(usuarios_cadastrados, usuarios_swiped, usuario); 
      } else {
        return pega_info_usuario(usuarios_cadastrados, usuario)
      }
    }).catch( error => {
      console.log('Não foi possível pegar os usuários swiped: ', error.message)
    });
}

async function compara_estante_e_proximos(usuarios_cadastrados, usuarios_swiped, usuario) {
  //Find values that are in result2 but not in result1
  const novos_usuarios = usuarios_cadastrados.filter(novo => {
    return !usuarios_swiped.some(existente => {
        return novo.uid === existente.uid;
    });
  });
  return pega_info_usuario(novos_usuarios, usuario);
}

async function pega_info_usuario(novos_usuarios, usuario){
  const buscando = usuario.buscando;
  const long = usuario.localizacao.longitude;
  const lat = usuario.localizacao.latitude;
  if (buscando ===  'Ambos'){
    return trazerAmbos(usuario, long, lat, novos_usuarios);
  } else {
    console.log('entrei aqui')
    return trazer_sexoEscolhido(usuario, long, lat, novos_usuarios);
  }
}

async function trazerAmbos(usuario, long, lat, novos_usuarios) {
  var usuarios_match = [];
  novos_usuarios.forEach(dados_novos_usuarios => {
    if ((dados_novos_usuarios.uid !== usuario.uid) 
          && (dados_novos_usuarios.buscando === usuario.sexo 
                || dados_novos_usuarios.buscando === 'Ambos')
    ){
      usuarios_match.push({
        longitude: dados_novos_usuarios.localizacao.longitude,
        latitude: dados_novos_usuarios.localizacao.latitude,
        dados_novos_usuarios
      });    
    }         
  })
  return ordena_por_distancia(usuarios_match, long, lat, usuario)
}

async function trazer_sexoEscolhido(usuario, long, lat, novos_usuarios) {
  var usuarios_match = [];
  novos_usuarios.forEach(dados_novos_usuarios => {
    if ((dados_novos_usuarios.sexo === usuario.buscando)
          && (dados_novos_usuarios.uid !== usuario.uid)  
          && (dados_novos_usuarios.buscando === usuario.sexo 
          || dados_novos_usuarios.buscando === 'Ambos')
     ){  
        usuarios_match.push({
          longitude: dados_novos_usuarios.localizacao.longitude,
          latitude: dados_novos_usuarios.localizacao.latitude,
          dados_novos_usuarios
        });
      }
  });  
  return ordena_por_distancia(usuarios_match, long, lat, usuario);
}

async function ordena_por_distancia(usuarios_match, long, lat, usuario) {
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
  return salva_usuariosProximos(usuarios_proximos, usuario);
}

async function salva_usuariosProximos(usuarios_proximos, usuario) {
  usuarios_proximos.forEach(element => {
    console.log(element.nome)
  });
  const usuarios = Object.assign({}, usuarios_proximos);
  firestore.collection('usuarios').doc(usuario.uid)
    .collection('usuarios_proximos').doc(usuario.uid)
    .set(usuarios)
    .catch( error => {
      console.log('Não foi possivel salvar os usuarios proximos, ', error.message)
    });
}


/**--------------------------------------------------------------------------------- 

exports.update_estante = functions.firestore
  .document('usuarios/{userId}/mensagem/{messageId}').onWrite((change, context) => {
    console.log('ocorreu uma nova mudança')
    if(change.after.exists){
      const usuario_logado = snap.data();
      const usuario_uid = context.params.userId
      return pega_usuarios_estante(usuario_uid)
    } else {
      return null
    }
})
 
async function pega_usuarios_estante(usuario_uid) {
    console.log('cheguei para pegar os usuarios estante')
    return firestore.collection('usuarios').doc(usuario_uid)
      .collection('estante').doc(usuario_uid)
      .get().then(snapshot => {   
        const usuarios_estante= Object.assign([], snapshot.data());   
        console.log(usuarios_estante)
        return pega_usuarios_mensagem(usuarios_estante, usuario_uid)
      }).catch(error => {
        console.log('Erro ao trazer todos os usuarios: ', error);
      }) 
  }

  async function pega_usuarios_mensagem(usuarios_estante, usuario_uid) {
    console.log('cheguei para pegar os usuarios mensagem')
    return firestore.collection('usuarios').doc(usuario_uid)
      .collection('mensagem').doc(usuario_uid)
      .get().then(snapshot => {   
        const usuarios_mensagem= Object.assign([], snapshot.data());   
        console.log(usuarios_mensagem)
        return compara_manipulado_e_existentes(usuarios_estante, usuarios_mensagem, usuario_uid)
      }).catch(error => {
        console.log('Erro ao trazer todos os usuarios: ', error);
      }) 
  }

  async function compara_manipulado_e_existentes(usuarios_estante, usuarios_mensagem ,usuario_uid) {
    console.log('cheguei na comparação')
    //Find values that are in result2 but not in result1
    const novos_usuarios = usuarios_estante.filter((novo)=> {
      return !usuarios_mensagem.some((existente) => {
          return novo.uid === existente.uid;
      });
    });
    console.log(novos_usuarios)
    return salvaUsuariosProximos(novos_usuarios, usuario_uid);
  }

  async function salvaUsuariosProximos(novos_usuarios, usuario_uid) {
    console.log('cheguei para salvar o resultado')
    const usuarios = Object.assign({}, novos_usuarios);
    return firestore.collection('usuarios').doc(usuario_uid).collection('estante').doc(usuario_uid)
      .set(usuarios)
      .catch( error => {
        console.log('Não foi possivel salvar os usuarios próximos: ', error.message)
      });
  }  */