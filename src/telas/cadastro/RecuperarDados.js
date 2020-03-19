//https://heartbeat.fritz.ai/how-to-build-an-email-authentication-app-with-firebase-firestore-and-react-native-a18a8ba78574
//https://medium.com/@ericmorgan1/upload-images-to-firebase-in-expo-c4a7d4c46d06
import { AsyncStorage } from 'react-native';

import Firebase from '../../../Firebase';

export const recuperarDados = async() => {
  try{
    var cadastro = await AsyncStorage.getItem('cadastro');
    cadastro = JSON.parse(cadastro);
    var preferencias = await AsyncStorage.getItem('preferencias');
    preferencias = JSON.parse(preferencias);
    var imagem = await AsyncStorage.getItem('imagem');
    imagem = JSON.parse(imagem);
    var geolocalizacao = await AsyncStorage.getItem('geolocalizacao');
    geolocalizacao = JSON.parse(geolocalizacao);

    if ((cadastro != null) && (preferencias != null) && (imagem != null) && (geolocalizacao != null)) {
      var email= cadastro.email;
      var senha = cadastro.senha;
      var usuario = {
        email,
        senha, 
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
          contoFadas: preferencias.contoFadas
        }
      }
      var geo = {
        latitude: geolocalizacao.latitude, 
        longitude: geolocalizacao.longitude
      }
      var imagem = imagem.image;
      handleSignUp(email, senha, usuario, geo, imagem);
    }
  } catch {
    alert('Não possuimos data')
  }
}

export const  handleSignUp = (email, password, usuario, geo, imagem) => {
  Firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => salvarUsuario(usuario, geo, imagem))
  .catch(error => alert('erro no handleSignUp: ' + error.message + ' ' + error))
}

export const salvarUsuario = (usuario, geo, imagem) => {
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

export const salvarGeolocalizacao = (user, geo) => {
  Firebase.database().ref('geolocalizacao/' + user.uid).set(geo)
  .then(() => alert('Salvei essa bagaça!!!!'))
  .catch(error => {
    alert('salvarUsuario: '+ error.message  + ' ' + error)
  })
}

async function uploadImagem(user, imagem) {
  const response = await fetch(imagem);
  const blob = await response.blob();
  var ref = Firebase.storage().ref('imagens/' + user.uid)
  ref.getDownloadURL().then(function(url) {
    console.log(url);
  }, function(error){
    console.log(error);
  });
  ref.put(blob).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
  });
    return ref.put(blob);
}