import { AsyncStorage } from 'react-native'
import Firebase from '../firebase/Firebase';
import { 
  firestore, 
  uploadImagem,
  usuarioUid, 
  salvarGeolocalizacao
} from '../firebase/acoes';
import { Platform, Vibration } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import { push_expo } from '../componentes/pushExpo';

export const handle_signup = (email, senha, usuario, lat, long, imagem) => {
  Firebase.auth()
    .createUserWithEmailAndPassword(email, senha)
    .then(() => salvar_usuario(usuario, lat, long, imagem))
    .catch(error => alert('erro no handleSignUp: ' + error.message + ' ' + error))
}

const salvar_usuario = (usuario, lat, long, imagem) => {
  const uid = usuarioUid();
  firestore.collection('usuarios').doc(uid).set(usuario)
    .then(() => {
      salvarGeolocalizacao(uid, lat, long);
      uploadImagem(uid, imagem);
      recupera_token_expo();
      trata_dados();
      //push_expo();
    })
    .catch(error => {
      alert('erro no salvar_usuario: '+ error.message  + ' ' + error)
    })
}

const recupera_token_expo = async() => {
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
  salva_token_expo(token)
}

const salva_token_expo = (token) => {
  firestore.collection('usuarios').doc(usuarioUid())
    .set({ expoToken: token }, { merge: true })
    .then(console.log('Token salvo com sucesso'))
    .catch(error => {
      console.log('Erro ao salvar o token: ' + error.message);
    })
}

const trata_dados = () => {
  remove_dados_async();
}

const remove_dados_async = async() => {
  try {
    await AsyncStorage.clear();
    console.log('Storage do cadastro limpo com sucesso!');
  } catch (error) {
    console.log('Falha ao limpar o Storage do cadastro.', error.message);
  }
}