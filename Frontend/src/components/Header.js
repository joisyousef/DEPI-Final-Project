import React, { useState } from "react";

const Header = () => {
  // State to manage the active class for the nav
  const [isNavActive, setIsNavActive] = useState(false);

  // Function to toggle the nav visibility
  const toggleNav = () => {
    setIsNavActive((prev) => !prev);
  };

  return (
    <header>
      <div className="top-header">
        <div className="container">
          <img src="../assets/images/home/logo (1).png" alt="" />

          <button className="nav-btn" onClick={toggleNav}>
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="contact">
            <div className="col">
              <img src="./assets/images/home/1.png" alt="phone" />
              <span>
                Number : <br />
                <b>+880123456789</b>
              </span>
            </div>

            <div className="col">
              <img src="./assets/images/home/2.png" alt="email" />
              <span>
                Email : <br />
                <b>Mukti@gmail.com</b>
              </span>
            </div>

            <div className="col">
              <img src="./assets/images/home/3.png" alt="address" />
              <span>
                Address : <br />
                <b>12 North West New York</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={`bottem-nav ${isNavActive ? "active" : ""}`}>
        <div className="container">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Departments">Departments</a>
            </li>
            <li>
              <a href="/doctors">Doctors</a>
            </li>
            <li>
              <a href="/Services">Services</a>
            </li>
            <li>
              <a href="/Bolg">Blog</a>
            </li>
            <li>
              <a href="/About-us">About us</a>
            </li>
            <li>
              <a href="/Contact-Us">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
