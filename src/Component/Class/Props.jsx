import React, { Component, Fragment } from 'react';  
import Person from '../../CommanComponent/Person';
import styled from 'styled-components';
const Title = styled.h1`

  text-align: center;
  font-size: 60px;
`;

class props extends Component {  
  
  render() {  
    return (
      <>
      <Title>Props is Property</Title>
      <span>it can use for transfer a properties Perent to Child transfer data from onother componant</span>
    <span>it as a object which can store the data and transfer data from child to parent componant</span>
      <span>Props are imutable so we cennot modify the props from inside componant</span>


        <Person name="navneet" age="23" gender="male"/>
      
      </>
    );  
  }  
}  
export default props;  