import React from 'react';
import './nav.css';

const Nav = () => (
  <header className="flex">
    <h1>Math Magicians</h1>
    <nav>
      <ul className="nav nav--main">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Calculator</a>
        </li>
        <li>
          <a href="/">Quote</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
