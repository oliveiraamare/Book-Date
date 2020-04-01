import Firebase from '../firebase/Firebase';
import { firestore, usuarioUid, salvarGeolocalizacao, uploadImagem } from '../firebase/acoes';

export const  handleSignUp = (email, senha, usuario, lat, long, imagem) => {
  Firebase.auth()
  .createUserWithEmailAndPassword(email, senha)
  .then(() => salvarUsuario(usuario, lat, long, imagem))
  .catch(error => alert('erro no handleSignUp: ' + error.message + ' ' + error))
}

const salvarUsuario = (usuario, lat, long, imagem) => {
  const uid = usuarioUid();
  firestore.collection('usuarios').doc(uid).set(usuario)
  .then(() => {
    salvarGeolocalizacao(uid, lat, long);
    uploadImagem(uid, imagem);
  })
  .catch(error => {
    alert('erro no salvarUsuario: '+ error.message  + ' ' + error)
  })
}