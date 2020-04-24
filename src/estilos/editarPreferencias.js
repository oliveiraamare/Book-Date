import { Dimensions, StyleSheet } from "react-native";
import cor from './cores';
import compartilhado from "./compartilhado";

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const editarPreferencias = StyleSheet.create({
  checkbox: {
		backgroundColor: 'transparent', 
		borderColor: 'transparent'
	},
	checkboxContainer: {
    alignItems: 'center',
    alignContent: 'center',
		flexDirection: 'row',  
    flexWrap: 'wrap', 
		margin: 15,
		width: DIMENSION_WIDTH - 25
	},
	checkboxTexto: {
		fontSize: 14, 
		paddingLeft: 10,
		color: cor.pagina
	},
  info:{
    marginTop: 10
  },
	scrollView: { 
		marginHorizontal: 0 ,
		height: DIMENSION_HEIGHT +150,
  },
  tagItem: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: cor.creme,    
    borderWidth: 1,
    justifyContent:'center',
    marginTop: 15, 
    marginBottom: 10,
    marginLeft: 5,
    width: 90
  },
  tagItemSelecionado: {
    backgroundColor: cor.creme,
    borderColor: cor.pagina   
  },
  tagLabel: {
    color: cor.pagina,
    fontFamily: compartilhado.fontePadrao.fontFamily
  },
  tagLabelSelecionado: {
    color: cor.pagina,
    fontFamily: compartilhado.fontePadrao.fontFamily
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
	
export default editarPreferencias;