import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSignin from "./components/Signin/UserSignin.jsx";
import Recruitment from "./components/RecruitmentProcess/Recruitment.jsx";
import Homepage from "./components/Home/Homepage.jsx";
import UserLogin from "./components/Signin/UserLogin.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path="/UserSignin" element={<UserSignin/>}/>
        <Route path="/StudentHome" element={<Recruitment />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
