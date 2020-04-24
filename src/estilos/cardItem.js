import { Dimensions, StatusBar, StyleSheet  } from 'react-native'

const Dimensions_WIDTH = Dimensions.get('window').width;
const Dimensions_HEIGHT = Dimensions.get('screen').height !== Dimensions.get('window').height && StatusBar.currentHeight > 24 ? (Dimensions.get('window').height + 56) : Dimensions.get('window').height;

import cor from './cores';
import compartilhado from './compartilhado';

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
		color: cor.amarelo, 
		fontFamily: compartilhado.fonteAutor.fontFamily, 
		fontWeight: '400',
		fontSize: 16,
		marginBottom: 10
  },
	nome: {
		color: cor.pagina,
		fontFamily: compartilhado.fonteAutor.fontFamily,  
		fontSize: 25,
		marginLeft: 30,
		marginBottom: 5,
		textAlign: 'justify'
	},
	sinopse: {
		alignItems: 'center',
		fontFamily: compartilhado.fonteAutor.fontFamily,  
		color: cor.pagina,
		fontSize: 16,
		marginBottom: 5,
		paddingHorizontal: 30,
		textAlign: 'justify'
	}
})

export default cardItem;