import React from "react";

import CardComponent from "./card-component";
import hoodies from "../images/newArrivals/Hoodies.svg";
import coats from "../images/newArrivals/Coats.svg";
import TShirt from "../images/newArrivals/T-Shirt.svg";

const NewArrivalsComponent = () => {
  return (
    <section className="new-arrivals">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <CardComponent
              img={hoodies}
              title={"Hoodies & Sweatshirt"}
              link={"/products?tag=new"}
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <CardComponent
              img={coats}
              title={"Coats & Parkas"}
              link={"/products?tag=new"}
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <CardComponent
              img={TShirt}
              title={"Tee & T-Shirt"}
              link={"/products?tag=new"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsComponent;
