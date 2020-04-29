//https://docs.expo.io/versions/latest/sdk/location/#background-location-methods
import { AsyncStorage } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import  * as firebase from 'firebase';
import '@firebase/firestore';

import { collection, usuarioUid } from '../firebase/acoes';
import { usuario_logado_dados } from '../acoes/dados_usuario_logado';

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
    timeInterval: 300000, // 5 minutos (em milissegundos) // Minimum time to wait between each update in milliseconds.
    pausesUpdatesAutomatically: true,    
    distanceInterval: 5, //Receive updates only when the location has changed by at least this distance in meters.
    deferredUpdatesDistance: 5, //the distance in meters that must occur between last reported location and the current location before deferred locations are reported. 
    showsBackgroundLocationIndicator: false
  })  
}

async function verifica_localizacao(latitude_nova, longitude_nova) {
  var usuario_logado = await AsyncStorage.getItem('usuarioLogado');
  usuario_logado = JSON.parse(usuario_logado);
  if(usuario_logado && usuarioUid()){
    var uid = usuarioUid();
    var lastUpdated = usuario_logado.lastUpdated;
    var latitude_antiga = usuario_logado.localizacao.U;
    var longitude_antiga = usuario_logado.localizacao.k;

    var agora = new Date().getTime(); 

    if(lastUpdated < agora - (240*1000)) {
      if((latitude_nova != latitude_antiga) || (longitude_nova != longitude_antiga)) {
        const localizacao = new firebase.firestore.GeoPoint(latitude_nova, longitude_nova);
        collection('usuarios').doc(uid)
          .set({ 
            localizacao,
            lastUpdated: agora 
          }, { merge: true });
        usuario_logado_dados();
      }
    }
  }
}