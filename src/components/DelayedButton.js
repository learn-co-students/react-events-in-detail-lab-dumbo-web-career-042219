// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

handleClick = event => {
  console.log('more clicks'); //
  event.persist()
   setTimeout(() => {
     this.props.onDelayedClick(event) }, this.props.delay);
}

render(){

  console.log(this.props); //
  console.log("DelayedButton"); //
    return (
      <button onClick={this.handleClick}>Delay this!</button>
    )
}

}

export default DelayedButton;
