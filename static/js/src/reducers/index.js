import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Auth from './auth';
import Register from './register';


export default (history) => combineReducers({
  router: connectRouter(history),
  Auth: Auth,
  Register: Register
})
