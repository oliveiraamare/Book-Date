import { Dimensions, StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const DIMENSION_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
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
  citacao: {
    borderBottomColor: cor.cinza,
    borderBottomWidth: 1,
    borderTopColor: cor.cinza,
    borderTopWidth: 1,
    height: 65,
    marginTop: 10, 
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    alignSelf: 'flex-end'
  },
  tagItem: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: cor.amarelo,    
    borderRadius: 100, 
    borderWidth: 1,
    justifyContent:'center',
    marginTop: 20, 
    marginBottom: 10,
    marginLeft: 5,
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

export default styles;