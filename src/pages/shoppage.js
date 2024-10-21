import React from "react";
import AsideBarComponent from "../components/asideBar-component";
import ShopPageCard from "../components/shopPageCard-component";
import product1 from "../images/product/pexels-godisable-jacob-226636-914668.jpg";

const ShopPage = () => {
  return (
    <div className="container-fluid shop-page">
      <div className="row">
        <div className="col-sm-3">
          <AsideBarComponent />
        </div>
        <div className="col">
          <div className="row">
            <div className="col-12 col-md-4 col-xl-3">
              <ShopPageCard img={product1} title={"card title"} price={100} />
            </div>
            <div className="col-12 col-md-4 col-xl-3">
              <ShopPageCard img={product1} title={"card title"} price={100} />
            </div>
            <div className="col-12 col-md-4 col-xl-3">
              <ShopPageCard img={product1} title={"card title"} price={100} />
            </div>
            <div className="col-12 col-md-4 col-xl-3">
              <ShopPageCard img={product1} title={"card title"} price={100} />
            </div>
            <div className="col-12 col-md-4 col-xl-3">
              <ShopPageCard img={product1} title={"card title"} price={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
