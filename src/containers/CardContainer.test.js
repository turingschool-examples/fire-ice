import { mapStateToProps } from './CardContainer'
import { shallow } from 'enzyme'
import CardContainer from './CardContainer'
import React from 'react'

describe('CardContainer', () => {
  describe('mapStateToProps', () => {
    it('should return an array with house objects and loading false', () => {
      const mockHouses = [{
        name: '',
        founded: '',
        seats: [],
        titles: [],
        coatOfArms: "",
        ancestralWeapons: [],
        words: ""  
      }]
      const mockLoading = false
      const mockState = {
        data: mockHouses,
        isLoading: false
        
      }

      const expected = {
        data: mockHouses,
        isLoading: mockLoading
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})
