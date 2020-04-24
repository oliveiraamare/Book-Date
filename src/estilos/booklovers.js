import { Dimensions, StatusBar, StyleSheet } from 'react-native';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('screen').height !== Dimensions.get('window').height && StatusBar.currentHeight > 24 ? (Dimensions.get('window').height + 56) : Dimensions.get('window').height;

import cor from './cores';
import compartilhado from './compartilhado';

export default booklovers = StyleSheet.create({
  background: {
    flex: 1, 
    resizeMode: 'contain',
    backgroundColor: 'rgba(0, 0, 0, 0.80)'
  },
  containerParagrafo: {
    top: DIMENSION_HEIGHT/2 - 200
  },
  containerSwipedAll: {
    top: DIMENSION_HEIGHT/2 - 100
  },
  imagem: {
    flex: 1,
    height: DIMENSION_HEIGHT,
    resizeMode: 'contain',
    width: DIMENSION_WIDTH
  },
  loading: {
    top: DIMENSION_HEIGHT/2 - 130
  },
  paragrafo: {
    color: cor.pagina,
    fontFamily: compartilhado.fontePadrao.fontFamily,  
    fontSize: 16, 
    margin: 10, 
    textAlign: 'center'
  },
  texto: {
    color: cor.amarelo,
    fontFamily: compartilhado.fontePadrao.fontFamily,  
    fontSize: 16, 
    margin: 10, 
    textAlign: 'center'
  }
})