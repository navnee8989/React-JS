import React, { Component } from 'react'

export default class Controctor extends Component {
    constructor(props){
        super(props)
        console.log('====================================')
        console.log("I am constructor i will be the first Run when the component Are Render")
        console.log('====================================')

        this.state = {
            Name:"Navneet",
            age:23
        }
    }
  render() {
    return (
      <div  className='d-d-inline-block'>
        <p>The constructor() method is executed before any other methods, when component is initiated and it is the place where to set the initial state and other values. In class we use constructor parameter to inherit from parents and in React to the constructor take a props parameter and the super method has to be also called. Look at the snippet of code about constructor and state.</p>
        <p>constructor Are used to initialize the object and perfom to work with Object state are a varible Like Object so state also define in Constructor</p>
        <h1>React Component Life Cycle</h1>
        <h2>The constructor is the first to Run</h2>
        <p>Author:{this.state.Name}</p>
      </div>
    )
  }
}
