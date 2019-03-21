import { combineReducers } from 'redux';
import Login from './Login';
import Register from './Register';

const rootReducer = combineReducers({
    Login,
    Register,
  })

export default rootReducer