import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSignin from "./components/Signin/UserSignin.jsx";
import Recruitment from "./components/RecruitmentProcess/Recruitment.jsx";
import TestApp from "./components/TestApp.jsx";
import Homepage from "./components/Home/Homepage.jsx";
import Reason from "./components/Reason.jsx";
import AttendanceEmail from "./components/AttendanceEmail.jsx";



const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path="/UserSignin" element={<UserSignin/>}/> */}
        <Route path="/StudentHome" element={<Recruitment/>}/>
        <Route path="/TestApp" element={<TestApp/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Reason" element={<Reason />} />
        <Route path="/Attendance" element={<AttendanceEmail />}/>
      </Routes>
    </Router>
  );
};

export default App;
