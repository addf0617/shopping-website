import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo.svg";

const NavComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <div className="logo navbar-brand">
            <NavLink to={"/"}>
              <img src={logo} alt="logo" />
              <h1>FASHION</h1>
            </NavLink>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <NavLink to={"/"} className="nav-item">
                CATALOGUE
              </NavLink>
              <NavLink to={"/products"} className="nav-item" end>
                FASHION
              </NavLink>
              <NavLink to={"/about"} className="nav-item">
                ABOUT
              </NavLink>
              <NavLink to={"/cart"} className="nav-item">
                <button className="nav-btn">
                  <i className="fa-solid fa-cart-shopping"></i> CART
                </button>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavComponent;
