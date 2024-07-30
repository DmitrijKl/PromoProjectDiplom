import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterSliceState {
  isAuth: string | null;
  email: string;
  token?: string;
  id?: number | null;
}

const initialState: FilterSliceState = {
  isAuth: localStorage.getItem("isAuth"),
  email: "",
  token: "",
  id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isAuth = action.payload.isAuth;
    },
    removeUser(state, action) {
      state.isAuth = action.payload.isAuth;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
