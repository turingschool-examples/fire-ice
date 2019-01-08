import { mapStateToProps } from './App'
import App from './App'
import React from 'react'
import * as actions from '../../actions/index'

describe('App', () => {
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
      const mockState = {
        data: mockHouses
      }

      const expected = {
        data: mockHouses
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it.skip('calls dispatch with getDataThunk', () => {
      const getDataThunk = jest.fn()
      const mockDispatch = jest.fn()
      const actionToDispatch = actions.getData()
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.getDataThunk()
      expect(getDataThunk).toHaveBeenCalledWith(actionToDispatch)
    })
  })
  
}) 


