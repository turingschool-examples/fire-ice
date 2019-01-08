// add houses
export const addHouses = (houses) => ({
  type: 'ADD_HOUSES',
  houses
});

// loading
export const isLoading = (boolean) => ({
   type: 'IS_LOADING',
   isLoading: boolean
})

// set error
export const setError = (error) => ({
  type: 'SET_ERROR',
  error
});