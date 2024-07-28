// src/components/Navbar.js
import React, { useContext, useEffect, useState } from 'react';
import { CiUser } from "react-icons/ci";
import image1 from "../../assets/logo.jpg"
import "./navbar.css";
import { useNavigate } from 'react-router-dom';
import projectcontext from '../../context/Projectcontext';
const Navbar = () => {
  const navigate=useNavigate();
  const client=localStorage.getItem('Client');
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
  const handleAttendance=()=>{
    navigate("/attendance");
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
  const handleGiveTest=()=>{
    navigate("/TestApp"); 
  }
  const handleAddTest=()=>{
    navigate("/AddQuestions")
  }
  const handleQuery=()=>{
    contextcontent.setReasonFormText("Need Help!");
    navigate("/reason");
  }
  return (
    <div className='navbar'>
      <div id='imgCover'><img src={image1} alt="" /></div>
      <div className='navIcon'>
        <ul>
          <li onClick={()=>{navigate('/')}}>Home</li>
          <li onClick={async(e) => {
              e.preventDefault();
              document.getElementById("AboutUs").scrollIntoView({ block: 'start',  behavior: 'smooth' });
            }}>About</ li>
            <li onClick={()=>{navigate("/Fileupload")}}>FileUpload</li>
        </ul>
      </div>
      {contextcontent.newUser && <div className='userSec'>
        <button onClick={handleSignin}>Signin</button>
      </div>}
      {!contextcontent.newUser && <div className='allLogin'>
          {client==="Student" && <div><button onClick={handleQuery} id="QueryBtn">Query</button></div>}
          {client==="Student" && <div><button onClick={handleGiveTest} id="giveTestBtn">Give Test</button></div>}
          {client==="Admin" && <div><button onClick={handleAddTest} id="addTestBtn">Add Test</button></div>}
          {client==="Admin" && <div><button onClick={handleAttendance} id="QueryBtn">Attendance</button></div>}

          <div id="LogoutBtnCover"><button onClick={handleLogout}>Logout</button></div>
        </div>}
    </div>

  );
};

export default Navbar;
