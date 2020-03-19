//https://github.com/stevenpersia/tinder-react-native
//https://www.npmjs.com/package/react-native-card-stack-swiper

import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

import CardItem from '../../../componentes/CardItem';
import Demo from './demo.js';

import compartilhado from '../../../estilos/compartilhado';
import Firebase from '../../../../Firebase';

export const salvarUsuario = () => {
  Firebase.database().ref("geolocalizacao/").limitToLast(20).on('value', (snapshot) => {
    var returnArr = [];
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item)       
    });
    const sortByDistance = require('sort-by-distance')
    const points = [
      returnArr[0], returnArr[1], returnArr[2], returnArr[3], returnArr[4],
      returnArr[5], returnArr[6], returnArr[7], returnArr[8], returnArr[9],
      returnArr[10], returnArr[11], returnArr[12], returnArr[13], returnArr[14],
      returnArr[15], returnArr[16], returnArr[17], returnArr[18], returnArr[19]
    ]
    const opts = {
      yName: 'latitude',
      xName: 'longitude'
    }
    const origin = { longitude: -42.419415, latitude: -22.2752762};
    console.log('tomara que de certo: ', sortByDistance(origin, points, opts));
  })
}

class Match extends Component {
  salvarUsuario()
  render() {
    var user = Firebase.auth().currentUser;
    var uid = user.uid;
    console.log(uid)
    alert(uid)
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