// store.js
import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './resturentSlice';

const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
  },
});

export default store;
