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

    this.state = {
      elapsed: 0,
      stopped: true,
    };

    this.startWatch = this.startWatch.bind(this);
    this.stopWatch = this.stopWatch.bind(this);
    this.reset = this.reset.bind(this);

    this.timer = null;
    this.updateFrequencyMS = 1;
  }

  startWatch() {
    this.setState({ stopped: false });
    this.timer = setInterval(() => {
      this.setState(prevState => ({ elapsed: prevState.elapsed + this.updateFrequencyMS }));
    }, this.updateFrequencyMS);
  }

  stopWatch() {
    this.setState({ stopped: true });
    clearInterval(this.timer);
  }

  reset() {
    this.setState({ elapsed: 0 });
    this.stopWatch();
  }

  render() {
    return (
      <div>
        <h1>{this.state.elapsed}</h1>
        <button onClick={this.state.stopped ? this.startWatch : this.stopWatch}>
          {this.state.stopped ? 'Start' : 'Stop'}
        </button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
