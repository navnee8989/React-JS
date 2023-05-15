import React from 'react';

class Person extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      age: props.age,
      gender: props.gender,
    };
  }

  render() {
    return (
     <>
      <h1>hello, {this.props.name}</h1>
      <h1>Your Age is:{this.props.age}</h1>
      <h1>Your gender:{this.props.gender}</h1>
     </>
    );
  }
}

export default Person;
