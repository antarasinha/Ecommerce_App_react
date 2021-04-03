import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from 'react-icons/ri';
import {SidebarData} from './SidebarData';
import Submenu from './Submenu';
import './sidebar.css';

const Nav=styled.div`
    background:#15171c;
    height:80px;
    display:flex;
    justify-content:flex-start;
    align-items:center;

`;

const NavIcon=styled(Link)`
    margin-left:1rem;
    color:black;
    margin-right:2rem;
    font-size:2rem;
    height:2px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    float:right;
    &:hover{
        color:black;
    }
`;

const SidebarNav=styled.nav`
    background:white;
    width:250px;
    border-radius:8px;
    min-height:50vh;
    display:flex;
    justify-content:center;
    position:fixed;
    top:4rem;
    right:${({sidebar}) =>(sidebar ? '0': '-100%')};
    transition:350ms;
    z-index:10;
    float:right;
    
`;


const SidebarWrap=styled.div`
    width:100%;

`;



const Sidemenu=()=>{

    const [sidebar, setsidebar]=useState(false);
    
    const showsidebar=()=>{
        setsidebar(!sidebar);
    }
    const closeSidebar=()=>{
        setsidebar(false)
        }
   
    Sidemenu.handleClickOutside = () => setsidebar(false);
    return(
        <>
            <div  >
            
                <NavIcon to='#'  >
                
                    <span onClick={showsidebar}>{sidebar? <AiIcons.AiOutlineClose className="menuicon"/>:<FaIcons.FaBars className="menuicon"/> }</span>
                </NavIcon>
           
            <SidebarNav sidebar={sidebar} onMouseLeave={closeSidebar}>
            <SidebarWrap>
                
                {SidebarData.map((item,index)=>{
                    return <Submenu item={item} key={index}/>
                })}
            </SidebarWrap>
            </SidebarNav>
            </div>
        </>
    )
}

export default Sidemenu;