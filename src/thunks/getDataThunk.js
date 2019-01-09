import { getData, isLoading } from '../actions'


export const getDataThunk = () => {
  return async (dispatch) =>  {
    try {
      const response = await fetch('http://localhost:3001/api/v1/houses')
      const data = await response.json()
      dispatch(getData(data))
    } catch (error) {
      console.log(error)
    }
  }
}
