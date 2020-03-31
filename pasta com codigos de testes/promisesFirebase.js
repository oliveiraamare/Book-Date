exports.findMultipleItems = functions.https.onRequest((request, response) => {
  var list = ["item1", "item2", "item3", "item4"];

  var outputList = [];
  const promises = [];

  for (var i = 0; i < list.length; i++) {
      console.log("Current item: " + list[i]);
      let promise = db.collection("items").where('listedItems', 'array-contains', list[i]).get()
          .then(snapshot => {
              if (snapshot.empty) {
                  console.log('No matching documents.');
              }

              snapshot.forEach(doc => {
                  outputList.push(doc.data());
              });
              return;
          })
          .catch(err => {
              console.log('Error getting documents', err);
          });
      promises.push(promise);
  }

  Promise.all(promises).then(() => {
      response.send(JSON.stringify(outputList));
  }
  .catch(err => {
      response.status(500);
  })

});



function query_data( search ) {
  return new Promise( (resolve, reject) => {
      db
      .collection("items")
      .where('listedItems', 'array-contains', search)
      .get()
      .then( snapshot => resolve(snapshot) )
      .catch( resolve( [] ) );
  });
}

function get_data( items )
{
  return new Promise( (resolve) => {
      Promise
          .all( items.map( item => query_data(item) ) )
          .then( (snapshots) => {
              resolve( snapshots.flatMap( 
                      snapshot => data_for_snapshot(snapshot) 
              ));
          });
  });
}

get_data( ["item1", "item2", "item3", "item4"] ).then( function(data) {
  console.log( JSON.stringify(data) );
});



/*export const arrayMatches = (usuariosProximos) => {

var data = collection('usuarios');

/ * usuariosProximos.forEach(element => {
  data.where('uid', '==', element[0]).get().then(snapshot => {
    snapshot.forEach(doc => {
      var dados = doc.data();
      arrayMatch.push(dados);        
    })
    //console.log('array: ', arrayMatch)
  })
})*/

/*usuariosProximos.forEach(element => { 
  data.doc(element[0]).get().then((doc) => {
    var dados = doc.data();
    print(dados)
  })
  .catch(function(error) {
    console.log("Error ao pegar os documentos no usuariosMatch: ", error.message);
  });
});* /



};

export const print = (dados) => {
var arrayMatch = [];
arrayMatch.push(dados);

setTimeout(() => { 
  console.log('oi'); }
  ,10000);
  console.log()
}*/





let doubled = arr.map(num => {
return num * 2;
});

setTimeout(() => {
print(arrayMatch), 100000});

db.collection("cities").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
  });
});






models/books.js

const booksRef = db.collection(books);

async function getBooks() {

  // You can implement a cache and fetch the books only once.
  const snapshot = await booksRef.get()

  const books = [];
  snapshot.forEach(doc => {
      books.push({
          doc.data: doc.data()
      });
  });

  return books;

}

module.exports = getBooks;

controllers/booksController.js

const getBooks = require('./../models/books');
exports.index = async function(req, res){
  const books = await getBooks(); // Handle exception
  res.render('books',{books: books});
};








//https://stackoverflow.com/questions/57739391/firestore-query-for-loop-with-multiple-values
import { collection } from '../firebase/acoes';

export const arrayMatches = (usuariosProximos) => {
var arrayUsuarios = [];
const promises = [];

var data = collection('usuarios');
usuariosProximos.forEach(element => {
  //console.log("Current item: " + element[0]);
 
  let promise = data.where('uid', '==', element[0]).get();

  promise.then(snapshot => {
    if(snapshot.empty) {
      console.log('sem documentos correspondentes no usuariosMatch');
    }
    snapshot.forEach(doc => {
      arrayUsuarios.push(doc.data());
    });
    return;
  })
  .catch(error => {
    console.log('Erro ao trazer os documentos no usuariosMatch', error.message);
  });
  promises.push(promise);
});

Promise.all(promises).then(() => {
  console.log(arrayUsuarios);
  //x(arrayUsuarios)
})
.catch(error => {
  console.log('erro ao retornar os usuários no usuariosMatch' + ' ' + error.message)
})
}