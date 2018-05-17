import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock/index';

class App extends Component {
  render() {
    return (
      <div>
        <div className='app-content center-block'>
          <Clock/>
        </div>
      </div>

    );
  }
}

export default App;
