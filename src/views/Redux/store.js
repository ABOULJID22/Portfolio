/* import { createStore } from 'redux';

const initialState = {
  user: null,
  isAuthenticated: false, // connexion
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;




 */

// store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './userSlice';

// Combinez les tranches si nécessaire
const rootReducer = combineReducers({
  user: userReducer, // Ajoutez votre tranche d'utilisateur ici
   // Ajoutez votre tranche du panier ici
  // Ajoutez d'autres tranches ici si nécessaire
});

// Créez le store Redux
const store = createStore(rootReducer);

export default store;

