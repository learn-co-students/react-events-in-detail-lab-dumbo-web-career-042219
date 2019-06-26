import React from 'react';

export default class CoordinatesButton extends React.Component{
  
  createArray = (event) => {
     let arr = [event.clientX, event.clientY]
     this.props.onReceiveCoordinates(arr)
  }
  render(){


    return(
      <button onClick={this.createArray}>Button</button>
    )
  }
}