import { Dimensions, StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const { height } = Dimensions.get('window');

const termos = StyleSheet.create({
  botao:{
    alignItems: 'center',
    backgroundColor: cor.rosa,
    borderColor: cor.rosa,
    borderRadius: 10,
    borderWidth: 1, 
    bottom: 0, 
    marginBottom: 5,
    marginTop: 5,
    padding: 10
  },
  botaoDesabilitado:{
    alignItems: 'center',
    backgroundColor: cor.cinza,
    borderColor: cor.cinza,
    borderRadius: 10,
    borderWidth: 1, 
    bottom: 0, 
    marginBottom: 5,
    marginTop: 5,
    padding: 10
  },
  paragrafo:{      
    color: cor.pagina,
    fontSize: 13,
    marginTop: 5,  
    marginLeft: 10,
    marginRight: 10,
    textAlign:'justify'     
  },
  scrollView: {
    flex: 1, 
    height: height * .7,
    marginBottom: 15,
    marginTop: 15
  },
  textoBotao:{
    alignItems: 'center',
    alignSelf: 'center',
    color: cor.pagina,
    fontSize: 15, 
    justifyContent: 'center', 
  },
  titulo: {
    alignSelf: 'center',      
    color: cor.pagina,
    fontSize: 23,
    marginTop: 20,
  }
})

export default termos;