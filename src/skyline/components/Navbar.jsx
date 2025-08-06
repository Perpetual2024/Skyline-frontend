import React from 'react'
import "../styles/Navbar.css"

function Navbar() {
  return (
    <nav>
    <div>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Games</a></li>
            <li>LeaderBoard</li>
            <li>Help</li>
        </ul>
    </div>
    </nav>
  )
}

export default Navbar