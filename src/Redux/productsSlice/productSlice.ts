import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "../errorSlice/errorSlice";

export type ProductItem = {
  amount: number;
  description: string;
  price: number;
  img: string;
  category: string;
  rating: number;
  id: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface ProductsSliceState {
  items: ProductItem[];
  status: Status;
}

const initialState: ProductsSliceState = {
  items: [],
  status: Status.LOADING,
};
type FetchProducts = {
  categoryName: string;
  currentPage: number;
  searchValue: string;
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async (
    { currentPage, categoryName, searchValue }: FetchProducts,
    thunkAPI,
  ) => {
    const category = categoryName === "Все" ? "" : categoryName;
    try {
      const { data } = await axios.get<ProductItem[]>(
        `https://663df0f4e1913c476795f5cc.mockapi.io/products?page=${currentPage}&limit=4&category=${category}&description=${searchValue}`,
      );
      return data as ProductItem[];
    } catch (error: unknown) {
      if (error instanceof Error) {
        thunkAPI.dispatch(setError(error.message));
      }
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ProductItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
