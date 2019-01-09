import { combineReducers } from 'redux';
import { getDataReducer } from './getData';
import { isLoadingReducer } from './isLoading';

const rootReducer = combineReducers({
  data: getDataReducer,
  isLoading: isLoadingReducer
})

export default rootReducer;