import { Dimensions, StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const DIMENSION_WIDTH = Dimensions.get('window').width;

const geo = StyleSheet.create({
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
    color: cor.amarelo
  },
  permissaoNegada: {
    color: cor.vermelho,
    fontSize: 30,
    margin: 20,
    textAlign: "center",
    bottom: 100
  },
  texto: {
    color:cor.branco,
    fontWeight:"bold",
    margin:5
  },
  titulo: {
    color: cor.amarelo, 
    fontSize: 16,
    marginBottom: 20,
    marginTop: 30,
    marginLeft: 17,
    marginRight: 15,  
    textAlign: 'center'
  },
  viewContainer: {
    alignItems: 'center', 
    justifyContent: 'center',  
    marginTop: 30
  }
})

export default geo;