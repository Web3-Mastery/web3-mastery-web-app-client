import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isModalOn: false
};

const modalSlice = createSlice({
  name: 'navToggle',
  initialState,
  reducers: {
    showModal: (state) => {
      state.isModalOn = true;
    },
    hideModal: (state) => {
      state.isModalOn = false;
    }
  }
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
