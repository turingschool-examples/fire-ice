import React from "react";

export const Card = props => (
  <div className="house-card">
    <h1>{props.name}</h1>
    <p>{props.founded}</p>
    <p>{props.seats}</p>
    <p>{props.titles}</p>
    <p>{props.coatOfArms}</p>
    <p>{props.ancestralWeapons}</p>
    <p>{props.words}</p>
  </div>
);
