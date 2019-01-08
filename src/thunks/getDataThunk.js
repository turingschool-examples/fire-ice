import { getData, isLoading } from '../actions'


export const getDataThunk = () => {
  return async (dispatch) =>  {
    try {
      console.log('hi')
      dispatch(isLoading(true))
      const response = await fetch('http://localhost:3001/api/v1/houses')
      const data = await response.json()
      console.log(data)
      dispatch(getData(data))
      dispatch(isLoading(false))
    } catch (error) {
      console.log('error')
    }
  }
}
