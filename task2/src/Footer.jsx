// import React from 'react';
import logo from "./assets/logo.png";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
      <img src = {logo} alt="" />
        <p>
        Lorem ipsum dolor sit amet consectetur. Nibh leo amet sed orci ipsum lectus pretium diam. Placerat ipsum volutpat commodo sodales.
        </p>
      </div>
      <div className="footer-section">
        <h3>Job Seekers</h3>
        <ul>
          <li><a href="#">Search Jobs</a></li>
          <li><a href="#">Explore Jobs</a></li>
          <li><a href="#">Saved Jobs</a></li>
          <li><a href="#">Applied Jobs</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Employers</h3>
        <ul>
          <li><a href="#">Register</a></li>
          <li><a href="#">Post Jobs</a></li>
          <li><a href="#">Applications</a></li>
          <li><a href="#">My Job Postings</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Legal</h3>
        <ul>
          <li><a href="#">Cookies Policy</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Services</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
