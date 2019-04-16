import React, { Component } from "react";
import { connect } from "react-redux";
import { addHouses } from "../../actions/index";
import { Card } from "../Card/Card";
import '../../assets/wolf.gif'



export class CardContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const houseCards = this.props.houses.map((house, index) => (
      <Card key={index} {...house} />
    ));
    if(this.props.houses.length === 0){
      return(
        <img src={require('../../assets/wolf.gif')} alt="loading..." />
      )
    }else{

      return <div>{houseCards}</div>;
    }
  }
}

const mapStateToProps = state => {
  return { houses: state.houses };
};

const mapDispatchToProps = dispatch => {
  return {
    addHouses: data => {
      dispatch(addHouses(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
