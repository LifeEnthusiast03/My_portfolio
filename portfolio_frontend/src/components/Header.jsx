import React from 'react'
import "./style.css"

function Header() {
  return (
    <div>
       <nav class="navbar">
        <div class="logo">MyPortfolio</div>
        <ul class="nav-links" id="navLinks">
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>
        <div class="menu-icon" id="menuIcon">&#9776;</div>
    </nav>

    </div>
  )
}

export default Header