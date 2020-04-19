import React, { Component } from 'react';
import { ImageBackground, View , StyleSheet} from 'react-native';

import compartilhado from '../../../estilos/compartilhado';
import cor from '../../../estilos/cores';
export default class Mensagem extends Component {
  render() {
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <ImageBackground
          source={require('../../../imagens/fundo.jpg')} 
          style={compartilhado.imagemBackground}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent', 
    borderBottomColor: cor.branco,
    borderBottomWidth: 0.18
  },
  appBarHeader: {
    color: cor.branco, 
    fontSize: 18
  },
})