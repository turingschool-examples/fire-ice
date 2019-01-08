import { addHouses, addError, isLoading } from '../actions';

export const fetchHouses = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      const result = await response.json();
      dispatch(addHouses(result))
    } catch(error) {
      dispatch(addError(error.message));
    }
  }
}