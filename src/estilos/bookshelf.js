import { Dimensions, StatusBar, StyleSheet } from 'react-native';

import cor from './cores';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('screen').height !== Dimensions.get('window').height && StatusBar.currentHeight > 24 ? (Dimensions.get('window').height + 56) : Dimensions.get('window').height;

const bookshelf = StyleSheet.create({
  background: {
    flex: 1, 
    resizeMode: 'contain',
    backgroundColor: 'transparent'
  },
  containerParagrafo: {
    top: DIMENSION_HEIGHT/2 - 200
  },
  imagem: {
    flex: 1,
    height: DIMENSION_HEIGHT,
    resizeMode: 'contain',
    width: DIMENSION_WIDTH
  },
  paragrafo: {
    color: cor.pagina,
    fontSize: 16, 
    margin: 10, 
    textAlign: 'center'
  },
  texto: {
    color: cor.amarelo,
    fontSize: 16, 
    margin: 10, 
    textAlign: 'center'
  }
})

export default bookshelf;