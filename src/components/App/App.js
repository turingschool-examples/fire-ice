import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getDataThunk } from '../../thunks/getDataThunk'
import { connect } from 'react-redux';
import { getData } from '../../actions/index'
class App extends Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    console.log(this.props)
    this.props.getData()

  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros!!</h2>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  isLoading: state.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getDataThunk())
  // getDataAction: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
