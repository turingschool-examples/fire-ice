import { combineReducers } from 'redux';
import { housesReducer } from './housesReducer';
import { errorReducer } from './errorReducer';
import { isLoadingReducer } from './isLoadingReducer';

const rootReducer = combineReducers({
  houses: housesReducer,
  error: errorReducer,
  isLoading: isLoadingReducer
});

export default rootReducer;