import { StyleSheet } from 'react-native';
import cor from './cores';

const geolocalizacao = StyleSheet.create({
  botao: {
    alignSelf: 'center',
    bottom: 0, 
    marginBottom: 30, 
    marginTop: 30,
    position: 'absolute'
  },
  texto: {
    color:cor.branco,
    fontWeight:"bold",
    
    margin:5
  },
  permissaoNegada: {
    color: cor.vermelho,
    fontSize: 30,
    margin: 20,
    textAlign: "center",
    bottom: 100
  },
  titulo: {
    color: cor.rosaClaro, 
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

export default geolocalizacao;