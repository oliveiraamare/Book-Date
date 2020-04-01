import { Dimensions, StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const cadastro = StyleSheet.create({
  imagem: {
    flex: 1,
    height: DIMENSION_HEIGHT + 56,
    resizeMode: 'cover',
    width: DIMENSION_WIDTH
  },
  imagemTransparente: {
    backgroundColor: cor.pretoTransparente, 
    flex: 1
  },
  loading: {
    top: DIMENSION_HEIGHT/2 - 130
  },
  semFoto: {
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
    flex: 1
  }
})

export default cadastro;