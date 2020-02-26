import { StyleSheet } from 'react-native';
import cor from '../estilos/cores';

const uploadImagem = StyleSheet.create({
  avatar: {
    alignSelf:'center', 
    backgroundColor:cor.cinza, 
    marginBottom:20,
    marginTop:40
  },
  botao: {
    alignSelf: 'center',
    bottom: 0, 
    marginBottom: 30, 
    marginTop: 30,
    position: 'absolute'
  },
  botaoTransparente: {
    flexDirection:'row', 
    justifyContent:'space-around'
  },
  renderizandoUploading: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center'
  },
  maybeRenderContainerApagar: {
    backgroundColor:'pink',
    borderRadius: 3,
    elevation: 2,
    marginTop: 30,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    width: 250,
  },
  maybeRenderImageTextApagar: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor:'white',
  }
})

export default uploadImagem;