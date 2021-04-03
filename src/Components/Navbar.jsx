import React from 'react';
import '../index.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.js';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {useState} from 'react';
import Register from './Register';
import {SidebarData} from './SidebarData';

import {Link, NavLink} from 'react-router-dom';
import Sidemenu from './Sidemenu';

const Navbar=()=>{

  const [sidebars, setsidebars]= useState(false);

  const showsidebar=()=>{
    setsidebars(!sidebars);
  }

  //document.addEventListener('click',setsidebars(false));

        return (
            <>
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">
 <NavLink to="/" className="navlinks logos">SabziMandi.com</NavLink>
  

 
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       
        
      </li>
      
    </ul>
    
     <NavLink exact to='/Register' className="navlinks">Sign Up</NavLink>
     <NavLink exact to='/Login' className="navlinks">Login</NavLink>
      <div className="menu-icon">
     <Sidemenu/>
     </div>

    
    
</nav>

<nav className={sidebars ?'nav-menu active  mr-auto ': 'nav-menu  mr-auto'}>
<ul className="nav-menu-items">

<div className="menu-bars">

   {SidebarData.map((item,index)=>{
     return (
       <li key={index} className="menu-items">
       <NavLink exact to={item.path} className="navlinks">
       {item.icon}
       <span className="items">{item.title}</span>
       </NavLink>
       </li>
     );
   })}
</div>

</ul>

</nav>





            </>
            );
};

export default Navbar;