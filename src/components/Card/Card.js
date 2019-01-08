import React, { Component } from 'react';

import './Card.css';

const Card = (props) => {
  const { name, coatOfArms, words, titles, seats, founded, ancestralWeapons } = props;
    // all have different # of Titles and seats
    // may not have Founded
  let checkedFounded;
  if (founded === '') {
    checkedFounded = 'N/A'
  } else {
    checkedFounded = founded
  }
  return (
    <div className="card">
      <h1 >{name}</h1>
      <h2 >{words}</h2>
      <h4 >Founded: {checkedFounded}</h4>
      <p >Seats: </p>
      <p >Titles: </p>
      <p >Ancestral Weapons: {ancestralWeapons}</p>
      <p >Coat of Arms: {coatOfArms}</p>
    </div>
  )
}

export default Card;
