import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";



export default class Lmenu extends Component {
   file = ["Controctor", "ComponentDidMount","ComponentDidUpdate","ComponentDidUnmount"];
  render() {
    return (
      <>
        <div className="d-flex items-center justify-between">
          <div className="  ml-20">
           <ul>
            {this.file.map((item,index)=>(
              <li key={index} className=" m-4 text-black text-center rounded-xl">
                <button className="btn btn-primary"><Link to={item}>{item}</Link></button>
              </li>
            ))}
           </ul>
          </div>
          <div className=" ml-20 mr-10">
            <Outlet></Outlet>
          </div>
        </div>
      </>
    );
  }
}
