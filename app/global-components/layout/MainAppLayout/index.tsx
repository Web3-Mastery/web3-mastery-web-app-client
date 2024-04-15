'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SlideInMenu from '../SlideInMenu';
import BackgroundArtifactsWrapper from '../ArtifactsWrapper';
// import Overlay from '../Overlay';
import CustomModal from '../CustomModal';
import { resetSubscriptionSuccessState } from '@/app/rtk-base/slices/newsletterSlice';
// import { Toaster } from 'react-hot-toast';

function MainAppLayout({ children }: ChildProp) {
  const { subscriptionSuccessState } = useSelector(
    // @ts-ignore
    (store) => store.newsletter
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetSubscriptionSuccessState());
    }, 15000);
  }, [subscriptionSuccessState, dispatch]);

  return (
    <>
      {/* <Toaster /> */}
      <SlideInMenu />
      <CustomModal />
      {/* <Overlay /> */}
      <BackgroundArtifactsWrapper>
        <main className="main-app-layout main-app-layout_bg-glass_light font-light min-h-screen md:px-[5%] lg:px-[10%] md:mx-auto text-[14px] z-10">
          <div className="min-h-screen">
            <Navbar />
            {children}
          </div>
          <Footer />
        </main>
      </BackgroundArtifactsWrapper>
    </>
  );
}

export default MainAppLayout;
