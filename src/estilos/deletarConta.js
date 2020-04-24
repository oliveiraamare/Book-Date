import { StyleSheet } from 'react-native';

import cor from '../estilos/cores';
import compartilhado from './compartilhado';

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
    color: cor.pagina, 
    fontFamily: compartilhado.fontePadrao.fontFamily, 
    fontSize: 17,
    marginBottom: 10,
    marginLeft: 17,
    marginRight: 15,  
    textAlign: 'center'
  },
  paragrafoPrincipal: {
    color: cor.pagina, 
    fontFamily: compartilhado.fontePadrao.fontFamily, 
    fontSize: 17,
    marginBottom: 22,
    marginTop: 30,
    textAlign:'center'
  },
  popUp: {
    borderBottomColor: cor.amarelo, 
    borderBottomWidth: 1
  }
})

export default deletarConta;