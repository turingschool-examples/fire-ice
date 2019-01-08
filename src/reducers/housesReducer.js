import { housesHelper } from './housesHelper';

export const housesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HOUSES':
      return housesHelper(action.houseData);
    default: 
      return state;
  }
}