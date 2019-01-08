import React from 'react';

import './Card.css';

const Card = (props) => {
  const { name, coatOfArms, words, titles, seats, founded, ancestralWeapons } = props;
    // all have different # of Titles and seats
  let checkedFounded;
  if (founded === '') {
    checkedFounded = 'N/A'
  } else {
    checkedFounded = founded
  }

  const allTitles = titles.map((title) => <p key={title}>Titles: {title}</p>);

  return (
    <div className="card">
      <h1>{name}</h1>
      <h2>{words}</h2>
      <h4>Founded: {checkedFounded}</h4>
      <p>Seats: {seats}</p>
      {allTitles}
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Coat of Arms: {coatOfArms}</p>
    </div>
  )
}

export default Card;
