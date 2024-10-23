import React from "react";
import { Link } from "react-router-dom";

const ShopPageCard = (props) => {
  const { link, img, title, price, className } = props;

  return (
    <div className={`card custom-card ${className}`}>
      <Link href={link ? link : "#"}>
        <div className="img-container">
          <img
            src={`image/${img}`}
            className="card-img-top"
            alt="圖片來自: pexels.com/@godisable-jacob-226636/"
          />
        </div>
      </Link>
      <div className="card-info">
        <div className="card-text col-11">
          <strong>
            <h5>{title ? title : "title"}</h5>
          </strong>
          <p>$ {price ? price : 0}</p>
        </div>
        <Link href={link ? link : "#"}>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ShopPageCard;
