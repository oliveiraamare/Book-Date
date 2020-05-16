import { AsyncStorage } from 'react-native'
import Firebase from '../firebase/Firebase';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import  * as firebase from 'firebase';
import '@firebase/firestore';

import { push_expo } from '../componentes/pushExpo';

import { usuarioUid, collection, storage } from '../firebase/acoes';
import { usuario_logado_dados } from './dados_usuario_logado';

const handle_signup = (email, senha, usuario, lat, long, imagem) => {
  Firebase.auth()
    .createUserWithEmailAndPassword(email, senha)
    .then(() => salvar_usuario(usuario, lat, long, imagem))
    .catch(error => console.log('erro no handleSignUp: ', error.message))
}

const salvar_usuario = (usuario, lat, long, imagem) => {
  const uid = usuarioUid();
  collection('usuarios').doc(uid).set(usuario)
    .then(() => {
      salvar_uid(uid);
      salvar_geolocalizacao(uid, lat, long);
      upload_imagem(uid, imagem);
      recupera_token_expo();
     usuario_logado_dados();
     push_expo();
    })
    .catch(error => { console.log('erro no salvar_usuario: ', error.message) })
}

//salva o uid do usuário
const salvar_uid = async(uid) => {
  collection('usuarios').doc(uid).set( { uid: uid }, { merge: true } )
  .then(()=>{ console.log('UID salvo com sucesso') })
  .catch(error => { console.log('Erro ao salvar o uid: ' + error.message) })
}

//salvar e atualizar a geolocalização no firestore
const salvar_geolocalizacao = async(uid, lat, long) => {
  const localizacao = new firebase.firestore.GeoPoint(lat, long);
  const geo = collection('usuarios').doc(uid);
  geo.set({ localizacao}, { merge: true })
  .then(()=>{ console.log('Localização salva com sucesso') })
  .catch(error => { console.log('Erro ao salvar a localização: ' + error.message) })
}

//salvar a imagem no storage e fazer o upload da url no firestore
const upload_imagem = async(uid, imagem) => {
  if(imagem != null){
    const resposta = await fetch(imagem);
    const blob = await resposta.blob();

    var ref = storage('imagens/');

    var blobResponse = await ref.put(blob);
    var downloadURL = await blobResponse.ref.getDownloadURL();

    return ref.put(blob)
    .then(()=>{
      return inserir_URL_firestore(uid, downloadURL),
      console.log('upload feito da imagem')
    }).catch(error => { console.log('Erro ao fazer upload da imagem: '+ error.message) });

  } else { return null }
}

const inserir_URL_firestore = async(uid, downloadURL) => {
  var imagemFirestore = collection('usuarios').doc(uid);
  return imagemFirestore.set({
    imagem: downloadURL
  }, { merge: true })
  .then(()=> { console.log('URL da imagem salva com sucesso') })
  .catch(error => { console.log('Erro ao salvar a url da imagem: ' + error.message) })
}

const recupera_token_expo = async() => {
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  };

  if (finalStatus !== 'granted') {
    console.log('Falha ao obter o token para a notificação push');
    return;
  };
  
  const token = await Notifications.getExpoPushTokenAsync();
  salva_token_expo(token)
}

const salva_token_expo = (token) => {
  collection('usuarios').doc(usuarioUid())
    .set({ expoToken: token }, { merge: true })
    .then(console.log('Token salvo com sucesso'))
    .catch(error => {
      console.log('Erro ao salvar o token: ' + error.message);
    })
}

export {
  handle_signup, salvar_usuario, salvar_geolocalizacao, 
  upload_imagem, inserir_URL_firestore, recupera_token_expo
}