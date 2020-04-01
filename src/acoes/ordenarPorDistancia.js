//https://www.npmjs.com/package/sort-by-distance
import { AsyncStorage } from 'react-native';

import { usuarioUid } from '../firebase/acoes';
import Firebase from '../firebase/Firebase';

export const ordenarPorDistancia = (points, long, lat) => {
  const sortByDistance = require('sort-by-distance');
 
  const opts = { yName: 'latitude', xName: 'longitude'};
  
  const origin = { longitude: long, latitude: lat};
  
 // console.log(sortByDistance(origin, points, opts));

  var arrayMatch = sortByDistance(origin, points, opts);

  var  matchProximos = [];

  arrayMatch.forEach(element => {
    matchProximos.push(
      element.usuarioMatch
    );
  })
  
  salvarUsuariosProximos(matchProximos);
}

//salva no realtime o array com os usuários próximos
const salvarUsuariosProximos = (matchProximos) => {
  Firebase.database().ref('match/' + usuarioUid()).set(matchProximos)
  .then(()=>{
      console.log('Os dados dos usuarios match foram guardados no banco com sucesso');
  }).catch( error => {
    console.log('Não foi possivel salvar no banco os dados do usuario match, ', error.message)
  });
} 

const salvarMatchProximos = async(matchProximos) => {
  await AsyncStorage.setItem('matchProximos', JSON.stringify(matchProximos))
  .then(()=>
    {
      console.log('Os dados dos usuarios match foram guardados com sucesso');
    }).catch( error => {
      console.log('Não foi possivel salvar os dados do usuario match, ', error.message)
    });
}