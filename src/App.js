import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import './App.css';
import Clock from './components/Clock/index';

class App extends Component {
  render() {
    return (
      <Panel className='app-content center-block'>
        <Panel.Body>
          <Clock/>
        </Panel.Body>
      </Panel>
    );
  }
}

export default App;
