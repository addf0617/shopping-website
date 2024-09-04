import React from "react";
import logo from "../images/logo.svg";

const NavComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <div className="logo navbar-brand d-flex align-items-center ">
            <img src={logo} alt="logo" />
            <h1>FASHION</h1>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">CATALOGUE</li>
              <li className="nav-item">FASHION</li>
              <li className="nav-item">FAVOURITE</li>
              <li className="nav-item">LIFESTYLE</li>
              <li className="nav-item">
                <button className="nav-btn">SIGN UP</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavComponent;
