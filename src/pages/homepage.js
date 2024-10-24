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
      <section className="young-fav">
        <div className="container">
          <div className="leaves-bg">
            <h2 className="leaves-bg">Young's Favorite</h2>
            <div className="bg"></div>
          </div>
          <div className="row young-fav-card-container">
            <div className="col-md-6 col-lg-6">
              <CardComponent
                img={fav2}
                title={"Trending on instagram"}
                link={"/products?tag=young"}
              />
            </div>
            <div className="col-md-6 col-lg-6">
              <CardComponent
                img={fav1}
                title={"All Under $40"}
                link={"/products?tag=young"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="send-email-section">
        <div className="container">
          <div className="col-lg-8 send-email-textContainer">
            <h1>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
            <h3>Type your email down below and be young wild generation.</h3>
            <div className="send-email-input-group">
              <input
                type="email"
                className="send-email-input"
                placeholder="Add your email here"
              />
              <button className="send-email-button">SEND</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
