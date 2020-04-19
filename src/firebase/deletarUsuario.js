import { collection, storage, usuarioUid } from './acoes';

const deletar_storage = () => {
  storage('imagens/').delete().then(() => {
    console.log('Imagem deletada com sucesso no storage');
  }).catch(error => {
    console.log('Erro ao deletar a imagem no storage: ', error.message);
  });    
}

async function deletar_usuarios_proximos(uid) {
  collection('usuarios').doc(uid)
    .collection('usuarios_proximos').doc(uid)
    .delete().then(() => {
      console.log('Collection usuarios_proximos apagada.')
    }).catch( error => {
      console.log('Erro ao deletar a collection usuarios_proximos: ', error.message)
    });
}

async function deletar_usuarios_swiped(uid) {
  collection('usuarios').doc(uid)
    .collection('usuarios_swiped').doc(uid)
    .delete().then(() => {
      console.log('Collection usuarios_swiped apagada.')
    })
    .catch( error => {
      console.log('Erro ao deletar a collection usuarios_swiped: ', error.message)
    });
}

async function deletar_estante(uid) {
  collection('usuarios').doc(uid)
    .collection('estante').doc(uid)
    .delete().then(() => {
      console.log('Collection estante apagada.')
     })
    .catch( error => {
      console.log('Erro ao deletar a collection estante: ', error.message)
    });
}

async function deletar_mensagem(uid) {
  collection('usuarios').doc(uid)
    .collection('mensagem').doc(uid)
    .delete().then(() => {
      console.log('Collection deletar_mensagem apagada.')
    })
    .catch( error => {
      console.log('Erro ao deletar a collection mensagem: ', error.message)
    });
}

async function deletar_usuario(uid) {
  collection('usuarios').doc(uid)
  .delete().then(() => {
    console.log('Usuário deletado com sucesso no firestore');
  })
  .catch(error => {
    console.log('Erro ao deletar o usuário no firestore: ', error.message);
  })
}

export {
  deletar_storage, deletar_usuarios_proximos, deletar_usuarios_swiped,
  deletar_estante, deletar_mensagem, deletar_usuario, 
}