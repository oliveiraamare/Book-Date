import { AsyncStorage } from 'react-native';
import  * as firebase from 'firebase';
import '@firebase/firestore';

import { collection, usuarioUid } from '../firebase/acoes';
 
const swiped = (item) => {
  collection('usuarios').doc(usuarioUid())
    .collection('usuarios_swiped').doc(usuarioUid()).get()
    .then(snap => {
      const usuarios_swiped = Object.assign([], snap.data());
      usuarios_swiped.push(item);
      const novos_usuarios = Object.assign({}, usuarios_swiped);
      salvar_novo_usuarios_swiped(novos_usuarios)
    })
}

const salvar_novo_usuarios_swiped = (novos_usuarios) => {
  console.log('cheguei')
  collection('usuarios').doc(usuarioUid())
    .collection('usuarios_swiped').doc(usuarioUid())
    .set(novos_usuarios);
}

const swiped_left = (item) => {
  swiped(item);
  collection('usuarios').doc(usuarioUid())
    .collection('estante').doc(usuarioUid()).get()
    .then(snap => {
      const estante = Object.assign([], snap.data());
      estante.push(item);
      const novos_usuarios = Object.assign({}, estante);
      salvar_nova_estante(novos_usuarios);
  })
}   

const salvar_nova_estante = (novos_usuarios) => {
  collection('usuarios').doc(usuarioUid())
    .collection('estante').doc(usuarioUid())
    .set(novos_usuarios);
}

const swiped_right = async(item) => {
  var criador = await AsyncStorage.getItem('usuarioLogado');
  criador = JSON.parse(criador);

  swiped(item);
  
  var uid = criador.uid + '_' + item.uid;
  var verifica_existente = item.uid + '_' + criador.uid;

  collection('mensagem').doc(verifica_existente).get().then(snapshot => {
    if (!snapshot.exists) {
      salvar_mensagem(criador, item, uid)
    }
  })
}  

const salvar_mensagem = (criador, item, uid) => {
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
    id_mensagem: uid,
    ultima_interacao: firebase.firestore.FieldValue.serverTimestamp(),
  }
  collection('mensagem').doc(uid).set(enviar_mensagem, { merge: true })
    .then(() => console.log('As informações foram salvas na collection mensagem.'))
    .catch(error => console.log('Não foi possível adicionar as informações na collection mensagem. ', error.message))
}

export {
  swiped_left, swiped_right
}