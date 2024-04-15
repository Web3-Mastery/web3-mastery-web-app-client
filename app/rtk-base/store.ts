import { configureStore } from '@reduxjs/toolkit';
import navToggleReducer from './slices/navToggleSlice';
import modalReducer from './slices/modalSlice';
import newsletterReducer from './slices/newsletterSlice';

export const store = configureStore({
  reducer: {
    navToggle: navToggleReducer,
    modalToggle: modalReducer,
    newsletter: newsletterReducer
  }
});
