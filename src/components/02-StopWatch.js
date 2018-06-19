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
const formattedSeconds = sec =>
  `${Math.floor(sec / 60)
  }:${
    (`0${sec % 60}`).slice(-2)}`;
class StopWatch extends Component {
  // constructor(props) {
  //   super(props);
  // }
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
    };
    this.incrementer = null;
  }
  startTimer() {
    this.incrementer = setInterval(
      () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1,
        })
      , 1000,
    );
  }
  render() {
    return (
      <div> <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>
        Stop Watch
        <div><button value="" onClick="startTimer">CLICK TO START OR STOP</button></div>
        <button value="" onClick="">CLEAR</button>
      </div>
    );
  }
}

export default StopWatch;
