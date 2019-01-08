export const addHouses = (houseData) => ({
  type: 'ADD_HOUSES',
  houseData
});

export const addError = (message) => ({
  type: 'ADD_ERROR',
  message
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  bool
})