import React from "react";
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import UserSignin from "./components/Signin/UserSignin.jsx";
const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/UserSignin" element={<UserSignin/>}/>
      </Routes>
    </Router>
  )
};

export default App;
