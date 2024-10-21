import React from "react";
import { Link } from "react-router-dom";

const ShopPageCard = (props) => {
  const { link, img, title, price } = props;

  return (
    <div className="card custom-card">
      <Link href={link ? link : "#"}>
        <div className="img-container">
          <img src={img} className="card-img-top" alt="Hoodies & Sweatshirt" />
        </div>
      </Link>
      <div className="card-info">
        <div className="card-text col-11">
          <h4>{title ? title : "title"}</h4>
          <p>$ {price}</p>
        </div>
        <Link href={link ? link : "#"}>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ShopPageCard;
