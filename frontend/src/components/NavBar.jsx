import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
    <div className="container">
      <Link to="/" className="navbar-brand"> Login Form </Link>
    </div>
  </nav>
);

export default NavBar;
