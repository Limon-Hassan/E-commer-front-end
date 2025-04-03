import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authReducer';

// Create Redux store using configureStore
const store = configureStore({
  reducer: {
    auth: authReducer, // Example reducer for authentication
  },
});

export default store;
