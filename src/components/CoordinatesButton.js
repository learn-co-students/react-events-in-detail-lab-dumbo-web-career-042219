import React, { Component } from 'react';

export default class Keypad extends Component {


    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    };


render () {

    return (
    <button onClick={this.handleClick}>

    </button>



        )
    }
}