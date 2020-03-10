import { StyleSheet } from 'react-native';
import cor from './cores';

const geo = StyleSheet.create({
  botao: {
    alignSelf: 'center',
    bottom: 0, 
    marginBottom: 30, 
    marginTop: 30,
    position: 'absolute'
  },
  header: {
    alignSelf: 'flex-end', 
    color: cor.rosa
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

export default geo;