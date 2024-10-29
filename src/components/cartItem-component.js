import React from "react";

const CartItemComponent = (props) => {
  let { title, price, count, color, size, img } = props;
  return (
    <article className="cart-item d-flex">
      <div className="cart-item-img">
        <img src="/shopping-website/data/image/product1.jpg" alt="" />
      </div>
      <div className="cart-item-text">
        <h5>Product Name</h5>
        <span>$ 100</span>
        <ul className="cart-item-detail d-md-flex">
          <li>
            <span>Color:</span>
            <span>gray</span>
          </li>
          <li>
            <span>Size:</span>
            <span>XXL</span>
          </li>
          <li>
            <span>Total:</span>
            <span>$ 100</span>
          </li>
        </ul>
        <div className="cart-item-button">
          <select name="count" id="count">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button className="btn">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItemComponent;
