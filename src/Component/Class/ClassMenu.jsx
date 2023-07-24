import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Classmanu = styled.div`
       /* width: fit-content; */
       /* background-color: aliceblue; */
       
      /* width: 100%; */
      height: 100vh;
        ol{
            display: block;
            padding-left: 50px;
        }
        li{
            margin: 20px;
            /* background-color: lightcoral; */
            text-align: center;
            font-family: sans-serif;
            border-radius: 20px;
            /* width: max-content; */
        }
`;
const View = styled.div`
   /* display: flex;
   justify-content: center;
   align-items: center; */
   padding-top: 100px;
   width: 80%;
background-color: #bcf5d7;
height: 100vh;
margin: 0 30px;
border-radius: 30px;
    
`;

class ClassMenu extends React.Component{
    classdata = ["ClassIntro","Props","State","StateLifting","ConditionalRendring","Controll","Uncontroll","Lifecycle"]
    render(){
        return(
            <>
            <Classmanu className=" rounded-lg">
                <ol>
                   {this.classdata.map((item,index)=>(
                    <li key={index}><button className="btn btn-dark w-48"><Link to={item} key={index}>{item}</Link></button></li>
                   ))}
                </ol>
                </Classmanu>
                  <View>
                   <Outlet>
                    
                   </Outlet>
                 </View>
            </>
        )
    }
}

export default ClassMenu;