let admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();
const functions = require('firebase-functions');
const sortByDistance = require('sort-by-distance'); 

/*https://stackoverflow.com/questions/49789658/firebase-cloud-function-triggering-expo-sdk-to-push-notifications-to-users

exports.notificacoes = functions.firestore
  .document('usuarios/{userId}').onWrite( (snap, context) => {
    const usuario_logado = snap.data();
    const token = usuario_logado.expoToken;
  })*/




/* salva um array com os usuários próximos ao usuário que 
  acabou de ser criado 
*/
exports.salvar_usuarios_proximos = functions.firestore
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

/*exports.update_usuarios_proximos = functions.firestore
  .document('usuarios/{userId}/usuarios_manipulados').onWrite((change, context) => { /* ... * /
    console.log('ocorreu uma mudança')
    return true
});*/

///////////////////////////////////////////////////////////////////////////////////
/** listening usuarios_manipulados */

exports.update_usuarios_proximos = functions.firestore
  .document('usuarios/{userId}/usuarios_manipulados/{messageId}').onWrite((change, context) => {
    console.log('ocorreu uma nova mudança')
    const usuario_uid =context.params.userId 

    if(change.after.exists){
      var promise = new Promise((resolve, reject) => {
        console.log('existe data')
      const usuarios = change.after.data();
      const usuarios_manipulados = Object.assign([], usuarios); 
      console.log(usuarios_manipulados)
       resolve(pega_usuarios_proximos(usuarios_manipulados, usuario_uid))        
    });
      return promise;
    }
    return promise;
  })

  async function pega_usuarios_proximos(usuarios_manipulados, usuario_uid) {
    console.log('cheguei para pegar os usuarios proximos')
    return firestore.collection('usuarios').doc(usuario_uid)
      .collection('usuarios_proximos').doc(usuario_uid)
      .get().then(snapshot => {   
        const usuarios_proximos = Object.assign([], snapshot.data());   
        console.log(usuarios_proximos)
        return compara_manipulado_e_existentes(usuarios_proximos, usuarios_manipulados, usuario_uid)
      }).catch(error => {
        console.log('Erro ao trazer todos os usuarios: ', error);
      }) 
  }
  async function compara_manipulado_e_existentes(usuarios_proximos, usuarios_manipulados ,usuario_uid) {
    console.log('cheguei na comparação')
    //Find values that are in result2 but not in result1
    const novos_usuarios = usuarios_proximos.filter((novo)=> {
      return !usuarios_manipulados.some((existente) => {
          return novo.uid === existente.uid;
      });
    });
    console.log(novos_usuarios)
    return salvaUsuariosProximos(novos_usuarios, usuario_uid);
  }

  async function salvaUsuariosProximos(novos_usuarios, usuario_uid) {
    console.log('cheguei para salvar o resultado')
    const usuarios = Object.assign({}, novos_usuarios);
    return firestore.collection('usuarios').doc(usuario_uid).collection('usuarios_proximos').doc(usuario_uid)
      .set(usuarios)
      .catch( error => {
        console.log('Não foi possivel salvar os usuarios próximos: ', error.message)
      });
  }