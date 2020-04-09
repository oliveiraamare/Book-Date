//https://medium.com/better-programming/react-native-firebase-authentication-7652e1d2c8a2
//https://www.npmjs.com/package/react-native-indicators
//https://heartbeat.fritz.ai/how-to-build-an-email-authentication-app-with-firebase-firestore-and-react-native-a18a8ba78574

import React, { Component } from 'react';
import { View } from 'react-native';
import { BarIndicator } from 'react-native-indicators';

import Firebase from '../../firebase/Firebase';

import cor from '../../estilos/cores';
import compartilhado from '../../estilos/compartilhado';

class Loading extends Component {

  componentDidMount() {
    this.usuario_auth()
  }  

  componentWillUnmount() {
    this.usuario_auth()
  }

  usuario_auth() {
    Firebase.auth()
    .onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'NavegacaoInterna' : 'Home')
    })
  }
  
  render() {
    return (      
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
          <BarIndicator 
            color={cor.amarelo}
            count={5}
            size={70}
            animating={true}
            interaction={true}
          />   
      </View>
    )
  }
}

export default Loading;