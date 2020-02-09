import { StyleSheet } from 'react-native';
import compartilhado from '../styles/compartilhado';

const sobre = StyleSheet.create({
  botao: {
    alignSelf: 'center',
    bottom: 0,
    marginBottom: 30, 
    marginTop: 30,
    position: 'absolute'
  },
  cidade:{
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    color: compartilhado.corTexto.color,
    height: 60,
    marginBottom: 130, 
    marginTop: 10, 
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    alignSelf: 'flex-end'
  },
  nome:{
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    color: compartilhado.corTexto.color,
    height: 50,
    marginBottom: 10, 
    marginTop: 5, 
    paddingLeft: 20,
    paddingRight: 20
  },
  texto1: {
    color:'#ff33cc',  
    fontSize: 15 ,  
    marginBottom: 40,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify'
  }
})

export default sobre;