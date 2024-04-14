import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { slideNavOut } from '@/app/rtk-base/slices/navToggleSlice';
import { showModal } from '@/app/rtk-base/slices/modalSlice';

function NavLinks() {
  const [showLearnMenu, setShowLearnMenu] = useState(false);

  const dispatch = useDispatch();

  function toggleLearnMenu() {
    setShowLearnMenu(!showLearnMenu);
  }

  return (
    <ul className="relative mb-[150px] md:mb-0 uppercase font-normal flex flex-col text-center p-4 sm:p-0 w-[300px] xsm:w-[400px] mx-auto mt-[120px] lg:mt-[0] lg:flex-row lg:gap-10 lg:w-full text-[12px]">
      <div
        // href="/"
        onClick={() => {
          dispatch(showModal());
          dispatch(slideNavOut());
        }}
      >
        <li className="border-b lg:hidden border-gray-300 py-5 lg:border-none lg:py-0 cursor-pointer">
          My Dashboard
        </li>
      </div>
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
      <li
        className="border-b border-gray-300 py-5 lg:border-none lg:py-0 cursor-pointer"
        onClick={toggleLearnMenu}
      >
        Learn
      </li>
      {/* </Link> */}
      <div
        className={`learn-menu ${showLearnMenu ? 'inline-block' : 'hidden'} card-glass_dark w-[300px] absolute z-20 right-[0] sm:right-[50px] lg:right-[-50px] top-[295px] md:top-[285px] lg:top-[30px] border border-gray-200 rounded-[5px] px-4 py-6`}
      >
        <ul className=" uppercase font-normal flex flex-col text-center sm:mx-auto">
          <Link
            href="/posts/solidity"
            onClick={() => {
              dispatch(slideNavOut());
              toggleLearnMenu();
            }}
          >
            <li className="border-b border-gray-300 py-5">Learn Solidity</li>
          </Link>
          <Link
            href="/posts/hardhat"
            onClick={() => {
              dispatch(slideNavOut());
              toggleLearnMenu();
            }}
          >
            <li className="border-b border-gray-300 py-5">Learn Hardhat</li>
          </Link>
          <Link
            href="/posts/foundry"
            onClick={() => {
              dispatch(slideNavOut());
              toggleLearnMenu();
            }}
          >
            <li className="py-5">Learn Foundry</li>
          </Link>
          {/* <button className="bg-slate-950 px-4 py-4 uppercase text-normal text-white mt-6">
            Connect With Wallet
          </button> */}
        </ul>
      </div>

      <Link href="/about" onClick={() => dispatch(slideNavOut())}>
        <li className="border-b border-gray-300 py-5 lg:border-none lg:py-0">
          About
        </li>
      </Link>
    </ul>
  );
}

export default NavLinks;
