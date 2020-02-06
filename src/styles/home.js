import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    justifyContent: 'center',  
    width: '100%',
  },
  botoes: {
    alignItems: 'center',
    flex:1, 
    height: 40,
    justifyContent: 'center',  
    width: '100%', 
  },
  imagem: {
    alignSelf: 'center',  
    flex: 1,
    height: 150,
    position: 'absolute', 
    top: 80,
    width: 100
  }
})

export default styles;