import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <ul  className='navbar'>
            <li>
            < NavLink className='nav-bar-link' to="/home">Home</NavLink>
            </li>
            <li>
            <NavLink className="nav-bar-link" to="/contact">Contact</NavLink>
            </li>
            <li>
            <NavLink className="nav-bar-link" to="/user">User</NavLink>
            </li>
            <li>
            <NavLink className="nav-bar-link" to="/about">About</NavLink>
            </li>
        </ul>
       
    </div>
  )
}
