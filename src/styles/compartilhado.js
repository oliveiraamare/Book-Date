import Constants from 'expo-constants';
import { StyleSheet,Platform } from 'react-native';

const compartilhado = StyleSheet.create({
  header: {
    height: Platform.OS === 'android' ? 76 : 100,
    marginTop: Platform.OS === 'ios' ? 0 : 24,
    ...Platform.select({
      ios: { backgroundColor: '#f00', paddingTop: 24},
      android: { backgroundColor: '#00f'}
    }),
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  corTexto: {
    color: 'white'
  },
  statusBar: {
    backgroundColor: '#ff33cc',
    height: Constants.statusBarHeight
  },
})

export default compartilhado;








    




