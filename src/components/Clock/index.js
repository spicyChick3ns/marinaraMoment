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
      currentTime: moment.duration(1, 'seconds'),
      defaultTime: moment.duration(1, 'seconds'),
      clockState : clockState.NOT_SET,
      timer: null,
      cycleCount: 0
    };
    this.setDefaultTime = this.setDefaultTime.bind(this);
    this.startClock = this.startClock.bind(this);
    this.stopClock = this.stopClock.bind(this);
    this.reduceClock = this.reduceClock.bind(this);
    this.shortBreak = this.shortBreak.bind(this);
  }

  reduceClock() {
    if (this.state.currentTime.get('minutes') === 0 && this.state.currentTime.get('seconds') === 0  ) {
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
      currentTime: moment.duration(this.state.defaultTime),

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

  shortBreak() {
    this.setState({
      currentTime: moment.duration(5, 'minutes'),
      clockState: clockState.SHORT_BREAK,
      timer: setInterval(this.reduceClock, 1000),
      cycleCount: this.state.cycleCount + 1
    });
  }

  render() {
    return (
      <div className=''>
        <ClockHeader/>
        <ClockDisplay clockState={this.state.clockState} currentTime={this.state.currentTime}/>
        <ClockButton
          startClock={this.startClock}
          stopClock={this.stopClock}
          shortBreak={this.shortBreak}
          clockState={this.state.clockState}/>
      </div>
    )

  }
}


export default Clock;
