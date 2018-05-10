import React, { Component } from 'react';
// import {Panel} from 'react-bootstrap';
import './App.css';
import Clock from './components/Clock/index';

class App extends Component {
  render() {
    return (
      <div className='stuff'>
        <div className='tomato clip-each border-style-thin center-block'>
            <Clock/>
        </div>
      </div>
    );
  }
}

export default App;
