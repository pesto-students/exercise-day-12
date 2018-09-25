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
  constructor() {
    super();
    this.state = {
      timer: {
        hr: 0,
        min: 0,
        sec: 0,
        mlsec: 0,
      },
      stage: 'clear',
      interval: 0,
    };
  }

  startTimer = () => {
    const interval = setInterval(this.calculateTime, 10);
    this.setState({
      interval: interval,
      stage: 'start',
    });
  }

  stopTimer = () => {
    clearInterval(this.state.interval);
    this.setState({
      interval: 0,
      stage: 'stop',
    });
  }

  calculateTime = () => {
    this.setState(state => {
      let {hr, min, sec, mlsec} = state.timer;
      mlsec += 1;
      if(mlsec >= 100) {
        sec += 1;
        mlsec = mlsec % 100;
      }
      if (sec >= 60) {
        min += 1;
        sec = sec % 60;
      }

      if (min >= 60) {
        hr += 1;
        min = min % 60;
      }
      return {timer: {hr, min, sec,mlsec}};
    });
  }

  clearTimer = () => {
    clearInterval(this.state.interval);
    this.setState({
      timer: {
        hr: 0,
        min: 0,
        sec: 0,
        mlsec: 0
      },
      stage: 'clear',
      interval: 0,
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.timer.hr}:{this.state.timer.min}:{this.state.timer.sec}:{this.state.timer.mlsec}</h2>
        {this.state.stage === 'start' ? <button type="button" onClick={this.stopTimer}>Stop</button> : <button type="button" onClick={this.startTimer}>Start</button>}
        <button type="button" onClick={this.clearTimer}>Clear</button>
      </div>
    );
  }
}

export default StopWatch;
