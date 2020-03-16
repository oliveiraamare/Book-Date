import { Dimensions, StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const DIMENSION_WIDTH = Dimensions.get('window').width;

const regras = StyleSheet.create({
  botao: {
    alignSelf: 'center',    
    backgroundColor: cor.amarelo,        
    borderColor: cor.amarelo,
    borderWidth: 1,
    bottom: 0,
    height: 47,
    justifyContent: 'center',   
    marginBottom: 0, 
    marginTop: 20,
    position: 'absolute',
    width: DIMENSION_WIDTH + 56
  },
  botaoTexto: {
    color: cor.amareloA, 
    fontWeight:'bold'
  },
  header: {
    alignSelf: 'flex-end',
    fontSize: 21
  },
  paragrafo: {
    color: cor.branco,
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,  
    marginLeft: 10,
    marginRight: 10,
    textAlign:'justify'
  },
  subparagrafo: {
    color: cor.amarelo,
    fontSize: 13,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3, 
    textAlign:'justify' 
  },
  subtitleStyle: {
    alignSelf: 'center', 
    color: cor.amarelo,
    fontSize: 14
  },
  titleStyle: {
    fontSize: 21,
    marginBottom: 5
  },
})

export default regras;