import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const appStore = configureStore({
  reducer: {  //one reducer to create one big store
    cart: cartReducer, //can have multiple small stores
  },
});

export default appStore;
