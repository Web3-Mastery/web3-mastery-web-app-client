import { configureStore } from '@reduxjs/toolkit';
import navToggleReducer from './slices/navToggleSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    navToggle: navToggleReducer,
    modalToggle: modalReducer
  }
});
