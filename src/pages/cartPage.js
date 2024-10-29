import React from "react";
import CartItemComponent from "../components/cartItem-component";

const CartPage = () => {
  return (
    <section className="container my-2">
      <h2 className="d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-cart-shopping"></i>Cart
      </h2>
      <div className="row justify-content-center g-1">
        <div className="col-md-8 col-xl-6">
          <div className="cart-list">
            <CartItemComponent />
            <CartItemComponent />
            <CartItemComponent />
            <CartItemComponent />
            <CartItemComponent />
          </div>
        </div>
        <div className="col-md-4 bg-light p-4">
          <h4 className="d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-truck-fast"></i>Order
          </h4>
          <hr />
          <div className="d-flex justify-content-between">
            <p>Order Value</p>
            <p>$ 100</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Delivery</p>
            <p>$ 10</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p>Total</p>
            <p>$ 110</p>
          </div>
          <button className="btn btn-dark w-100">Checkout</button>
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
