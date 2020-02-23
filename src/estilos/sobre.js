import { StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const sobre = StyleSheet.create({
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
  titulo: {
    alignSelf: 'center',      
    color: cor.branco,
    fontSize: 23,
    marginTop: 20,
  }
})

export default sobre;