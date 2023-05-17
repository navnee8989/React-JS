import React from "react";



class State extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      Inputvalue: '',
    }
  }
  hndlechange = (event) => {
    this.setState({
      Inputvalue: event.target.value
    });
  }
  change = () => {
    alert(this.state.inputValue);
  }
  render(){
    return(
      <>
    <input type="text" 
      value={this.state.Inputvalue}
      onChange={this.hndlechange}
    />
    <button onSubmit={this.change}>change</button>
      </>
    )
  }
}

export default State;