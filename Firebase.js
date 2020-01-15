import firebase from 'firebase';
import 'firebase/firestore';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  MESSAGE_SENDER_ID,
  APP_ID
} from 'react-native-dotenv';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: '',
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

console.disableYellowBox = [
  'Setting a timer'
];

export const passwordReset = {
  passwordReset: email => { 
    return firebase.auth().sendPasswordResetEmail(email)
}}

export default Firebase