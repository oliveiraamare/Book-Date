import { StyleSheet } from 'react-native';
import compartilhado from '../estilos/compartilhado';

const regras = StyleSheet.create({
  botao: {
    alignSelf: 'center',
    bottom: 0,
    marginBottom: 30, 
    marginTop: 30,
    position: 'absolute'
  },
  paragrafo: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    //marginTop: 5,  
    marginLeft: 10,
    marginRight: 10,
    textAlign:'justify'
  },
  texto: {
    marginBottom: 20,
    marginTop: 150,
   // position:'absolute',
    top: 0
  },
  titleStyle: {
    fontSize: 21,
    marginBottom: 5,
    marginTop: 5,  
    position:'absolute',
    top: 5
  },
  subparagrafo: {
    color: '#ff33cc',
    fontSize: 13,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3, 
    textAlign:'justify' 
  },
  subtitleStyle: {
    alignSelf: 'center', 
    color: '#ff33cc',
    fontSize: 14, 
    marginBottom: 5,
    marginTop: 5,   
    position:'absolute',
    top: 33
  }
})

export default regras;