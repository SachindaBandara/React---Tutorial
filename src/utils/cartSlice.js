import { createSlice } from "@reduxjs/toolkit";

// create cartSlice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["buger"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

//Export Actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;
//Export Reducer
export default cartSlice.reducer;
