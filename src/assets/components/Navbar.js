import React from 'react'
import '../css/navbar.css'
import logo from '../images/logo.png'

export default function Navbar() {
  return (
    <>
      <div className="navbar-display">
        <a>
          <img src={logo} alt="logo" id="logo-resize" />
        </a>
        <nav className="nav">
            <ul className="navigation-links">
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

            <div className="hamburger">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" for="menu__toggle">
                <span></span>
                </label>

                <ul className="menu__box">
                <li><a className="menu__item" href="/">Home</a></li>
                <li><a className="menu__item" href="/blog">Blog</a></li>
                <li><a className="menu__item" href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
      </div>
    </>
  )
}
