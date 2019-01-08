import { addHouses, addError } from '../actions';

export const fetchHouses = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const result = await response.json();
      dispatch(addHouses(result))
    } catch(error) {
      dispatch(addError(error.message));
    }
  }
}