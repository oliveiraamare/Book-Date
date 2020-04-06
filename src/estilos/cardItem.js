import { Dimensions, StatusBar, StyleSheet  } from 'react-native'

const Dimensions_WIDTH = Dimensions.get('window').width;
const Dimensions_HEIGHT = Dimensions.get('screen').height !== Dimensions.get('window').height && StatusBar.currentHeight > 24 ? (Dimensions.get('window').height + 56) : Dimensions.get('window').height;

import cor from './cores';

const cardItem = StyleSheet.create({
	acoes: {
		alignSelf: 'center', 
		alignItems: 'center',
		bottom: 0, 
		flexDirection: 'row',
		marginBottom: 40,
		paddingVertical: 20,
		position:'absolute'
	},
	botaoMaior: {
		alignItems: 'center',
		backgroundColor: cor.pretoTransparente,
		borderRadius: 70,
		justifyContent: 'center',
		height: 40,
		marginHorizontal: 7,
		marginLeft: 5,
		width: 90
	},
	containerGenero: {
		alignSelf: 'center',
		backgroundColor: 'transparent',
		flexDirection: 'row', 
		justifyContent: 'space-around',
		paddingHorizontal: 10,
		width: '100%' ,  
	},
	containerInfo: {
		alignItems: 'center',
		backgroundColor: cor.pretoTransparente,
		flex: 1,
		height: Dimensions_HEIGHT,		
		width: Dimensions_WIDTH
	},
	containerUsuarioInfo: {
		bottom: 0, 
		marginBottom: 125,
		position:'absolute'
	},
	genero: {
		color: cor.amareloG, 
		fontSize: 15,
		fontWeight:'bold',
		marginBottom: 10
  },
	miniBotao: {
		backgroundColor: cor.pretoTransparente,
		borderRadius: 30,
		height: 50,
		marginHorizontal: 7,
		width: 50
	},
	nome: {
		color: cor.cinza,
		fontSize: 25,
		fontWeight: 'bold',
		marginLeft: 30,
		marginBottom: 5,
		textAlign: 'justify'
	},
	sinopse: {
		alignItems: 'center',
		color: cor.cinza,
		fontSize: 15,
		fontWeight:'bold',
		marginBottom: 5,
		paddingHorizontal: 30,
		textAlign: 'justify'
	}
})

export default cardItem;