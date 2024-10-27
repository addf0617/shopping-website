import React from "react";
import { useLocation } from "react-router-dom";

const ProductPage = () => {
  //img, title, price in state
  let { state } = useLocation();

  return (
    <div className="container my-3">
      <div className="row gap-2 ">
        <div className="col-md-5">
          <img
            src={`/shopping-website/${state.img}`}
            alt="Img 1"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex flex-column product-info">
          <h4>{state.title}</h4>
          <h2 className="text-danger">$ {state.price}</h2>
          <hr />
          <span>choose color:</span>
          <div className="color-picker">
            <input
              type="radio"
              name="color"
              id="color-picker-gray"
              value="gray"
              defaultChecked
            />
            <label htmlFor="color-picker-gray">
              <span className="color-picker-gray"></span>
            </label>
            <input
              type="radio"
              name="color"
              id="color-picker-white"
              value="white"
            />
            <label htmlFor="color-picker-white">
              <span className="color-picker-white"></span>
            </label>
            <input
              type="radio"
              name="color"
              id="color-picker-red"
              value="red"
            />
            <label htmlFor="color-picker-red">
              <span className="color-picker-red"></span>
            </label>
            <input
              type="radio"
              name="color"
              id="color-picker-blue"
              value="blue"
            />
            <label htmlFor="color-picker-blue">
              <span className="color-picker-blue"></span>
            </label>
          </div>
          <span>choose sizes:</span>
          <div className="btn-group" role="group" aria-label="size selection">
            <input
              type="radio"
              className="btn-check"
              name="size"
              id="size34"
              autocomplete="off"
              defaultChecked
            />
            <label className="btn btn-outline-secondary" htmlFor="size34">
              34
            </label>
            <input
              type="radio"
              className="btn-check"
              name="size"
              id="size35"
              autocomplete="off"
            />
            <label className="btn btn-outline-secondary" htmlFor="size35">
              35
            </label>
            <input
              type="radio"
              className="btn-check"
              name="size"
              id="size36"
              autocomplete="off"
            />
            <label className="btn btn-outline-secondary" htmlFor="size36">
              36
            </label>
            <input
              type="radio"
              className="btn-check"
              name="size"
              id="size37"
              autocomplete="off"
            />
            <label className="btn btn-outline-secondary" htmlFor="size37">
              37
            </label>
            <input
              type="radio"
              className="btn-check"
              name="size"
              id="size38"
              autocomplete="off"
            />
            <label className="btn btn-outline-secondary" htmlFor="size38">
              38
            </label>
          </div>
          <button className="btn btn-dark">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
