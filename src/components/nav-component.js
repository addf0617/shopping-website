import React from "react";

const NavComponent = () => {
  return (
    <div>
      <nav className="nav">
        <input type="checkbox" id="nav__checkbox" className="nav__checkbox" />
        <label htmlFor="nav__checkbox" className="nav__toggle">
          <i className="fa-solid fa-bars hamburger"></i>
          <i className="fa-solid fa-xmark close"></i>
        </label>

        <ul className="nav__menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavComponent;
