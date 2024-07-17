import type { IRootState } from "../store";

export const cartSelector = (state: IRootState) => state.cartSlice;
