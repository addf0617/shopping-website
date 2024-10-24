import React from "react";
import { Link } from "react-router-dom";

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
                <Link to={"/products"}>
                  <button className="btn btn-dark">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex hero-img">
            <i className="fa-solid fa-star star-1"></i>
            <i className="fa-solid fa-star star-2"></i>
            <i className="fa-solid fa-star star-3"></i>
            <i className="fa-solid fa-star star-4"></i>
            <img src={heroPNG} alt="Hero-section-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
