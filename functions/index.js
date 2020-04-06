//const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

import * as storage from '@google-cloud/storage';
import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest((req, resp) => {
 resp.send("Hello from Firebase!");
});


let functions = require('firebase-functions');
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







/*const functions = require('firebase-functions');
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