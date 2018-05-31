import React from 'react';

const Card = (props) => {
  const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = props;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{founded}</h2>
      <h3>{seats}</h3>
      <h4>{titles}</h4>
      <h5>{coatOfArms}</h5>
      <h6>{ancestralWeapons}</h6>
      <h6>{words}</h6>
      <div>sup</div>
    </div>
  )
}

export { Card }
