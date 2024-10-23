import React from "react";
import { NavLink } from "react-router-dom";

const AsideBarComponent = () => {
  return (
    <nav className="asideBar container-fluid">
      <ul className="d-flex flex-column">
        <NavLink to={"/products"} end>
          View All
        </NavLink>
        <NavLink to={"/products?tag=new"}>New Arrivals</NavLink>
        <NavLink to={"/products?tag=young"}>Young's Favorite</NavLink>
        <NavLink to={"/products?tag=sale"}>SALES</NavLink>
      </ul>
    </nav>
  );
};

export default AsideBarComponent;
