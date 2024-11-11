import React from "react";
import Logo from "./Logo";


function Footer() {
  return (
    <footer>
      <div className="container"> 
        <Left />
        <Center />
        <Right />
      </div>
      <div className="footer-bottom">
        <div className="container">
          Copyright © 2021 <span className="site-name">Mukti</span>. All Rights
          Reserved. By
          <span className="developer">LabArtisan</span>
        </div>
      </div>
    </footer>
  );
}
function Left() {
  return (
    <div className="left">
      <h2>Contact Info</h2>
      <p>
        Rapiciously anize wireless strategic theme areas and corporate testing
        procedures. Uniquely
      </p>
      <ul>
        <li>
          <i className="fa fa-home"></i> Suite 02 New Elephant Road USA
        </li>
        <li>
          <i className="fa fa-phone"></i> +880 142 258 123, 02-96936
        </li>
        <li>
          <i className="fa fa-envelope"></i> info@mukti.com
        </li>
        <li>
          <i className="fa-solid fa-globe"></i> info@mukti.com
        </li>
      </ul>
    </div>
  );
}
function Center() {
  return (
    <div className="center">
      <div className="footer-logo">
        <Logo />
      </div>
      <p>
        Proactive predominated empower portals viable robust infrastructures.
        Convene simple scalable natives rather than empower portals viable
        robust infrastructures predominate empowered portais robust robust
      </p>
      <div className="footer-newslettler">
        <h3>Subscibe Our NewSletter</h3>
        <Input />
      </div>
    </div>
  );
}
function Input() {
  return (
    <div className="input-filed">
      <i className="fa-solid fa-paper-plane"></i>
      <input type="email" placeholder="Enter Your Email" />
      <button>Subscribe Now</button>
    </div>
  );
}
function Right() {
  return (
    <div className="right">
      <h2>Opening Hours</h2>
      <ul>
        <li>
          Saturday <span>8:00 AM - 10:00 PM</span>
        </li>
        <li>
          Sunday <span>6:00 AM - 8:00 PM</span>
        </li>
        <li>
          Monday <span>6:00 AM - 2:00 PM</span>
        </li>
        <li>
          Tuesday <span>7:00 AM - 9:00 PM</span>
        </li>
        <li>
          Wednesday <span>10:00 AM - 12:00 PM</span>
        </li>
        <li>
          Thursday <span>2:00 AM - 6:00 PM</span>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
