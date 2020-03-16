//https://stackoverflow.com/questions/37403747/firebase-permission-denied
//https://github.com/firebase/firebase-js-sdk/issues/97

import  * as firebase from 'firebase';
import '@firebase/firestore';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  STORAGE_BUCKET,
  PROJECT_ID,
  MESSAGE_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
} from 'react-native-dotenv';

const firebaseConfig = {
  apiKey : API_KEY,
  authDomain : AUTH_DOMAIN,
  databaseURL : DATABASE_URL,
  storageBucket : STORAGE_BUCKET,
  projectId : PROJECT_ID,
  messagingSenderId : MESSAGE_SENDER_ID,
  appId : APP_ID, 
  measurementId : MEASUREMENT_ID
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

const storage = firebase.storage();
export const storageRef = storage.ref();

console.disableYellowBox = [
  'Setting a timer'
];

export default Firebase;