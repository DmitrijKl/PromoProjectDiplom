import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice/productSlice";
import cartSlice from "./cartSlice/cartSlice";
import filterSlice from "./filterSlice/filterSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { productSlice, cartSlice, filterSlice },
});

export type IRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
