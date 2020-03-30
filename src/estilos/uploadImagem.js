import { Dimensions, StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const DIMENSION_WIDTH = Dimensions.get('window').width;

const uploadImagem = StyleSheet.create({
  avatar: {
    alignSelf: 'center', 
    backgroundColor: cor.cinza,
    marginTop: 20
  },
  botaoContinuar: {
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
  botaoContinuarTexto: {
    color: cor.amareloA, 
    fontWeight:'bold'
  },
  botaoComTexto: {
    alignSelf: 'center',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    margin: 30
  },
  header: {
    alignSelf: 'flex-end'
  },
  ouEntao: {
    color:cor.branco, 
    marginLeft: 10, 
    marginRight:10
  },
  renderizandoUpload: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center'
  }
})

export default uploadImagem;