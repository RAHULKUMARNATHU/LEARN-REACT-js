import React from 'react'
import {  NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <div>
        <ul className='navbar'>
            <li>
            <NavLink className='nav-bar-link' to ='/'>Home</NavLink>
            </li>
            <li>
            <NavLink  className='nav-bar-link'  to ='/about'>About</NavLink>
            </li>
            <li>
            <NavLink  className='nav-bar-link' to ='/contact'>Contact</NavLink>
            </li>
        </ul>
       
    </div>
  )
}
