
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import reviewsSlice from './reviewsSlice';
import ordersSlice from './ordersSlice';

export const store = configureStore({
  reducer: { 
    cart: cartSlice,
    reviews: reviewsSlice,
    orders: ordersSlice
  },
});