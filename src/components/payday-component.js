import React from "react";
import paydayImg from "../images/payday/image_12-removebg-preview.png";

const PaydayComponent = () => {
  return (
    <section className="hero payday">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-6 hero-img">
            <i className="fa-solid fa-star star-1"></i>
            <i className="fa-solid fa-star star-2"></i>
            <i className="fa-solid fa-star star-3"></i>
            <i className="fa-solid fa-star star-4"></i>
            <img src={paydayImg} alt="payday-Image" />
          </div>
          <div className="col-lg-6 hero-text">
            <div className="row flex-column">
              <div className="slanted-bg">
                <h1>PAYDAY</h1>
                <div className="bg white-bg"></div>
              </div>
              <h1>SALE NOW</h1>
              <p>
                Spend minimal $100 get 30% off voucher code for your next
                purchase
              </p>
              <div className="hint">
                <strong>
                  <p>1 June - 10 June 2021</p>
                </strong>
                <p>*Terms & Conditions apply</p>
              </div>

              <div className="shop-btn">
                <button className="btn btn-dark">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaydayComponent;
