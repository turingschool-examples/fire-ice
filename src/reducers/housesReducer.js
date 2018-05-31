const initialState = []

export const housesReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_HOUSES':
    return action.houses;
  default:
    return state;
  }
};
