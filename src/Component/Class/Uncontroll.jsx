import React, { Component } from 'react'
import { Form } from 'react-router-dom'
import styled from 'styled-components'

  
  
  const Formm =styled.div`
          /* width: 100%; */
          /* margin: 0 auto; */
          display: flex;
          justify-content: center;
          align-items: center;
          form{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
          }
         
  `;
export default class Uncontroll extends Component {
    email = React.createRef()
    password = React.createRef()


    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.email.current.value);
        console.log(this.password.current.value);
        alert(this.email.current.value)
        alert(this.password.current.value)
    }
  render() {

    return (
      <>
      <div className="d-inline-block pb-36">
        <p>To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM. In uncontrolled input we get data from input fields like traditional HTML form data handling.</p>

</div>
            <Formm>
            <form action="#" onSubmit={this.handleSubmit}>
                <label htmlFor="email">Enter Email</label>
                <input type="email" name='email' id="email" ref={this.email}/>
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" name='password' id='password' ref={this.password}/>
                <button type='submit' className='btn btn-primary'>  Submit data</button>
            </form>
            </Formm>
      </>
    )
  }
}