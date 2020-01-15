import { combineReducers } from 'redux';
import { 
  CADASTRO,
  LOGIN, 
  UPDATE_EMAIL, 
  UPDATE_PASSWORD 
} from '../actions/usuario';

const user = (state = {}, action) => {
  switch (action.type) {
    case CADASTRO:
      return action.payload;
    case LOGIN:
      return action.payload;
    case UPDATE_EMAIL:
      return { ...state, email: action.payload};
    case UPDATE_PASSWORD:
      return { ...state, password: action.payload};
    default:
      return state;
  }
};

const rootReducer = combineReducers({ user });

export default rootReducer;