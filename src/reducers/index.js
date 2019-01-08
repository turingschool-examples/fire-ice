import { combineReducers } from 'redux';
import { housesReducer } from './housesReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  houses: housesReducer,
  error: errorReducer
});

export default rootReducer;