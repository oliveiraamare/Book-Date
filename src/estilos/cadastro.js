import { StyleSheet } from 'react-native';
import compartilhado from '../estilos/compartilhado';

const styles = StyleSheet.create({
  botao: {
    alignSelf: 'center',
    bottom: 0,
    marginBottom: 30, 
    marginTop: 30,
    position: 'absolute'
  },
  header: {
    alignSelf: 'flex-end'
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
    color: compartilhado.corTexto.color,
    height: 50,
    marginBottom: 5, 
    marginTop: 20, 
    paddingLeft: 20,
    paddingRight: 20    
  }
})

export default styles;