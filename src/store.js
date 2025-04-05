import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authReducer'; // Path to your authReducer.js file
import cartReducer from './slice/Cartslice'; // Path to your cartSlice.js file

// Create Redux store using configureStore
const store = configureStore({
  reducer: {
    auth: authReducer, // Authentication reducer
    cart: cartReducer, // Cart reducer
  },
});

export default store;
