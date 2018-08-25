import React from 'react'

const Navbar = () => {
  return(
    <nav className="nav-wrapper purple darken-3">
      <div className="contain">
        <a className="brand-logo">React Router App</a>
        <ul className="right">
          <li><a href="/">Home</a></li>  
          <li><a href="/about">About</a></li>  
          <li><a href="/contact">Contact</a></li>  
        </ul>  
      </div>
    </nav>
  )
}

export default Navbar