import React, { useState } from 'react'
import projectcontext from './Projectcontext.jsx'

const Projectstate = (props) => {
  const [studentFlag,setstudentFlag]=useState(false);
  const [newUser,setNewUser]=useState(true);
  const [ResonFormText,setReasonFormText]=useState("Why are you not attending?");
  const clientInfo=localStorage.getItem("Client");
  return (
    <projectcontext.Provider
    value={{studentFlag,setstudentFlag,newUser,setNewUser,ResonFormText,setReasonFormText}}>
        {props.children}
    </projectcontext.Provider>

  )
}

export default Projectstate
