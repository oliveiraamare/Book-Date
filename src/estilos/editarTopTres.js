import { Dimensions, StatusBar, StyleSheet } from "react-native";
import cor from './cores';
import compartilhado from "./compartilhado";

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('screen').height !== Dimensions.get('window').height && StatusBar.currentHeight > 24 ? (Dimensions.get('window').height + 56) : Dimensions.get('window').height;

const editarTopTres = StyleSheet.create({
  info:{
    marginTop: 10
  },
	scrollView: { 
		height: DIMENSION_HEIGHT
  },
  textInput: {    
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginLeft: 0,
    borderBottomWidth: 1,
    borderColor: 'transparent',
    color: cor.pagina,
    height: 50,
    marginBottom: 5, 
    marginTop: 5, 
    paddingLeft: 20,
    paddingRight: 20,
    width: DIMENSION_WIDTH - 30
  },
  texto: {
    color: cor.amarelo,  
    fontFamily: compartilhado.fontePadrao.fontFamily,
    fontSize: 15, 
    marginBottom: 5,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify'
  }
});
	
export default editarTopTres;