import React, { Component } from "react";

export default class ComponentDidUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nvaneet",
      day: 1,
      congratulate: ""
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState.day);
    console.log("hello");
    if (nextState.day > 31) {
      return false;
    } else {
      return true;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    if (prevState.day <= 5) {
      this.setState({
        congratulate: "you completed all missions"
      });
    }
  }

  Dochallange = () => {
    this.setState((prevState) => ({
      day: prevState.day + 1
    }));
  }

  render() {
    return (
      <>
        <h1>Component Did Update</h1>
        <p className="pb-5">The componentDidUpdate method takes two parameters: the prevProps and prevState. It is called after the component is updated in the DOM.</p>

        <h1 className="text-color-blue text-center">shouldComponentUpdate</h1>
        <p className="pb-5">The shouldComponentUpdate() built-in life cycle method should return a boolean. If this method does not return true the application will not update.</p>

        <button onClick={this.Dochallange} className="btn btn-primary">Do challenge</button>
        {/* <button className="custom-btn btn-1 fo" onClick={this.Dochallange} >Do challenge</button> */}
        <p>Challenge: Day {this.state.day}</p>
        <h2>Congratulations: {this.state.congratulate}</h2>
      </>
    );
  }
}
