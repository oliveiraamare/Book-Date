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
      var email = cadastro.email;
      var senha = cadastro.senha;
      var nome = cadastro.nome;
      var dtNasc = cadastro.dtNasc;
      var cidade = cadastro.cidade;
      var genero = cadastro.genero; 

      var citacao = preferencias.citacao; 
      var singularidade = preferencias.singularidade; 
      var sinopse = preferencias.sinopse;
      var generoLiterario = preferencias.generoLiterario; 
      var aventura = preferencias.aventura;
      var prosa = preferencias.prosa; 
      var misterio = preferencias.misterio; 
      var contoFadas = preferencias.contoFadas;

      var imagem = imagem.image;

      var pais = geolocalizacao.pais; 
      var estado = geolocalizacao.estado; 
      var rua = geolocalizacao.rua;
      var latitude = geolocalizacao.latitude; 
      var longitude = geolocalizacao.longitude;

      var usuario = {
        email, senha, nome, dtNasc, cidade, genero,
        preferencias: {
          citacao, singularidade, sinopse, generoLiterario, aventura, prosa, misterio, contoFadas
        },
        imagem: {
          imagem
        },
        geolocalizacao: {
          pais, estado, rua, latitude, longitude
        }
      }
      alert('meu email: ' + email + ' ' + senha + ' ' + dtNasc + ' ' +cidade + ' ' + genero)  
      handleSignUp(email, senha, usuario, imagem);
    }
  } catch {
    alert('Não possuimos data')
  }
}

export const  handleSignUp = (email, password, usuario, imagem) => {
  Firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => writeUserData(usuario, imagem))
  .catch(error => alert('erro no handleSignUp: ' + error.message + ' ' + error))
}

export const writeUserData = (usuario, imagem) => {
  var user = Firebase.auth().currentUser;
    if (user) {
      console.log(user.uid)
      alert(user.uid)
    } else {
      console.log('deu ruim')
    }
  Firebase.database().ref('usuarios/' + user.uid).set(usuario)
  .then(() => uploadImagem(imagem))
  .catch(error => {
    alert('writeUserData: '+ error.message  + ' ' + error)
  })
}

async function uploadImagem(imagem) {
  var user = Firebase.auth().currentUser;
  if (user) {
    console.log(user.uid)
    alert(user.uid)
  } else {
    console.log('deu ruim')
  }
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