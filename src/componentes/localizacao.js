//https://docs.expo.io/versions/latest/sdk/location/#background-location-methods
import { AsyncStorage } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import  * as firebase from 'firebase';
import '@firebase/firestore';

import { collection, usuarioUid } from '../firebase/acoes';

const book_date = 'background-location-task';

TaskManager.defineTask(book_date, ({ data, error }) => {
  if (error) {
    console.log('Ocorreu um erro ao pegar a localização: ', error.message)
  }
  if (data) {
    const { locations } = data;
    var latitude_nova = locations[0].coords.latitude;
    var longitude_nova = locations[0].coords.longitude;
    verifica_localizacao(latitude_nova, longitude_nova);    
  }
});

export async function localizacao() {
  await Location.startLocationUpdatesAsync(book_date, {
    accuracy: Location.Accuracy.High,
    timeInterval: 1200000, //2 minutos (em milissegundos)
    pausesUpdatesAutomatically: true,
    //Receive updates only when the location has changed by at least this distance in meters.
    distanceInterval: 5,
    //he distance in meters that must occur between last reported location and the current location before deferred locations are reported. 
    deferredUpdatesDistance: 5,
    //indicating whether the location manager can pause location updates to improve battery life without sacrificing location data. When this option is set to true, the location manager pauses updates (and powers down the appropriate hardware) at times when the location data is unlikely to change. 
    pausesUpdatesAutomatically: true
  })  
}

async function verifica_localizacao(latitude_nova, longitude_nova) {
  var usuario_logado = await AsyncStorage.getItem('usuarioLogado');
  usuario_logado = JSON.parse(usuario_logado);
  var latitude_antiga = usuario_logado.localizacao.U;
  var longitude_antiga = usuario_logado.localizacao.k;

  console.log('--------------Localização Antiga---------------')
  console.log(latitude_antiga, longitude_antiga)
  console.log('--------------Localização Nova---------------')
  console.log(latitude_nova, longitude_nova)

  if((latitude_nova != latitude_antiga) && (longitude_nova != longitude_antiga)){
    const localizacao = new firebase.firestore.GeoPoint(latitude_nova, longitude_nova);
    collection('usuarios').doc(usuarioUid).set({
      localizacao,
    }, { merge: true })
  }
}