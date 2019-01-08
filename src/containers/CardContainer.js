import React from 'react';
import { Card } from '../components/Card/Card';
import { connect } from 'react-redux';
import { Loading } from '../components/Loading/Loading';

const CardContainer = () => {
  if (props.isLoading) {
    return (
    <Loading />
    )
  } else {
    const cards = props.data.map((card) => {
      return <Card {...card}/>
    })
    return (
      <div>{cards}</div>
    )
  }
}

export const mapStateToProps = (state) => ({
  data: state.data,
  isLoading: state.isLoading,
})


export default connect(mapStateToProps)(CardContainer);