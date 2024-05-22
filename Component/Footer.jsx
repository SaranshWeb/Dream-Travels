import React from 'react'

function Footer() {
  return (
    <footer>
    {/* Footer top section */}
    <div id="footer-top">
      {/* First top content block */}
      <div className="top-content">
        <p>content</p>
        <ul>
          {/* List items */}
          <li>Lorem ipsum</li>
          <li>Dolor sit</li>
        </ul>
      </div>
      {/* Second top content block */}
      <div className="top-content">
        <p>information</p>
        <ul>
          {/* List items */}
          <li>Lorem ipsum</li>
          <li>Onsectetur adipisicing</li>
        </ul>
      </div>
      {/* Third top content block */}
      <div className="top-content">
        <p>legal</p>
        <ul>
          {/* List items */}
          <li>Adipisicing elit</li>
          <li>Sed do eiusmod</li>
        </ul>
      </div>
      {/* Fourth top content block */}
      <div className="top-content">
        <p>help</p>
        <ul>
          {/* List items */}
          <li>Lorem ipsum</li>
          <li>Onsectetur adipisicing</li>
        </ul>
      </div>
      {/* Fifth top content block for address */}
      <div className="top-content" id="address">
        <ul>
          <li>
            {/* Phone icon and number */}
            <span>
              <i className="fa-solid fa-phone" style={{ color: "#ffffff" }} />
            </span>
            <a href="tel:3-6000-0000-6000-000-0000">
              3-6000-0000
              <br />
              -6000-000-0000
            </a>
          </li>
          <li>
            {/* Location icon and address */}
            <span>
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#ffffff" }}
              />
            </span>
            <a href="https://maps.app.goo.gl/CZWANN3tcaiLFvGcA" alt="">
              67700 Dagenham St
              <br />
              England, GB
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* Footer bottom section */}
    <div id="footer-bottom">
      {/* Copyright information */}
      <p>Copyright © 2019 . Dream travels All rights reserved</p>
      {/* Social media icons */}
      <ul>
        <li>
          <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1">
            <i
              className="fa-brands fa-google-plus-g"
              style={{ color: "#ffffff" }}
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/home">
            <i className="fa-brands fa-twitter" style={{ color: "#ffffff" }} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/accounts/login/?hl=en">
            <i
              className="fa-brands fa-instagram"
              style={{ color: "#ffffff" }}
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <i
              className="fa-brands fa-facebook-f"
              style={{ color: "#ffffff" }}
            />
          </a>
        </li>
      </ul>
    </div>
  </footer>  )
}

export default Footer