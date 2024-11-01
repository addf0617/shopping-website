import React from "react";
import { useLocation } from "react-router-dom";
import AsideBarComponent from "../components/asideBar-component";
import ShopPageCard from "../components/shopPageCard-component";
import { useProduct } from "../hooks/useProduct";

const ShopPage = () => {
  const location = useLocation();
  const tag = new URLSearchParams(location.search).get("tag");
  const { products, error, loading } = useProduct({ tag });

  return (
    <div className="container-fluid shop-page">
      <div className="row">
        <div className="col-sm-3">
          <AsideBarComponent />
        </div>
        <div className="col">
          <div className="row">
            {loading && <h3>Loading...</h3>}
            {!loading && error && (
              <div className="alert alert-danger">{error.message}</div>
            )}
            {!error && !loading && products.length === 0 && (
              <h3>No Products...</h3>
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
