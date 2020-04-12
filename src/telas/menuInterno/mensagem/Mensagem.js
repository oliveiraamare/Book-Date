import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const LOCATION_TASK_NAME = 'background-location-task';

export default class Component extends React.Component {
 
  componentDidMount= async () => {
    //await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      //accuracy: Location.Accuracy.BestForNavigation,
     // timeInterval: 60000
    //});
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Text>Enable background location</Text>
      </TouchableOpacity>
    );
  }
}

/*TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.log('Ocorreu um erro ao pegar a localização: ', error.message)
  }
  if (data) {
    const { locations } = data;
    console.log(locations[0].coords.latitude)
    console.log(locations[0].coords.longitude)
  }
});*//*

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
exports.sendPushNotification = functions.database
  .ref("users/{userID}")
  .onCreate(event => {
    const data = event._data;
    payload = {
      notification: {
        title: "Welcome",
        body: "thank for installed our app",
      },
    };
    admin
      .messaging()
      .sendToDevice(data.notification_token, payload)
      .then(function(response) {
        console.log("Notification sent successfully:", response);
      })
      .catch(function(error) {
        console.log("Notification sent failed:", error);
      });
  });


  import Expo from 'exponent-server-sdk';
import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest((req, resp) => {
 resp.send("Hello from Firebase!");
});


let admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.sendPush = functions.database.ref('/usuarios/{uid}').onWrite(event => {
    let projectStateChanged = false;
    let projectCreated = false;
    let projectData = event.data.val();
    if (!event.data.previous.exists()) {
        projectCreated = true;
    }
    if (!projectCreated && event.data.changed()) {
        projectStateChanged = true;
    }

    let msg = 'A project state was changed';

		if (projectCreated) {
			msg = `The following new project was added to the project: ${projectData.title}`;
		}

    return loadUsers().then(users => {
        let tokens = [];
        for (let user of users) {
            tokens.push(user.pushToken);
        }

        let payload = {
            notification: {
                title: 'Firebase Notification',
                body: msg,
                sound: 'default',
                badge: '1'
            }
        };

        return admin.messaging().sendToDevice(tokens, payload);
    });
});

function loadUsers() {
    let dbRef = admin.database().ref('/usuarios');
    let defer = new Promise((resolve, reject) => {
        dbRef.once('value', (snap) => {
            let data = snap.val();
            let users = [];
            for (var property in data) {
                users.push(data[property]);
            }
            resolve(users);
        }, (err) => {
            reject(err);
        });
    });
    return defer;
}




//const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


let admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);
///admin.initializeApp();
const db = admin.firestore();
const { Expo } = require('expo-server-sdk')
let expo = new Expo();
const {pushExpo} = require('../src/componentes/pushExpo')

exports.notificacaoPush = functions.firestore
  .document('usuarios/{userId}').onCreate(
    pushExpo()
  )
  */

//https://docs.expo.io/versions/latest/guides/push-notifications/#2-call-expos-push-api-with-the


/*
exports.dbTest = functions.https.onCall((request, response) => {

    Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 60000
      });

      


    var doc = db.collection('usuarios').doc(usuarioUid());



    return doc
      .set({
        name: 'TEST'
      })
      .then(() => {
        return { result: 'document updated' };
      })
      .catch(error => {
        console.error("Erro ao salvar a geolocalização: ", error.message);
         //Adapt as you wish, see https://firebase.google.com/docs/reference/functions/functions.https.HttpsError
       });

});
* /






















/ *import Expo from 'exponent-server-sdk';
import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest((req, resp) => {
 resp.send("Hello from Firebase!");
});


let admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.sendPush = functions.database.ref('/usuarios/{uid}').onWrite(event => {
    let projectStateChanged = false;
    let projectCreated = false;
    let projectData = event.data.val();
    if (!event.data.previous.exists()) {
        projectCreated = true;
    }
    if (!projectCreated && event.data.changed()) {
        projectStateChanged = true;
    }

    let msg = 'A project state was changed';

		if (projectCreated) {
			msg = `The following new project was added to the project: ${projectData.title}`;
		}

    return loadUsers().then(users => {
        let tokens = [];
        for (let user of users) {
            tokens.push(user.pushToken);
        }

        let payload = {
            notification: {
                title: 'Firebase Notification',
                body: msg,
                sound: 'default',
                badge: '1'
            }
        };

        return admin.messaging().sendToDevice(tokens, payload);
    });
});

function loadUsers() {
    let dbRef = admin.database().ref('/usuarios');
    let defer = new Promise((resolve, reject) => {
        dbRef.once('value', (snap) => {
            let data = snap.val();
            let users = [];
            for (var property in data) {
                users.push(data[property]);
            }
            resolve(users);
        }, (err) => {
            reject(err);
        });
    });
    return defer;
}





* /

/ *const functions = require('firebase-functions');
var fetch = require('node-fetch')

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.database.ref('contacts/{id}').onCreate(event => {

    const root = event.data.ref.root
    var messages = []

    //return the main promise
    return root.child('/users').once('value').then(snapshot => {
        snapshot.forEach(childSnapshot => {
            var expoToken = childSnapshot.val().expoToken
            if (expoToken) {
                messages.push({
                    "to": expoToken,
                    "body": "New Note Added"
                })
            }
        })
        return Promise.all(messages)
    }).
    then(messages => {
        fetch('https://exp.host/--/api/v2/push/send', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messages)
        })
        return
    })
    .catch(error=>{
      console.log('erro: ', error.message)
    })

})*/