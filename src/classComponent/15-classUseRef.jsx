import React, { Component } from 'react'

export class ClassUseRef extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h4>{this.state.count}</h4>
        <p>{this.state.count}</p>
        <button className='btn' onClick={() => clearInterval(this.interval)}>Clear Interval</button>
      </div>
    )
  }
}

export default ClassUseRef