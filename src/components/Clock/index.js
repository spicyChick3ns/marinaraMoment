import React, {Component} from 'react';
import moment from 'moment';
import ClockHeader from '../ClockHeader/index';
import ClockDisplay from '../ClockDisplay/index';
import ClockButton from '../ClockButton/index';
import ClockConfig from '../ClockConfig/index';
class Clock extends Component {
  constructor() {
    super();
    this.state =  {
      currentTime: moment.duration(25, 'minutes'),
      defaultTime: moment.duration(25, 'minutes')
    };
    this.setDefaultTime = this.setDefaultTime.bind(this);
  }
  setDefaultTime(newDefaultTime) {
    this.setState({
      defaultTime: newDefaultTime,
      currentTime: newDefaultTime
    });
  }
  render() {
    return (
      <div className='container-fluid'>
        <ClockHeader/>
        <ClockDisplay currentTime={this.state.currentTime}/>
        <ClockButton/>
        <ClockConfig
          defaultTime= {this.state.defaultTime}
          setDefaultTime={this.setDefaultTime}
        />
      </div>
    )

  }
}


export default Clock;
