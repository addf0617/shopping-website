import React from "react";
import hoodies from "../images/newArrivals/Hoodies.svg";
import coats from "../images/newArrivals/Coats.svg";
import TShirt from "../images/newArrivals/T-Shirt.svg";

const NewArrivalsComponent = () => {
  return (
    <section className="new-arrivals">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <a href="#">
                <img
                  src={hoodies}
                  className="card-img-top"
                  alt="Hoodies & Sweatshirt"
                />
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
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <a href="#">
                <img
                  src={coats}
                  className="card-img-top"
                  alt="Hoodies & Sweatshirt"
                />
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
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <a href="#">
                <img
                  src={TShirt}
                  className="card-img-top"
                  alt="Hoodies & Sweatshirt"
                />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsComponent;
