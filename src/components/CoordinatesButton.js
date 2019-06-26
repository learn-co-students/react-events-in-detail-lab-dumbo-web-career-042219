// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {


returnCoordinates = (event) => {
	let mouseCoordinates = [event.clientX, event.clientY];
		this.props.onReceiveCoordinates(mouseCoordinates)
}

	render() {
		return (
			<div>
				<button onClick={this.returnCoordinates}> coordinates button here</button>
			</div>
			)
	}


}