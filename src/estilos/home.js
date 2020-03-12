import { StyleSheet } from 'react-native';
import cor from './cores';

const home = StyleSheet.create({
  bookDate: {
    alignSelf: 'center',  
    color: cor.branco,
    flex: 1,
    fontSize: 40,
    position: 'absolute', 
    top: 80
  },
  botaoLogin: {
    marginBottom: 5,
    marginTop: 50,
    top: 10
  },
  botaoCadastro: {  
    marginBottom: 5,
    marginTop: 5,
    top: 25,
  },
  botaoTransparente: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    margin: 30
  },
  botoes: {
    alignItems: 'center',
    flex:1, 
    height: 40,
    justifyContent: 'center', 
    width: '100%', 
  }
})

export default home;