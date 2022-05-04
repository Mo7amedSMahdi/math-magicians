import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => (
  <header className="flex">
    <h1>Math Magicians</h1>
    <nav>
      <ul className="nav nav--main">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
