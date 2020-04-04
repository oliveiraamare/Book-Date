export const db = firebase.firestore()
//https://heartbeat.fritz.ai/how-to-build-an-email-authentication-app-with-firebase-firestore-and-react-native-a18a8ba78574
//https://medium.com/@ericmorgan1/upload-images-to-firebase-in-expo-c4a7d4c46d06
import { AsyncStorage } from 'react-native';

import Firebase from '../../firebase/Firebase';

export const recuperarCadastro = async() => {}

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
      genero: cadastro.genero, 
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

    var geo = {
      latitude: geolocalizacao.latitude,
      longitude: geolocalizacao.longitude
    }  

    console.log(email + ' ' + senha + ' ' + JSON.stringify(usuario) + ' ' + imagem + ' ' + JSON.stringify(geo))
    handleSignUp(email, senha, usuario, geo, imagem)
  } catch {
    alert('Erro no recuperarCadastro')
  }
}

const  handleSignUp = (email, senha, usuario, geo, imagem) => {
  Firebase.auth()
  .createUserWithEmailAndPassword(email, senha)
  .then(() => salvarUsuario(usuario, geo, imagem))
  .catch(error => alert('erro no handleSignUp: ' + error.message + ' ' + error))
}

const salvarUsuario = (usuario, geo, imagem) => {
  var user = Firebase.auth().currentUser;
  console.log(user.uid);
  Firebase.database().ref('usuarios/' + user.uid).set(usuario)
  .then(() => 
    salvarGeolocalizacao(user, geo),
    uploadImagem(user, imagem)
  )
  .catch(error => {
    alert('salvarUsuario: '+ error.message  + ' ' + error)
  })
}

const salvarGeolocalizacao = (user, geo) => {
  Firebase.database().ref('geolocalizacao/' + user.uid).set(geo)
  .then(() => alert('Geolocalização salva com sucesso!'))
  .catch(error => {
    alert('salvarGeolocalizacao: '+ error.message  + ' ' + error)
  })
}

async function uploadImagem(user, imagem) {
  const response = await fetch(imagem);
  const blob = await response.blob();
  var x;
  var y
  var ref = Firebase.storage().ref('imagens/' + user.uid)
  x = await ref.put(blob),
  y = await x.ref.getDownloadURL()
  return ref.put(blob).then(()=>{
    console.log('x: ', x)
    console.log('y: ', y)
    alert('upload feito');
  }).catch((error)=>{
    alert('uploadImagem: '+ error.message  + ' ' + error);
  });
}