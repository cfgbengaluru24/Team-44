import React, { useContext, useState } from 'react'
import "../../css/Signin.css"
import { useNavigate } from "react-router-dom";
import projectcontext from '../../context/Projectcontext';
const UserSignin = () => {
  const [adminDetails,setAdminDetails]=useState({"email":"","name":"","password":"","contactNumber":"","parentContact":""})
  const navigate = useNavigate();
  const contextcontent=useContext(projectcontext);
  const handleLoginShow=async()=>{
    navigate("/userLogin");
  }
  const handleLoginDetails=(e)=>{
    setAdminDetails({ ...adminDetails, [e.target.name]: e.target.value });
  }
  const handleSigninBtn=async()=>{
    if(contextcontent.studentFlag){
      const response=await fetch(`http://localhost:4000/api/auth/studentSignin`,{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({email:adminDetails.email,password:adminDetails.password,name:adminDetails.name,contactNumber:adminDetails.contactNumber,parentContact:adminDetails.parentContact}),
      });
      const signres= await response.json(); 
      if(signres.success){
        localStorage.setItem("userToken",signres.authtoken);
        contextcontent.setstudentFlag(true);
        contextcontent.setNewUser(false);
        navigate("/studentHome");
        console.log(signres)
      }
      else{
        console.log(signres);
        alert("Incorrect details");
      }
    }
    else{
      const response=await fetch(`http://localhost:4000/api/auth/adminSignin`,{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({email:adminDetails.email,password:adminDetails.password,name:adminDetails.name,contactNumber:adminDetails.contactNumber}),
      });
      const signres= await response.json(); 
      if(signres.success){
        localStorage.setItem("userToken",signres.authtoken);
        contextcontent.setstudentFlag(false);
        contextcontent.setNewUser(false);
        navigate("/");
      }
      else{
        alert("Incorrect details");
      }
    }
  }
  const handleSigninAdmin=()=>{
    contextcontent.setstudentFlag(false);
    navigate('/userSignin');
  }
  const handleSigninStudent=()=>{
    contextcontent.setstudentFlag(true);
    navigate('/userSignin');
  }
  return (
    <div>
      <div className='SigninCover'>
        {contextcontent.studentFlag && <div className='SigninHeading'><h2>Sign in as Student</h2><p onClick={handleLoginShow}>Already have an Account Login</p><h3 onClick={handleSigninAdmin}>Sigin As Admin</h3></div>}
        {!contextcontent.studentFlag && <div className='SigninHeading'><h2>Sign in as Admin</h2><p onClick={handleLoginShow}>Already have an Account Login</p><h3 onClick={handleSigninStudent}>Sigin As Student</h3></div>}
        <div id="DetailsCover">
          <label>Email:</label>
          <input onChange={handleLoginDetails} type='email' name='email' placeholder='abc@gmail.com'/>
          <label>Name:</label>
          <input onChange={handleLoginDetails} type='text' placeholder='sanjanaxyz' name="name"/>
          <label>Password:</label>
          <input onChange={handleLoginDetails} type='password' name='password'></input>
          <label>Contact Number:</label>
          <input onChange={handleLoginDetails} type='text' placeholder='1234567890' name='contactNumber'/>
          {contextcontent.studentFlag && <label>Parents Number:</label>}
          {contextcontent.studentFlag && <input onChange={handleLoginDetails} type='text' placeholder='1234567890' name='parentContact'></input>}
          <div className='SignInBtnCover'>
            <button onClick={handleSigninBtn}>Sign in</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default UserSignin
