'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Web3MasteryLogo from '../../../assets/images/web3-mastery-logo.png';
import Link from 'next/link';
import { BsGoogle } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { HiMiniWallet } from 'react-icons/hi2';
import { HiOutlineEye } from 'react-icons/hi2';
import { HiOutlineEyeSlash } from 'react-icons/hi2';

function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <main className="log-in-page flex flex-col mt-[50px] sm:mt-[100px] md:mt-[150px] w-full px-3 xsm:w-[420px] xsm:mx-auto">
      <div className="card-glass_dark w-full px-4 py-6 flex items-center flex-col">
        <Image
          src={Web3MasteryLogo}
          alt="Web3 Mastery Logo"
          className="w-[50px] h-[50px] rounded-[4px] mb-6 mt-4"
        />
        <form className="w-full">
          <div className="input-group flex flex-col mb-6 text-[12px] sm:text-[14px]">
            <label className="poppins" htmlFor="email">
              Email
            </label>
            <input
              className="mt-2 px-3 py-3 border outline-none"
              type="email"
              required
              placeholder="please add you email"
              value={loginForm.email}
              onChange={(e) => {
                setLoginForm({
                  ...loginForm,
                  email: e.target.value
                });
              }}
              id="email"
            />
          </div>
          <div className="password input-group flex flex-col mb-6 text-[12px] sm:text-[14px] relative">
            <label className="poppins" htmlFor="password">
              Password
            </label>
            <input
              className="mt-2 px-4 py-3 border outline-none"
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="please input your password"
              value={loginForm.password}
              onChange={(e) => {
                setLoginForm({
                  ...loginForm,
                  password: e.target.value
                });
              }}
              id="password"
            />
            <HiOutlineEye
              className={`${showPassword ? 'hidden' : 'inline-block'} text-[20px] cursor-pointer absolute top-[38px] right-4`}
              onClick={toggleShowPassword}
            />
            <HiOutlineEyeSlash
              className={`${showPassword ? 'inline-block' : 'hidden'} text-[20px] cursor-pointer absolute top-[38px] right-4`}
              onClick={toggleShowPassword}
            />
          </div>
          <button
            type="button"
            //   onClick={logInUser}
            className="submit text-center bg-black py-4 text-[12px] sm:text-[14px] text-white w-full poppins mt-4"
          >
            Log in
          </button>
          <p className="text-center text-[12px] mt-4">
            New to Web3 Mastery?{' '}
            <Link href="/start-sign-up" className="underline text-purple-800">
              sign-up instead
            </Link>{' '}
          </p>
        </form>
        <section className="alternative-signups-wrapper mt-6 flex gap-4">
          <div className="icons-wrapper rounded-full w-[40px] h-[40px] bg-gray-50 flex items-center justify-center">
            <BsGoogle />
          </div>
          <div className="icons-wrapper rounded-full w-[40px] h-[40px] bg-gray-50 flex items-center justify-center">
            <BsLinkedin />
          </div>
          <div className="wallet-signup-option">
            <div className="icons-wrapper rounded-full px-4 py-3 bg-gray-50 flex items-center justify-center gap-2">
              <HiMiniWallet className="text-[16px]" />
              <span className="poppins text-[12px]">Wallet Authentication</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
