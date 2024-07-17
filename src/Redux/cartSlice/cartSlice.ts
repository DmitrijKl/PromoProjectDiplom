import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

export type CartItem = {
  amount: number;
  description: string;
  price: number;
  img: string;
  category: string;
  rating: number;
  id: string;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        } else {
          state.items = state.items.filter((item) => {
            return item.id !== action.payload;
          });
        }
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    addItemsFromLocalStorage(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
      state.totalPrice = calcTotalPrice(state.items);
    },
  },
});

export const {
  addItem,
  removeItem,
  clearItems,
  minusItem,
  addItemsFromLocalStorage,
} = cartSlice.actions;

export default cartSlice.reducer;
