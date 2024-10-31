import { createSlice } from "@reduxjs/toolkit";

const localCart = localStorage.getItem("cart");
let localCartItems = localCart ? JSON.parse(localCart).cartItems : [];
let localTotal = localCart ? JSON.parse(localCart).total : 0;

const initialState = {
  //預期的格式是[{...product,color,size,count,cartId},{...}]
  cartItems: localCartItems,
  total: localTotal,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      //如果商品條件都相同,就把數量加一
      let flag = true;
      state.cartItems.forEach((item) => {
        if (
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
        ) {
          item.count += 1;
          flag = false;
        }
      });
      if (flag) {
        state.cartItems.push(action.payload);
      }
      state.total += action.payload.price;
      // if (
      //   state.cartItems.find(
      //     (item) =>
      //       item.id === action.payload.id &&
      //       item.color === action.payload.color &&
      //       item.size === action.payload.size
      //   )
      // ) {
      //   state.cartItems.find(
      //     (item) =>
      //       item.id === action.payload.id &&
      //       item.color === action.payload.color &&
      //       item.size === action.payload.size
      //   ).count += 1;
      // } else {
      //   state.cartItems.push(action.payload);
      // }
    },
    changeCartItemCount: (state, action) => {
      //action.payload = {cartId,count}
      state.cartItems.forEach((item) => {
        if (item.cartId === action.payload.cartId) {
          state.total =
            state.total - (item.count - action.payload.count) * item.price;
          item.count = action.payload.count;
        }
      });
    },
    removeCartItem: (state, action) => {
      //action.payload = {cartId}
      state.cartItems = state.cartItems.filter((item) => {
        if (item.cartId === action.payload.cartId) {
          state.total -= item.price * item.count;
          return false;
        }
        return true;
      });
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
  },
});

export const { addCartItem, removeCartItem, changeCartItemCount, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotal = (state) => state.cart.total;

export default cartSlice.reducer;
