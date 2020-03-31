import { AsyncStorage } from 'react-native';

export const match = async () => {
  var async = await AsyncStorage.getItem('matchProximos');
  var x = JSON.parse(async); //parar
  //console.log(x)
  return x
}

/*
module.exports.match = match()
//module.exports.x = x

*/