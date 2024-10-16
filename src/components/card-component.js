import React from "react";

const CardComponent = (props) => {
  const { img, link } = props;

  return (
    <div className="card custom-card">
      <a href="#">
        <img src={img} className="card-img-top" alt="Hoodies & Sweatshirt" />
      </a>
      <div className="card-info">
        <div className="card-text col-11">
          <h4>Hoodies & Sweatshirt</h4>
          <p>Explore Now!</p>
        </div>
        <a href="#">
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
