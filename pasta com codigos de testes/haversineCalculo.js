//https://github.com/DaniilSydorenko/haversine-geolocation
const locationPoints = [
  {
      id: 1,
      title: 'Point 1',
      latitude: 61.5322204,
      longitude: 28.7515963
  },
  {
      id: 2,
      title: 'Point 2',
      latitude: 51.9971208,
      longitude: 22.1455439
  },
  {
      id: 3,
      title: 'Point 3',
      latitude: 45.3571207,
      longitude: 30.3435456
  }
];
HaversineGeolocation.isGeolocationAvailable()
  .then(data => {
      const currentPoint = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude,
          accuracy: data.coords.accuracy
      };
      
      HaversineGeolocation.getClosestPosition(
          currentPoint, 
          locationPoints,
          'mi'
      );
  });

//haversine stackoverflow
const x = () =>{
  const toRadian = n => (n * Math.PI) / 180
  var lat2 = -22.7524486
  var lon2 = -43.2788431
  var lat1 = -22.2752762
  var lon1 = -42.419415
  var R = 6371 // km
  var x1 = lat2 - lat1
  var dLat = toRadian(x1)
  var x2 = lon2 - lon1
  var dLon = toRadian(x2)
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  var d = R * c
  console.log('distancia: ', d)
  return d;
}

//https://github.com/tiaanduplessis/sort-by-distance
const sortByDistance = require('sort-by-distance')
const points = [
  { longitude: -44.28039534017444, latitude: -22.04084005704918, id: 4},
  { longitude: -41.952392645180225, latitude: -22.22554792331448, id: 5},
  { longitude: -43.2788431, latitude: -22.7524486, id: 6},
]
const opts = {
  yName: 'latitude',
  xName: 'longitude'
}
 
const origin = { longitude: -42.419415, latitude: -22.2752762}
 
console.log(sortByDistance(origin, points, opts))


//https://www.npmjs.com/package/geolib

Firebase.database().ref('/usuarios/').on('value', (snapshot) => {
  const userObj = snapshot.val();
  console.log(userObj);
});
favouritesFire = Firebase.database().ref('usuarios').child(user + '/favourites');
favouritesFire.once("value", snapshot => {
  snapshot.map(item => { // it will pass through all your snapshot items
    Firebase.database().ref(`usuarios/${item.key}`) //for each item you must query again in firebase
    .once('value')
    .then(itemFiltered => console.log('Your item: ', itemFiltered)) // then you get your result
  })
})

Firebase.database().ref('geolocalizacao/').limitToLast(50).on('value', (snapshot) => {
  const userObj = snapshot.val()
  console.log('olha isso: ' + userObj)

  var teste = snapshot.key
  console.log('teste: ' + teste)


  console.log('nao sei: ' + Object.keys(userObj)) //traz todos os uid sem a geolocalização interna

  snapshot.forEach(function (childSnap) {
    console.log('tamo junto: ', childSnap.key)
    console.log('o que é: ', childSnap.val());// traz o objeto interno
   });


   var x = JSON.stringify(userObj)
   console.log('stringificando: ', x )


    var returnArr = [];
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item)       
    });
    console.log('girico idea: ', returnArr[0])     

    const sortByDistance = require('sort-by-distance')
const points = [
  returnArr[0],
  returnArr[1],
  returnArr[2],
]
const opts = {
  yName: 'latitude',
  xName: 'longitude'
}
 
const origin = { longitude: -42.419415, latitude: -22.2752762}
 
console.log('tomara que de certo: ', sortByDistance(origin, points, opts))


  /*snapshot.forEach(function(childSnapshot) {
    let array = [];
    var key = childSnapshot.key;
    console.log(key)

    var childData = childSnapshot.val();
    console.log(childData)
    
    var item = childSnapshot.val();
    item.key = childSnapshot.key;

        array.push(item);
        console.log('eeee: ' + array)
  });*/

   //var x =JSON.stringify(userObj)
  //console.log(x);
  //console.log(Object.keys(x));
  
});

//https://www.npmjs.com/package/object-to-array-convert
//https://gist.github.com/NickFoden/490b0cd34aba084cf92c3ac85382635e
//https://stackoverflow.com/questions/46532128/react-native-firebase-how-to-get-all-the-data/46532241
