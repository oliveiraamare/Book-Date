import { StyleSheet,Platform } from 'react-native';
import compartilhado from './compartilhado';

const reenviarSenha = StyleSheet.create({
  botaoEnviar: {
    alignSelf: 'center', 
    marginBottom: 20,     
    marginTop: 10
  },
  botaoVoltar: {
    alignSelf: 'center',
    position: 'absolute'
  },
  texto: {
    color: compartilhado.corTexto.color, 
    marginBottom: 30,
    marginLeft: 20, 
    marginRight: 20, 
    marginTop: 100,  
    textAlign: 'center'
  },
  textoInput: {
    marginBottom: 30,     
    marginTop: 10,    
    paddingLeft: 10,    
    paddingRight: 10
  }
})

export default reenviarSenha;