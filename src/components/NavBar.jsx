import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
<div className="navbar">
<Link to="/">
        <h2>WORK-DONE</h2>
      </Link>
      <Link to="/">
        <h2>CONTACT</h2>
      </Link>  
      
      <Link to="/">
        <h2>ABOUT</h2>
      </Link></div> 
     </>
  )
}

export default NavBar
