import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchHouseData } from '../../fetch'
import { storeHouseData } from '../../actions'


class App extends Component {
  componentDidMount = async () => {
    const url = 'http://localhost:3001/api/v1/houses'
    const houseData = await fetchHouseData(url)
    await this.props.storeHouse(houseData)
  }


  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          {/* <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button> */}
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  storeHouse: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => ({ 
  storeHouse: data => dispatch(storeHouseData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
