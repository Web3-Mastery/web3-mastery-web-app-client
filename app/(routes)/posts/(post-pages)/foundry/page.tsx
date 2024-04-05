import React from 'react';
import Link from 'next/link';
import { HiArrowLongRight } from 'react-icons/hi2';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import PostListPageTitleHeader from '../../components/PostListPageTitleHeader';
import fs from 'fs';
// import matter from 'gray-matter';

const basePath = 'content/foundry';

function FoundryPostListPage() {
  const pageIntroText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quam,
        explicabo porro blanditiis omnis voluptas iure, molestiae cupiditate
        quibusdam facilis. sit?`;

  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const posts = mdxPosts.map((filename) => {
    return { postId: filename.replace(/\s/g, '-').split('.')[0] };
  });

  // console.log(posts);

  // return posts;

  return (
    <MainAppLayout>
      <main>
        <PostListPageTitleHeader
          pageTitle={'Learn Foundry'}
          pageIntroText={pageIntroText}
        />
        <section
          id="platform-provisions-section"
          className="platform-provisions px-3 sm:px-[20px] lg:px-12 grid gap-y-[40px] md:gap-y-[50px] gap-x-[30px] 
          md:gap-x-[50px] text-left lg:w-full lg:mb-0 sm:grid-cols-2 lg:grid-cols-3 lg:text-left md:mt-[50px] py-[50px] mx-auto"
        >
          {posts.map((each) => {
            return (
              <Link
                key={each.postId}
                href={`/posts/foundry/${each.postId.replace(/\s/g, '-').toLowerCase()}`}
                className="card-glass_dark flex flex-col justify-between group rounded-lg border border-gray-300 px-5 py-4 min-h-[220px]"
              >
                <section>
                  <div
                    className={`mb-3 text-[20px] font-semibold flex items-start justify-between gap-5 sm:gap-8`}
                  >
                    <span className="post-title poppins font-thin">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      adipisicing.
                    </span>
                    <div className="mt-2 inline-flex items-center gap-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      <span className="text-[14px]">Read</span>{' '}
                      <HiArrowLongRight />
                    </div>
                  </div>
                  <p className={`m-0 w-full text-sm opacity-50 post-brief`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    quod animi quidem accusantium consequatur obcaecati repellat
                    in sed...
                  </p>
                </section>
                <div>
                  <div className="date mt-4 text-[12px]">March 1, 2024</div>
                  <div></div>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
    </MainAppLayout>
  );
}

export default FoundryPostListPage;
