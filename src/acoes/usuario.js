import Firebase, { db } from '../../Firebase';

//definindo tipos
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const LOGIN = 'LOGIN';
export const CADASTRO = 'CADASTRO';
export const USUARIO_DADOS = 'USUARIO_DADOS';


//ações
export const updateEmail = email => {
  return {
    type: UPDATE_EMAIL,
    payload: email
  }
}

export const updatePassword = senha => {
  return {
    type: UPDATE_PASSWORD,
    payload: senha
  }
}

export const login = () => {
  return async (dispatch, getState) => {
    try {
      const { email, password } = getState().user;
      const response = await Firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(getUser(response.user.uid));
    } catch (e) {
      alert(e);
    }
  }
}

export const getUser = uid => {
  return async (dispatch, getState) => {
    try {
      const user = await db
        .collection('users')
        .doc(uid)
        .get()
      dispatch({ type: LOGIN, payload: user.data() })
    } catch (e) {
      alert(e)
    }
  }
}

export const cadastro = () => {
  return async (dispatch, getState) => {
    try {
      const { email, password } = getState().user;
      const response = await Firebase.auth().createUserWithEmailAndPassword(email, password);
      if (response.user.uid) {
        const user = {
          uid: response.user.uid,
          email: email
        }
        db.collection('users')
          .doc(response.user.uid)
          .set(user)
        dispatch({ type: CADASTRO, payload: response.user });
      }
    } catch (e) {
      alert(e);
    }
  }
}

/*export const cadastrar = () => {
  return async (dispatch, getState) => {
    try {
      const { email, password } = getState().user;
      const response = await Firebase.auth().createUserWithEmailAndPassword(email, password);
      if (response.user.uid) {
        const user = {
          uid: response.user.uid,
          email: email,
          //nome: nome,
        }
        db.collection('users')
          .doc(response.user.uid)
          .set(user)
        dispatch({ type: CADASTRO, payload: response.user });
      }
    } catch (e) {
      alert(e);
    }
  }
}
/*export function createAccount(data, picture) {
  const { fname, lname, email, password, image } = data;
  return dispatch => auth.createUserWithEmailAndPassword(email, password).then((user) => {
    if (user !== null) {
      storage.child(`profile/${picture.name}/${new Date().getTime()}`).put(image[0]).then((snapshot) => {
        database.ref('users').child(user.uid).set({
          fname,
          lname,
          picture: snapshot.metadata.downloadURLs[0]
        });
      });
    }
  });
}*/
