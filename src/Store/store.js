import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../Slice/categorySlice";
import productReducer from "../Slice/productSlice";
import addressReducer from "../Slice/addressSlice";
import authReducer from "../Slice/authSlice";
import cartItemReducer from "../Slice/cartSlice";
import orderReducer from "../Slice/orderSlice";
import favoriteReducer from "../Slice/favoriteSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    address: addressReducer,
    authentication: authReducer,
    cart: cartItemReducer,
    orders: orderReducer,
    favorite: favoriteReducer,
  },
  // devTools: process.env.NODE_ENV !== 'production',
});
