import React, { Component } from 'react';
import { connect } from 'react-redux';
import wolf from '../../assets/wolf.gif';

import './Display.css';
import Card from '../Card/Card';
import { getHousesThunk } from '../../thunks/getHousesThunk';

class Display extends Component {
  
  componentDidMount = async () => {
    await this.props.getHousesThunk();
  }

  render() {
    const { houses, isLoading } = this.props;
    const cards = houses.map((house) => {
      return (
        <Card {...house} key={house.id} />
      )
    });
    const loading = (
      <div id="wolf">{wolf}</div>
    );

    return (
      <div className="Display-info">
        {isLoading ? loading : cards}
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
