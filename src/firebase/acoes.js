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

export const usuarioConectado = () => {
  if(usuario()){
    return usuario.uid;
  } else {
    return null;
  }
}

//salvar e atualizar a geolocalização no firestore
export const salvarGeolocalizacao = (uid, lat, long) => {
  return new Promise((resolve, reject) => {
    const localizacao = new firebase.firestore.GeoPoint(lat, long);
    const geo = firestore.collection('usuarios').doc(uid);
    geo.set({
      localizacao,
      uid: uid
    }, { merge: true })
    .then((data)=>{
      console.log('Localização salva com sucesso')
      resolve(data)
    })
    .catch(error => {
      console.log('Erro ao salvar a localização: ' + error.message)
      reject(error)
    })
  })
}

//salvar a imagem no storage e fazer o upload da url no firestore
export const uploadImagem = async(uid, imagem) => {
  if(imagem != null){
    const resposta = await fetch(imagem);
    const blob = await resposta.blob();

    var ref = Firebase.storage().ref('imagens/' + uid);

    var blobResponse = await ref.put(blob);
    var downloadURL = await blobResponse.ref.getDownloadURL();

    return ref.put(blob)
    .then(()=>{
      inserirURLFirestore(uid, downloadURL),
      console.log('upload feito da imagem')
    }).catch((error)=>{
      alert('erro no uploadImagem: '+ error.message  + ' ' + error);
    });
  } else {
    return
  }
}

const inserirURLFirestore = (uid, downloadURL) => {
  var imagemFirestore = firestore.collection('usuarios').doc(uid);
  imagemFirestore.set({
    imagem: downloadURL
  }, { merge: true })
  .then(()=>{
    console.log('URL da imagem salva com sucesso')
  })
  .catch(error => {
    console.log('Erro ao salvar a url da imagem: ' + error.message)
  })
}