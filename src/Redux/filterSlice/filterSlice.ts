import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterSliceState {
  searchValue: string;
  categoryName: string;
  currentPage: number;
}

const initialState: FilterSliceState = {
  searchValue: "",
  categoryName: "Все",
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryName(state, action: PayloadAction<string>) {
      state.categoryName = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryName, setCurrentPage, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
