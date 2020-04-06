import { ordenarPorDistancia } from './ordenarPorDistancia';
import { usuarioUid, collection} from '../firebase/acoes';

/*
  Primeira chamada de match.
  Primeiro fazemos a consulta no banco e retornamos um array.
  Esse array possui somente os dados dos usuários que possui o gênero procurado pelo usuário logado.
  Após isso é chamado o ordenarPorDistancia que ordena esses usuários do mais próximo ao mais longe.
  Em seguida guardamos o resultado ordenado no RealTime.
*/

/*
  Fluxo: usuariosMatch ->  ordenarPorDistancia -> salvarUsuariosProximos
  A tela de navegacaoInicial chama o usuariosMatch
  A tela de Match recupera o array do banco
*/

export const usuariosMatch = () => {

  var uid = usuarioUid();
  var data = collection('usuarios');

  data.doc(uid).get().then((doc) => {

    var usuario = doc.data();
    var buscando = usuario.buscando;
 
    var longitude = usuario.localizacao.longitude;
    var latitude = usuario.localizacao.latitude;
  
    var arrayUids = [];
    var dadosUsuarioMatch = [];

    if (buscando ==  'Ambos') {
      data.get().then(snapshot => {
        snapshot.forEach(doc => {
          var usuarioMatch = doc.data();
  
          if ((usuarioMatch.uid != uid) && (usuarioMatch.buscando == usuario.sexo || usuarioMatch.buscando == 'Ambos'))
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