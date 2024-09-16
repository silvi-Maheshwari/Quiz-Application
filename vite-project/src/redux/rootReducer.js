

import { combineReducers } from 'redux';

import reducers from './Reducer';
import LoginReducer from './Reducer2';

const rootReducer = combineReducers({
  quiz1: reducers, 
  auth
  :LoginReducer
});

export default rootReducer;
