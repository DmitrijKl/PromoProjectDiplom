import type { IRootState } from "../store";
import type { CartItem } from "./cartSlice";

export const cartSelector = (state: IRootState) => state.cartSlice;

export const cartItemSelector = (state: IRootState, id: string | undefined) =>
  state.cartSlice.items.find((item: CartItem) => item.id === id);
