import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../css/Signin.css";
import projectcontext from '../../context/Projectcontext';
const UserLogin = () => {
  const contextcontent=useContext(projectcontext);
  console.log(contextcontent.data);
    const [loginData,setloginData]=useState({email:"",password:""});
    const navigate = useNavigate();
  const handleSigninShow=()=>{
    navigate('/UserSignin');
  }
  const handleLogin=async()=>{  
    if(contextcontent.studentFlag){
      const response=await fetch(`http://localhost:4000/api/auth/studentLogin`,{
          method:'POST',
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({email:loginData.email,password:loginData.password}),
        });
        const loginres= await response.json(); 
        if(loginres.success){
          localStorage.setItem("userToken",loginres.authtoken);
          navigate("/");
          contextcontent.setstudentFlag(true);
          console.log(loginres)
        }
        else{
          console.log(loginres);
          alert("Incorrect details");
        }
    }
    else{
      const response=await fetch(`http://localhost:4000/api/auth/adminLogin`,{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({email:loginData.email,password:loginData.password}),
      });
      const loginres= await response.json(); 
      if(loginres.success){
        localStorage.setItem("userToken",loginres.authtoken);
        contextcontent.setstudentFlag(false);
        navigate("/");
        console.log(loginres)
      }
      else{
        console.log(loginres);
        alert("Incorrect details");
      }
    }
  
  }
  const handleUpdateDetails=(e)=>{
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <div className='LoginCover'>
        {contextcontent.studentFlag && <div className='SigninHeading'><h2>Log in as Student</h2><p onClick={handleSigninShow}>to Signin</p></div>}
        {!contextcontent.studentFlag && <div className='SigninHeading'><h2>Log in as Admin</h2><p onClick={handleSigninShow}>to Signin</p></div>}
        <div id="DetailsCover">
          <label>Email:</label>
          <input type='email' onChange={handleUpdateDetails} name='email' placeholder='abc@gmail.com'/>
          <label>Password:</label>
          <input onChange={handleUpdateDetails}type='password' name='password'></input>
          <div className='SignInBtnCover'>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default UserLogin
