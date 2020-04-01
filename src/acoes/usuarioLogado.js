import { AsyncStorage } from 'react-native';

import { usuarioUid, collection } from '../firebase/acoes';

import { firestore } from '../firebase/acoes'

//pega os dados do usuário logado no banco
export const usuarioLogado = () => {
  var uid = usuarioUid();

  var data = collection('usuarios').doc(uid);  
  data.get().then((doc) => {
    var usuarioLogado = doc.data();
    console.log(usuarioLogado)
    salvarAsyncStorage(usuarioLogado);
    //console.log('usuario uid: ', usuarioLogado.uid);    
  })
  .catch(function(error) {
    console.log("Erro ao pegar dados do usuarioLogado: " + error + ' ' + error.message);
  });
}

//salvar informações do usuário logado no asyncstorage
const salvarAsyncStorage = async(usuarioLogado) => {
  await AsyncStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
    .then(()=>
    {
      console.log('Os dados do usuario logado foram guardados com sucesso');
      //match();
    }).catch(error => {
      console.log('Não foi possivel salvar os dados do usuario logado, ', error.message)
    });
}

//pegar informações do usuário logado no asyncstorage
export const dadosUsuarioLogadoAsync = async() => {
    await AsyncStorage.getItem('usuarioLogado')
    var usuarioLogado = JSON.parse(usuarioLogado);
    usuarioLogado.then(()=>
    {
      console.log('Os dados do usuario logado foram retornados com sucesso');
      return usuarioLogado;

    }).catch(error => {
      console.log('Não foi possivel salvar os dados do usuario logado, ', error.message)
    });
}

//salvar array de usuarios que são matchs
export const salvarMatchs = (uid, arrayMatch) => {
  var imagemFirestore = firestore.collection('usuarios').doc(uid);
  imagemFirestore.set({
    imagem: downloadURL
  }, { merge: true });
}

