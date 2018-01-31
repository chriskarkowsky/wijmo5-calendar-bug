import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './wijmo.css';
import moment from 'moment';
import { Calendar, InputNumber } from 'wijmo/wijmo.react.input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StartDate: moment("1/15/2018"),
      EndDate: moment("1/15/2018").add("days",7),
    };
    this.startDateChanged = this.startDateChanged.bind(this);
  }

  startDateChanged(args) {
    this.setState({
      StartDate: moment(args.value),
      EndDate: moment(args.value).add("days",7),
    });
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
        <p>Pick a Start Date</p>
        <p>Start Date: {this.state.StartDate.format()}</p>
        <Calendar
          className="wijCalendar1"
          min={moment("1/1/2018").format()}
          max={moment("2/1/2018").format()}
          value={this.state.StartDate.format()}
          valueChanged={this.startDateChanged}
        />
        <p>Pick an End Date</p>
        <p>EndDate: {this.state.EndDate.format()}</p>
        <Calendar
          className="wijCalendar2"
          value={this.state.EndDate.format()}
          min={moment(this.state.StartDate).add("days",1).format()}
          max={moment(this.state.StartDate).add("days",7).format()}
        />
        <Calendar
          className="wijCalendar3"
          min={moment(this.state.StartDate).add("days",1).format()}
          max={moment(this.state.StartDate).add("days",7).format()}
          value={this.state.EndDate.format()}
        />

      </div>
    );
  }
}

export default App;
