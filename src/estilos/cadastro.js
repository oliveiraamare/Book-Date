import { StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const cadastro = StyleSheet.create({
  botao: {
    alignSelf: 'center',
    bottom: 0,
    marginBottom: 30, 
    marginTop: 10,
    position: 'absolute'
  },
  header: {
    alignSelf: 'flex-end'
  },
  paragrafo:{      
    color: cor.branco,
    fontSize: 13,
    marginTop: 20,  
    marginLeft: 10,
    marginRight: 10,
    textAlign:'justify'     
  },
  texto: {
    color: cor.amarelo,  
    fontSize: 15 ,  
    marginBottom: 10,
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify'
  },
  tagItem: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: cor.amarelo,    
    borderRadius: 100, 
    borderWidth: 1,
    justifyContent:'center',
    margin: 5,
    marginTop: 20, 
    marginLeft: 50,
    marginRight: 30,
    width: 90
  },
  tagItemSelecionado: {
    backgroundColor: cor.amarelo,
    borderColor: cor.amarelo
  },
  tagLabel: {
    color: cor.branco
  },
  tagLabelSelecionado: {
    color: cor.branco
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'transparent',
    color: cor.branco,
    height: 50,
    marginBottom: 5, 
    marginTop: 5, 
    paddingLeft: 20,
    paddingRight: 20    
  }
})

export default cadastro;