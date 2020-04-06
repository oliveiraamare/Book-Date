//https://docs.expo.io/versions/latest/guides/push-notifications/#2-call-expos-push-api-with-the

import React, { Component } from 'react';
import {
  Dimensions, 
  ImageBackground, 
  Platform, 
  StyleSheet, 
  View, 
  Vibration  
} from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { DotIndicator  } from 'react-native-indicators';

import { FraseTop } from '../../componentes/frase';

import compartilhado from '../../estilos/compartilhado';
import cor from '../../estilos/cores';

export default class PushExpo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expoPushToken: '',
      notification: {},
      isLoading: true
    };
  }

  registerForPushNotificationsAsync = async () => {
    
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync();
    //console.log(token);
    this.setState({ expoPushToken: token });

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };
  

  componentDidMount() {
    this.registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
    this._timeout();
  }

  _timeout() {
    setTimeout(() => {
      this.bemVindo()
    }, 5000);

    setTimeout(() => {
      this.convitePush()
    }, 10000);
  }


  _handleNotification = notification => {
    Vibration.vibrate();
    //console.log(notification);
    this.setState({ notification: notification });
  };

  bemVindo = async () => {
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: 'Seja bem-vindx ao nosso mundo!!!',
      body: 'Que tal encontrar o seu próximo crush literário?',
      _displayInForeground: true,
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };

  convitePush = async () => {
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: 'Dê uma apimentada na sua descrição',
      body: 'Citação, peculiaridades, preferências... Dinamize ainda mais a sua descrição.',
      _displayInForeground: true,
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };

  render() {
    return (
      <View style={compartilhado.container}>     
        <View style={compartilhado.statusBar}/>
        <ImageBackground
          source={require('../../imagens/fundoInterno.jpg')} 
          style={styles.imageBackground}
        >
          <FraseTop 
            topbarStyle={styles.loading} titleStyle={{fontSize:15}}
            title={frase} subtitleStyle={{alignSelf:'center'}} 
            subtitle={autor} 
          />   
          <View style={styles.loading}>
            <DotIndicator  
              color={cor.amarelo}
              count={5}
              size={20}
              animating={true}
              interaction={true}
            />   
          </View> 
        </ImageBackground>    
      </View>
    );
  }
}

const frase='"Julgue pela capa e perca uma grande história."';
const autor='Autor Desconhecido';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    height: DIMENSION_HEIGHT,
    resizeMode: 'contain',
    width: DIMENSION_WIDTH
  },
  loading: {
    top: DIMENSION_HEIGHT/2 - 130
  }
});