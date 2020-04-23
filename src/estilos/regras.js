import { Dimensions, StyleSheet } from 'react-native';

import cor from '../estilos/cores';
import compartilhado from './compartilhado';

const DIMENSION_WIDTH = Dimensions.get('window').width;

const regras = StyleSheet.create({
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
  header: {
    alignSelf: 'flex-end',
    fontSize: 21
  },
  paragrafo: {
    color: cor.pagina,
    fontFamily: compartilhado.fonteAutor.fontFamily,
    fontSize: 15,
    marginTop: 5,  
    marginLeft: 10,
    marginRight: 10,
    textAlign:'justify'
  },
  subparagrafo: {
    color: cor.amarelo,
    fontFamily: compartilhado.fontePadrao.fontFamily,
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3, 
    textAlign:'justify' 
  },
  subtitleStyle: {
    alignSelf: 'center'
  },
})

export default regras;