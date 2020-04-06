//https://docs.expo.io/versions/latest/guides/push-notifications/#2-call-expos-push-api-with-the

import { Platform, Vibration } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

export const pushExpo = async() => {

  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  };

  if (finalStatus !== 'granted') {
    console.log('Falha ao obter o token para a notificação push');
    return;
  };
  
  const token = await Notifications.getExpoPushTokenAsync();

  if (Platform.OS === 'android') {
    Notifications.createChannelAndroidAsync('default', {
      name: 'default',
      sound: true,
      priority: 'max',
      vibrate: [250, 250, 250, 250]
    });
  }; 
  
  timeout(token);
};

const handleNotification = () => {
  Vibration.vibrate();
};

const timeout = (token) => {

  setTimeout(() => {
    bemVindo(token)
  }, 5000);

  setTimeout(() => {
    convitePush(token)
  }, 60000);
}

const bemVindo = async (token) => {

  const message = {
    to: token,
    sound: 'default',
    title: 'Seja bem-vindx ao nosso mundo!!!',
    body: 'Que tal encontrar o seu próximo crush literário?',
    android: {
      icon: ''      
    },
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
  
  handleNotification();

};

 const convitePush = async (token) => {
  const message = {
    to: token,
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

  handleNotification();
};