'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { slideNavIn } from '@/app/rtk-base/slices/navToggleSlice';

function MenuToggleButtonForMobile() {
  // @ts-ignore
  const dispatch = useDispatch();

  return (
    <div
      className="mobile-nav-bar-icon-wrapper cursor-pointer lg:hidden w-[35px] h-[35px] rounded-full border border-gray-500 px-[4px] py-[4.2px]"
      onClick={() => {
        // @ts-ignore
        dispatch(slideNavIn());
      }}
    >
      {/* <HiOutlineBars2 strokeWidth={1.5} className="w-6 h-6 text-black" /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-black"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>
    </div>
  );
}

export default MenuToggleButtonForMobile;
