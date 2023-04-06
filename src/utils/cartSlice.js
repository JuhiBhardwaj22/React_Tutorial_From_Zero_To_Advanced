import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log("state", state);
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      console.log("remove", state);
      state.items.pop();
    },
    clearcart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearcart } = cartSlice.actions;

export default cartSlice.reducer;
