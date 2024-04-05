import React, { useState } from 'react';
import Link from 'next/link';

function NavLinks() {
  const [showLearnMenu, setShowLearnMenu] = useState(false);

  function toggleLearnMenu() {
    setShowLearnMenu(!showLearnMenu);
  }

  return (
    <ul className="relative uppercase font-normal flex flex-col text-center p-4 sm:p-0 w-[300px] xsm:w-[400px] mx-auto mt-[120px] lg:mt-[0] lg:flex-row lg:gap-10 lg:w-full text-[12px]">
      <Link href="/dashboard">
        <li className="border-b lg:hidden border-gray-300 py-5 lg:border-none lg:py-0">
          My Dashboard
        </li>
      </Link>
      <Link href="/">
        <li className="border-b border-gray-300 py-5 lg:border-none lg:py-0">
          Home
        </li>
      </Link>

      <Link href="/posts/tutorials">
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
        className={`${showLearnMenu ? 'inline-block' : 'hidden'} learn-menu bg-glass_light w-[300px] absolute z-20 right-[10px] top-[250px] lg:top-[30px] border border-gray-200 rounded-[5px] px-4 py-6`}
      >
        <ul className="uppercase font-normal flex flex-col text-center sm:mx-auto">
          <Link href="/posts/solidity">
            <li className="border-b border-gray-300 py-5">Learn Solidity</li>
          </Link>
          <Link href="/posts/hardhat">
            <li className="border-b border-gray-300 py-5">Learn Hardhat</li>
          </Link>
          <Link href="/posts/foundry">
            <li className="py-5">Learn Foundry</li>
          </Link>
          {/* <button className="bg-slate-950 px-4 py-4 uppercase text-normal text-white mt-6">
            Connect With Wallet
          </button> */}
        </ul>
      </div>
      <Link href="/posts/blog">
        <li className="border-b border-gray-300 py-5 lg:border-none lg:py-0">
          Blog
        </li>
      </Link>
      <Link href="/about">
        <li className="border-b border-gray-300 py-5 lg:border-none lg:py-0">
          About
        </li>
      </Link>
    </ul>
  );
}

export default NavLinks;
