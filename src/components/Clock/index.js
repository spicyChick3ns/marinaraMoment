import React, {Component} from 'react';
import moment from 'moment';
import * as clockState from '../../clockStates.js'
import ClockHeader from '../ClockHeader/index';
import ClockDisplay from '../ClockDisplay/index';
import ClockButton from '../ClockButton/index';
import ClockConfig from '../ClockConfig/index';
class Clock extends Component {
  constructor() {
    super();
    this.state =  {
      currentTime: moment.duration(25, 'minutes'),
      defaultTime: moment.duration(25, 'minutes'),
      clockState : clockState.NOT_SET,
      timer: null
    };
    this.setDefaultTime = this.setDefaultTime.bind(this);
    this.startClock = this.startClock.bind(this);
    this.reduceTimer = this.reduceTimer.bind(this);

  }
  reduceTimer() {
    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1,'second');

    this.setState({
      currentTime: newTime
    });

  }
  setDefaultTime(newDefaultTime) {
    this.setState({
      defaultTime: newDefaultTime,
      currentTime: newDefaultTime,

    });
  }
  startClock() {
    this.setState({
      clockState: clockState.RUNNING,
      timer: setInterval(this.reduceTimer, 1000)
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <ClockHeader/>
        <ClockDisplay currentTime={this.state.currentTime}/>
        <ClockButton startClock={this.startClock} clockState={this.state.clockState}/>
          {(this.state.clockState !== clockState.RUNNING) &&
            <ClockConfig
              defaultTime= {this.state.defaultTime}
              setDefaultTime={this.setDefaultTime}
            />}
      </div>
    )

  }
}


export default Clock;
