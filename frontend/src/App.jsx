import React from "react";
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import UserSignin from "./components/Signin/UserSignin.jsx";
import Recruitment from "./components/RecruitmentProcess/Recruitment.jsx";
const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/UserSignin" element={<UserSignin/>}/>
        <Route path="/StudentHome" element={<Recruitment/>}/>
      </Routes>
    </Router>
  )
};

export default App;
