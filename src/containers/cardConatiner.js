import React from 'react'

const CardContainer = () => {

  render() {

    return(
      <div></div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  isLoading: state.isLoading,
})


export default connect(mapStateToProps,)(CardContainer);