import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  /* Styles for the button */
  
  position: relative;
  background-color: blue;
  color: white;
  padding: 10px 20px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s ease;
  }





  
  &:hover {
    opacity: 1;
    transform: scaleX(1);
    color: black;
  }

`;

const Input = styled.div`
  /* Styles for the input container */
  display: flex;
  justify-content: center;
  input{
    /* width: 100px; */
    border-radius: 20px;
    border: none;
  }
`;

const Bkm = styled.div`
  /* Styles for the Bkm container */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 50px;
  ul{
   
  }
`;

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      data: [
        "A state can be modified based on user action or network changes",
        "Every time the state of an object changes, React re-renders the component to the browser",
        "The state object is initialized in the constructor",
        "The state object can store multiple properties",
        "this.setState() is used to change the value of the state object",
        "setState() function performs a shallow merge between the new and the previous state",
      ],
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  change = () => {
    // alert(this.state.inputValue);
    <h1>{this.state.inputValue}</h1>
  };

  render() {
    return (
      <>
        <Bkm>
          <ul>
            {this.state.data.map((item, index) => (
              <li key={index}>{item}</li>
              
            ))}
            <li>{this.setState.value}</li>
          </ul>
        </Bkm>
        <Input>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <StyledButton onClick={this.change}>Change</StyledButton>
          <h1>{this.state.inputValue}</h1>
        </Input>
      </>
    );
  }
}

export default State;
