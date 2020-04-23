import { StyleSheet } from 'react-native';

import cor from '../estilos/cores';
import compartilhado from './compartilhado';

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
    alignContent: 'center',
    alignSelf:'center',
    borderColor: cor.amarelo,
    borderRadius: 100, 
    borderWidth: 1,
    height: 47,
    justifyContent: 'center',   
    margin: 30,
    width: 280 
  },  
  botaoLoginTexto: {
    color: cor.pagina,
    fontFamily: compartilhado.fonteBotao.fontFamily,
    fontSize: compartilhado.fonteBotao.fontSize
  },
  header: {
    alignSelf: 'flex-end'
  },
  senha: {
    height: 40,
    padding: 2,
    position: 'absolute',
    right: 15,
    top: 10,
    width: 35 
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'transparent',
    color: cor.pagina,
    height: 50,
    marginBottom: 5, 
    marginTop: 5, 
    paddingLeft: 20,
    paddingRight: 20   
  },
  textoEsqueceuLogin: {
    color: cor.amarelo,
    fontFamily: compartilhado.fontePadrao.fontFamily
  },
  styleBotaoComTexto1: {
    color: cor.pagina, 
    fontFamily: compartilhado.fonteBotao.fontFamily,
    fontSize: compartilhado.fonteBotao.fontSize,  
    marginRight: 10
  },
  styleBotaoComTexto2: {
    color: cor.amarelo,
    fontFamily: compartilhado.fonteBotao.fontFamily,
    fontSize: compartilhado.fonteBotao.fontSize
  }
})

export default login;