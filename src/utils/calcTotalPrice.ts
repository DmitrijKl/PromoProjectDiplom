import type { CartItem } from "../Redux/cartSlice/cartSlice";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((accum, item) => {
    return +item.price * item.count + accum;
  }, 0);
};
