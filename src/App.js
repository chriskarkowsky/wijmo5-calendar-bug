import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './wijmo.css';
import moment from 'moment';
import { Calendar } from 'wijmo/wijmo.react.input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MinEndDate: moment()
      
        .subtract('days', 3)
        .startOf('day')
        .format(),
      MaxEndDate: moment()
        .subtract('days', 2)
        .startOf('day')
        .format(),
      Today: moment().format(),
   }
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
          className="wijCalendar1"
          /*Incorrect*/
          min={this.state.MinEndDate}
          max={this.state.MaxEndDate}
          value={this.state.Today}
        />
        <Calendar
          className="wijCalendar2"
          value={this.state.Today}
          /* Correct*/

          min={this.state.MinEndDate}
          max={this.state.MaxEndDate}
        />
      </div>
    );
  }
}

export default App;
