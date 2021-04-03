import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SidebarData from './SidebarData';
const SidebarLink=styled(Link)`
    display:flex;
    color:black;
    align-items: center;
    justify-content:space-between;
    padding:18px;
    list-style:none;
    height:30px;
    text-decoration :none;
    font-size:16px;
    margin-top:12px;

    &:hover{
        color:black;
        background:white;
        border-left:4px solid #632ce4;
        cursor:pointer;
        text-decoration:none;
    }

`;
const SidebarLabel=styled.span`
    margin-left:12px;
`;

const DropdownLink=styled(Link)`
display:flex;
color:black;

align-items: center;
justify-content:space-between;
padding:18px;
list-style:none;
height:30px;
text-decoration :none;
font-size:16px;

&:hover{
    background:#252831;
    border-left:4px solid #632ce4;
    cursor:pointer;
    text-decoration:none;
}
`;

const Submenu=({item})=>{
    const [subnav,setsubnav] =useState(false)

    const showSubNav=()=>setsubnav(!subnav);
    return(
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubNav}> 
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed: null}
                
                </div>

            </SidebarLink>

            {subnav && item.subNav.map((item,index)=>{
                {item.target='/'}
                return (<>
                    <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                    <br/>
                    </DropdownLink>
                    
                    </>
                )
            })}
        </>
    );
}

export default Submenu;