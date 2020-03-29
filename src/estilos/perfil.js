import { Dimensions, StyleSheet } from "react-native";
import cor from './cores';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const perfil = StyleSheet.create({
	botao: {
		alignContent:'center',
		alignItems: 'center',
		backgroundColor: cor.amarelo,
		borderRadius: 25,
		height: 40,
		justifyContent: 'center',
		marginLeft: 10,		
		paddingHorizontal: 20,
	},
	botaoEditar: {
		alignSelf:'center',
		color: cor.branco,      
		backgroundColor: cor.amarelo,
		borderRadius: 20,
		fontWeight: 'bold',
 		justifyContent:'center',
		paddingHorizontal: 30,
		paddingVertical: 9,
		textAlign: 'center',
		width: 190
	},
	checkbox: {
		backgroundColor: 'transparent', 
		borderColor: 'transparent'
	},
	checkboxContainer: {
		alignItems: 'center',
		flexDirection: 'row',  
		flexWrap: 'wrap', 
		margin: 5,
		width: DIMENSION_WIDTH - 25 
	},
	checkboxTexto: {
		fontSize: 14, 
		paddingLeft: 10,
		color: cor.branco
	},
	citacao: {
		color: cor.amareloA,
		fontSize: 16,
		marginBottom: 10,
		paddingBottom: 5,
		paddingTop: 5,
		textAlign: 'center'
	},
	containerBotao: {
		alignSelf:'center',
		bottom: 0,
		marginTop: 50,
		position: 'absolute' 
	},
	containerNome: {
		alignSelf: 'center',   
		marginTop: -15
	},
	containerInfo: {
		alignSelf: 'center',
		backgroundColor: cor.pretoTransparente,
		borderRadius: 5,
		width: DIMENSION_WIDTH - 40,
		margin: 10,
		marginTop: -415
	},
	descricaoIdadeCidade: {
		color: cor.cinza,
		fontSize: 13,
		fontWeight: 'bold',
		paddingBottom: 10,
		textAlign: 'center'
	},
	iconeBotao: { 
		color: cor.branco,
		fontSize: 20 
	 },
	 imagemFrame: {
		alignSelf:'center',
		height: 130,		
		marginLeft:30,
		marginRight:30,
		paddingTop: 750,
		width: 350
	},
	imagemPerfil: {
		height: 280,
		marginTop: 56,
		marginLeft: 37,
		position:'absolute',   
		width: 280
	},
	perguntas: {
		alignSelf:'flex-start',
		color: cor.branco,
		fontSize: 13, 
		fontWeight: 'bold',
		marginTop: 10,
		paddingBottom: 5,
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 8,
		textAlign: 'justify'		
	},
	preferencias: {
		alignItems: 'center',
		paddingVertical: 8
	},
	preferenciasLiterarias: {
		alignSelf:'flex-start', 
		color: cor.branco,
		flex: 1, 
		fontSize: 13,
		paddingBottom: 5,   
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 8,
    textAlign: 'justify'
	},
	preferenciasLiterariasResposta: {
		alignSelf:'flex-start', 
		color: cor.branco,
		fontSize: 13,
		fontWeight: 'bold',
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 8, 
    textAlign: 'justify'
	},
	respostas: {
		color: cor.amareloA,
		fontSize: 12,
		paddingBottom: 5,
		paddingHorizontal: 5,
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 5,
		textAlign: 'justify'
	},
	scrollView: { 
		marginHorizontal: 0 ,
		height: DIMENSION_HEIGHT +150,
	},
	textoBotao: {
		color: cor.branco,
		fontSize: 15,
		paddingLeft: 5
	},	
});
	
export default perfil;