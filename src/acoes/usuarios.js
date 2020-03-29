//https://stackoverflow.com/questions/57739391/firestore-query-for-loop-with-multiple-values

import { AsyncStorage } from 'react-native';
import { collection } from '../firebase/acoes';

import {y} from '../telas/menuInterno/match/teste';

export const arrayMatches = (usuariosProximos) => {
  var arrayUsuarios = [];
  const promises = [];
  
  var data = collection('usuarios');
  usuariosProximos.forEach(element => {
    //console.log("Current item: " + element[0]);
   
    let promise = data.where('uid', '==', element[0]).get();

    promise.then(snapshot => {
      if(snapshot.empty) {
        console.log('sem documentos correspondentes no usuariosMatch');
      }
      snapshot.forEach(doc => {
        arrayUsuarios.push(doc.data());
      });
      return;
    })
    .catch(error => {
      console.log('Erro ao trazer os documentos no usuariosMatch', error.message);
    });
    promises.push(promise);
  });

  Promise.all(promises).then(() => {
    //console.log(arrayUsuarios);
    x(arrayUsuarios)
  })
  .catch(error => {
    console.log('erro ao retornar os usuários no usuariosMatch' + ' ' + error.message)
  })
}
const x = (arrayUsuarios) => {
  console.log('to aquiiiiiii')
  y(arrayUsuarios)
}
