'use client';

import React, { useState, Fragment } from 'react';
import Image from 'next/image';
import Web3MasteryLogo from '../../../assets/images/web3-mastery-logo.png';
import Link from 'next/link';
import { BsGoogle } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { HiMiniWallet } from 'react-icons/hi2';
import { Dialog, Transition } from '@headlessui/react';

function StartSignUpPage() {
  const [startSignUpForm, setStartSignUpForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <main className="log-in-page flex flex-col mt-[50px] sm:mt-[100px] md:mt-[150px] w-full px-3 xsm:w-[420px] xsm:mx-auto">
      <div className="card-glass_dark w-full px-4 py-6 flex items-center flex-col">
        <Image
          src={Web3MasteryLogo}
          alt="Web3 Mastery Logo"
          className="w-[50px] h-[50px] rounded-[4px] mb-6 mt-4"
        />
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 poppins"
                    >
                      Sign Up Initiated!
                    </Dialog.Title>
                    <div className="mt-3">
                      <p className="text-sm text-gray-500 leading-[25px]">
                        We just sent your sign-up link to the provided email
                        address(okpainmoandrew@gmail.com). Please Check your
                        mail-box and complete your sign-up with the delivered
                        link.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium bg-black text-white"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
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
              value={startSignUpForm.name}
              onChange={(e) => {
                setStartSignUpForm({
                  ...startSignUpForm,
                  name: e.target.value
                });
              }}
              id="password"
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
              value={startSignUpForm.email}
              onChange={(e) => {
                setStartSignUpForm({
                  ...startSignUpForm,
                  email: e.target.value
                });
              }}
              id="email"
            />
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="submit text-center bg-black py-4 text-[12px] sm:text-[14px] text-white w-full poppins mt-4"
          >
            Continue
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

export default StartSignUpPage;
