import { HouseReducer }  from './HouseReducer'

describe('HouseReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = HouseReducer(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return the updated state', () => {
    const houses = [{name:'Stark'},{name:'Baratheon'}]
    const result = HouseReducer(houses, 'ADD_HOUSES')
    expect(result).toEqual(houses)
  })
})


