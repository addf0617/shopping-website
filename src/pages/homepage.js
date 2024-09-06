import React from "react";
import HeroComponent from "../components/hero-component";
import BrandsComponent from "../components/brands-component";
import NewArrivalsComponent from "../components/newArrivals-component";
import PaydayComponent from "../components/payday-component";

const Homepage = () => {
  return (
    <div>
      <HeroComponent />
      <BrandsComponent />
      <div className="container">
        <h2>NEW ARRIVALS</h2>
      </div>
      <NewArrivalsComponent />
      <PaydayComponent />
    </div>
  );
};

export default Homepage;
