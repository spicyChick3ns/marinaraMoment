import React, {Component} from 'react';
// import moment from 'moment';

class ClockConfig extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newDefaultTime=this.props.defaultTime;

    switch(event.target.id) {
      case 'hours':
      newDefaultTime.subtract(this.props.defaultTime.get('hours'),'hours').add(parseInt(event.target.value, 10),'hours');
        break;
      case 'minutes':
        newDefaultTime.subtract(this.props.defaultTime.get('minutes'),'minutes').add(parseInt(event.target.value, 10),'minutes');
        break;
      case 'seconds':
        newDefaultTime.subtract(this.props.defaultTime.get('seconds'),'seconds').add(parseInt(event.target.value, 10),'seconds');
        break;
      default:
        break;
    }
    this.props.setDefaultTime(newDefaultTime);

  }
  render() {
    return(
      <div className='row'>
        <h2 className='text-primary'>Set Timer</h2>
        <div className='row control-row'>
          <div className='form-group'>
            <div className='col-sm-3'>
              <label htmlFor='hours'>Hours</label>
            </div>
            <div className='col-sm-9'>
              <input
                id='hours'
                className='form-control'
                type='number'
                defaultValue={this.props.defaultTime.get('hours')}
                onChange={this.handleChange}
              />
            </div>

          </div>
        </div>
        <div className='row control-row'>
          <div className='form-group'>
            <div className='col-sm-3'>
              <label htmlFor='minutes'>Minutes</label>
            </div>
            <div className='col-sm-9'>
              <input
                id='minutes'
                className='form-control'
                type='number'
                defaultValue={this.props.defaultTime.get('minutes')}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className='row control-row'>
          <div className='form-group'>
            <div className='col-sm-3'>
              <label htmlFor='seconds'>Seconds</label>
            </div>
            <div className='col-sm-9'>
            <input
              id='seconds'
              className='form-control'
              type='number'
              defaultValue={this.props.defaultTime.get('seconds')}
              onChange={this.handleChange}
            />
            </div>
          </div>
        </div>
      <div>
    </div>
    </div>
  );
  };
};

export default ClockConfig;
