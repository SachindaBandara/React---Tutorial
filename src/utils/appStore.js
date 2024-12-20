import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Create our store
const appStore = configureStore({
    // appStore reducer that contain reducers of each silce 
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
