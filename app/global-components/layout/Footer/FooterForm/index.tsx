'use client';

import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RxPaperPlane } from 'react-icons/rx';
import { RotatingSquare } from 'react-loader-spinner';
import {
  toggleSubscriptionProgressState,
  createNewsletterSubscription,
  resetSubscriptionSuccessState
} from '@/app/rtk-base/slices/newsletterSlice';
// import { toast } from 'react-hot-toast';
import SubscriptionFormInput from './components/FormInput';

const serverBaseUrl = process.env.NEXT_PUBLIC_BACK_END_BASE_URL;

function FooterForm({
  setShowInputErrorPopUp,
  setShowErrorPopUp
  //   setShowSuccessPopUp
}: {
  setShowInputErrorPopUp: Dispatch<SetStateAction<boolean>>;
  setShowErrorPopUp: Dispatch<SetStateAction<boolean>>;
  //   setShowSuccessPopUp: Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();
  // @ts-ignore

  const {
    isSubscriptionInProgress,
    subscriptionForm,
    subscriptionSuccessState
  } = useSelector(
    // @ts-ignore
    (store) => store.newsletter
  );

  async function handleSubscription(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    console.log(subscriptionForm.email);
    console.log(isSubscriptionInProgress);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (
      subscriptionForm.email == '' ||
      !emailRegex.test(subscriptionForm.email)
    ) {
      setShowInputErrorPopUp(true);

      setTimeout(() => setShowInputErrorPopUp(false), 3000);

      return;
    }

    dispatch(toggleSubscriptionProgressState(isSubscriptionInProgress));
    console.log(isSubscriptionInProgress);

    // @ts-ignore
    dispatch(createNewsletterSubscription(serverBaseUrl));
  }

  return (
    <>
      <form
        action="#"
        className="relative sm:text-[14px] w-full sm:w-[400px] sm:mx-auto text-gray-400 px-5"
      >
        <div className="input-group flex flex-col w-full">
          {/* <label htmlFor="email">Email</label> */}
          <SubscriptionFormInput />
        </div>
        <button
          className={`${isSubscriptionInProgress && 'hidden'} rounded-full w-[35px] h-[35px] absolute right-9 top-[13px] bg-none hover:bg-slate-950 border 
      border-gray-500  text-slate-950 hover:text-white  py-[3px] pl-[9px] pr-[7px] `}
          onClick={handleSubscription}
        >
          <RxPaperPlane className="text-[16px]" />
        </button>
        <div
          className={`${!isSubscriptionInProgress && 'hidden'} absolute top-[-19px] right-[18px]`}
        >
          <RotatingSquare
            visible={true}
            height="100"
            width="100"
            color="#000"
            strokeWidth="1"
            ariaLabel="rotating-square-loading"
            // wrapperStyle={{ display: `${!isSubscriptionInProgress && 'none'}` }}
            wrapperClass="w-[70px]"
          />
        </div>
      </form>
    </>
  );
}

export default FooterForm;
