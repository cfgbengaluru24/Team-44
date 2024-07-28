import React, { useState } from 'react'
import projectcontext from './Projectcontext.jsx'

const Projectstate = (props) => {
  const [studentFlag,setstudentFlag]=useState(false);
  const [newUser,setNewUser]=useState(true);
  return (
    <projectcontext.Provider
    value={{studentFlag,setstudentFlag,newUser,setNewUser}}>
        {props.children}
    </projectcontext.Provider>

  )
}

export default Projectstate
