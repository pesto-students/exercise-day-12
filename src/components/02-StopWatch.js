import React, { Component } from 'react';

/*
* Exercise 2:
*
*  Create a `StopWatch` component that has a Start/Stop button and a Clear
*  button.
*
*  Pressing Start will start a timer and the lapsed time in
*  milliseconds should be displayed above the buttons.
*
*  Once started the Start button should change to Stop. Clicking Stop
*  will stop the timer but lapsed time will be preserved.
*
*  Clicking Start again will resume the timer from where it left off.
*
*  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
*/

class StopWatch extends Component {
  constructor(props) {
    super(props);
    // this.id = 0;
    this.state = { lapsedTime: 0, started: false };
    this.handleStartStop = this.handleStartStop.bind(this);
    this.clearTime = this.clearTime.bind(this);
  }
  clearTime(e) {
    e.preventDefault();
    clearInterval(this.id);
    this.setState({ lapsedTime: 0, started: false });
  }
  handleStartStop(e) {
    if (!this.state.started) {
      e.preventDefault();
      this.id = setInterval(() => {
        this.setState({ lapsedTime: this.state.lapsedTime + 1 });
      }, 1);
      this.setState({ started: true });
    } else {
      clearInterval(this.id);
      this.setState({ started: false });
    }
  }
  render() {
    return (
      <div>
        <h3><strong>Stop Watch!</strong></h3>
        <h1>{this.state.lapsedTime}</h1>
        <div><input type="button" onClick={this.handleStartStop} value="Start/Stop" />
          <input type="button" onClick={this.clearTime} value="Reset" />
        </div>
      </div>
    );
  }
}

export default StopWatch;
