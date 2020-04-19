//https://heartbeat.fritz.ai/how-to-build-an-email-authentication-app-with-firebase-firestore-and-react-native-a18a8ba78574
//https://medium.com/@ericmorgan1/upload-images-to-firebase-in-expo-c4a7d4c46d06
//https://github.com/seantempesta/expo-cljs-template/issues/84
import { AsyncStorage } from 'react-native';

import { handle_signup } from '../firebase/cadastro';

export const recupera_cadastro = async() => {
  try{

    var cadastro = await AsyncStorage.getItem('cadastro');
    cadastro = JSON.parse(cadastro);
    var preferencias = await AsyncStorage.getItem('preferencias');
    preferencias = JSON.parse(preferencias);
    var geolocalizacao = await AsyncStorage.getItem('geolocalizacao');
    geolocalizacao = JSON.parse(geolocalizacao);

    var email = cadastro.email;
    var senha = cadastro.senha;

    var usuario = {
      nome: cadastro.nome,
      dtNasc: cadastro.dtNasc,
      cidade: cadastro.cidade,
      sexo: cadastro.sexo, 
      buscando: preferencias.buscando,
      imagem : null,
      swipedAll: false,
      preferencias: {
        citacao: preferencias.citacao,
        singularidade: preferencias.singularidade,
        sinopse: preferencias.sinopse,
        generoLiterario: preferencias.generoLiterario,
        aventura: preferencias.aventura,
        prosa: preferencias.prosa,
        misterio: preferencias.misterio,
        contoFadas: preferencias.contoFadas,
        autor: { 0: 'não informado', 1: 'não informado', 2: 'não informado'},
        livro: { 0: 'não informado', 1: 'não informado', 2: 'não informado'},
      },
      localizacao:{
        latitude: geolocalizacao.latitude,
        longitude: geolocalizacao.longitude
      }
    }

    var imagem = await AsyncStorage.getItem('imagem');
    imagem = JSON.parse(imagem);

    var lat = geolocalizacao.latitude;
    lat = Number(lat);
  
    var long = geolocalizacao.longitude;
    long = Number(long);

    //console.log(email + ' ' + senha + ' ' + JSON.stringify(usuario) + ' ' + imagem + ' ' + lat + ' ' + long);
    
    handle_signup(email, senha, usuario, lat, long, imagem);

  } catch (error) {
    console.log('Erro no recupera_cadastro: ', error.message)
  }
}