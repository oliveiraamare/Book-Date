import { Dimensions, StyleSheet } from "react-native";
import cor from './cores';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const perfil = StyleSheet.create({
	botao: {
		alignContent:'center',
		alignItems: 'center',
		backgroundColor: cor.rosa,
		borderRadius: 25,
		height: 40,
		justifyContent: 'center',
		marginLeft: 10,		
		paddingHorizontal: 20,
	},
	citacao: {
		color: cor.rosaClaro,
		fontSize: 13,
		marginBottom: 10,
		paddingBottom: 5,
		paddingTop: 5,
		textAlign: 'center'
	},
	container: {
		backgroundColor: 'rgba(0, 0, 0,60)',
    flex: 1
	},
	containerBotao: {
		alignSelf:'center',
		bottom: 0,
		marginTop: 50,
		position: 'absolute' 
	},
	containerNome: {
		alignSelf: 'center',   
		backgroundColor: cor.rosa,
		borderRadius: 20,
		marginTop: -15,
		paddingHorizontal: 30,
		paddingVertical: 9,
		textAlign: 'center',
		width: 190
	},
	containerPerfilComDescricoes: {
		backgroundColor: cor.pretoTransparente,
		borderRadius: 20,
		margin: 15,
		marginTop: 420,
		paddingBottom: 25,
		paddingHorizontal: 10,
		position:'relative'
	},
	descricaoIdadeCidade: {
		color: cor.cinza,
		fontSize: 13,
		paddingBottom: 10,
		textAlign: 'center'
	},
	iconeBotao: { 
		color: cor.branco,
		fontSize: 20 
 	},
	imagemBackground: {
		flex:1,
		height: DIMENSION_HEIGHT + 56,
		resizeMode: 'cover',
		width: DIMENSION_WIDTH		
	},
	nome: {
		alignSelf:'center',
		color: cor.branco
	},
	perguntas: {
		alignSelf:'flex-start',
		color: cor.branco,
		fontSize: 13, 
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
		paddingBottom: 5, 
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 8, 
    textAlign: 'justify'
	},
	respostas: {
		color: cor.rosaClaro,
		fontSize: 12,
		paddingBottom: 5,
		paddingHorizontal: 5,
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 5,
		textAlign: 'justify'
	},
	scrollView: { 
		marginHorizontal: 0 
	},
	textoBotao: {
		color: cor.branco,
		fontSize: 15,
		paddingLeft: 5
	},	
});
	
export default perfil;