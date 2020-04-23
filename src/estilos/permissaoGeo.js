import { Dimensions, StyleSheet } from 'react-native';

import cor from './cores';
import compartilhado from './compartilhado';

const DIMENSION_WIDTH = Dimensions.get('window').width;

const permissaoGeo = StyleSheet.create({
  avatar: {
    alignSelf:'center', 
    backgroundColor:'transparent'
  },
  botao: {
    alignSelf: 'center',    
    backgroundColor: cor.amarelo,        
    borderColor: cor.amarelo,
    borderWidth: 1,
    bottom: 0,
    height: 47,
    justifyContent: 'center',   
    marginBottom: 0, 
    marginTop: 20,
    position: 'absolute',
    width: DIMENSION_WIDTH + 56
  },
  texto: {
    color: cor.creme, 
    fontFamily: compartilhado.fontePadrao.fontFamily,  
    fontSize: 16,  
    textAlign:'center'
  }
})

export default permissaoGeo;