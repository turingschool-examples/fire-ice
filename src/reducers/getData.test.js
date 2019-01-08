import * as actions from '../actions/index';
import { getDataReducer } from '../reducers/getData'

describe('getDataReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = getDataReducer(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should return the state with houses', () => {
    const initialState = []
    const houses = [{
          name: '',
          founded: '',
          seats: [],
          titles: [],
          coatOfArms: "",
          ancestralWeapons: [],
          words: ""
  
    }]
    const expected = [{
      name: '',
      founded: '',
      seats: [],
      titles: [],
      coatOfArms: "",
      ancestralWeapons: [],
      words: ""

  
}]
    const result = getDataReducer(initialState, actions.getData(houses))
    expect(result).toEqual(expected)
  })
})