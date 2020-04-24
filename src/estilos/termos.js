import { Dimensions, StyleSheet } from 'react-native';

import cor from '../estilos/cores';
import compartilhado from './compartilhado';

const { height } = Dimensions.get('window');

const termos = StyleSheet.create({
  paragrafo:{      
    color: cor.pagina,
    fontFamily: compartilhado.fontePadrao.fontFamily,  
    fontSize: 14,
    marginTop: 5,  
    marginLeft: 15,
    marginRight: 15,
    textAlign:'justify'     
  },
  scrollView: {
    flex: 1, 
    height: height * .7,
    marginBottom: 15,
    marginTop: 15
  },
  titulo: {
    alignSelf: 'center',      
    color: cor.amarelo,
    fontFamily: compartilhado.fontePadrao.fontFamily,  
    fontSize: 30,
    marginTop: 20,
  }
})

export default termos;