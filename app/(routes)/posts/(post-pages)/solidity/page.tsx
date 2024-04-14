import React from 'react';
import type { Metadata } from 'next';
// import Link from 'next/link';
// import { HiArrowLongRight } from 'react-icons/hi2';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import PostListPageTitleHeader from '../../components/PostListPageTitleHeader';
import fs from 'fs';
import matter from 'gray-matter';

const pageIntroText = `A collection of well ordered and professionally crafted articles/tutorials, teaching everything
you need, to build secure and efficient smart-contracts with the Solidity programming language. Suitable for
'veterans' and beginners alike.`;

export const metadata: Metadata = {
  title: 'Web3 Mastery | Blog',
  description: pageIntroText,
  keywords: [
    'Web3',
    'Blockchain',
    'Solidity',
    'Blockchain development',
    'Smart contracts',
    'Hardhat',
    'Web3 Jobs',
    'Foundry',
    'Solana'
  ]
};

const basePath = 'content/solidity';

function SolidityPostListPage() {
  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const allPostFilePaths = mdxPosts.map((each) => {
    return each;
  });

  const allPostFileContent = allPostFilePaths.map((each) => {
    const fileContent = fs.readFileSync(`${basePath}/${each}`, 'utf8');

    const matterResult = matter(fileContent);

    return matterResult.data;
  });

  return (
    <MainAppLayout>
      <main>
        <PostListPageTitleHeader
          pageTitle={'Learn Solidity'}
          pageIntroText={pageIntroText}
        />
        {/* {allPostFilePaths?.length > 0 ? (
          <section
            id="platform-provisions-section"
            className="platform-provisions px-3 sm:px-[20px] lg:px-12 grid gap-y-[40px] md:gap-y-[50px] gap-x-[30px] 
          md:gap-x-[50px] text-left lg:w-full lg:mb-0 sm:grid-cols-2 lg:grid-cols-3 lg:text-left md:mt-[50px] py-[50px] mx-auto"
          >
            {allPostFileContent?.map((each) => {
              return (
                <Link
                  key={each.postSlug}
                  href={`/posts/solidity/${each.postSlug.replace(/\s/g, '-').toLowerCase()}`}
                  className="card-glass_dark flex flex-col justify-between group rounded-lg border border-gray-300 px-5 py-4 min-h-[220px]"
                >
                  <section>
                    <div
                      className={`mb-3 text-[20px] font-semibold flex items-start justify-between gap-5 sm:gap-8`}
                    >
                      <span className="post-title poppins font-thin min-h-[55px]">
                        {each?.postTitle}
                      </span>
                      <div className="mt-2 inline-flex items-center gap-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        <span className="text-[14px]">Read</span>{' '}
                        <HiArrowLongRight />
                      </div>
                    </div>
                    <p className={`m-0 w-full text-sm opacity-50 post-brief`}>
                      {`${each?.postBrief?.slice(0, 175)}...`}
                    </p>
                  </section>
                  <div>
                    <div className="date mt-4 text-[12px]">{each.postDate}</div>
                    <div></div>
                  </div>
                </Link>
              );
            })}
          </section>
        ) : ( */}
        <section className="pt-[100px] px-3 sm:px-[20px] lg:px-12 text-center text-gray-500 poppins text-base leading-[30px]">
          No posts added to this category. <br /> Please check back soon... 😊
        </section>
        {/* )} */}
      </main>
    </MainAppLayout>
  );
}

export default SolidityPostListPage;
