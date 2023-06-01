import React from "react";
import Header from "./CommanComponent/Header";
import { Link } from "react-router-dom";
import "./App.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
        text-align: center;
        color: black;
        font-size: 30px;
        margin-top: 50px;
`;
const Reactmanu = styled.div`
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin: 0 auto;
`;
const ClassCompo = styled.div``;
const Functioncompo = styled.div``;
const View = styled.div`
       width: 100%;
       display: flex;
       justify-content: flex-start;
       background-color: red;

`;
const Example = () => {
    return(
        <>
            <Header />

            <Title><h1>Example Page</h1></Title>


            <Reactmanu>
            
                <ClassCompo><Link to="Class">Class Component</Link></ClassCompo>
                <Functioncompo><Link to="Functional">Functional</Link></Functioncompo>
           
            </Reactmanu>
            <View>
                   
                        <Outlet></Outlet>
                    
                </View>
        </>
    )
}
export default Example;