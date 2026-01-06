import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <p>Navigation Bar</p>
      <div>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dash">Dashboard</Link>
        </li>
      </div>
    </div>
  )
}

export default Nav
