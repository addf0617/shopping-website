import React from "react";
import { NavLink } from "react-router-dom";

const AsideBarComponent = () => {
  return (
    <nav className="asideBar container-fluid">
      <ul className="d-flex flex-column">
        <NavLink to={"/shop"}>View All</NavLink>
        <NavLink to={"/new-arrivals"}>New Arrivals</NavLink>
        <NavLink to={"/youngs"}>Young's Favorite</NavLink>
      </ul>
    </nav>
  );
};

export default AsideBarComponent;
