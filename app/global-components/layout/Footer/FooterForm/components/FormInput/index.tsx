'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSubscriptionForm } from '@/app/rtk-base/slices/newsletterSlice';

function SubscriptionFormInput() {
  const dispatch = useDispatch();

  // @ts-ignore
  const { subscriptionForm } = useSelector(
    // @ts-ignore
    (store) => store.newsletter
  );

  return (
    <>
      <input
        className="bg-glass_light pl-4 pr-16 py-5 outline-none rounded-[3px] border border-gray-300"
        type="email"
        required
        placeholder="subscribe to the Web3 Mastery newsletter"
        value={subscriptionForm.email}
        onChange={(e) => {
          dispatch(updateSubscriptionForm(e.target.value));
        }}
        id="email"
      />
    </>
  );
}

export default SubscriptionFormInput;
