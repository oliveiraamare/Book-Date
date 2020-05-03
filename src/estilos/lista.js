import { Dimensions, StatusBar, StyleSheet } from 'react-native';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('screen').height !== Dimensions.get('window').height && StatusBar.currentHeight > 24 ? (Dimensions.get('window').height + 56) : Dimensions.get('window').height;

import cor from './cores';
import compartilhado from './compartilhado';

export default lista = StyleSheet.create({
  appBarHeader: {
    color: cor.branco, 
    fontSize: 18
  },
  containerParagrafo: {
    top: DIMENSION_HEIGHT/2 - 200
  },
  header: {
    backgroundColor: 'transparent', 
    borderBottomColor: cor.branco,
    borderBottomWidth: 0.18
  },
  listItem: {
    backgroundColor: cor.creme
  },
  nome: {
    fontFamily:compartilhado.fontePadrao.fontFamily,
    fontSize: 30
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