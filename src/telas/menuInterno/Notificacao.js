//https://medium.com/appdafuer/how-to-create-a-simple-swipeable-list-in-react-native-81b894ea5c4c
//https://www.kurzor.net/blog/react-native-swipeable-list
import React, { Component } from 'react';
import { ImageBackground, ScrollView, View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

import compartilhado from '../../estilos/compartilhado';
import notificacao from '../../estilos/notificacao/notificacao';

import List from '../../estilos/notificacao/list';

const notificacoes = [
  { id: 1, message: 'Enfim você chegou!' },
  { id: 2, message:  'Sinta-se em casa!' },
  { id: 3, message: 'Se estiver gostando do nosso conceito, chame seus amigos!' }
];
class Notificacao extends Component {
  render() {
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <ImageBackground
          source={require('../../imagens/fundoInterno.jpg')} 
          style={compartilhado.imagemBackground}
        >
          <Appbar style={notificacao.header}> 
            <Appbar.Content
              title=
              {
                <Text style={notificacao.appBarHeader}>Notificações</Text>
              }
            />
          </Appbar>  
          <ScrollView >    
            <List data={notificacoes} />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default Notificacao;