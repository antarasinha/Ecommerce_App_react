import React, { useState } from 'react';
import './Register.css'
import  'bootstrap/dist/css/bootstrap.css';


const Register=()=>{
    const [name, setName]= useState();
    const [lname, setNameL]= useState();  
    const [email, setEmail]= useState(); 
    const [pass, setPass]= useState(); 

    const inputEvent=(e)=>{
        setName(e.target.value);
    }
    const inputEventL=(e)=>{
        setNameL(e.target.value);
    }
    const inputEventEmail=(e)=>{
        setEmail(e.target.value);
    }
    const inputEventPass=(e)=>{
        setPass(e.target.value);
    }

    const funs=(event)=>{
        event.preventDefault();
        console.log(name);
        console.log(lname);
        console.log(email);
        console.log(pass);
    }

    return(
        <>
        <div className="fulls">
  	<h1 className="heads">Sign Up</h1> 
      <span className="spanning">Register yourself to access all services.</span>
      <br/>
  	<br/>
        <form onSubmit={funs}>
    <div className="formg cards" >
      <div className="col-sm-10 ml-4">
      <br/>
      <label className="form-label">First Name:</label>
      <input type="text" autoComplete="none"  onChange={inputEvent} value={name || ''} 
      
      placeholder="Enter first name here" className="form-control"/>
      
      
      </div>
        
      <div className="col-sm-10 ml-4">
      
      <label className="form-label">Last Name</label>
      <input type="text" autoComplete="none" onChange={inputEventL} value={lname || ''}   placeholder="Enter last name here" className="form-control"/>
      </div>
  
      <div className="col-sm-10 ml-4">
      <label className="form-label">Email</label>
      <input type="text" autoComplete="none" onChange={inputEventEmail} value={email || ''}  placeholder="Enter Email here" className="form-control"/>
      </div>
  

      <div className="col-sm-10 ml-4">
      <label className="form-label">Password</label>
      <input type="text" autoComplete="none" onChange={inputEventPass} value={pass || ''}  placeholder="Enter password here" className="form-control"/>
      </div>

      <button type="submit" className="btn btns btn-primary" >Register</button>
      
</div></form>
</div>
	
      </>);
    };
        

export default Register;