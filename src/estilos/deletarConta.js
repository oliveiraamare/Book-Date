import { StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const deletarConta = StyleSheet.create({
  containerView: {  
    alignItems: 'center', 
    justifyContent: 'center',  
    marginTop: 30
  },
  headerSubtitleStyle: {
    alignSelf: 'flex-end', 
  },
  paragrafo: {
    color: cor.branco, 
    marginBottom: 10,
    marginLeft: 17,
    marginRight: 15,  
    textAlign: 'center'
  },
  paragrafoPrincipal: {
    color: cor.branco, 
    marginBottom: 22,
    marginTop: 30,
    textAlign:'center'
  }
})

export default deletarConta;