import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSignin from "./components/Signin/UserSignin.jsx";
import Recruitment from "./components/RecruitmentProcess/Recruitment.jsx";
import UserLogin from "./components/Signin/UserLogin.jsx";
import TestApp from "./components/TestApp.jsx";
import Homepage from "./components/Home/Homepage.jsx";
import Reason from "./components/Reason.jsx";
import AttendanceEmail from "./components/AttendanceEmail.jsx";
import Projectstate from "./context/Projectstate.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import QuestionAdder from "./components/QuestionAdder/QuestionAdder.jsx"
  const App = () => {
    return (
      <Projectstate>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/UserLogin" element={<UserLogin/>}/>
            <Route path="/UserSignin" element={<UserSignin/>}/>
            <Route path="/StudentHome" element={<Recruitment />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/TestApp" element={<TestApp/>}/>
            <Route path="/StudentHome" element={<Recruitment/>}/>
        <Route path="/Reason" element={<Reason />} />
        <Route path="/Attendance" element={<AttendanceEmail />}/>
        <Route path="/AddQuestions" element={<QuestionAdder />}/>
          </Routes>
        </Router>
      </Projectstate>
      );
  };

export default App;
