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
    <ul
      className="relative mb-[150px] md:mb-0 uppercase font-normal flex flex-col text-center p-4 sm:p-0 w-[300px] 
    xsm:w-[400px] mx-auto mt-[120px] lg:mt-[0] lg:flex-row lg:gap-10 lg:w-full text-[12px]"
    >
      <li className="w-full">
        <Link
          href="/"
          onClick={() => dispatch(slideNavOut())}
          className="flex justify-center border-b border-gray-300 py-5 lg:border-none lg:py-0 w-full"
        >
          Home
        </Link>
      </li>
      <li className="w-full">
        <Link
          href="/posts/blog"
          onClick={() => dispatch(slideNavOut())}
          className="flex justify-center border-b border-gray-300 py-5 lg:border-none lg:py-0 w-full"
        >
          Blog
        </Link>
      </li>
      <li className="w-full">
        <Link
          href="/posts/tutorials"
          onClick={() => dispatch(slideNavOut())}
          className="flex justify-center border-b border-gray-300 py-5 lg:border-none lg:py-0 w-full"
        >
          Tutorials
        </Link>
      </li>

      {/* <Link href="/learn-solidity"> */}
      <li className="w-full">
        <Link
          href="/learn"
          onClick={() => dispatch(slideNavOut())}
          className="flex justify-center border-b border-gray-300 py-5 lg:border-none lg:py-0 w-full"
        >
          Learn
        </Link>
      </li>
      <li className="w-full">
        <Link
          href="/about"
          onClick={() => dispatch(slideNavOut())}
          className="flex justify-center border-b border-gray-300 py-5 lg:border-none lg:py-0 w-full"
        >
          About
        </Link>
      </li>
      <li className="w-full">
        <Link
          href="/dashboard"
          className="lg:hidden flex justify-center border-b border-gray-300 py-5 lg:border-none lg:py-0 w-full"
          onClick={() => dispatch(slideNavOut())}
        >
          Dashboard
        </Link>
      </li>
      <li className="w-full">
        <Link
          href="/log-in"
          className="lg:hidden card-glass_dark border border-gray-300 px-4 py-4 uppercase text-normal text-slate-800 mt-6 cursor-pointer flex justify-center"
          onClick={() => dispatch(slideNavOut())}
        >
          Log in/Log out
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
