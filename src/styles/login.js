import { StyleSheet,Platform } from 'react-native';

const styles = StyleSheet.create({
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
    flex: 1,
  },
  frase: {
    flex: 1,
    flexDirection: 'row', // row
    backgroundColor: 'skyblue',
  }, 
  textoSocial: {
    color: 'white',
    width: '100%',
    height: 40,
    backgroundColor: 'skyblue',
    alignSelf: 'center',
    justifyContent: 'center', 
    alignContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  iconeSocial: {
    flex: 1,
    flexDirection: 'row', // row
    backgroundColor: 'skyblue',
  },
  textInput: {
    flex: 1,
    flexDirection: 'row', // row
    backgroundColor: 'skyblue',
  },
  touchableOpacity: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  botaoEsqueceuLogin: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
})

export default styles;