// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

returnCoordinates = (event) => {
	event.persist();
	// let mouseCoordinates = [event.clientX, event.clientY];
		setTimeout(() => {
		 this.props.onDelayedClick(event)
		 }, this.props.delay) 				
	}


	render() {
		return (
				<div>
					<button onClick={this.returnCoordinates}>delayed button here</button>
				</div>
			)
	}


}