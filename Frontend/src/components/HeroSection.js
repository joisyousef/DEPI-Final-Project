import React from "react";


function HeroSection({ children, setChange }) {
  return (
    <div className="main-header">
      <div className="container">
        <h1 className="main-title">{children}</h1>
        <div className="breadcrumbs">
          <a href="index.html">Home</a> -
          <a className="active" href="#" onClick={() => setChange("Services")}>
            Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
