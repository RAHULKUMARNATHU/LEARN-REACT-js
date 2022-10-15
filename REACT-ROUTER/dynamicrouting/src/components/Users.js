import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Users() {
    const params = useParams();
    const {name} = params
   
  return (
    <div>
    <h2>This is {name}'s Demo Page</h2>
    <p>This page is only for learning:) </p>
    <Link to= "/about">Go back</Link>
    </div>
  )
}
