import { Dimensions, StyleSheet } from 'react-native'

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

import cor from './cores';

const cardItem = StyleSheet.create({
	acoes: {
		alignItems: "center",
		//bottom: 0,
		flexDirection: "row",
		paddingVertical: 30
	},
	botaoMaior: {
		alignItems: "center",
		backgroundColor: cor.branco,
		borderRadius: 30,
		justifyContent: "center",
		height: 60,
		marginHorizontal: 7,
		shadowColor: cor.preto,
		//shadowOffset: { height: 10, width: 0 }
		shadowOpacity: 20,
		shadowRadius: 50,
		width: 60
	},
	containerInfo: {
    alignItems: "center",
    backgroundColor: cor.pretoTransparente,
		borderRadius: 20,
		margin: 10,
		bottom: 0,
	//	paddingHorizontal: 10,
		//paddingVertical: 10,
    position:'absolute',
	},
	descricao: {
		color: cor.branco,
		marginTop: 10,
		textAlign: "center"
	},
	imageBackground: {
		alignContent: 'center', 
		alignItems: 'center',
		alignSelf: 'center',
		height: fullHeight - 95,
		justifyContent: 'center',
		marginHorizontal: 10, 
		marginVertical: 10,
		resizeMode: 'cover',
		width: fullWidth - 20
	},
	miniBotao: {
		alignItems: "center",
		backgroundColor: cor.branco,
		borderRadius: 30,
		height: 40,
		justifyContent: "center",
		marginHorizontal: 7,
		shadowColor: cor.preto,
		shadowOffset: { height: 10, width: 0 },
		shadowOpacity: 0.15,
		shadowRadius: 20,
		width: 40
	},
	nome: {
		color: cor.branco,
		fontSize: 20,
		paddingBottom: 7,
		paddingTop: 10
	}
})

export default cardItem;