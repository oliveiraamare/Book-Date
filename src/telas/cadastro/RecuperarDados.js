//https://heartbeat.fritz.ai/how-to-build-an-email-authentication-app-with-firebase-firestore-and-react-native-a18a8ba78574
//https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
import { AsyncStorage } from 'react-native';

import Firebase from '../../../Firebase';

export const recuperarCadastro = async() => {
  try{
    var cadastro = await AsyncStorage.getItem('cadastro');
    cadastro = JSON.parse(cadastro);
    if ((cadastro != null)) {
      var email = cadastro.email; 
      var senha = cadastro.senha; 
      var nome = cadastro.nome; 
      var dtNasc = cadastro.dtNasc;
      var cidade = cadastro.cidade; 
      var genero = cadastro.genero; 
    }
    return(email, senha, nome, dtNasc, cidade, genero);
  } catch {
    alert('Não possuimos cadastro')
  }
}

export const recuperarPreferencias = async() => {
  try{
    var preferencias = await AsyncStorage.getItem('preferencias');
    preferencias = JSON.parse(preferencias);
    if ((preferencias != null)) {
      var citacao = preferencias.citacao; 
      var singularidade = preferencias.singularidade; 
      var sinopse = preferencias.sinopse;
      var generoLiterario = preferencias.generoLiterario; 
      var aventura = preferencias.aventura;
      var prosa = preferencias.prosa; 
      var misterio = preferencias.misterio; 
      var contoFadas = preferencias.contoFadas;
    }
    return(citacao, singularidade, sinopse, generoLiterario, aventura, prosa, misterio, contoFadas);
  } catch {
    alert('Não possuimos preferencias')
  }
}

export const recuperarImagem = async() => {
  try{
    var imagem = await AsyncStorage.getItem('imagem');
    imagem = JSON.parse(imagem);
    if ((imagem != null)) {
      var imagem = imagem.image;
    }
    return(imagem);
  } catch {
    alert('Não possuimos imagem')
  }
}

export const recuperarGeolocalizacao = async() => {
  try{
    var geolocalizacao = await AsyncStorage.getItem('geolocalizacao');
    geolocalizacao = JSON.parse(geolocalizacao);
    if ((geolocalizacao != null)) {
      var pais = geolocalizacao.pais; 
      var estado = geolocalizacao.estado; 
      var rua = geolocalizacao.rua;
      var latitude = geolocalizacao.latitude; 
      var longitude = geolocalizacao.longitude;
    }
    return(pais, estado, rua, latitude, longitude);
  } catch {
    alert('Não possuimos geolocalixacao')
  }
}
 
export const usuario = () => {
  recuperarCadastro();
  recuperarPreferencias();
  recuperarImagem();
  recuperarGeolocalizacao();
  var usuario = {
    email, senha, nome, dtNasc, cidade, genero,
    preferencias: {
      citacao, singularidade, sinopse, generoLiterario, aventura, prosa, misterio, contoFadas
    },
    image: {
      image
    },
    geolocalizacao: {
      pais, estado, cidade, rua, latitude, longitude
    }
  }
}
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
      handleSignUp(email, senha, usuario);
    }
  } catch {
    alert('Não possuimos data')
  }
}

export const  handleSignUp = (email, password, usuario) => {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => 
        writeUserData(usuario)
      )
      .catch(error => alert(error))
  }

export const idUnico = ()  => {
    var id = Math.random().toString(36).substring(2) + Date.now().toString(36);
    return id;
  }

export const writeUserData = (usuario) => {
  Firebase.database().ref('usuarios/' + idUnico()).set(usuario).catch(error => {
      alert(error.message)
  });
}