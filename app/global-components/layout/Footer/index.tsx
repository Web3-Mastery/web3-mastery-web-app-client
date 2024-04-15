'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import IconWrapper from './IconWrapper';
import { IoLogoTwitter, IoLogoYoutube, IoLogoLinkedin } from 'react-icons/io5';
import { BiLogoDiscordAlt } from 'react-icons/bi';
import { BiLogoGithub } from 'react-icons/bi';
import FooterForm from './FooterForm';

function Footer() {
  const [showInputErrorPopUp, setShowInputErrorPopUp] = useState(false);
  const [showErrorPopUp, setShowErrorPopUp] = useState(false);
  const [showSuccessPopUp, setShowSuccessPopUp] = useState(false);

  const { subscriptionSuccessState } = useSelector(
    // @ts-ignore
    (store) => store.newsletter
  );

  return (
    <footer className="px-3 sm:px-16 pt-40">
      {!showErrorPopUp && !showInputErrorPopUp && !subscriptionSuccessState && (
        <FooterForm
          setShowInputErrorPopUp={setShowInputErrorPopUp}
          setShowErrorPopUp={setShowErrorPopUp}
          // setShowSuccessPopUp={setShowSuccessPopUp}
        />
      )}

      <div className="subscription-process-notification text-[12px] w-full sm:w-[500px] mx-auto">
        <div
          className={`${!showErrorPopUp && 'hidden'} p-4 bg-red-50 text-red-500 font-extralight`}
        >
          Sorry, an error ocurred. Please try again!
        </div>
        <div
          className={`${!showInputErrorPopUp && 'hidden'} p-4 bg-red-50 text-red-500 font-extralight`}
        >
          Please provide a valid email address.
        </div>
        <div
          className={`${!subscriptionSuccessState && 'hidden'} p-4 bg-green-50 text-green-500 font-light`}
        >
          You're in! <br />
          <br /> Please check you email inbox for a personal welcome message
          from me(Andrew James Okpainmo). <br />
          <br />
          Do note, that every subsequent(newsletter) email, will come from Web3
          Mastery. <br />
          <br /> Cheers!!! <br />
          <br />
          <span className="text-2xl">🤓</span>
        </div>
      </div>
      <section className="footer-links flex flex-wrap gap-4 sm:gap-8 justify-center mt-20 font-light text-gray-400 poppins text-[10px] uppercase">
        <Link href="/posts/blog">Blog</Link>
        <Link href="/posts/tutorials">Tutorials</Link>
        <Link href="/posts/solidity">Learn Solidity</Link>
        <Link href="/posts/hardhat">Learn Hardhat</Link>
        <Link href="/posts/foundry">Learn Foundry</Link>
        <Link href="/about">About</Link>
      </section>
      <section className="socials-section flex gap-6 justify-center mt-6 mb-16">
        <IconWrapper>
          <a href="https://twitter.com/web3mastery_org">
            <IoLogoTwitter className="text-[17px] translate-y-[1px]" />
          </a>
        </IconWrapper>
        <IconWrapper>
          <a href="https://www.linkedin.com/company/web3-mastery">
            <IoLogoLinkedin className="text-[16.5px] translate-y-[1px]" />
          </a>
        </IconWrapper>

        {/* Remove the below div-wrapper and let elements be direct inside "socials-section" due to flex assignment */}
        <div className="hidden">
          <IconWrapper>
            <a href="https://github.com/Web3-Mastery">
              <BiLogoGithub className="text-[19px] translate-x-[-1px] translate-y-[-0.5px]" />
            </a>
          </IconWrapper>
          <IconWrapper>
            <BiLogoDiscordAlt className="text-[17px]" />
          </IconWrapper>
          <IconWrapper>
            <IoLogoYoutube className="text-[17px]" />
          </IconWrapper>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
