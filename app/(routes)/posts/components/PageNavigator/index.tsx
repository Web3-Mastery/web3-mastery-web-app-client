import React from 'react';
import Link from 'next/link';
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight
} from 'react-icons/hi2';

function PageNavigator({
  nextTitle,
  previousTitle,
  previousPostRoute,
  nextPostRoute
}: {
  nextTitle: string;
  previousTitle: string;
  previousPostRoute: string;
  nextPostRoute: string;
}) {
  return (
    <section className="page-navigator flex gap-10 mt-20 w-full md:w-[70%] lg:w-[50%] md:mx-auto justify-between border-t pt-12">
      <Link
        href={previousPostRoute}
        className={`${previousTitle ? 'flex' : 'hidden'} card-glass_dark  flex-col gap-y-4 p-4 md:px-6 rounded-[7px] w-[45%]`}
      >
        <div className="flex gap-4 items-center text-[15px]">
          <HiOutlineChevronDoubleLeft />
          <span>Previous</span>
        </div>
        <div className="poppins font-thin text-[14px]">
          {previousTitle ? previousTitle : ''}
        </div>
      </Link>
      <Link
        href={nextPostRoute}
        className={`${nextTitle ? 'flex' : 'hidden'} card-glass_dark  flex-col gap-y-4 p-4 md:px-6 rounded-[7px] w-[45%] ml-auto`}
      >
        <div className="w-full flex gap-4 items-center justify-end text-[15px]">
          <span>Read Next</span>
          <HiOutlineChevronDoubleRight />
        </div>
        <div className="poppins font-thin text-[14px] text-right">
          {nextTitle ? nextTitle : ''}
        </div>
      </Link>
    </section>
  );
}

export default PageNavigator;
