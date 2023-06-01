import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Classmanu = styled.div`
       width: fit-content;
      
        ol{
            display: block;
            padding-left: 50px;
        }
        li{
            margin: 20px;
        }
`;
const View = styled.div`
   /* display: flex;
   justify-content: center;
   align-items: center; */
   padding-top: 100px;
   width: 100%;
background-color: green;
    
`;

class ClassMenu extends React.Component{
    render(){
        return(
            <>
            <Classmanu>
                <ol>
                    <li><Link to="ClassIntro">ClassIntro</Link></li>
                    <li><Link to="Props">Props</Link></li>
                    <li><Link to="State">State</Link></li>
                    <li><Link to="StateLifting">StateLifting</Link></li>
                    <li><Link to="ConditionalRendring">ConditionalRendring</Link></li>
                    <li><Link to="Controll">Controll</Link></li>
                    <li><Link to="Lifecycle">Lifecycle</Link></li>
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