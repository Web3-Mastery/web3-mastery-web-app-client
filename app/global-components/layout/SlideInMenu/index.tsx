'use client';

import React from 'react';
import NavLinks from '../NavLinks';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useSelector, useDispatch } from 'react-redux';
import { slideNavOut } from '@/app/rtk-base/slices/navToggleSlice';

function SlideInMenu() {
  // @ts-ignore
  const { isNavSlidIn } = useSelector((store) => store.navToggle);

  const dispatch = useDispatch();

  return (
    <nav
      className={`${isNavSlidIn ? 'nav--slide-out' : 'nav--slide-in'} bg-glass_light w-full lg:hidden fixed top-0 left-0 right-0 min-h-screen z-30`}
    >
      <div className="relative flex items-center">
        <div
          className="nav-bar-icon-wrapper cursor-pointer w-[35px] h-[35px] rounded-full border border-gray-500 z-40 px-[4px] pt-[5px] pb-[4.2px] absolute top-[30px] left-[30px]"
          onClick={() => dispatch(slideNavOut())}
        >
          {/* <HiOutlineBars2 strokeWidth={1.5} className="w-6 h-6 text-black" /> */}
          <HiOutlineXMark className="w-6 h-6 text-black" />
        </div>
        <button className="bg-slate-950 px-4 py-4 uppercase text-normal text-white absolute top-[30px] right-[30px] text-[10px]">
          Connect With Wallet
        </button>
      </div>
      <NavLinks />
    </nav>
  );
}

export default SlideInMenu;
