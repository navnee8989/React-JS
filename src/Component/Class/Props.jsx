import React, { Component, Fragment } from 'react';  
import Person from '../../CommanComponent/Person';


class props extends Component {  
  
  render() {  
    return (
      <>
      <h1>Props is Property</h1>
      <span>it can use for transfer a properties Perent to Child transfer data from onother componant</span>
    <span>it as a object which can store the data and transfer data from child to parent componant</span>
      <span>Props are imutable so we cennot modify the props from inside componant</span>


        <Person name="navneet" age="23" gender="male"/>
      
      </>
    );  
  }  
}  
export default props;  