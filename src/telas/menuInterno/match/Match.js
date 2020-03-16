//https://github.com/stevenpersia/tinder-react-native
//https://www.npmjs.com/package/react-native-card-stack-swiper

import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

import CardItem from '../../../componentes/CardItem';
import Demo from './demo.js';

import compartilhado from '../../../estilos/compartilhado';
import Firebase from '../../../../Firebase';

class Match extends Component {
  render() {
    /*var user = Firebase.auth().currentUser;
    var uid;
    if (user) {
      uid = user.uid;
      console.log(uid)
      alert(uid)
    } else {
      console.log('deu ruim;')
    }*/
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />    
        <ImageBackground
          source={require('../../../imagens/fundo.jpeg')} 
          style={compartilhado.imagemBackground}
        >
          <CardStack
            loop={true}
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            ref={swiper => (this.swiper = swiper)}
          >
            {Demo.map((item, index) => (
              <Card key={index}>
                <CardItem
                  name={item.name}
                  idade={item.idade}
                  //image={item.image}
                  genero1={item.genero1}
                  genero2={item.genero2}
                  genero3={item.genero3}
                  description={item.description}
                  actions
                  onPressPerfil={() => this.props.navigation.navigate('PerfilMatch')}
                  onPressLeft={() => this.swiper.swipeLeft()}
                  onPressRight={() => this.swiper.swipeRight()}
                  onPressMensagem={() => this.props.navigation.navigate('Mensagem')}
                />
              </Card>
            ))}
          </CardStack>
        </ImageBackground>    
      </View>
    );
  }
}

export default Match;