import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const url = 'https://course-api.com/react-useReducer-cart-project';

// @ts-ignore
// const { slideNavIn } = useSelector((store) => store.navToggle);

const initialState = {
  isNavSlidIn: true,
  isMenuOn: false
};

const navToggleSlice = createSlice({
  name: 'navToggle',
  initialState,
  reducers: {
    slideNavOut: (state) => {
      state.isNavSlidIn = true;
    },
    slideNavIn: (state) => {
      state.isNavSlidIn = false;
    },
    toggleMenu: (state, action) => {
      if (initialState.isMenuOn == true) {
        state.isMenuOn = false;
      } else {
        state.isMenuOn = !action.payload;
      }
      //   console.log('hello');
    }
    // offMenu: (state) => {
    //   state.isMenuOn = false;
    // }
  }
});

export const { slideNavOut, slideNavIn, toggleMenu } = navToggleSlice.actions;

export default navToggleSlice.reducer;
