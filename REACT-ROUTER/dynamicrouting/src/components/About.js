import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>Welcome in About Page Route</h2>
        <p>Here we are learning React-Router</p>
        <Link to='/user/Nathu'>Nathu</Link><br/>
        <Link to='/user/Shivansh'>Shivansh</Link>
      </div>
    );
  }
}
