import { StyleSheet } from 'react-native';

import compartilhado from './compartilhado';
import cor from '../estilos/cores';

const reenviarSenha = StyleSheet.create({
  botaoEnviar: {
    alignItems: 'center',            
    borderColor: cor.amarelo,
    borderRadius: 100, 
    borderWidth: 1,
    bottom: 0,
    height: 47,
    justifyContent: 'center',   
    margin: 30,
    position: 'absolute',
    width: 300    
  },
  header: {
    alignSelf: 'flex-end'
  },
  texto: {
    color: cor.pagina,  
    fontFamily: compartilhado.fontePadrao.fontFamily,
    fontSize: 17,
    marginBottom: 70,
    marginLeft: 20, 
    marginRight: 20, 
    marginTop: 100,  
    textAlign: 'center'
  },
  textoInput: {
    borderBottomWidth: 1,
    borderColor: 'transparent',
    color: cor.pagina,
    height: 50,
    marginBottom: 5, 
    marginTop: 5, 
    paddingLeft: 20,
    paddingRight: 20   
  }
})

export default reenviarSenha;