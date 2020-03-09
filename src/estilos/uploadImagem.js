import { StyleSheet } from 'react-native';
import cor from '../estilos/cores';

const uploadImagem = StyleSheet.create({
  avatar: {
    alignSelf: 'center', 
    backgroundColor: cor.cinza, 
    marginBottom: 10,
    marginTop: 40
  },
  botao: {
    alignSelf: 'center',
    bottom: 0, 
    marginBottom: 30, 
    marginTop: 30,
    position: 'absolute'
  },
  botaoTransparente: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    margin: 30
  },
  header: {
    alignSelf: 'flex-end'
  },
  renderizandoUpload: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center'
  }
})

export default uploadImagem;