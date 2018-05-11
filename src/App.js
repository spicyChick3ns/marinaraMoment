import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import './App.css';
import Clock from './components/Clock/index';

class App extends Component {
  render() {
    return (
      <div>
        <div className='eh app-content center-block'>
          <Clock/>

        </div>
        <div id='top-left'>{false}</div>
      </div>  

    );
  }
}

export default App;
