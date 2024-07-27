import React, { useState } from 'react'
import "../../css/Signin.css"
import { useNavigate } from "react-router-dom";
const UserSignin = () => {
  const navigate = useNavigate();
  const [studentFlag,setstudentFlag]=useState(true);
  const handleLoginShow=()=>{
    navigate('/UserLogin');
  }
  return (
    <div>
      <div className='SigninCover'>
        {studentFlag && <div className='SigninHeading'><h2>Sign in as Student</h2><p onClick={handleLoginShow}>to Login</p></div>}
        {!studentFlag && <div className='SigninHeading'><h2>Sign in as Admin</h2><p onClick={handleLoginShow}>to Login</p></div>}
        <div id="DetailsCover">
          <label>Email:</label>
          <input type='email' name='email' placeholder='abc@gmail.com'/>
          <label>Name:</label>
          <input type='text' placeholder='sanjanaxyz' name="name"/>
          <label>Password:</label>
          <input type='password'></input>
          <label>Contact Number:</label>
          {studentFlag && <input type='text' placeholder='1234567890' name='prntNumber'/>}
          {studentFlag && <label>Parents Number:</label>}
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
