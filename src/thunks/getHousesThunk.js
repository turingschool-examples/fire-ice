import { addHouses, isLoading, setError } from '../actions';

export const getHousesThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(' http://localhost:3001/api/v1/houses');
      if (!response.ok) {
        throw Error('Couldn\'t get houses')
      }
      dispatch(isLoading(false));
      const houses = await response.json();
      const cleanHouses = houses.map((house) => ({
        name: house.name,
        coatOfArms: house.coatOfArms,
        words: house.words,
        titles: house.titles,
        seats: house.seats,
        founded: house.founded,
        ancestralWeapons: house.ancestralWeapons,
        id: house.url
      }));
      dispatch(addHouses(cleanHouses))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}
