import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">🚀 Skyline</div>
        <ul className="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/">Games</a></li>
          <li><a href="/">Leaderboard</a></li>
          <li><a href="/">Help</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
