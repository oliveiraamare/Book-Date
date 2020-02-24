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
    color: cor.rosa
  },
  paragrafo: {
    color: cor.rosaClaro, 
    marginBottom: 10,
    marginLeft: 17,
    marginRight: 15,  
    textAlign: 'justify'
  },
  paragrafoPrincipal: {
    color: cor.branco, 
    marginBottom: 22,
    textAlign:'center'
  }
})

export default deletarConta;