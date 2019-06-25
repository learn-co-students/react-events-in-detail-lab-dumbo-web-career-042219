// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    console.log("clickity clackity"); //
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return <button onClick={this.handleClick}>Thems the coords</button>
  }

}

export default CoordinatesButton;
