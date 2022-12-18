import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="header__nav">
        <button className="nav__logo">GatArto</button>
        <ul className="nav__links">
          <li className="nav__link">
            <a href="#work">Work</a>
          </li>
          <li className="nav__link">
            <a href="#about">About</a>
          </li>
          <li className="nav__link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
