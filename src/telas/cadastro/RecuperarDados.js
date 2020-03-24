//https://heartbeat.fritz.ai/how-to-build-an-email-authentication-app-with-firebase-firestore-and-react-native-a18a8ba78574
//https://medium.com/@ericmorgan1/upload-images-to-firebase-in-expo-c4a7d4c46d06
//https://github.com/seantempesta/expo-cljs-template/issues/84
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';

import Firebase from '../../firebase/Firebase';
import { firestore, usuarioUid } from '../../firebase/acoes';

export const recuperarCadastro = async() => {
  try{
    var cadastro = await AsyncStorage.getItem('cadastro');
    cadastro = JSON.parse(cadastro);

    var preferencias = await AsyncStorage.getItem('preferencias');
    preferencias = JSON.parse(preferencias);

    var email = cadastro.email
    var senha = cadastro.senha
    var usuario = {
      nome: cadastro.nome,
      dtNasc: cadastro.dtNasc,
      cidade: cadastro.cidade,
      sexo: cadastro.sexo, 
      buscando: preferencias.genero,
      preferencias: {
        citacao: preferencias.citacao,
        singularidade: preferencias.singularidade,
        sinopse: preferencias.sinopse,
        generoLiterario: preferencias.generoLiterario,
        aventura: preferencias.aventura,
        prosa: preferencias.prosa,
        misterio: preferencias.misterio,
        contoFadas: preferencias.contoFadas,
        autor: ['não informado', 'não informado', 'não informado'],
        livro: ['não informado', 'não informado', 'não informado']
      }
    }

    var imagem = await AsyncStorage.getItem('imagem');
    imagem = JSON.parse(imagem);

    var geolocalizacao = await AsyncStorage.getItem('geolocalizacao');
    geolocalizacao = JSON.parse(geolocalizacao);

    var lat = geolocalizacao.latitude;
    lat = Number(lat);
  
    var long = geolocalizacao.longitude;
    long = Number(long);

    console.log(email + ' ' + senha + ' ' + JSON.stringify(usuario) + ' ' + imagem + ' ' + lat + ' ' + long)
    handleSignUp(email, senha, usuario, lat, long, imagem)
  } catch {
    alert('Erro no recuperarCadastro')
  }
}

const  handleSignUp = (email, senha, usuario, lat, long, imagem) => {
  Firebase.auth()
  .createUserWithEmailAndPassword(email, senha)
  .then(() => salvarUsuario(usuario, lat, long, imagem))
  .catch(error => alert('erro no handleSignUp: ' + error.message + ' ' + error))
}

const salvarUsuario = (usuario, lat, long, imagem) => {
  const uid = usuarioUid();
  firestore.collection('usuarios').doc(uid).set(usuario)
  .then(() => 
    salvarGeolocalizacao(uid, lat, long),
    uploadImagem(uid, imagem)
  )
  .catch(error => {
    alert('salvarUsuario: '+ error.message  + ' ' + error)
  })
}

const salvarGeolocalizacao = (uid, lat, long) => {
  const localizacao = new firebase.firestore.GeoPoint(lat, long);
  const geo = firestore.collection('usuarios').doc(uid);
  geo.set({
    localizacao
  }, { merge: true });
}

const uploadImagem = async(uid, imagem) => {
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
    alert('uploadImagem: '+ error.message  + ' ' + error);
  });
}

const inserirURLFirestore = (uid, downloadURL) => {
  var imagemFirestore = firestore.collection('usuarios').doc(uid);
  imagemFirestore.set({
    imagem: downloadURL
  }, { merge: true });
}