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
        <h2 className="leaves-bg">NEW ARRIVALS</h2>
      </div>
      <NewArrivalsComponent />
      <PaydayComponent />
      <div className="container">
        <div className="leaves-bg">
          <h2>Young's Favorite</h2>
          <div className="bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
