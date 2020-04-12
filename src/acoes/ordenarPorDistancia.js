//https://stackoverflow.com/questions/21987909/how-to-get-the-difference-between-two-arrays-of-objects-in-javascript
//https://www.npmjs.com/package/sort-by-distance
import { usuarioUid, collection } from '../firebase/acoes';

export const ordenarPorDistancia = (possiveis_matchs, long, lat) => {
  const sortByDistance = require('sort-by-distance'); 
  const coordenadas = { yName: 'latitude', xName: 'longitude'};  
  const localizacao_usuario_logado = { longitude: long, latitude: lat};
  const resultado_localizacao = sortByDistance(
    localizacao_usuario_logado, 
    possiveis_matchs, 
    coordenadas
  );
  var usuarios_proximos = [];
  resultado_localizacao.forEach(element => {
    usuarios_proximos.push(
      element.usuario_match
    );
  })
  salvarUsuariosProximos(usuarios_proximos);
}

//Verifica se a collection estante existe
//caso não exista, salva direto o array com os usuários próximos na collection usuarios_proximos
//caso exista, pega os usuários existentes na estante (1)
const salvarUsuariosProximos = (usuarios_proximos) => {
  collection('estante').doc(usuarioUid()).get()
    .then(snapshot => {
      if(snapshot.data()){
        pegar_usuarios_estante(usuarios_proximos);
      } else {
        salva_usuarios_proximos(usuarios_proximos) ;
      }
    })
}

const pegar_usuarios_estante = (usuarios_proximos) => {
  console.log('entrei na primeira opção')
  collection('estante').doc(usuarioUid())
    .get().then(snapshot => {
      const usuarios_existentes = Object.assign([], snapshot.data());  
      compara_estante_e_proximos(usuarios_proximos, usuarios_existentes)
    })
}

//compara os arrays das collections e retorna com um novo array
//esse array não possui os usuários que estão na estante
const compara_estante_e_proximos = (usuarios_proximos, usuarios_existentes) => {
 
  //Find values that are in result2 but not in result1
  const novos_usuarios = usuarios_proximos.filter(function(novo) {
    return !usuarios_existentes.some(function(existente) {
        return novo.uid == existente.uid;
    });
  });
  salva_usuarios_proximos(novos_usuarios);
}

//salva no firebase o array com os usuários próximos
//ocorre depois do cadastro ou se o usuário ainda não colocou ninguém na estante
const salva_usuarios_proximos = (usuarios_proximos) => {
  const usuarios = Object.assign({}, usuarios_proximos);
  collection('usuarios_proximos').doc(usuarioUid())
    .set(usuarios)
    .catch( error => {
      console.log('Não foi possivel salvar os usuarios proximos, ', error.message)
    });
}