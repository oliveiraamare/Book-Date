import { StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const login = StyleSheet.create({
  botaoComTexto:{
    alignSelf: 'center',
    bottom: 0, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute'
  },
  botaoEsqueceuLogin: {
    alignItems:'flex-end',    
    marginBottom: 20,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  botaoLogin: {
    alignItems: 'center',            
    borderColor: cor.amarelo,
    borderRadius: 100, 
    borderWidth: 1,
    height: 47,
    justifyContent: 'center',   
    margin: 30,
    width: 300 
  },  
  botaoLoginTexto: {
    color: cor.amareloA, 
    fontWeight:'bold'
  },
  header: {
    alignSelf: 'flex-end'
  },
  senha: {
    height: 40,
    padding: 2,
    position: 'absolute',
    right: 12,
    top: 15,
    width: 35 
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
  styleBotaoComTexto1: {
    color: cor.branco, 
    fontSize: 15, 
    fontWeight: 'bold', 
    marginRight: 10
  },
  styleBotaoComTexto2: {
    color: '#FFCC00', 
    fontSize: 15
  }
})

export default login;