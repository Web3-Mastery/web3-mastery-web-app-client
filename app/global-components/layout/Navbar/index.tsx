'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Logo from '../../../assets/images/web3-mastery-logo.png';
import NavLinks from '../NavLinks';
import MenuToggleButtonForMobile from './components/MenuToggleButtonForMobile';
import MenuToggleButtonForDesktop from './components/MenuToggleButtonForDesktop';

// import { HiOutlineBars2 } from 'react-icons/hi2';

function Navbar() {
  //@ts-ignore
  const { isMenuOn } = useSelector((store) => store.navToggle);

  return (
    <nav
      className={`px-3 py-3 w-full sm:px-[20px] lg:px-12 sm:py-4 md:py-10 flex justify-between items-center relative`}
    >
      <div className="nav-right flex gap-16 items-center">
        <Link href="/">
          <Image
            alt="web3 mastery logo"
            src={Logo}
            width={50}
            // height={70}
            placeholder="blur"
            className="rounded-[4px]"
          />
        </Link>
        <div className="nav-links-wrapper hidden lg:inline-block">
          <NavLinks />
        </div>
      </div>
      <div className="nav-left relative">
        <div className="hidden lg:inline-block">
          <div
            className={`${isMenuOn ? 'inline-block' : 'hidden'} text-[12px] pop-up-menu bg-glass_light w-[300px] absolute z-20 right-[10px] top-[50px] border border-gray-200 rounded-[5px] px-4 py-6`}
          >
            <ul className="uppercase font-normal flex flex-col text-center sm:mx-auto">
              <Link href="/dashboard">
                <li className="border-b border-gray-300 py-5">My Dashboard</li>
              </Link>
              <Link href="#">
                <li className="border-b border-gray-300 py-5">
                  Sign up / Log in / Log out
                </li>
              </Link>
              <button className="bg-slate-950 px-4 py-4 uppercase text-normal text-white mt-6">
                Connect With Wallet
              </button>
            </ul>
          </div>
        </div>
        <MenuToggleButtonForMobile />
        <MenuToggleButtonForDesktop />
      </div>
    </nav>
  );
}

export default Navbar;
