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

function CompleteSignUpPage() {
  const [completeSignUpForm, setCompleteSignUpForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function toggleShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  return (
    <main className="log-in-page flex flex-col my-[50px] sm:my-[100px] md:my-[120px] w-full px-3 xsm:w-[420px] xsm:mx-auto">
      <div className="card-glass_dark w-full px-4 py-6 flex items-center flex-col">
        <Image
          src={Web3MasteryLogo}
          alt="Web3 Mastery Logo"
          className="w-[50px] h-[50px] rounded-[4px] mb-6 mt-4"
        />
        <form className="w-full">
          <div className="input-group flex flex-col mb-6 text-[12px] sm:text-[14px]">
            <label className="poppins" htmlFor="name">
              Name
            </label>
            <input
              className="mt-2 px-3 py-3 border outline-none"
              type="text"
              required
              placeholder="tell us your name"
              value={completeSignUpForm.name}
              onChange={(e) => {
                setCompleteSignUpForm({
                  ...completeSignUpForm,
                  name: e.target.value
                });
              }}
              id="name"
            />
          </div>
          <div className="input-group flex flex-col mb-6 text-[12px] sm:text-[14px]">
            <label className="poppins" htmlFor="email">
              Email
            </label>
            <input
              className="mt-2 px-3 py-3 border outline-none"
              type="email"
              required
              placeholder="please add you email"
              value={completeSignUpForm.email}
              onChange={(e) => {
                setCompleteSignUpForm({
                  ...completeSignUpForm,
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
              value={completeSignUpForm.password}
              onChange={(e) => {
                setCompleteSignUpForm({
                  ...completeSignUpForm,
                  password: e.target.value
                });
              }}
              id="password"
            />
            <HiOutlineEye
              className={`${showPassword ? 'hidden' : 'inline-block'} text-[20px] cursor-pointer absolute top-[43px] right-4`}
              onClick={toggleShowPassword}
            />
            <HiOutlineEyeSlash
              className={`${showPassword ? 'inline-block' : 'hidden'} text-[20px] cursor-pointer absolute top-[43px] right-4`}
              onClick={toggleShowPassword}
            />
          </div>
          <div className="confirm-password input-group flex flex-col mb-6 text-[12px] sm:text-[14px] relative">
            <label className="poppins" htmlFor="confirm-password">
              Confirm password
            </label>
            <input
              className="mt-2 px-4 py-3 border outline-none"
              type={showConfirmPassword ? 'text' : 'password'}
              required
              placeholder="re-enter password to confirm"
              value={completeSignUpForm.confirmPassword}
              onChange={(e) => {
                setCompleteSignUpForm({
                  ...completeSignUpForm,
                  confirmPassword: e.target.value
                });
              }}
              id="confirm-password"
            />
            <HiOutlineEye
              className={`${showConfirmPassword ? 'hidden' : 'inline-block'} text-[20px] cursor-pointer absolute top-[43px] right-4`}
              onClick={toggleShowConfirmPassword}
            />
            <HiOutlineEyeSlash
              className={`${showConfirmPassword ? 'inline-block' : 'hidden'} text-[20px] cursor-pointer absolute top-[43px] right-4`}
              onClick={toggleShowConfirmPassword}
            />
          </div>
          <button
            type="button"
            //   onClick={logInUser}
            className="submit text-center bg-black py-4 text-[12px] sm:text-[14px] text-white w-full poppins mt-4"
          >
            Complete SignUp
          </button>
          <p className="text-center text-[12px] mt-4">
            Already have an account?{' '}
            <Link href="/log-in" className="underline text-purple-800">
              log-in instead
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

export default CompleteSignUpPage;
