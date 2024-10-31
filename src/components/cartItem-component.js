import React from "react";
import { useDispatch } from "react-redux";
import { changeCartItemCount, removeCartItem } from "../feature/cart/cartSlice";

const CartItemComponent = (props) => {
  let { title, price, count, color, size, img, id, cartId } = props;
  let dispatch = useDispatch();

  const changeCountHandler = (e) => {
    dispatch(changeCartItemCount({ count: Number(e.target.value), cartId }));
  };

  const removeItemHandler = () => {
    dispatch(removeCartItem({ cartId }));
  };

  return (
    <article className="cart-item d-flex">
      <div className="cart-item-img">
        <img src={img} alt="" />
      </div>
      <div className="cart-item-text">
        <h5>{title}</h5>
        <span>$ {price}</span>
        <ul className="cart-item-detail d-md-flex">
          <li>
            <span>Color:</span>
            <span>{color}</span>
          </li>
          <li>
            <span>Size:</span>
            <span>{size}</span>
          </li>
          <li>
            <span>Total:</span>
            <span>$ {price * count}</span>
          </li>
        </ul>
        <div className="cart-item-button">
          <select
            name="count"
            id="count"
            defaultValue={count}
            onChange={changeCountHandler}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button className="btn" onClick={removeItemHandler}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItemComponent;
