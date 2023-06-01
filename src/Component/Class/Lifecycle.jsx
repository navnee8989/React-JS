import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color : "red",
    };
  }

  componentDidMount() {
   console.log(this.state.color);
   console.log("you enter componant");
 
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated'); 
    if (this.state.color === prevState) {
        return prevState = "green"
      
    } else {
        return this.state.color = "yellow"
    }
  }
  

  componentWillUnmount() {
    console.log("Component will unmount");
   }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));

    this.setState(prevState => ({
        color: prevState.color + "green"
      }));
      <h1>{this.setstate}</h1>
  }

  render() {
    return (
      <div className='text-center'>
        <p>Count: {this.state.count}</p>
       
        <span>color: {this.state.color}</span>
        <button onClick={this.handleClick}>Increment</button>

        {/* <h1>the class componant Has three stage of lifecycle</h1>
        <h2>Componant Did mount</h2>
        <p>whan the render file the componant did mount are enble</p> */}

        
        {/* <h2>Componant Did update</h2>
        <p>make changes componant the componant are use </p> */}


        
        <h2>Componant Did unmount</h2>
        <p>when exit the componant it will run</p> 
      </div>
    );
  }
}

export default Lifecycle;
