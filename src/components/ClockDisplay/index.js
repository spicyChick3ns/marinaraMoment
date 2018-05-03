import React from 'react';
const leftPad = (val) => {
  if (val<10) return `0${val}`;
  return `${val}`;
}
const ClockDisplay = (props) => (
  <div className='row'>
    <h2 className='text-center'>
    {`${leftPad(props.currentTime.get('h'))}:${leftPad(props.currentTime.get('m'))}:${leftPad(props.currentTime.get('s'))}`}</h2>
  </div>
);
export default ClockDisplay;
