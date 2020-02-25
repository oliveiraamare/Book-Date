import { StyleSheet } from 'react-native';

import cor from '../estilos/cores';
import compartilhado from '../estilos/compartilhado';

const sobre = StyleSheet.create({
  botao: {
    alignSelf: 'center',
    bottom: 0,
    marginBottom: 30, 
    marginTop: 30,
    position: 'absolute'
  },
  header: {
    alignSelf:'flex-end', 
    color: cor.rosa,
  },
  paragrafo:{      
    color: cor.branco,
    fontSize: 13,
    marginTop: 20,  
    marginLeft: 10,
    marginRight: 10,
    textAlign:'justify'     
  },
  textoBotao:{
    alignItems: 'center',
    alignSelf: 'center',
    color: cor.branco,
    fontSize: 15, 
    justifyContent: 'center', 
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'transparent',
    color: compartilhado.corTexto.color,
    height: 50,
    marginBottom: 5, 
    marginTop: 5, 
    paddingLeft: 20,
    paddingRight: 20    
  },
  titulo: {
    alignSelf: 'center',      
    color: cor.branco,
    fontSize: 23,
    marginTop: 20,
  }
})

export default sobre;