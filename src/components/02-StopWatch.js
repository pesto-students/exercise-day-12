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
    this.state = { count: 0 };
    this.start = this.start.bind(this);
  }

  start() {
    // this.state.count = setInterval(this.state.count, 1000);
    this.setState({ count: setInterval(this.state.count, 1000) });
  }
  render() {
    return (
      <div>
        Start Watch
        <h1>{this.state.count}</h1>
        <button onClick={this.start} />
      </div>
    );
  }
}

export default StopWatch;
