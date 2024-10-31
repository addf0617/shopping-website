import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import AsideBarComponent from "../components/asideBar-component";
import ShopPageCard from "../components/shopPageCard-component";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setError(null);
    axios
      .get("http://localhost:3000/data/products.json")
      .then((res) => {
        let data;
        if (location.search) {
          //目前的篩選條件只有tag
          let filter = new URLSearchParams(location.search).get("tag");
          data = res.data.products.filter((product) => product.tag === filter);
        } else data = res.data.products;
        setProducts(data);
      })
      .catch((err) => setError(err));
  }, [location]);

  return (
    <div className="container-fluid shop-page">
      <div className="row">
        <div className="col-sm-3">
          <AsideBarComponent />
        </div>
        <div className="col">
          <div className="row">
            {products.length === 0 && !error && <h3>No Products...</h3>}
            {products.length === 0 && error && (
              <div className="alert alert-danger">{error.message}</div>
            )}
            {products.map((product) => {
              return (
                <ShopPageCard
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  link={`/products/${product.id}`}
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
