'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../../assets/images/web3-mastery-logo.png';
import NavLinks from '../NavLinks';
import MenuToggleButtonForMobile from './components/MenuToggleButtonForMobile';
import MenuToggleButtonForDesktop from './components/MenuToggleButtonForDesktop';
import { showModal } from '@/app/rtk-base/slices/modalSlice';

// import { HiOutlineBars2 } from 'react-icons/hi2';

function Navbar() {
  //@ts-ignore
  const { isMenuOn } = useSelector((store) => store.navToggle);
  const dispatch = useDispatch();

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
            className={`pop-up-menu ${isMenuOn ? 'inline-block' : 'hidden'} text-[12px] card-glass_dark bg-glass_light w-[300px] absolute z-20 right-[10px] top-[50px] border border-gray-200 rounded-[5px] px-4 py-6`}
          >
            <ul className="uppercase font-normal flex flex-col text-center sm:mx-auto">
              <div
                onClick={() => dispatch(showModal())}
                className="cursor-pointer"
              >
                <li className="border-b border-gray-300 py-5">Dashboard</li>
              </div>
              <div
                onClick={() => dispatch(showModal())}
                className="cursor-pointer"
              >
                <li className="border-b border-gray-300 py-5">
                  Log in / Log out
                </li>
              </div>
              <button
                className="bg-slate-950 px-4 py-4 uppercase text-normal text-white mt-6 cursor-pointer"
                onClick={() => dispatch(showModal())}
              >
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
