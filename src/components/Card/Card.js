import React from 'react';
import './Card.css';

export const Card = ({card}) => { 
  const cardSeats = card.seats.map((seat) => {
    return seat
  })
  const cardTitles = card.titles.map((title) => {
    return title
  })
  const cardWeapons = card.ancestralWeapons.map((weapon) => {
    return weapon
  })

  return (
    <div className="card">
      <h1>{card.name}</h1>
      <p>{card.founded}</p>
      <div>{cardSeats}</div>
      <div>{cardTitles}</div>
      <p>{card.coatOfArms}</p>
      <div>{cardWeapons}</div>
      <p>{card.words}</p>
    </div>
  ) 

}