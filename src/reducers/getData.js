export const getDataReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_DATA':
      return action.houses
    default:
      return state
  }
}