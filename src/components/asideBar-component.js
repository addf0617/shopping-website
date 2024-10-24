import React from "react";
import { Link } from "react-router-dom";

const AsideBarComponent = () => {
  return (
    <nav className="asideBar container-fluid">
      <ul className="d-flex flex-column">
        <Link to={"/products"}>View All</Link>
        <Link to={"/products?tag=new"}>New Arrivals</Link>
        <Link to={"/products?tag=young"}>Young's Favorite</Link>
        <Link to={"/products?tag=sale"}>SALES</Link>
      </ul>
    </nav>
  );
};

export default AsideBarComponent;
