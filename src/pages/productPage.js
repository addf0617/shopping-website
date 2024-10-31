import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, selectCartItems } from "../feature/cart/cartSlice";
import axios from "axios";
import { nanoid } from "nanoid";

const ProductPage = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let [data, setData] = useState({});
  let [error, setError] = useState(null);
  const [size, setSize] = useState("34");
  const [color, setColor] = useState("gray");
  let dispatch = useDispatch();
  let cartItems = useSelector(selectCartItems);
  let id = Number(location.pathname.split("/").pop());

  //已該id找到對應的商品
  useEffect(() => {
    setError(null);
    axios
      .get(`http://localhost:3000/data/products.json`)
      .then((res) => {
        console.log(res.data.products.find((product) => product.id === id));

        setData(res.data.products.find((product) => product.id === id));
      })
      .catch((err) => setError(err));
  }, []);

  const colorSelectorHandler = (e) => {
    setColor(e.target.value);
  };

  const sizeSelectorHandler = (e) => {
    setSize(e.target.value);
  };

  const addCartHandler = () => {
    if (cartItems.find((item) => item.id === data.id && item.count === 5)) {
      return alert("商品數量已達上限");
    }
    dispatch(addCartItem({ ...data, color, size, count: 1, cartId: nanoid() }));
    navigate("/cart");
  };

  return (
    <div className="container my-3">
      {error && <div className="alert alert-danger">{error.message}</div>}
      {!data && <h3>Product Not Found</h3>}
      {data && (
        <div className="row gap-2 ">
          <div className="col-md-5">
            <img
              src={`/shopping-website/${data.img}`}
              alt="Img 1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 d-flex flex-column product-info">
            <h4>{data.title}</h4>
            <h2 className="text-danger">$ {data.price}</h2>
            <hr />
            <span>choose color:</span>
            <div className="color-picker">
              <input
                type="radio"
                name="color"
                id="color-picker-gray"
                value="gray"
                onChange={colorSelectorHandler}
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
                onChange={colorSelectorHandler}
              />
              <label htmlFor="color-picker-white">
                <span className="color-picker-white"></span>
              </label>
              <input
                type="radio"
                name="color"
                id="color-picker-red"
                value="red"
                onChange={colorSelectorHandler}
              />
              <label htmlFor="color-picker-red">
                <span className="color-picker-red"></span>
              </label>
              <input
                type="radio"
                name="color"
                id="color-picker-blue"
                value="blue"
                onChange={colorSelectorHandler}
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
                value={34}
                autoComplete="off"
                onChange={sizeSelectorHandler}
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
                value={35}
                autoComplete="off"
                onChange={sizeSelectorHandler}
              />
              <label className="btn btn-outline-secondary" htmlFor="size35">
                35
              </label>
              <input
                type="radio"
                className="btn-check"
                name="size"
                id="size36"
                value={36}
                autoComplete="off"
                onChange={sizeSelectorHandler}
              />
              <label className="btn btn-outline-secondary" htmlFor="size36">
                36
              </label>
              <input
                type="radio"
                className="btn-check"
                name="size"
                id="size37"
                value={37}
                autoComplete="off"
                onChange={sizeSelectorHandler}
              />
              <label className="btn btn-outline-secondary" htmlFor="size37">
                37
              </label>
              <input
                type="radio"
                className="btn-check"
                name="size"
                id="size38"
                value={38}
                autoComplete="off"
                onChange={sizeSelectorHandler}
              />
              <label className="btn btn-outline-secondary" htmlFor="size38">
                38
              </label>
            </div>
            <button className="btn btn-dark w-100" onClick={addCartHandler}>
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
