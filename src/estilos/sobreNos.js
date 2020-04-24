import { StyleSheet } from 'react-native';

import cor from './cores'
import compartilhado from './compartilhado';

const sobreNos = StyleSheet.create({
  paragrafo:{      
    color: cor.pagina,
    fontFamily: compartilhado.fontePadrao.fontFamily,  
    fontSize: 15,
    marginTop: 20,  
    marginLeft: 10,
    marginRight: 10,
    textAlign:'justify'     
  }
})

export default sobreNos;