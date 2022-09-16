import React from 'react'
import '../css/navbar.css'
import '../css/general.css'
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

            <div className="hamburger not-selectable">
                <input id="menu__toggle" type="checkbox" className='not-selectable' />
                <label  className="menu__btn not-selectable" for="menu__toggle">
                <span></span>
                </label>

                <ul className="menu__box not-selectable">
                <li><a className="menu__item not-selectable" href="/">Home</a></li>
                <li><a className="menu__item not-selectable" href="/blog">Blog</a></li>
                <li><a className="menu__item not-selectable" href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
      </div>
    </>
  )
}
