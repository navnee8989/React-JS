import React from "react";
import Header from "./CommanComponent/Header";
import { Link } from "react-router-dom";
import "./App.css";
import { Outlet } from "react-router-dom";

const Example = () => {
    return(
        <>
            <Header />

            <h1>Example Page</h1>


            <div className="EContainer">
            
                <div className="col-50"><Link to="Class">Class Component</Link></div>
                <div className="col-50"><Link to="Function">Functional Component</Link></div>
           
            </div>
            <div className="row my-3">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
        </>
    )
}
export default Example;