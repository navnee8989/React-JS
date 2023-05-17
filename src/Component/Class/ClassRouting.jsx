import React, { Component } from "react";
import ClassMenu from "./ClassMenu";
import Props from "./Props";
import ClassIntro from "./ClassIntro";
import State from "./State";
import StateLifting from "./StateLifting"
import { Route, Routes } from "react-router-dom";

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
                     </Route>
                </Routes>
            </>
        )
    }
}

export default ClassRouting;