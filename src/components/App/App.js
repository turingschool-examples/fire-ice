import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchHouses } from '../../thunks/fetchHouses';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/houses';
    this.props.addHousesToStore(url);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses
});

export const mapDispatchToProps = (dispatch) => ({
  addHousesToStore: (url) => dispatch(fetchHouses(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);