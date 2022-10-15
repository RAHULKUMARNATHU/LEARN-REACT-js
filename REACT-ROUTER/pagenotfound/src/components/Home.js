import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>
            Home Page Route :)
            </h2>
            <p>
                Here we are learning React-Router
            </p>
            <Link to="/about">Go to About</Link>

      </div>

    )
  }
}
