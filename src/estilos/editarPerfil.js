import { Dimensions, StyleSheet } from "react-native";
import cor from './cores';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const editarPerfil = StyleSheet.create({
	botaoEditar: { 
		backgroundColor: 'transparent',
		fontWeight: 'bold',
 		justifyContent:'flex-end'
	},
	containerIcone: {
    alignSelf: 'center',  
    marginBottom: 30, 
    marginTop: -35
	},
	containerImagem: {
		alignSelf: 'center',
    marginLeft: 10,
    marginRight: 40,
    marginTop: 15   
  },
  dateInput: {
    alignItems: 'flex-start',
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 40
  },
	imagemPerfil: {
		marginLeft: 37
  },	
  info:{
    marginTop: 10
  },
  listItem: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: cor.cinza, 
    borderTopWidth: 1,
    height: 50
  },
	preferencias: {
		height: 70
	},
	scrollView: { 
		marginHorizontal: 0 ,
		height: DIMENSION_HEIGHT +150,
  },
  tagItem: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: cor.amareloA,    
   // borderRadius: 100, 
    borderWidth: 1,
    justifyContent:'center',
    marginTop: 15, 
    marginBottom: 10,
    marginLeft: 5,
    width: 90
  },
  tagItemSelecionado: {
    backgroundColor: cor.amareloD,
    borderColor: cor.amareloA   
  },
  tagLabel: {
    color: cor.pagina
  },
  tagLabelSelecionado: {
    color: cor.pagina
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
    width: DIMENSION_WIDTH - 40
  },
  multilinha: {
    //backgroundColor: cor.pagina,
    borderBottomColor: cor.cinza,
    borderBottomWidth: 1,
    borderTopColor: cor.cinza,
    borderTopWidth: 1,
    height: 50,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
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
	
export default editarPerfil;