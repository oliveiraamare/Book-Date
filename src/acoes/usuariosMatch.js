import { ordenarPorDistancia } from './ordenarPorDistancia';
import { usuarioUid, collection} from '../firebase/acoes';

/* Primeira chamada para trazer os possíveis matchs do banco */

/*  
  Primeiro trazemos o dado do usuário logado do banco

  Caso o usuário queira ambos os sexos, chamamos a função trazer_ambos
  que devolve um array com todos os usuário que também queiram uma pessoa 
  do sexo do usuario logado

  Caso ele queira um sexo específico, chamamos a função trazer_sexo_escolhido
  que devolve um array com o gênero escolhido que contem todos os usuário que 
  também queiram uma pessoa do sexo do usuario logado

  Após isso chamamos a função ordenarPorDistancia que calcula a distância entre 
  esses usuários e o usuário logado e retorna um array ordenado do usuário mais
  próximo ao mais longe

  Em seguida comparamos o array resultante com o array de usuários da collection 
  estante. Retiramos quem está na estante e inserimos o array resultante na
  collection usuarios_proximos
*/

export const buscar_dados = () => {
  collection('usuarios').doc(usuarioUid())
    .get().then(snapshot => {            
      const usuario_logado = snapshot.data();
      const buscando = usuario_logado.buscando;
      const long = usuario_logado.localizacao.longitude;
      const lat = usuario_logado.localizacao.latitude;
      if (buscando ==  'Ambos'){
        trazer_ambos(usuario_logado, long, lat);
      } else {
        trazer_sexo_escolhido(usuario_logado, buscando, long, lat);
      }
    })
    .catch(function(error) {
      console.log('Erro ao trazer os dados do usuário logado: ', error);
    });    
}

const trazer_ambos = (usuario_logado, long, lat) => {
  var possiveis_matchs = [];
  collection('usuarios').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const usuario_match = doc.data();
        if ((usuario_match.uid != usuarioUid()) 
              && (usuario_match.buscando == usuario_logado.sexo 
                    || usuario_match.buscando == 'Ambos')
        ){
          possiveis_matchs.push({
            longitude: usuario_match.localizacao.longitude,
            latitude: usuario_match.localizacao.latitude,
            usuario_match
          });    
        }           
      })
      ordenarPorDistancia(possiveis_matchs, long, lat); 
    }).catch(function(error) {
      console.log('Erro ao trazer os usuarios para match(ambos): ', error);
    });
}

const trazer_sexo_escolhido = (usuario_logado, buscando, long, lat) => {
  var possiveis_matchs = [];
  collection('usuarios').where('sexo', '==', buscando).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const usuario_match = doc.data();
        if ((usuario_match.uid != usuario_logado.uid)  
           && (usuario_match.buscando == usuario_logado.sexo 
              || usuario_match.buscando == 'Ambos')
        ){  
          possiveis_matchs.push({
            longitude: usuario_match.localizacao.longitude,
            latitude: usuario_match.localizacao.latitude,
            usuario_match
          });
        }
      })
      ordenarPorDistancia(possiveis_matchs, long, lat);
    }).catch(function(error) {
      console.log('Erro ao trazer os usuarios para match(sexo escolhido): ', error.message);
    });

}