import React, { useState } from 'react'
import projectcontext from './Projectcontext.jsx'

const Projectstate = (props) => {
  const [studentFlag,setstudentFlag]=useState(false);
  return (
    <projectcontext.Provider
    value={{studentFlag,setstudentFlag}}>
        {props.children}
    </projectcontext.Provider>

  )
}

export default Projectstate
