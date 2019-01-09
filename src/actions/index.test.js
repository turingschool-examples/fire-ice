import * as actions from '../actions/index';

describe('actions', () => {
  it('should return a type of GET_DATA with houses', () => {
    const houses = []
    const expected = {
      type: 'LOAD_DATA',
      houses
    }
    const result = actions.getData(houses)
    expect(result).toEqual(expected)
  })
  it('should return a type of IS_LOADING with a bool', () => {
    const bool = false
    const expected = {
      type: 'IS_LOADING',
      recipes
    }
    const result = actions.isLoading(bool)
    expect(result).toEqual(expected)
  })
  
})