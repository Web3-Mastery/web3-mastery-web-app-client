'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../assets/images/web3-mastery-logo.png';
import useFetch from '@/app/hooks/useFetch';
import { BsCaretDownFill } from 'react-icons/bs';
import { BsCaretUpFill } from 'react-icons/bs';
import useSWR, { mutate } from 'swr';

function MarketOverview() {
  let topTenCurrencies;

  const url = 'https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd';
  const { data, isLoading, error }: any = useFetch(url);

  // const refetch = () => {
  //   mutate(url);
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Event to re-trigger every 1 second
  //     console.log('Refetching market data...');
  //     refetch();
  //   }, 1000);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(interval);
  // });

  if (isLoading) {
    return (
      <section className="px-3 sm:px-[20px] lg:px-12 overflow-x-auto w-full">
        <div className="border-y py-2">
          Loading top tokens market preview...{' '}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-3 sm:px-[20px] lg:px-12 overflow-x-auto w-full">
        <div className="border-y py-2">
          An error occured!!! - cannot fetch top tokens market preview.
        </div>
      </section>
    );
  }

  if (data) {
    topTenCurrencies = data.slice(0, 10);
    console.log(topTenCurrencies);
  }

  return (
    <section className=" px-3 sm:px-[20px] lg:px-12 overflow-x-hidden w-full flex justify-center items-center">
      <div className="slider border-y py-2">
        <div className="slide-track">
          {topTenCurrencies &&
            topTenCurrencies.map((each: any) => {
              return (
                <div
                  key={each.id}
                  className="slide token-item-card flex gap-[10px] items-center justify-center"
                >
                  <Image
                    alt="web3 mastery logo"
                    src={each.image}
                    width={20}
                    height={20}
                    // placeholder="blur"
                    className="rounded-[4px]"
                  />
                  <div className="flex gap-[6px] items-center justify-center">
                    <div className="token-code poppins text-[12px] font-semibold">
                      {each.symbol}
                    </div>
                    {each.price_change_percentage_24h < 0 ? (
                      <BsCaretDownFill className="text-[12px] text-red-600" />
                    ) : (
                      <BsCaretUpFill className="text-[12px] text-green-600" />
                    )}
                  </div>
                  <div className="token-current-price text-[12px]">
                    {each.current_price}
                  </div>
                  <div className="token-price-percentage-change-in-last-24-hours text-[12px]">
                    {each.price_change_percentage_24h}%
                  </div>
                </div>
              );
            })}
          {topTenCurrencies &&
            topTenCurrencies.map((each: any) => {
              return (
                <div
                  key={each.id}
                  className="slide token-item-card flex gap-[10px] items-center justify-center"
                >
                  <Image
                    alt="web3 mastery logo"
                    src={each.image}
                    width={20}
                    height={20}
                    // placeholder="blur"
                    className="rounded-[4px]"
                  />
                  <div className="flex gap-[6px] items-center justify-center">
                    <div className="token-code poppins text-[12px] font-semibold">
                      {each.symbol}
                    </div>
                    {each.price_change_percentage_24h < 0 ? (
                      <BsCaretDownFill className="text-[12px] text-red-600" />
                    ) : (
                      <BsCaretUpFill className="text-[12px] text-green-600" />
                    )}
                  </div>
                  <div className="token-current-price text-[12px]">
                    {each.current_price}
                  </div>
                  <div className="token-price-percentage-change-in-last-24-hours text-[12px]">
                    {each.price_change_percentage_24h}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default MarketOverview;
