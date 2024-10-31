import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectTotal,
  clearCart,
} from "../feature/cart/cartSlice";
import CartItemComponent from "../components/cartItem-component";

const CartPage = () => {
  const [delivery, setDelivery] = useState(10);
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    alert("清空購物車成功!");
    dispatch(clearCart());
  };

  return (
    <section className="container my-2">
      <h2 className="d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-cart-shopping"></i>Cart
      </h2>
      <div className="row justify-content-center g-1">
        <div className="col-md-8 col-xl-6">
          {cartItems.length === 0 && <h4>Your shopping cart is empty!</h4>}
          <div className="cart-list">
            {cartItems.map((item) => {
              return <CartItemComponent key={item.cartId} {...item} />;
            })}
          </div>
        </div>
        <div className="col-md-4 bg-light p-4">
          <h4 className="d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-truck-fast"></i>Order
          </h4>
          <hr />
          <div className="d-flex justify-content-between">
            <p>Order Value</p>
            <p>$ {total}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Delivery</p>
            <p>$ {delivery}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p>Total</p>
            <p>$ {total + delivery}</p>
          </div>
          <button className="btn btn-dark w-100" onClick={clearCartHandler}>
            Checkout
          </button>
          <p className="shopping-notice">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum
            ipsum mollitia deserunt ea fuga, in commodi aspernatur nam iusto
            porro amet magni explicabo assumenda? Iure vero itaque labore vel
            minima nam, libero, aspernatur deserunt in aliquam repudiandae
            architecto officia nostrum laudantium quibusdam sapiente, quidem
            rerum. Rem ipsam consequuntur ipsa numquam vitae, vel minima quaerat
            aut iure reprehenderit praesentium optio?
          </p>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
