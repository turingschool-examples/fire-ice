import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { housesReducer }

const rootReducer = combineReducers({
  fake
});


export default rootReducer;
