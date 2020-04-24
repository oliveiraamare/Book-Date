import { Dimensions, StyleSheet } from "react-native";
import cor from './cores';
import compartilhado from "./compartilhado";

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

export default perfilBooklover = StyleSheet.create({
	botao: {
		alignSelf: 'center',    
		backgroundColor: cor.pretoTransparente, 
		borderRadius: 5,
		bottom: 0,
		height: 47,
		justifyContent: 'center',   
		marginBottom: 0, 
		marginTop: 30,
		position: 'absolute',
		width: DIMENSION_WIDTH - 40,
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
		color: cor.pagina
	},
	citacao: {
		color: cor.creme,
		fontFamily: compartilhado.fonteAutor.fontFamily,
		fontSize: 16,
		marginBottom: 10,
		paddingBottom: 5,
		paddingTop: 5,
		textAlign: 'center'
	},
	containerNome: {
		alignSelf: 'center', 
		alignItems: 'center',
		backgroundColor: cor.amarelo,
		borderRadius: 20,
		marginTop: -15,
		paddingHorizontal: 30,
		paddingVertical: 9,
		textAlign: 'center',
		width: 190
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
		color: cor.pagina,
		fontFamily: compartilhado.fontePadrao.fontFamily, 
		fontSize: 14,
		paddingBottom: 10,
		textAlign: 'center'
	},
	icone: { 
		alignSelf:'center',
		color: cor.pagina,      
		backgroundColor: cor.amarelo,
		borderRadius: 20,
		fontWeight: 'bold',
		justifyContent:'center',
		paddingHorizontal: 30,
		paddingVertical: 9,
		textAlign: 'center',
		width: 190
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
	nome: {
		alignSelf:'center',
		color: cor.pagina,
		fontFamily: compartilhado.fonteAutor.fontFamily,
		fontSize: 17,  
		textAlign: 'center'
	},
	perguntas: {
		alignSelf:'flex-start',
		color: cor.pagina,
		fontFamily: compartilhado.fonteAutor.fontFamily,
		fontSize: 15, 
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
		color: cor.pagina,
		flex: 1, 
		fontSize: 13,
		paddingBottom: 5,   
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 8,
		marginBottom: 65,
    textAlign: 'justify'
	},
	preferenciasLiterariasResposta: {
		alignSelf:'flex-start', 
		color: cor.pagina,
		fontFamily: compartilhado.fonteAutor.fontFamily,
		fontSize: 14,
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 8, 
    textAlign: 'justify'
	},
	respostas: {
		color: cor.creme,
		fontFamily: compartilhado.fontePadrao.fontFamily,
		fontSize: 14,
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
	}
});