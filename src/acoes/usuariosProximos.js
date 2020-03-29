import { AsyncStorage } from 'react-native';

export const usuariosProximos = async(arrayMatch) => {
  try{
    var dadosUsuarioMatch = await AsyncStorage.getItem('dadosUsuarioMatch');
    dadosUsuarioMatch = JSON.parse(dadosUsuarioMatch);

    console.log(arrayMatch)
    console.log(dadosUsuarioMatch[0].uid)
    
  } catch(error) {
    console.log("Error ao pegar os documentos no usuariosMatch: ", error);
  }
}


