import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';

export const Container = (props) => {

  const cardsToDisplay = props.houses.map((house) => {
    return <Card key={house.url} house={house} />
  })

  return (
    <div className="Container">
      {cardsToDisplay}
    </div>
  )
}

export const mapStateToProps = (state) => ({
  houses: state.houses
});

export default connect(mapStateToProps)(Container);