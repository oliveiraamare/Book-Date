import Constants from 'expo-constants';
import { Dimensions, StyleSheet } from 'react-native';

import cor from '../estilos/cores'

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const mensagem = StyleSheet.create({
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
  imagemTransparente__externa: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    flex: 1
  },
  statusBar: {
    backgroundColor: cor.amarelo,
    height: Constants.statusBarHeight
  },
  fonteAutor: {
    fontFamily: 'goudy-old-style-bold-italic'
  },
  fonteBookDate: {
    fontFamily:'Mathildecastleland'
  },
  fonteBotao: {
    fontFamily: 'goudy-old-style-bold-italic',
    fontSize: 17
  },
  fonteCitacao: {
    fontFamily: 'goudy-old-style-italic-bt'
  },
  fontePadrao: {
    fontFamily: 'goudy-old-style'
  } 
})

export default mensagem;