import { StyleSheet } from 'react-native';
import compartilhado from '../estilos/compartilhado';

const conta = StyleSheet.create({
  listItem: {
    backgroundColor:'transparent',
    borderBottomStartRadius:50, 
    borderBottomEndRadius:25, 
    borderBottomWidth:0.3,
    borderColor: '#CCCCCC', 
    height: 55
  },
  viewAvatar: {
    alignItems: 'center',  
    marginBottom:20,
    marginTop: 20, 
    paddingBottom: 8,
    paddingLeft: 15, 
    paddingRight: 15,
    paddingTop: 6
  },
  viewTexto: {
    alignItems: 'center',
    marginTop: 15,
    paddingBottom: 10,
    paddingLeft: 15, 
    paddingRight: 15,
  },
  texto: {
    color:'#ff33cc',  
    fontSize: 15 ,  
    marginBottom: 20,
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify'
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'transparent',
    color: 'white',
    height: 50,
    marginBottom: 5, 
    marginTop: 20, 
    paddingLeft: 20,
    paddingRight: 20    
  }
})

export default conta;