import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import AsideBarComponent from "../components/asideBar-component";
import ShopPageCard from "../components/shopPageCard-component";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/products${location.search}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [location]);

  return (
    <div className="container-fluid shop-page">
      <div className="row">
        <div className="col-sm-2">
          <AsideBarComponent />
        </div>
        <div className="col">
          <div className="row">
            {products.length === 0 && <h3>No Products...</h3>}
            {products.map((product) => {
              return (
                <ShopPageCard
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  key={product.id}
                  className="col-12 col-md-4 col-xl-3"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
