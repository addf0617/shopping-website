import React from "react";
import HMBrand2 from "../images//brands/HM3.png";
import OBEYBrand from "../images/brands/OBEY-brand.png";
import ShopifyBrand from "../images/brands/Shopify-brand.png";
import LacosteBrand from "../images/brands/LACOSTE-brand.png";
import LevisBrand from "../images/brands/Levis-brand.png";
import amazonBrand from "../images/brands/amazon-brand.png";

const BrandsComponent = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="row img-container">
          <div className="col-3 col-lg-1">
            <img src={HMBrand2} alt="H&M" />
          </div>
          <div className="col-3 col-lg-1">
            <img src={OBEYBrand} alt="OBEY" />
          </div>
          <div className="col-3 col-lg-1">
            <img src={ShopifyBrand} alt="Shopify" />
          </div>
          <div className="col-3 col-lg-1">
            <img src={LacosteBrand} alt="Lacoste" />
          </div>
          <div className="col-3 col-lg-1">
            <img src={LevisBrand} alt="Levis" />
          </div>
          <div className="col-3 col-lg-1">
            <img src={amazonBrand} alt="amazon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsComponent;
