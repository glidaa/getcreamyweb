import React  , {Component , useState} from "react";
import { Link } from "react-router-dom";

import '../assets/css/sidebar.css'

export default function sidebar() {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/privacy">Privacy</Link></li>
          <li><Link to="/termsandcondition">Terms</Link></li>
        </ul>
      </div>
    </nav>
  );
}

