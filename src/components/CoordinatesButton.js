// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  // constructor() {
  //
  // }

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <button onClick={this.handleClick}>
      </button>
    )
  }
}
export default CoordinatesButton
