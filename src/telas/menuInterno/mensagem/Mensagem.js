import React, { Component } from 'react';
//import { ImageBackground, View , StyleSheet} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';


class Mensagem extends Component {

  render () {
    return (
      <GiftedChat
      />
    );
    }
  }

export default Mensagem; 
/*
import mensagem from '../../../estilos/mensagem';
import cor from '../../../estilos/cores';
export default class Mensagem extends Component {
  render() {
    return (
      <View style={mensagem.container}>
        <View style={mensagem.statusBar} />
        <ImageBackground
          source={require('../../../imagens/fundo.jpg')} 
          style={mensagem.imagemBackground}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent', 
    borderBottomColor: cor.pagina,
    borderBottomWidth: 0.18
  },
  appBarHeader: {
    color: cor.pagina, 
    fontSize: 18
  },
})
*/