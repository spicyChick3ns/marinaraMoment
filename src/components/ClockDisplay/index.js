import React from 'react';
import * as clockState from '../../clockStates';
const leftPad = (val) => {
  if (val<10) return `0${val}`;
  return `${val}`;
}
const ClockDisplay = (props) => (
  <div>
    <div>
      {
        (props.clockState === clockState.COMPLETE) &&
          window.alert('Break time!')
      }
    </div>
    <div className='row'>
      <h2 className='text-center'>
        {
          `${leftPad(props.currentTime.get('m'))}:${leftPad(props.currentTime.get('s'))}`
        }
      </h2>
    </div>
  </div>
);
export default ClockDisplay;
