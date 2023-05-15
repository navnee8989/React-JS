import React, { Component, useState } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "navneet"
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
 
  };
  change = () =>{
    this.setState({name: this.state.name + "bhuro"})
    // this.setState({name: this.state.name})
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h1>Name: {this.state.name}</h1>
        <button onClick={this.handleClick} >Increment</button>
        <button onClick={this.change} >change</button>
      </div>
    );
  }
}

export default Counter;
