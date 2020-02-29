import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

import cor from '../estilos/cores'

const compartilhado = StyleSheet.create({
  container: {
    backgroundColor: cor.preto,
    flex: 1
  },
  corTexto: {
    color: 'white'
  },
  statusBar: {
    backgroundColor: cor.rosa,
    height: Constants.statusBarHeight
  },
})

export default compartilhado;