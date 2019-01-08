import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  render() {
    // 9 cards: name, founded, seats, titles, coatOfArms, ancestralWeapons, words
    // may not have words
    // all have different # of Titles
    // may not have Founded
    return (
      <div>
        <h1 className="Name"></h1>
        <h3 className="Words"></h3>
        <h4 className="Founded">Founded: </h4>
        <p className="">Seats: </p>
        <p className="">Titles: </p>
        <p className="">Ancestral Weapons: </p>
        <p className="">Coat of Arms: </p>
      </div>
    )
  }
}