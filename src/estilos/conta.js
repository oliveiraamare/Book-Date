import { StyleSheet } from 'react-native';

import cor from '../estilos/cores';
import compartilhado from './compartilhado';

const conta = StyleSheet.create({
  autor: {
    alignSelf: 'flex-end'
  },
  citacao: {
    textAlign: "justify"
  },
  containerCitacao: {
    alignSelf: 'center',
    alignItems: 'center',
    height: 100,    
    fontSize: 14,
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 15,
    padding: 10,
    top: 10
  },
  listItem: {
    backgroundColor: 'transparent',
    borderBottomStartRadius: 50, 
    borderBottomEndRadius: 25, 
    borderBottomWidth: 0.3,
    borderColor: cor.pagina, 
    height: 55
  },
  listItem__titulo: {
    color: cor.pagina, 
    fontFamily: compartilhado.fontePadrao.fontFamily
  },
  nome: {
    color: cor.creme, 
    fontFamily: compartilhado.fontePadrao.fontFamily,  
    fontSize: 20, 
    textAlign: "justify"
  },
  texto: {
    color: cor.amarelo,  
    fontSize: 15 ,  
    marginBottom: 20,
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify'
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'transparent',
    color: cor.pagina,
    height: 50,
    marginBottom: 5, 
    marginTop: 20, 
    paddingLeft: 20,
    paddingRight: 20    
  },
  viewAvatar: {
    alignItems: 'center',  
    marginBottom: 40,
    marginTop: 20,
    marginBottom: 20, 
    paddingBottom: 5,
    paddingLeft: 15, 
    paddingRight: 15,
    paddingTop: 6,
    top: 110
  },
  viewImagem: {
    alignSelf: 'center',
    marginTop: 10
  },
  viewTexto: {
    alignItems: 'center',
    marginTop: 15,
    paddingBottom: 10,
    paddingLeft: 15, 
    paddingRight: 15,
  }
})

export default conta;