import React from "react";

const CardComponent = (props) => {
  const { img, link, title } = props;

  return (
    <div className="card custom-card">
      <a href={link ? link : "#"}>
        <div className="img-container">
          <img src={img} className="card-img-top" alt="Hoodies & Sweatshirt" />
        </div>
      </a>
      <div className="card-info">
        <div className="card-text col-11">
          <h4>{title ? title : "title"}</h4>
          <p>Explore Now!</p>
        </div>
        <a href={link ? link : "#"}>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
