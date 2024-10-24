import React from "react";
import { Link } from "react-router-dom";

const CardComponent = (props) => {
  const { img, link, title } = props;
  console.log(link);

  return (
    <div className="card custom-card">
      <Link to={link ? link : "#"}>
        <div className="img-container">
          <img src={img} className="card-img-top" alt="Hoodies & Sweatshirt" />
        </div>
      </Link>
      <div className="card-info">
        <div className="card-text col-11">
          <h4>{title ? title : "title"}</h4>
          <p>Explore Now!</p>
        </div>
        <Link href={link ? link : "#"}>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default CardComponent;
