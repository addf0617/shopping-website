import React from "react";

import heroPNG from "../images/hero-section-removebg.png";

const HeroComponent = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-6 hero-text">
            <div className="row flex-column gy-1">
              <div className="slanted-bg">
                <h1>LET'S</h1>
                <div className="bg white-bg"></div>
              </div>
              <h1>EXPLORE</h1>
              <div className="slanted-bg">
                <h1>UNIQUE</h1>
                <div className="bg yellow-bg"></div>
              </div>
              <h1>CLOTHES.</h1>
              <p>Live for Influential and Innovative fashion!</p>
              <div className="shop-btn">
                <button className="btn btn-dark">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex hero-img">
            <i class="fa-solid fa-star star-1"></i>
            <i class="fa-solid fa-star star-2"></i>
            <i class="fa-solid fa-star star-3"></i>
            <i class="fa-solid fa-star star-4"></i>
            <img src={heroPNG} alt="Hero-section-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
