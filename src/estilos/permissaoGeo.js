import { StyleSheet } from 'react-native';
import cor from './cores';

const permissaoGeo = StyleSheet.create({
  avatar: {
    alignSelf:'center', 
    backgroundColor:'transparent'
  },
  botao: {
    alignSelf: 'center',
    bottom: 0, 
    marginBottom: 30, 
    marginTop: 30,
    position: 'absolute'
  },
  header: {
    alignSelf:'flex-end', 
    color: cor.amarelo
  },
  texto: {
    color:cor.amarelo, 
    textAlign:'center'
  }
})

export default permissaoGeo;