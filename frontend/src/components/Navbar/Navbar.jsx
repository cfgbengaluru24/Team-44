// src/components/Navbar.js
import React, { useContext, useEffect, useState } from 'react';
import { CiUser } from "react-icons/ci";
import image1 from "../../assets/logo.jpg"
import "./navbar.css";
import { useNavigate } from 'react-router-dom';
import projectcontext from '../../context/Projectcontext';
const Navbar = () => {
  const navigate=useNavigate();
  const contextcontent=useContext(projectcontext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleSignin=()=>{
    navigate('/userSignin');
  }
  const handleLogout=()=>{
    localStorage.clear("userToken");
    contextcontent.setNewUser(true);
    navigate('/');
  }
  useEffect(() => {
    const token=localStorage.getItem("userToken");
    console.log(token);
    if(token===null){
      contextcontent.setNewUser(true);
    }
    else{
      contextcontent.setNewUser(false);
    }
  }, []);
  return (
    <div className='navbar'>
      <div id='imgCover'><img src={image1} alt="" /></div>
      <div className='navIcon'>
        <ul>
          <li onClick={()=>{navigate('/')}}>Home</li>
          <li>About</ li>
        </ul>
      </div>
      {contextcontent.newUser && <div className='userSec'>
        <button onClick={handleSignin}>Signin</button>
      </div>}
      {!contextcontent.newUser && <div className='allLogin'>
          {contextcontent.studentFlag && <div><button id="giveTestBtn">Give Test</button></div>}
          {!contextcontent.studentFlag && <div><button id="addTestBtn">Add Test</button></div>}
          <div id="LogoutBtnCover"><button onClick={handleLogout}>Logout</button></div>
        </div>}
    </div>

  );
};

export default Navbar;
