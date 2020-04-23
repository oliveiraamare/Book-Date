import { StyleSheet } from 'react-native';
import cor from './cores';
import compartilhado from './compartilhado';

const home = StyleSheet.create({
  botoesAcao: {
    alignSelf:'center',
    bottom: 0,
    marginBottom: 50,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    position: 'absolute',
    width: '100%' 
  },
  botoesAcaoTexto: {
    color: cor.pagina
  },
  bookDate: {
    alignSelf: 'center',  
    color: cor.pagina,
    flex: 1,
    fontFamily: compartilhado.fonteBookDate.fontFamily,
    fontSize: 90,
    position: 'absolute', 
    top: 60
  },
  botaoCadastro: {  
    borderColor: cor.amarelo,
    borderRadius: 100, 
    height: 47,
    justifyContent: 'center',   
    marginRight: 30,
    width: 190
  },
  botaoLogin: {
    borderColor: cor.amarelo,
    borderRadius: 100, 
    height: 47,
    justifyContent: 'center',       
    marginLeft: 30,
    width: 190   
  },
  botoesTermos: {
    alignSelf: 'center',
    bottom: 0, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 28,
    margin: 10, 
    position: 'absolute'
  },
  textoBotoesTermos: {
    color: cor.amarelo, 
    fontFamily: compartilhado.fontePadrao.fontFamily,
    fontSize: 16,
  }
})

export default home;