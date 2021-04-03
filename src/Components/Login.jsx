import React, { useState } from 'react';
import './Register.css'
import  'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


const Login=()=>{
     
    const [email, setEmail]= useState(); 
    const [pass, setPass]= useState(); 

    
    const inputEventEmail=(e)=>{
        setEmail(e.target.value);
    }
    const inputEventPass=(e)=>{
        setPass(e.target.value);
    }

    const funs=(event)=>{
        event.preventDefault();
        
        console.log(email);
        console.log(pass);
    }

    return(
        <>
        <div className="fulls">
  	<h1 className="heads">Login </h1>
      <span className="spanning">Don't have an account? <Link to='/Register'>Register</Link></span> 
  	<br/>
        <form onSubmit={funs}>
    <div className="formg cards" >
      
      <div className="col-sm-10 ml-4">
      <label className="form-label">Email</label>
      <input type="text" autoComplete="none" onChange={inputEventEmail} value={email || ''}  placeholder="Enter Email here" className="form-control"/>
      </div>
  

      <div className="col-sm-10 ml-4">
      <label className="form-label">Password</label>
      <input type="text" autoComplete="none" onChange={inputEventPass} value={pass || ''}  placeholder="Enter password here" className="form-control"/>
      </div>

      <button type="submit" className="btn btns btn-primary" >Login</button>
      
</div></form>
</div>
	
      </>);
    };
        

export default Login;