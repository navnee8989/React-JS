import React, { Component } from 'react';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <ChildComponent counter={this.state.counter} incrementCounter={this.incrementCounter} />
      </div>
    );
  }
}

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <h2>Child Component</h2>
        <p>Counter: {this.props.counter}</p>
        <button onClick={this.props.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default ParentComponent;
