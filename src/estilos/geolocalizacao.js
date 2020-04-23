import { StyleSheet } from 'react-native';

import cor from '../estilos/cores';
import compartilhado from './compartilhado';

const geo = StyleSheet.create({
  nome: {
    color: cor.creme,
    fontFamily: compartilhado.fontePadrao.fontFamily,  
    fontSize: 18,  
    marginBottom: 10 
  },
  texto: {
    color: cor.creme,
    fontFamily: compartilhado.fontePadrao.fontFamily,  
    fontSize: 18,   
    marginBottom: 80  
  },
  viewLocal: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  }
})

export default geo;