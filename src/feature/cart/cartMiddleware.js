//將cart紀錄在localStorage
export const cartPersist = (store) => (next) => (action) => {
  let localCartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).cartItems
    : [];
  let localTotal = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).total
    : 0;
  switch (action.type) {
    case "cart/addCartItem":
      let index = localCartItems.findIndex((item) => {
        return (
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
        );
      });

      if (index !== -1) {
        localCartItems[index].count += 1;
        localTotal += action.payload.price;
      } else {
        localCartItems.push(action.payload);
        localTotal += action.payload.price;
      }
      localStorage.setItem(
        "cart",
        JSON.stringify({ cartItems: localCartItems, total: localTotal })
      );
      break;
    case "cart/removeCartItem":
      localCartItems = localCartItems.filter((item) => {
        if (item.cartId === action.payload.cartId) {
          localTotal -= item.price * item.count;
          return false;
        }
        return true;
      });
      localStorage.setItem(
        "cart",
        JSON.stringify({ cartItems: localCartItems, total: localTotal })
      );
      break;
    case "cart/clearCart":
      localStorage.clear();
      break;
    case "cart/changeCartItemCount":
      localCartItems.forEach((item) => {
        if (item.cartId === action.payload.cartId) {
          localTotal -= (item.count - action.payload.count) * item.price;
          item.count = action.payload.count;
        }
      });
      localStorage.setItem(
        "cart",
        JSON.stringify({ cartItems: localCartItems, total: localTotal })
      );
      break;
    default:
      break;
  }
  return next(action);
};
