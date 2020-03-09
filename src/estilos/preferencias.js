import { StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const styles = StyleSheet.create({
  botao: {
    alignSelf: 'center',
    bottom: 0,
    marginBottom: 30, 
    marginTop: 10,
    position: 'absolute'
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
  tagItem: {
    alignItems: 'center',
    backgroundColor: cor.preto,
    borderColor: cor.rosa,    
    borderRadius: 100, 
    borderWidth: 1,
    justifyContent:'center',
    marginTop: 20, 
    marginLeft: 5,
    width: 90
  },
  tagItemSelecionado: {
    backgroundColor: cor.rosa,
    borderColor: cor.rosa    
  },
  tagLabel: {
    color: cor.branco
  },
  tagLabelSelecionado: {
    color: cor.branco
  },
  texto: {
    color: cor.rosaClaro,  
    fontSize: 15 ,  
    marginBottom: 10,
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify'
  }
})

export default styles;