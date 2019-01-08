import { combineReducers } from 'redux';

import { housesReducer } from './housesReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  houses: housesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
})
