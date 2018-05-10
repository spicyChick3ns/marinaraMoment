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
    this.stopClock = this.stopClock.bind(this);
    this.reduceClock = this.reduceClock.bind(this);

  }
  reduceClock() {
    if (this.state.currentTime.get('hours') === 0 && this.state.currentTime.get('minutes') === 0 && this.state.currentTime.get('seconds') === 0  ) {
      this.completeClock();
      return;
    }

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
      timer: setInterval(this.reduceClock, 1000)
    });
  }
  stopClock() {
    if (this.state.timer) clearInterval(this.state.timer);
    this.setState({
      clockState: clockState.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.defaultTime)
    });
  }
  completeClock() {
    if (this.state.timer) clearInterval(this.state.timer);

    this.setState({
      clockState: clockState.COMPLETE,
      timer: null
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <ClockHeader/>
        <ClockDisplay clockState={this.state.clockState} currentTime={this.state.currentTime}/>
        <ClockButton
          startClock={this.startClock}
          stopClock={this.stopClock}
          clockState={this.state.clockState}/>
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
