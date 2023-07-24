import React, { Component } from "react";
import ClassMenu from "./ClassMenu";
import Props from "./Props";
import ClassIntro from "./ClassIntro";
import Controll from "./Controll"
// import Lifecycle from "./Lifecycle"
import State from "./State";
import StateLifting from "./StateLifting"
import ConditionalRendring from "./ConditionalRendring"
import { Route, Routes } from "react-router-dom";
import Lifecycle from "./Lifecycle/Lrouting"
import Uncontroll from "./Uncontroll";
class ClassRouting extends Component{
    render(){
       
        return(
            <>
                <Routes>
                    <Route path="/" element={<ClassMenu/>}>
                            <Route path='ClassIntro' element={<ClassIntro/>}/>
                            <Route path='Props' element={<Props/>}/>
                            <Route path='State' element={<State/>}/>
                            <Route path='StateLifting' element={<StateLifting/>}/>
                            <Route path='ConditionalRendring' element={<ConditionalRendring/>}/>
                            <Route path='Controll' element={<Controll/>}/>
                            <Route path='Uncontroll' element={<Uncontroll/>}/>
                            <Route path='Lifecycle/*' element={<Lifecycle/>}/>
                            
                     </Route>
                </Routes>
            </>
        )
    }
}

export default ClassRouting;