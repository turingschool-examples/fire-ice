export const housesHelper = (houseData) => {
  return houseData.map((house) => {
    const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = house;
      return {
        name,
        founded,
        seats,
        titles, 
        coatOfArms, 
        ancestralWeapons,
        words
      };
  })
}