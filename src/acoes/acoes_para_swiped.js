import { AsyncStorage } from 'react-native';
import  * as firebase from 'firebase';
import '@firebase/firestore';

import { collection, usuarioUid } from '../firebase/acoes';

var salvar_listagem_usuarios = [];
var salvar_estante =  [];
  
const swiped = (item) => {
  salvar_listagem_usuarios.push(item);  
  const usuarios_manipulados = Object.assign({}, salvar_listagem_usuarios);
  collection('usuarios').doc(usuarioUid())
    .collection('usuarios_swiped').doc(usuarioUid())
    .set(usuarios_manipulados);
}

const swiped_left = (item) => {
  swiped(item);
  salvar_estante.push(item);  
  const usuarios_na_estante = Object.assign({}, salvar_estante);
  collection('usuarios').doc(usuarioUid())
    .collection('estante').doc(usuarioUid())
    .set(usuarios_na_estante, {merge: true});
}   

const swiped_right = async(item) => {
  var criador = await AsyncStorage.getItem('usuarioLogado');
  criador = JSON.parse(criador);
  swiped(item);
  var enviar_mensagem = {
    criador: {
      criador_uid: criador.uid,
      criador_nome: criador.nome,
      criador_imagem: criador.imagem,
    },
    participante: {
      participante_uid: item.uid,
      participante_nome: item.nome,
      participante_imagem: item.imagem,
    },
    id_conversa: [
      criador.uid,
      item.uid
    ],
    ultima_interacao: firebase.firestore.FieldValue.serverTimestamp(),
  }
  collection('mensagem').doc().set(enviar_mensagem, { merge: true })
    .then(() => console.log('As informações foram salvas na collection mensagem.'))
    .catch(error => console.log('Não foi possível adicionar as informações na collection mensagem. ', error.message))
}  

export {
  swiped_left, swiped_right
}