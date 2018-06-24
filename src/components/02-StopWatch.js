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

    this.state = { isRunning: false, timeElapsed: 0 };
    this.timerHandler = this.timerHandler.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
  }

  timerHandler() {
    if (this.state.isRunning) {
      clearInterval(this.timer);
      this.setState({
        isRunning: false,
      });
    } else {
      this.timer = setInterval(() => {
        // this.setState({
        //   timeElapsed: this.state.timeElapsed + 1,
        // });
        this.setState(prevState => ({
          timeElapsed: prevState.timeElapsed + 1,
        }));
      }, 1);


      this.setState({
        isRunning: true,
      });
    }
  }

  clearHandler() {
    clearInterval(this.timer);
    this.setState({
      timeElapsed: 0,
      isRunning: false,
    });
  }

  render() {
    return (
      <div>
        <h2>Stop Watch</h2>

        <div>
          <p>{this.state.timeElapsed} ms</p>

          <button onClick={this.timerHandler}>
            {
              this.state.isRunning ?
              'Stop' :
              'Start'
            }
          </button>

          <button onClick={this.clearHandler}>Clear</button>
        </div>
      </div>
    );
  }
}

export default StopWatch;
