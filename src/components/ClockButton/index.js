import React, {Component} from 'react';
import * as clockState from '../../clockStates';

class ClockButton extends Component{
  constructor() {
    super();
    this.getButton = this.getButton.bind(this);
  }
  //TODO: return the correct button
  getButton() {
    switch (this.props.clockState) {
      case clockState.NOT_SET:
        return (<button className='btn btn-success center-block' onClick={this.props.startClock}>Start</button>);
      case clockState.RUNNING:
        return (<button className='btn btn-danger center-block' onClick={this.props.stopClock}>Stop</button>);
      case clockState.COMPLETE:
        return (<button className='btn btn-info center-block' onClick={this.props.startClock}>Reset</button>);
      default:
        break;
    }
  }

  render() {
    return (
      <div className='row'>
        {this.getButton()}
      </div>
    );
  }
}
export default ClockButton;
