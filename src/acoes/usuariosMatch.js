import { ordenarPorDistancia } from './ordenarPorDistancia';
import { usuarioUid, collection} from '../firebase/acoes';

export const usuariosMatch = (callback) => {

  var uid = usuarioUid();
  var data = collection('usuarios');

  data.doc(uid).get().then((doc) => {

    var usuario = doc.data();
    var longitude = usuario.localizacao.longitude;
    var latitude = usuario.localizacao.latitude;
    var buscando = usuario.buscando;

    var arrayUids = [];
    var dadosUsuarioMatch = [];

    if (buscando ==  'Ambos') {
      data.get().then(snapshot => {
        snapshot.forEach(doc => {
          var usuarioMatch = doc.data();

          if ((usuarioMatch.uid != usuario.uid) && (usuarioMatch.buscando == usuario.sexo || usuarioMatch.buscando == 'Ambos'))
          {
            arrayUids.push({
              longitude: usuarioMatch.localizacao.longitude,
              latitude: usuarioMatch.localizacao.latitude,
              uid: usuarioMatch.uid,
              usuarioMatch
            });    
          }           
        })
        ordenarPorDistancia(arrayUids, longitude, latitude); 
      })
      .catch(function(error) {
        console.log("Error ao pegar os documentos no usuariosMatch: ", error);
      });
    } else {
      data.where('sexo', '==', buscando).get().then(snapshot => {
        snapshot.forEach(doc => {
          var usuarioMatch = doc.data();

          if ((usuarioMatch.uid != usuario.uid) && (usuarioMatch.buscando == usuario.sexo))
          {  
            arrayUids.push({
              longitude: usuarioMatch.localizacao.longitude,
              latitude: usuarioMatch.localizacao.latitude,
              uid: usuarioMatch.uid,
              usuarioMatch
            });
            dadosUsuarioMatch.push(usuarioMatch);
          }
        })
        ordenarPorDistancia(arrayUids, longitude, latitude);
      })
      .catch(function(error) {
        console.log("Error ao pegar os documentos no usuariosMatch: ", error.message);
      });
    }      
  })
}





