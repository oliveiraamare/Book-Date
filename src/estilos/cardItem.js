import { Dimensions, StatusBar, StyleSheet  } from 'react-native'

const Dimensions_WIDTH = Dimensions.get('window').width;
const Dimensions_HEIGHT = Dimensions.get('screen').height !== Dimensions.get('window').height && StatusBar.currentHeight > 24 ? (Dimensions.get('window').height + 56) : Dimensions.get('window').height;

import cor from './cores';

const cardItem = StyleSheet.create({
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
		position: 'absolute',
		width: Dimensions_WIDTH
	},
	containerUsuarioInfo: {
		bottom: 0, 
		marginBottom: 60,
		position:'absolute'
	},
	genero: {
		color: cor.amareloG, 
		fontSize: 15,
		fontWeight:'bold',
		marginBottom: 10
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
		marginBottom: 5,
		paddingHorizontal: 30,
		textAlign: 'justify'
	}
})

export default cardItem;