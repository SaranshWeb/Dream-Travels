import React from 'react'

function Header() {
  return (
    <header>
      {/* Header with site name */}
      <p>
        <a href="">Dream Travels $_$</a>
      </p>
      {/* Navigation menu */}
      <nav>
        <ul>
          <a href="#sec1">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#footer-top">
            <li>Services</li>
          </a>
          <a href="#sec3">
            <li>Testimonials</li>
          </a>
          <a href="#gallery">
            <li>Portfolio</li>
          </a>
          <a href="#contact">
            <li>Contacts</li>
          </a>
        </ul>
      </nav>
      <div id="menu-icon">
        <i className="fa-solid fa-bars" />
      </div>
    </header>
  )
}

export default Header