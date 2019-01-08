import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getDataThunk } from '../../thunks/getDataThunk'
import { connect } from 'react-redux';
import CardContainer from '../../containers/CardContainer'
class App extends Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    this.props.getData()

  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
        <CardContainer />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  data: state.data
})

export const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getDataThunk())

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
