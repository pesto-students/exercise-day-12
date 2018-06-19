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
    this.startStopTimer = this.startStopTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.state = { time: 0, intervalId: null };
  }

  clearTimer = () => {
    clearTimeout(this.state.intervalId);
    this.setState({
      time: 0,
      intervalId: null,
    });
  }

  startStopTimer = () => {
    if (this.state.intervalId) {
      clearTimeout(this.state.intervalId);
      // this.setState({ time: 0, intervalId: null });
    } else {
      const intervalId = setInterval(() => {
        this.setState({
          time: this.state.time + 100,
        });
      }, 100);
      this.setState({ intervalId });
    }
  }

  render() {
    return (
      <div>
        <div>Time: {this.state.time}</div>
        <div>
          <button onClick={this.startStopTimer}>Start/Stop</button>
          <button onClick={this.clearTimer}>Clear</button>
        </div>
      </div>
    );
  }
}

export default StopWatch;
