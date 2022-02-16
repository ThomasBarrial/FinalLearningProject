import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/NavSlices';

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
