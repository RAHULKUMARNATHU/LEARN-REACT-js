import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <h2>
         We are at Contact Page
      </h2>
      <p>
        Happy learning of React-Router 
      </p>

      <ul>
        <li>
          <Link to ="channel">Channel</Link>
        </li>
        <li>
          <Link to='company'>Company</Link>
        </li>
        <li>
          <Link to="other">Other</Link>
        </li>
        <Outlet></Outlet>
      </ul>
    </div>
  )
}
