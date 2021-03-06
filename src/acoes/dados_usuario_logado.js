import { AsyncStorage } from 'react-native';

import { usuarioUid, collection } from '../firebase/acoes';

//pega os dados do usuário logado no firestore e salva no asyncstorage
const usuario_logado_dados = () => {
  var uid = usuarioUid();
  collection('usuarios').doc(uid) 
    .get().then(snap => {
      var usuarioLogado = snap.data();
      console.log('UID do usuário logado: ', uid)
      salva_storage(usuarioLogado);
    })
    .catch(error => { console.log("Erro ao pegar dados do usuarioLogado: " + error.message) });
}

//salva informações do usuário logado no asyncstorage
const salva_storage = async(usuarioLogado) => {
  await AsyncStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
    .then(console.log('Os dados do usuario logado foram guardados com sucesso'))
    .catch(error => {
      console.log('Não foi possivel salvar os dados do usuario logado, ', error.message)
    });
}

//remove as informações do usuárip do async
const remove_dados_async = async() => {
  try {
    await AsyncStorage.clear();
    console.log('Storage do cadastro limpo com sucesso!');
  } catch (error) {
    console.log('Falha ao limpar o Storage do cadastro.', error.message);
  }
}

export {
  usuario_logado_dados,
  remove_dados_async
}