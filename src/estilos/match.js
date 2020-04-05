import { Dimensions, StatusBar, StyleSheet } from 'react-native';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('screen').height !== Dimensions.get('window').height && StatusBar.currentHeight > 24 ? (Dimensions.get('window').height + 56) : Dimensions.get('window').height

const cadastro = StyleSheet.create({
  background: {
    flex: 1, 
    resizeMode: 'contain',
    backgroundColor: 'rgba(0, 0, 0, 0.80)'
  },
  imagem: {
    flex: 1,
    height: DIMENSION_HEIGHT,
    resizeMode: 'contain',
    width: DIMENSION_WIDTH
  },
  loading: {
    top: DIMENSION_HEIGHT/2 - 130
  }
})

export default cadastro;