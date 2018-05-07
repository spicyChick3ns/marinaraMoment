import React, {Component} from 'react';
import * as clockState from '../../clockStates';

class ClockButton extends Component{
  constructor() {
    super();
    this.getButton - this.getButton.bind(this);
  }
  //TODO: return the correct button
  getButton() {
    switch (this.props.clockState) {
      case this.clockState.NOT_SET:
         {<button className='btn btn-success center-block' onClick={this.props.startClock}>Start</button>}
        break;
      case this.clockState.RUNNING:
        {<button className='btn btn-success center-block' onClick={this.props.startClock}>Stop</button>}
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div className='row'>
        <button className='btn btn-success center-block' onClick={this.props.startClock}>Start</button>
      </div>
    );
  }
}
export default ClockButton;
