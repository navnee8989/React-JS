import React, { Component } from 'react'
import styled from 'styled-components';
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
export default class Controll extends Component {
  constructor(){
    super()
    this.state = {
      email: "",
      password: ""
    }
  }
  render() {
   const handleChange = (event)=>{
        this.setState({email:event.target.value})
        this.setState({password:event.target.value})
    }
    console.log(this.state.email);
    console.log(this.state.password);
    return (
   <>
        <h1>Controll Component is a component whose State is Controll by React Itself</h1>
        <p className=' ml-10 text-center'>controll component Are besad on state and store the data In state </p>
        <p className='pb-10 ml-10 text-center'>controll component Are used to event Handler for when the Input Value Change Value Automatic store In State  </p>

        <Formm>
            <form action="#" onSubmit={this.handleSubmit}>
                <label htmlFor="email">Enter Email</label>
                <input type="email" name='email' id="email" value={this.state.email} onChange={handleChange}/>
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" name='password' id='password' value={this.state.password} onChange={handleChange} className='mb-2'/>
                <button type='submit' className='btn btn-primary bg-slate-700'>  Submit data</button>
            </form>
            </Formm>
          
   </>
    )
  }
}
