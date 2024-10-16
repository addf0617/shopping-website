import React from "react";
import HeroComponent from "../components/hero-component";
import BrandsComponent from "../components/brands-component";
import NewArrivalsComponent from "../components/newArrivals-component";
import PaydayComponent from "../components/payday-component";

import CardComponent from "../components/card-component";
import fav1 from "../images/young's fav/fav1-wish.png";
import fav2 from "../images/young's fav/fav2-wish.png";

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
          <h2 className="leaves-bg">Young's Favorite</h2>
          <div className="bg"></div>
        </div>
        <div className="row young-fav">
          <div className="col-md-6 col-lg-6">
            <CardComponent img={fav2} />
          </div>
          <div className="col-md-6 col-lg-6">
            <CardComponent img={fav1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
