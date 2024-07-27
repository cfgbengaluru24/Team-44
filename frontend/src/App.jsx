import React from "react";
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import UserSignin from "./components/Signin/UserSignin.jsx";
import UserLogin from "./components/Signin/UserLogin.jsx";
const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/UserSignin" element={<UserSignin/>}/>
        <Route path="/UserLogin" element={<UserLogin/>}/>
        
      </Routes>
    </Router>
  )
};

export default App;
