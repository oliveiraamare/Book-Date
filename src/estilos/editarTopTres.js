import { Dimensions, StyleSheet } from "react-native";
import cor from './cores';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const editarTopTres = StyleSheet.create({
  info:{
    marginTop: 10
  },
	scrollView: { 
		marginHorizontal: 0 ,
		height: DIMENSION_HEIGHT +150,
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
    fontSize: 15, 
    marginBottom: 5,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify'
  }
});
	
export default editarTopTres;