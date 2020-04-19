import  * as firebase from 'firebase';
import '@firebase/firestore';

import Firebase from './Firebase';

export const firestore = firebase.firestore();

// pegar dados collection firestore
export const collection = (colecao) => {
  const collection = firestore.collection(colecao);
  return collection;
}

//pegar dados da storage
export const storage = (colecao) => {
  const storage = Firebase.storage().ref(colecao + usuarioUid());
  return storage;
}

//pegar dados do realtime
export const database = (colecao) => {
  const database = Firebase.database().ref(colecao + usuarioUid());
  return database;
}

//pegar dados do usuário logado
export const usuario = () => {
  const usuario = firebase.auth().currentUser;
  return usuario;
}

//pegar uid do usuário logado
export const usuarioUid = () => {
  const usuarioUid = firebase.auth().currentUser.uid;
  return usuarioUid;
}

export const usuario_conectado = () => {
  if(usuario()){
    return usuario.uid;
  } else {
    return null;
  }
}