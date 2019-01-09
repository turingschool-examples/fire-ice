export const getData = (houses) => ({
  type: 'GET_DATA',
  houses
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})