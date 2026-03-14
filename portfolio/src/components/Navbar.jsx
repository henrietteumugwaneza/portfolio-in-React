import React from "react"
import { Link } from "react-router-dom"
import "../styles/navbar.css"

function Navbar(){
  return(
    <nav className="navbar">
      <div className="container navbar-container">
        <h2 className="logo">HenrichDev</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar