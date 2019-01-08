import React from 'react';

const Card = ({ house }) => {
  const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = house;
  return (
    <div className="Card"> 
      <h1>{name}</h1>
      <h2>{words}</h2>
      <h3>Founded: {founded}</h3>
      <p>Seats: {seats}</p>
      <p>Titles: {titles}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Coat Of Arms: {coatOfArms}</p>
    </div>
  )
}

export default Card;