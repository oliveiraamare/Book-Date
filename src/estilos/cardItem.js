import { Dimensions, StyleSheet } from 'react-native'

const Dimensions_WIDTH = Dimensions.get('window').width;
const Dimensions_HEIGHT = Dimensions.get('window').height;

import cor from './cores';

const cardItem = StyleSheet.create({
	acoes: {
		alignSelf: 'flex-start', 
		flexDirection: 'column',
		marginTop: 130,
		paddingVertical: 20
	},
	botaoMaior: {
		alignItems: 'center',
		backgroundColor: cor.amareloH,
		borderRadius: 70,
		justifyContent: 'center',
		height: 80,
		marginHorizontal: 7,
		marginLeft: 5,
		width: 50
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
		backgroundColor: 'transparent',
		flex: 1,
		height: Dimensions_HEIGHT,
		position: 'absolute',
		width: Dimensions_WIDTH
	},
	containerUsuarioInfo: {
		bottom: 0, 
		marginBottom: 85,
		position:'absolute'
	},
	genero: {
		color: cor.amareloG, 
		fontSize: 15,
		fontWeight:'bold',
		marginBottom: 20
  },
	miniBotao: {
		backgroundColor: cor.amareloH,
		borderRadius: 30,
		height: 50,
		marginHorizontal: 7,
		width: 50
	},
	nome: {
		color: cor.amareloA,
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 30,
		marginBottom: 5,
		textAlign: 'justify'
	},
	sinopse: {
		alignItems: 'center',
		color: cor.amareloA,
		fontSize: 15,
		marginBottom: 5,
		paddingHorizontal: 30,
		textAlign: 'justify'
	}
})

export default cardItem;