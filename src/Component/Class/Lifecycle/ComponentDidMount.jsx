import axios from "axios";
import React, { Component } from "react";


export default class ComponentDidMount extends Component {
  constructor() {
    console.log("Hello I am constructor i will call the first ");
    super();
    this.state = {
      Name: "Navneet",
      data: [],
    };
  }
  componentDidMount() {
    // console.log("Hello I am ComponentDidMount i will call after the render method");
    setTimeout(() => {
      console.log("CDM");
    }, 3000);

    const API = "https://jsonplaceholder.typicode.com/photos";

    axios
      .get(API)
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { data } = this.state;
    const limit = data.slice(0,2)
    return (
      <>
        <h1>ComponentDidMount method call when render after the component</h1>
       {limit.map((item,index)=>(
        <div className="d-flex justify-between items-center m-20">
        <div className="card" key={index}>
            <img src={item.thumbnailUrl} alt={item.title} className="w-20 h-20" />
            <h1>{item.title}</h1>
        </div>
        </div>
       ))}
      </>
    );
  }
}
