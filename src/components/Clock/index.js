import React from 'react';
import ClockHeader from '../ClockHeader/index';
import ClockDisplay from '../ClockDisplay/index';
import ClockButton from '../ClockButton/index';

const Clock =() => (
  <div className='container-fluid'>

    <ClockHeader/>
    <ClockDisplay/>
    <ClockButton/>


    <div className='row'>
      <h2 className='text-primary'>Set Timer</h2>
      <div className='row control-row'>
        <div className='form-group'>
          <div className='col-sm-3'>
            <label htmlFor='hours'>Hours</label>
          </div>
          <div className='col-sm-9'>
            <input id='hours' className='form-control' type='number'/>
          </div>

        </div>
      </div>
      <div className='row control-row'>
        <div className='form-group'>
          <div className='col-sm-3'>
            <label htmlFor='minutes'>Minutes</label>
          </div>
          <div className='col-sm-9'>
            <input id='minutes' className='form-control' type='number'/>
          </div>
        </div>
      </div>
      <div className='row control-row'>
        <div className='form-group'>
          <div className='col-sm-3'>
            <label htmlFor='seconds'>Seconds</label>
          </div>
          <div className='col-sm-9'>
            <input id='seconds' className='form-control' type='number'/>
          </div>
        </div>
      </div>
    <div>
  </div>
          </div>
          </div>
);
export default Clock;
