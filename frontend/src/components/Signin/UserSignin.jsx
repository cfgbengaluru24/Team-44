import React, { useContext, useState } from 'react'
import "../../css/Signin.css"
import { useNavigate } from "react-router-dom";
import projectcontext from '../../context/Projectcontext';
const UserSignin = () => {
  const navigate = useNavigate();
  const contextcontent=useContext(projectcontext);
  const handleLoginShow=()=>{
    navigate('/UserLogin');
  }
  return (
    <div>
      <div className='SigninCover'>
        {contextcontent.studentFlag && <div className='SigninHeading'><h2>Sign in as Student</h2><p onClick={handleLoginShow}>to Login</p></div>}
        {!contextcontent.studentFlag && <div className='SigninHeading'><h2>Sign in as Admin</h2><p onClick={handleLoginShow}>to Login</p></div>}
        <div id="DetailsCover">
          <label>Email:</label>
          <input type='email' name='email' placeholder='abc@gmail.com'/>
          <label>Name:</label>
          <input type='text' placeholder='sanjanaxyz' name="name"/>
          <label>Password:</label>
          <input type='password'></input>
          <label>Contact Number:</label>
          {contextcontent.studentFlag && <input type='text' placeholder='1234567890' name='prntNumber'/>}
          {contextcontent.studentFlag && <label>Parents Number:</label>}
          <input type='text' placeholder='1234567890' name='prntNumber'></input>
          <div className='SignInBtnCover'>
            <button>Signin</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default UserSignin
