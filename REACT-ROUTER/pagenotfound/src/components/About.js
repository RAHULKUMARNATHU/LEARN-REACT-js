import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>About Page
            </h2>
            <p>Here We are Learning React-Router</p>
            <Link to ="/">Go to Home</Link>
            </div>
    )
  }
}
