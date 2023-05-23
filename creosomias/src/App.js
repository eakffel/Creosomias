import React from 'react';
import home from './home.js'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="./home.js">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
