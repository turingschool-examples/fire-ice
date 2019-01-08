import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchHouses } from '../../thunks/fetchHouses';
import { connect } from 'react-redux';
import Container from '../Container/Container';

export class App extends Component {

  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/houses';
    this.props.addHousesToStore(url);
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className='App'>
          <img src="../src/assets/wolf.gif" alt="wolf loading gif"/>
        </div>
      )
    }
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <Container />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses,
  isLoading: state.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
  addHousesToStore: (url) => dispatch(fetchHouses(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);