import { StyleSheet } from 'react-native';

import compartilhado from './compartilhado';
import cor from '../estilos/cores';

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
  header: {
    alignSelf: 'flex-end'
  },
  texto: {
    color: cor.branco, 
    marginBottom: 30,
    marginLeft: 20, 
    marginRight: 20, 
    marginTop: 100,  
    textAlign: 'center'
  },
  textoInput: {
    borderBottomWidth: 1,
    borderColor: 'transparent',
    color: cor.branco,
    height: 50,
    marginBottom: 30,     
    marginTop: 10,    
    paddingLeft: 10,    
    paddingRight: 10
  }
})

export default reenviarSenha;