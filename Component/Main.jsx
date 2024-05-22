import React from 'react'
import ludovico from '../images/ludovico.jpg';
import gallery_1 from '../images/gallery_1.jpg';
import celine from '../images/celine.jpg';
import guilherme from '../images/guilherme.jpg';
import cam from '../images/cam.jpg';
import sec from '../images/sec.png';
import campaign from '../images/campaign.jpg';
import hannah from '../images/hannah.jpg';
import arlington from '../images/arlington.jpg';
import berkeley from '../images/berkeley.jpg';
import gallery_5 from '../images/gallery_5.jpg';
import gallery_3 from '../images/gallery_3.jpg';
import gallery_2 from '../images/gallery_2.jpg';
import gallery_4 from '../images/gallery_4.jpg';
import gallery from '../images/gallery.jpg';
import gallery_7 from '../images/gallery_7.jpg';
import gallery_8 from '../images/gallery_8.jpg';
import gallery_6 from '../images/gallery_6.jpg';
import gallery_9 from '../images/gallery_9.jpg';
function Main() {
  return (
    <main>
    {/* Main section */}
    <section id="sec1">
      {/* Image for the main section */}
      <img
        src={ludovico}
        alt=""
      />
      {/* Heading for the main section */}
      <div id="sec1-heading">
        <p id="heading1">WELCOME TO</p>
        <p id="heading2">Dream Travels</p>
      </div>
    </section>
    <section id="sec2">
      {/* Section heading */}
      <div id="sec2-heading">
        <p>OUR TEAM LEADERS</p>
        {/* Line separator */}
        <div className="line" />
      </div>
      {/* Section description */}
      <p id="sec2-p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor
        <br />
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nos-
        <br />
        trud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis
        <br />
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat
      </p>
      {/* Bottom content section */}
      <div id="sec2-bottom">
        {/* Individual bottom content */}
        <div className="bottom-content">
          {/* Leader image */}
          <img
            src={celine}
            alt=""
            className="bottom-img"
          />
          {/* Leader name */}
          <p className="bottom-heading">Hugo Silva</p>
          {/* Leader description */}
          <p className="bottom-para">
            Lorem ipsum dolor sit amet, consecte-
            <br />
            tur adipisicing elit, sed do eiusmod
            <br />
            tempor incididunt ut labore et dolore
          </p>
        </div>
        {/* Individual bottom content */}
        <div className="bottom-content">
          {/* Leader image */}
          <img
            src={guilherme}
            alt=""
            className="bottom-img"
          />
          {/* Leader name */}
          <p className="bottom-heading">Imanol Arias</p>
          {/* Leader description */}
          <p className="bottom-para">
            Lorem ipsum dolor sit amet, consecte-
            <br />
            tur adipisicing elit, sed do eiusmod
            <br />
            tempor incididunt ut labore et dolore
          </p>
        </div>
        {/* Individual bottom content */}
        <div className="bottom-content">
          {/* Leader image */}
          <img
            src={cam}
            alt=""
            className="bottom-img"
          />
          {/* Leader name */}
          <p className="bottom-heading">Javier Bardem</p>
          {/* Leader description */}
          <p className="bottom-para">
            Lorem ipsum dolor sit amet, consecte-
            <br />
            tur adipisicing elit, sed do eiusmod
            <br />
            tempor incididunt ut labore et dolore
          </p>
        </div>
      </div>
    </section>
    <section id="sec3">
      {/* Bar section with information */}
      <div id="bar">
        {/* Individual information block */}
        <div className="info">
          {/* Number of happy clients */}
          <p className="number">2500</p>
          {/* Message about happy clients */}
          <p className="message">HAPPY CLIENTS</p>
        </div>
        {/* Individual information block */}
        <div className="info">
          {/* Number of full notebooks */}
          <p className="number">300</p>
          {/* Message about full notebooks */}
          <p className="message">FULL NOTEBOOKS</p>
        </div>
        {/* Individual information block */}
        <div className="info">
          {/* Number of teammates */}
          <p className="number">120</p>
          {/* Message about teammates */}
          <p className="message">TEAMMATES</p>
        </div>
        {/* Individual information block */}
        <div className="info">
          {/* Number of stores */}
          <p className="number">30</p>
          {/* Message about stores */}
          <p className="message">STORES</p>
        </div>
      </div>
      {/* Background image for the section */}
      <img src={sec} alt="" id="sec3-img" />
    </section>
    <section id="sec4">
      {/* Contact section */}
      <div id="contact">
        {/* Heading and message for contact */}
        <div id="heading-container">
          {/* Contact heading */}
          <p id="contact-heading">CONTACT US</p>
          {/* Contact message */}
          <p id="contact-message">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            <br />
            accusantium doloremque laudantium, totam rem aperiam
          </p>
        </div>
        {/* Contact form */}
        <form action="">
          {/* Form row with name and category */}
          <div className="form-row">
            {/* Input for name */}
            <input type="text" placeholder="Name" />
            {/* Dropdown for category selection */}
            <select name="category" id="category">
              <option value="category">Category</option>
              <option value="monuments">Monuments</option>
              <option value="street-food">Street Food</option>
              <option value="hotels">Hotels</option>
              <option value="temples">Temples</option>
            </select>
          </div>
          {/* Form row with phone and city */}
          <div className="form-row">
            {/* Input for phone number */}
            <input type="tel" placeholder="Phone" />
            {/* Dropdown for city selection */}
            <select name="city" id="city">
              <option value="city">City</option>
              <option value="mumbai">Mumbai</option>
              <option value="bengaluru">Bengaluru</option>
              <option value="pune">Pune</option>
              <option value="patiala">Patiala</option>
            </select>
          </div>
          {/* Last form row with email and message */}
          <div className="form-lastrow">
            {/* Input for email */}
            <input type="email" placeholder="E-mail" />
            {/* Textarea for message */}
            <textarea
              name="Message"
              id=""
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          {/* Submit button */}
          <button type="submit">Contact Us</button>

        </form>
      </div>
    </section>
    <section id="sec5">
      {/* Background image for section 5 */}
      <img src={sec} alt="" id="sec5-bg" />
      {/* About section */}
      <div id="about">
        {/* Left section with image */}
        <div id="imgleft">
          <img
            src={campaign}
            alt=""
          />
        </div>
        {/* Right section */}
        <div id="right">
          {/* Text wrapper for about information */}
          <div id="text-wrapper">
            {/* Heading for about section */}
            <p id="p1">About Us</p>
            {/* Description of about section */}
            <p id="p2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              <br />
              accusantium doloremque laudantium, totam rem aperiam
            </p>
          </div>
          {/* Team information */}
          <div id="team">
            {/* Individual team member */}
            <div className="content">
              {/* Team member image */}
              <img
                src={hannah}
                alt=""
              />
              {/* Line separator */}
              <div className="line" />
              {/* Team member description */}
              <div className="description">friendly team</div>
            </div>
            {/* Individual team member */}
            <div className="content">
              {/* Team member image */}
              <img
                src={arlington}
                alt=""
              />
              {/* Line separator */}
              <div className="line" />
              {/* Team member description */}
              <div className="description">involved</div>
            </div>
            {/* Individual team member */}
            <div className="content">
              {/* Team member image */}
              <img
                src={berkeley}
                alt=""
              />
              {/* Line separator */}
              <div className="line" />
              {/* Team member description */}
              <div className="description">24/7 assisstance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="sec6">
      {/* Section 6 text */}
      <div id="sec6-text">
        {/* Heading for section 6 */}
        <p id="sec6-heading">OUR GALLERY</p>
        {/* Message for section 6 */}
        <p id="sec6-message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
          <br />
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam,
          <br />
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo conse-
        </p>
      </div>
      {/* Gallery section */}
      <div id="gallery">
        {/* Main gallery container */}
        <div id="gallery-main">
          {/* Image list 1 */}
          <div className="img-list" id="image-list-1">
            {/* Gallery images */}
            <img src={gallery_5} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_4} alt="" />
            <img src={gallery_1} alt="" />
          </div>
          {/* Image list 2 */}
          <div className="img-list" id="image-list-2">
            {/* Gallery images */}
            <img src={gallery} alt="" />
            <img src={gallery_7} alt="" />
            <img src={gallery_8} alt="" />
            <img src={gallery_6} alt="" />
            <img src={gallery_9} alt="" />
          </div>
        </div>
        {/* Gallery controls */}
        <div id="gallery-controls">
          {/* Left button for gallery */}
          <button id="left-btn">
            <i className="fa-solid fa-chevron-left" />
          </button>
          {/* Right button for gallery */}
          <button id="right-btn">
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      </div>
    </section>
  </main> 
   )
}

export default Main