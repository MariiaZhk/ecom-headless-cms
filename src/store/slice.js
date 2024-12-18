import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  photos: [],

  isLoading: false,
  error: null,
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder;
  },
});

export const clientsReducer = clientsSlice.reducer;
