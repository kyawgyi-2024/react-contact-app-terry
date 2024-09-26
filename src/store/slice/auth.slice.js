import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  data: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    processing: (state) => {
      state.loading = true;
    },
    error: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    login: (state, action) => {
      state.loading = true;
      state.error = null;
      state.data = action.payload;
      state.auth = true;
    },
    logout: (state, action) => {
      state.loading = false;
      state.error = null;
      state.auth = false;
    },
  },
});

export const { error, login, logout, processing } = authSlice.actions;
export default authSlice.reducer;
