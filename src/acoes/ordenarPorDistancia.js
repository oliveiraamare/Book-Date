//https://www.npmjs.com/package/sort-by-distance
import { AsyncStorage } from 'react-native';

import { usuariosProximos } from './usuariosProximos';

export const ordenarPorDistancia = (points, long, lat) => {

  const sortByDistance = require('sort-by-distance');
 
  const opts = {
    yName: 'latitude',
    xName: 'longitude'
  };
  
  const origin = { longitude: long, latitude: lat};
  
 // console.log(sortByDistance(origin, points, opts));

  var arrayMatch = sortByDistance(origin, points, opts);

  var  matchProximos = [];
 var z = Object.assign([], arrayMatch)
  //console.log('e aiiiiiiii: ', z)

  arrayMatch.forEach(element => {
    matchProximos.push(
      element.usuarioMatch
    )

  })

 // console.log('er aiii', matchProximos)


  /*arrayMatch.forEach(element => {
    matchProximos.push([
      element.uid
    ])
  });*/
  
  salvarMatchProximos(matchProximos);
 // usuariosProximos(arrayMatch);
}

const salvarMatchProximos = async(matchProximos) => {
  await AsyncStorage.setItem('matchProximos', JSON.stringify(matchProximos))
  .then(()=>
    {
      console.log('Os dados dos usuarios match foram guardados com sucesso');
      //match();
    }).catch(error => {
      console.log('Não foi possivel salvar os dados do usuario match, ', error.message )
    }
  );
}

const match = async () => {
  var async = await AsyncStorage.getItem('matchProximos');
  var x = JSON.parse(async);
  x.map((item, index) => {
    console.log('oi: ', index)
  })
  //console.log(x)
}

