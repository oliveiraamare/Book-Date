import  * as firebase from 'firebase';
import '@firebase/firestore';

import Firebase from './Firebase';

export const storage = (colecao) => {
  const storage = Firebase.storage().ref(colecao + usuarioUid());
  return storage;
}

export const database = (colecao) => {
  const database = Firebase.database().ref(colecao + usuarioUid());
  return database;
}

export const usuarioUid = () => {
  const usuarioUid = firebase.auth().currentUser.uid;
  return usuarioUid;
}

export const usuario = () => {
  const usuario = firebase.auth().currentUser;
  return usuario;
}

export const usuarioConectado = () => {
  if(usuario()){
    return usuario.uid;
  } else {
    return null;
  }
}

export const firestore = firebase.firestore();

export const collection = (colecao) => {
  const collection = firestore.collection(colecao);
  return collection;
}

export const passwordReset = {
  passwordReset: email => { 
    return firebase.auth().sendPasswordResetEmail(email);
}}