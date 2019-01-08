import { isLoadingReducer } from '../reducers/isLoading'
import * as actions from '../actions/index';

describe('loadingReducer', () => {
  it('should return the default state', () => {
    const expected = false
    const result = isLoadingReducer(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should return the sate with true if loading', () => {
    const initialState = false
    const expected = true
    const result = isLoadingReducer(initialState, actions.isLoading(true))
    expect(result).toEqual(expected)
  })
  it('should return the state with false if not loading', () => {
    const initialState = false
    const expected = false
    const result = isLoadingReducer(initialState, actions.isLoading(false))
    expect(result).toEqual(expected)
  })
})