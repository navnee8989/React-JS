import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

class ClassMenu extends React.Component{
    render(){
        return(
            <>
                <ul>
                    <li><Link to="ClassIntro">ClassIntro</Link></li>
                    <li><Link to="Props">Props</Link></li>
                    <li><Link to="State">State</Link></li>
                    <li><Link to="StateLifting">StateLifting</Link></li>
                </ul>
                   <Outlet></Outlet>
            </>
        )
    }
}

export default ClassMenu;