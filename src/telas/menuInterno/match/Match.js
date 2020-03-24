//https://github.com/stevenpersia/tinder-react-native
//https://www.npmjs.com/package/react-native-card-stack-swiper

import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

import CardItem from '../../../componentes/CardItem';
import Demo from './demo.js';

import compartilhado from '../../../estilos/compartilhado';
import Firebase from '../../../firebase/Firebase';

import { firestore, usuarioUid } from '../../../firebase/acoes';

import { GeoCollectionReference, GeoFirestore, GeoQuery, GeoQuerySnapshot } from 'geofirestore';
import * as firebase from 'firebase';


export const  getNearestLocations = async () => {
    try {    
      // Create a GeoFirestore reference
      const geofirestore = new GeoFirestore(firestore);

      // Create a GeoCollection reference
      const geocollection = geofirestore.collection('usuarios');

      // Create a GeoQuery based on a location
      const query = geocollection.near({
        center: new firebase.firestore.GeoPoint(-22.753, -43.279),
        radius: 20000,
      });
         // Get query (as Promise)
         query.get().then((value) => {
          console.log(value.docs); // All docs returned by GeoQuery
        });
  
        /*
          var fire = firestore.collection('usuarios');
          if (buscando ==  'Ambos'){
            fire.get()
            .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
              });
            })
            .catch(function(error) {
              console.log("Error getting documents: ", error);
            });
          } else {
            fire.where('sexo', 'array-contains', buscando).get()
            .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
              });
            })
            .catch(function(error) {
               console.log("Error getting documents: ", error);
            });
          }         
        */

      var fire = firestore.collection('usuarios');

      fire.where('sexo', 'array-contains', 'Leitor').get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
      console.log('          novo')



      fire.get().equalTo("localizacao")
      .then(function(querySnapshot) {
          //querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
     //     });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });


   
    }catch (error) {
      console.log(error);
    }
  
}
getNearestLocations()
class Match extends Component {
  render() {
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