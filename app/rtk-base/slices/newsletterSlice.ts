import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// const serverBaseUrl = process.env.BACK_END_BASE_URL;
// const serverBaseUrl = 'https://api.web3mastery.org';
const serverBaseUrl = 'http://localhost:8080';

type defaultStateSpecs = {
  isSubscriptionInProgress: boolean;
  subscriptionResponseData: any;
  subscriptionSuccessState: boolean;
  subscriptionForm: { email: string };
};

const defaultState: defaultStateSpecs = {
  isSubscriptionInProgress: false,
  subscriptionResponseData: {},
  subscriptionSuccessState: false,
  subscriptionForm: { email: '' }
};

export const createNewsletterSubscription = createAsyncThunk(
  'newsletter/createSubscription',
  async (name, thunkAPI) => {
    try {
      // @ts-ignore
      const _subscriptionForm = thunkAPI.getState().newsletter.subscriptionForm;

      //   console.log(name);
      //   console.log(thunkAPI.dispatch());
      //   console.log(serverBaseUrl);
      const response = await axios.post(
        `${serverBaseUrl}/api/v1/newsletter-subscription/subscribe-to-newsletter`,
        _subscriptionForm
      );

      if (response) {
        console.log(response);

        return response.data;
      }
    } catch (error) {
      console.log(error);
      // @ts-ignore
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState: defaultState,

  reducers: {
    toggleSubscriptionProgressState: (state, action) => {
      if (defaultState.isSubscriptionInProgress == true) {
        state.isSubscriptionInProgress = false;
      } else {
        state.isSubscriptionInProgress = !action.payload;
      }
    },

    resetSubscriptionSuccessState: (state) => {
      console.log('hello reset');
      state.subscriptionSuccessState = false;
    },

    updateSubscriptionForm: (state, action) => {
      const { payload } = action;

      state.subscriptionForm = { email: payload };
    }
  },

  extraReducers: (builder) => {
    builder.addCase(createNewsletterSubscription.fulfilled, (state, action) => {
      state.subscriptionResponseData = action.payload;
      state.isSubscriptionInProgress = false;
      state.subscriptionSuccessState = true;
    });

    builder.addCase(createNewsletterSubscription.rejected, (state, action) => {
      state.subscriptionResponseData = action.payload;
      state.isSubscriptionInProgress = false;
    });
  }
});

export const {
  toggleSubscriptionProgressState,
  updateSubscriptionForm,
  resetSubscriptionSuccessState
} = newsletterSlice.actions;
export default newsletterSlice.reducer;
