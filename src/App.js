import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './wijmo.css'
import moment from 'moment';
import { Calendar } from 'wijmo/wijmo.react.input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StartDate: moment()
        .subtract('days', 3)
        .startOf('day')
        .format(),
      EndDate: moment()
        .add('days', 2)
        .startOf('day')
        .format(),
      Today: moment().format(),
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Calendar
          selectionMode={1}
          value={this.state.StartDate}
          min={this.state.EndDate}
          max={this.state.Today}
        />
        <Calendar
          selectionMode={1}
          min={this.state.StartDate}
          max={this.state.EndDate}
          value={this.state.Today}
        />
      </div>
    );
  }
}

export default App;
