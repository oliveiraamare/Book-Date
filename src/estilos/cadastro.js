import { Dimensions, StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const DIMENSION_WIDTH = Dimensions.get('window').width;

const cadastro = StyleSheet.create({
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
  dateInput: {
    alignItems: 'flex-start',
    borderBottomWidth: 1, 
    borderColor: cor.branco, 
    borderTopColor: 'transparent',
    borderLeftWidth: 0,
    borderRightWidth : 0,
    height: 50,  
    margin: 40,
    paddingLeft: 15
  },
  paragrafo:{      
    color: cor.branco,
    fontSize: 13,
    marginTop: 20,  
    marginLeft: 10,
    marginRight: 10,
    textAlign:'justify'     
  },
  senha: {
    height: 40,
    padding: 2,
    position: 'absolute',
    right: 15,
    top: 10,
    width: 35 
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
    marginBottom: 80, 
    marginLeft: 50,
    marginRight: 30,
    width: 90
  },
  tagItemSelecionado: {
    backgroundColor: cor.amareloD,
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
  },
  texto: {
    color: cor.amarelo,  
    fontSize: 15 ,  
    marginBottom: 10,
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify'
  }
})

export default cadastro;