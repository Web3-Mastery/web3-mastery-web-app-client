import { configureStore } from '@reduxjs/toolkit';
import navToggleReducer from './slices/navToggleSlice';

export const store = configureStore({
  reducer: {
    navToggle: navToggleReducer
    // modal: modalReducer
  }
});
