import React, { Component } from "react";
import Lmenu from "./Lmenu";
import { Route,Routes } from "react-router-dom";
import Controctor from "./Controctor";
import ComponentDidMount from "./ComponentDidMount"
import ComponentDidUpdate from "./ComponentDidUpdate";
import ComponentDidUnmount from "./ComponentDidUnmount.jsx";



class Lrouting extends Component{
    render(){
        return(
            <>
                <Routes>
                    <Route path="/" element={<Lmenu/>}>
                        <Route path="Controctor" element={<Controctor />}/>
                        <Route path="ComponentDidMount" element={<ComponentDidMount />}/>
                        <Route path="ComponentDidUpdate" element={<ComponentDidUpdate/>}/>
                        <Route path="ComponentDidUnmount" element={<ComponentDidUnmount/>}/>
                         </Route>
                </Routes>
            </>
        )
    }
}

export default Lrouting;