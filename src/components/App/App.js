import React, { Component } from "react";
import { connect } from "react-redux";
import { addHouses } from "../../actions/index";
import { fetchData } from "../../utils/fetchData";
import logo from "./logo.svg";
import "./App.css";
import CardContainer from "../CardContainer/CardContainer";

class App extends Component {
  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = async () => {
    const url = "http://localhost:3001/api/v1/houses";
    const response = await fetchData(url);
    this.props.addHouses(response);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Westeros</h2>
        </div>
        <CardContainer />
        <div className="Display-info" />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return { houses: state.houses };
};

export const mapDispatchToProps = dispatch => {
  return {
    addHouses: data => {
      dispatch(addHouses(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
