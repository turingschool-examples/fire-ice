import * as actions from './index';

it('should return an object with type of ADD_HOUSES and matching payload', () => {
  const payload = [
    { name: 'House', title: 'Lord'}
  ];
  const expected = {
    type: 'ADD_HOUSES',
    payload
  };
  const result = actions.addHouses(payload);
  expect(result).toEqual(expected);
})
