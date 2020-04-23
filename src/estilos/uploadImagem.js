import { Dimensions, StyleSheet } from 'react-native';

import cor from '../estilos/cores';
import compartilhado from './compartilhado';

const DIMENSION_WIDTH = Dimensions.get('window').width;

const uploadImagem = StyleSheet.create({
  avatar: {
    alignSelf: 'center', 
    backgroundColor: cor.cinza,
    marginTop: 20
  },
  botaoContinuar: {
    alignSelf: 'center',    
    backgroundColor: cor.amarelo,        
    borderColor: cor.amarelo,
    borderWidth: 1,
    bottom: 0,
    height: 47,
    justifyContent: 'center',   
    marginBottom: 0, 
    marginTop: 20,
    position: 'absolute',
    width: DIMENSION_WIDTH + 56
  },
  botaoComTexto: {
    alignSelf: 'center',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    margin: 30
  },
  botoesFoto: {
    color: cor.creme
  },
  header: {
    alignSelf: 'flex-end'
  },
  ouEntao: {
    color: cor.pagina, 
    fontFamily: compartilhado.fontePadrao.fontFamily,
    fontSize: compartilhado.fonteBotao.fontSize,
    marginTop: 2,
    marginLeft: 13, 
    marginRight:13
  },
  renderizandoUpload: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center'
  }
})

export default uploadImagem;