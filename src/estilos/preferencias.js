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
    borderBottomWidth: 1,
    marginTop: 5, 
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
    margin: 5,
    marginTop: 20, 
    marginLeft: 50,
    marginRight: 30,
    width: 90
  },
  tagItemSelecionado: {
    backgroundColor: cor.rosa
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