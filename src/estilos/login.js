import { StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const login = StyleSheet.create({
  botaoEsqueceuLogin: {
    alignItems:'flex-end',    
    marginBottom: 20,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  botaoLogin: {
    alignSelf: 'center',
    marginBottom: 20, 
    marginTop: 20
  },  
  header: {
    alignSelf: 'flex-end'
  },
  inputEmail: {
    borderBottomWidth: 1,
    borderColor: 'transparent',
    color: cor.branco,
    height: 50,
    marginBottom: 20, 
    marginTop: 70,
    paddingLeft: 10,
    paddingRight: 10
  },
  inputSenha: {
    borderBottomWidth: 1,
    borderColor: 'transparent',
    color: cor.branco,
    height: 50,
    marginBottom: 5, 
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10, 
  }
})

export default login;