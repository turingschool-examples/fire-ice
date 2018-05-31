import { combineReducers } from 'redux';
import { housesReducer } from './housesReducer';

const rootReducer = combineReducers({
  houses: housesReducer
});


export default rootReducer;
