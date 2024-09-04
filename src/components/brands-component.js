import React from "react";
import HMBrand2 from "../images/HM3.png";
import OBEYBrand from "../images/OBEY-brand.png";
import ShopifyBrand from "../images/Shopify-brand.png";
import LacosteBrand from "../images/LACOSTE-brand.png";
import LevisBrand from "../images/Levis-brand.png";
import amazonBrand from "../images/amazon-brand.png";

const BrandsComponent = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="row img-container">
          {/* <img src={HMBrand2} alt="H&M" />
          <img src={OBEYBrand} alt="OBEY" />
          <img src={ShopifyBrand} alt="Shopify" />
          <img src={LacosteBrand} alt="Lacoste" />
          <img src={LevisBrand} alt="Levis" />
          <img src={amazonBrand} alt="amazon" /> */}
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
