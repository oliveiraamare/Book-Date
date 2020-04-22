import Constants from 'expo-constants';
import { Dimensions, StyleSheet } from 'react-native';

import cor from '../estilos/cores'

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const compartilhado = StyleSheet.create({
  container: {
    backgroundColor: cor.preto,
    flex: 1
  },
  imagemBackground: {
    flex: 1,
    height: DIMENSION_HEIGHT + 56,
		resizeMode: 'cover',
		width: DIMENSION_WIDTH
  },
  imagemTransparente: {
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
    flex: 1
  },
  statusBar: {
    backgroundColor: cor.amarelo,
    height: Constants.statusBarHeight
  },
  fonteAutor: {
    fontFamily: 'goudy-old-style-italic-bt'
  },
  fonteBookDate: {
    fontFamily:'LymboDemo'
  },
  fonteCitacao: {
    fontFamily: 'goudy-old-style-bold'
  },
  fontePadrao: {
    fontFamily: 'palatino-linotype'
  } 
})

export default compartilhado;