import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { slideNavOut } from '@/app/rtk-base/slices/navToggleSlice';
import { showModal } from '@/app/rtk-base/slices/modalSlice';
import { HiChevronDown } from 'react-icons/hi2';

function NavLinks() {
  const [showLearnMenu, setShowLearnMenu] = useState(false);

  const dispatch = useDispatch();

  function toggleLearnMenu() {
    setShowLearnMenu(!showLearnMenu);
  }

  return (
    <ul className="relative mb-[150px] md:mb-0 uppercase font-normal flex flex-col text-center p-4 sm:p-0 w-[300px] xsm:w-[400px] mx-auto mt-[120px] lg:mt-[0] lg:flex-row lg:gap-10 lg:w-full text-[12px]">
      <Link href="/" onClick={() => dispatch(slideNavOut())}>
        <li className="border-b border-gray-300 py-5 lg:border-none lg:py-0">
          Home
        </li>
      </Link>
      <Link href="/posts/blog" onClick={() => dispatch(slideNavOut())}>
        <li className="border-b border-gray-300 py-5 lg:border-none lg:py-0">
          Blog
        </li>
      </Link>
      <Link href="/posts/tutorials" onClick={() => dispatch(slideNavOut())}>
        <li className="border-b border-gray-300 py-5 lg:border-none lg:py-0">
          Tutorials
        </li>
      </Link>

      {/* <Link href="/learn-solidity"> */}
      <Link
        href="/learn"
        className="border-b border-gray-300 py-5 lg:border-none lg:py-0 cursor-pointer flex gap-3 items-center justify-center"
        onClick={() => {
          dispatch(slideNavOut());
          toggleLearnMenu();
        }}
      >
        <span>Learn</span>
        <HiChevronDown className="text-[12px] hidden" />
      </Link>
      {/* </Link> */}

      <Link href="/about" onClick={() => dispatch(slideNavOut())}>
        <li className="border-b border-gray-300 py-5 lg:border-none lg:py-0">
          About
        </li>
      </Link>
      <div
        // href="/"
        onClick={() => {
          dispatch(showModal());
          dispatch(slideNavOut());
        }}
      >
        <li className="border-b lg:hidden border-gray-300 py-5 lg:border-none lg:py-0 cursor-pointer">
          Dashboard
        </li>
      </div>
      <button
        className="lg:hidden card-glass_dark border border-gray-300 px-4 py-4 uppercase text-normal text-slate-800 mt-6 cursor-pointer"
        onClick={() => dispatch(showModal())}
      >
        Log in/Log out
      </button>
    </ul>
  );
}

export default NavLinks;
