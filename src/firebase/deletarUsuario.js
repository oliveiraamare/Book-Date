import { 
  collection,
  database,
  storage, 
  usuario,
  usuarioUid
} from './acoes';

export const deletarStorage = () => {
  storage('imagens/').delete().then(() => {
    console.log('Imagem deletada com sucesso no storage');
  }).catch(error => {
    console.log('Erro ao deletar a imagem no storage: ', error.message);
  });    
}

export const deletarDatabase = () => {
  database('usuarios/').remove().then(() => {
    console.log('Usuário deletado com sucesso no realtime');
  })
  .catch(error => {
    console.log('Erro ao deletar o usuário no realtime: ', error.message);
  })
}

export const deletarCollection = () => {
  collection('usuarios').doc(usuarioUid()).delete()
  .then(() => {
    console.log('Usuário deletado com sucesso no firestore');
  })
  .catch(error => {
    console.log('Erro ao deletar o usuário no firestore: ', error.message);
  })
}