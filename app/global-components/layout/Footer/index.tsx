import React from 'react';
import { RxPaperPlane } from 'react-icons/rx';
import Link from 'next/link';
import IconWrapper from './IconWrapper';
import { IoLogoTwitter, IoLogoYoutube, IoLogoLinkedin } from 'react-icons/io5';
import { BiLogoDiscordAlt } from 'react-icons/bi';
import { BiLogoGithub } from 'react-icons/bi';

function Footer() {
  return (
    <footer className="px-3 sm:px-16 pt-40">
      <form
        action="#"
        className="relative sm:text-[14px] w-full sm:w-[400px] sm:mx-auto text-gray-400 px-5"
      >
        <div className="input-group flex flex-col w-full">
          {/* <label htmlFor="email">Email</label> */}
          <input
            className="bg-glass_light pl-4 pr-16 py-5 outline-none rounded-[3px] border border-gray-300"
            type="email"
            required
            placeholder="subscribe to the Web3 Mastery newsletter"
            // value={loginForm.email}
            id="email"
          />
        </div>
        <button className="rounded-full w-[35px] h-[35px] absolute right-9 top-[13px] bg-none hover:bg-slate-950 border border-gray-500  text-slate-950 hover:text-white  py-[3px] pl-[9px] pr-[7px]">
          <RxPaperPlane className="text-[16px]" />
        </button>
      </form>
      <section className="footer-links flex flex-wrap gap-4 sm:gap-8 justify-center mt-20 font-light text-gray-400 poppins text-[12px] uppercase">
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
