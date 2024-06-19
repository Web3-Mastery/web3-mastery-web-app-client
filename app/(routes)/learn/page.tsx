import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import React from 'react';
import Link from 'next/link';
import { HiArrowLongRight } from 'react-icons/hi2';
import { categoriesData } from '@/app/config/categories-config';
// import PostListPageTitleHeader from '../posts/components/PostListPageTitleHeader';
import { SiSolana } from 'react-icons/si';
import { SiEthereum } from 'react-icons/si';
import { HiBuildingOffice } from 'react-icons/hi2';

function SelectCategoryIcon({ categoryDomain }: { categoryDomain: string }) {
  // console.log(categoryDomain);
  if (categoryDomain === 'platform') {
    return (
      <HiBuildingOffice className="text-[25px] bottom-5 right-4 absolute" />
    );
  }

  if (categoryDomain === 'ethereum') {
    return <SiEthereum className="text-[25px] bottom-5 right-4 absolute" />;
  }

  if (categoryDomain === 'solana') {
    return <SiSolana className="text-[20px] bottom-5 right-4 absolute" />;
  }

  return;
}

function LearnPage() {
  const pageIntroText = `Learn for free, from top quality quality tutorials/articles on different blockchain/web3 
    development Languages and frameworks/libraries.`;

  const learnContent = categoriesData.filter((each) => {
    return each.categoryType == 'learn-content';
  });

  //   console.log(learnContent);

  return (
    <MainAppLayout>
      <section className="flex items-center mt-[50px] px-3 sm:px-[20px] lg:px-12">
        <h1 className="page-header text-2xl sm:text-4xl poppins pr-4">
          Learn Blockchain development
        </h1>
        <p className="section-intro border-l-[2px] pl-4 md:w-[600px] text-[14px] text-gray-400">
          {pageIntroText}
        </p>
      </section>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <section
          id="platform-provisions-section"
          className="platform-provisions mt-[50px] sm:mt-[75px]"
        >
          <section className="px-3 sm:px-[20px] lg:px-12 grid gap-y-[40px] gap-x-[30px] text-left lg:w-full lg:mb-0 lg:grid-cols-3 sm:grid-cols-2 lg:text-left">
            {learnContent.map((category) => {
              return (
                <Link
                  key={category.categoryName}
                  href={category.categoryRoute}
                  className="card-glass_dark border border-gray-300 group rounded-lg px-5 py-4 transition-colors relative min-h-[220px] md:min-h-[250px]"
                >
                  <div
                    className={`mb-3 text-2xl font-semibold flex items-center gap-4`}
                  >
                    <span className="poppins font-thin">
                      {category.categoryName}
                    </span>
                    <div className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      <HiArrowLongRight />
                    </div>
                  </div>
                  <p className={`w-full text-sm opacity-50`}>
                    {`${category.categoryBrief.slice(0, 150)}...`}
                  </p>
                  <SelectCategoryIcon
                    categoryDomain={category.categoryDomain}
                  />
                </Link>
              );
            })}
          </section>
        </section>
      </main>
    </MainAppLayout>
  );
}

export default LearnPage;
