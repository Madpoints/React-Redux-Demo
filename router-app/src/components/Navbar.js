import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className="nav-wrapper purple darken-3">
      <div className="contain">
        <a className="brand-logo">React Router App</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>  
          <li><NavLink to="/about">About</NavLink></li>  
          <li><NavLink to="/contact">Contact</NavLink></li>  
        </ul>  
      </div>
    </nav>
  )
}

export default Navbar