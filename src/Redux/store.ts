import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice/productSlice";

export const store = configureStore({
  reducer: { productSlice },
});
