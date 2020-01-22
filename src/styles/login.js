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
    backgroundColor: 'black'
  },
  frase: {
    flex: 1,
    flexDirection: 'row', // row
    backgroundColor: 'skyblue',
  }, 
  textoSocial: {
    color: 'white',
    width: '100%',
    height: 20,
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center', 
    alignContent: 'center',
    marginTop: 40,
    marginBottom: 40, flex:1, 
  },
  touchableOpacity: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  botaoEsqueceuLogin: {
    alignContent: 'flex-end',
    alignItems:'flex-end',
    alignSelf: 'flex-end',
    bottom: 0,
    flex: 1, 
    height: 50,
    justifyContent: 'center',     
    marginTop: 200,
    marginBottom: 200, 
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    width: '100%'
  },
})

export default styles;








    




