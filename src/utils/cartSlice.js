import { createSlice, current } from "@reduxjs/toolkit";

// create cartSlice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["buger"],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses immer BTS
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },

    // OrignalState = {items: ["buger"]}
    clearCart: (state) => {
      state.items.length = 0; // Modify current state
      //return {items: []} 

      //---------------------------------
      // console.log(state); // buger
      // console.log(current.state); // original state

      // state = []; // Local variable ( That does not chnged the current state )
      // console.log(state);
    },
  },
});

//Export Actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;
//Export Reducer
export default cartSlice.reducer;
