import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Display.css';
import Card from '../Card/Card';
import { getHousesThunk } from '../../thunks/getHousesThunk';

class Display extends Component {
  
  componentDidMount = async () => {
    await this.props.getHousesThunk();
  }

  render() {
    const cards = this.props.houses.map((house) => {
      return (
        <Card {...house} key={house.id} />
      )
    })
    return (
      <div className="Display-info">
        {cards}
      </div>
    )
  }
};

export const mapStateToProps = (state) => ({
    houses: state.houses,
    isLoading: state.isLoading,
    error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  getHousesThunk: () => dispatch(getHousesThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Display);
