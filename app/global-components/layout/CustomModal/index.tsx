'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { hideModal, showModal } from '@/app/rtk-base/slices/modalSlice';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '@/app/rtk-base/slices/navToggleSlice';

function CustomModal() {
  // @ts-ignore
  const { isModalOn } = useSelector((store) => store.modalToggle);
  // @ts-ignore
  const { isMenuOn } = useSelector((store) => store.navToggle);
  const dispatch = useDispatch();

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={() => dispatch(showModal())}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div>

      <Transition show={isModalOn} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            dispatch(hideModal());
            dispatch(toggleMenu(isMenuOn));
          }}
        >
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-[22px] leading-6 text-gray-900 poppins mb-8 font-extralight"
                  >
                    Feature Alert
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-gray-500 flex flex-col gap-4 text-base font-light">
                      <span>Oh! Oh!!</span>
                      <span>
                        This feature is not ready yet. For now, you can explore
                        and read awesome articles from the{' '}
                        <Link
                          href="/posts/blog"
                          className="underline"
                          onClick={() => {
                            dispatch(hideModal());
                            dispatch(toggleMenu(isMenuOn));
                          }}
                        >
                          blog
                        </Link>{' '}
                        or learn from the list of available{' '}
                        <Link
                          href="/posts/tutorials"
                          className="underline"
                          onClick={() => {
                            dispatch(hideModal());
                            dispatch(toggleMenu(isMenuOn));
                          }}
                        >
                          tutorials
                        </Link>
                        .
                      </span>
                      <span>Cheers!</span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="poppins mt-4 inline-flex justify-center rounded-md border border-transparent 
                      bg-blue-100 px-4 py-2 text-[14px] text-blue-900 hover:bg-blue-200 focus:outline-none 
                      focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        dispatch(hideModal());
                        dispatch(toggleMenu(isMenuOn));
                      }}
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
    </>
  );
}

export default CustomModal;
