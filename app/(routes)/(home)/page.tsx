import type { Metadata } from 'next';
import Link from 'next/link';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import { HiArrowLongRight } from 'react-icons/hi2';
import { categoriesData } from '@/app/config/categories-config';
import CustomSectionHeader from '@/app/global-components/CustomSectionHeader';
import matter from 'gray-matter';
import fs from 'fs';

export const metadata: Metadata = {
  title: 'Home | Web3 Mastery',
  description:
    'The minimalist web3/blockchain education platform that turns you into a web3/blockchain master.',
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

// to get blog posts
const basePath = 'content/blog';

function HomePage() {
  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const blogPostFilePaths = mdxPosts.map((each) => {
    return each;
  });

  const blogPostFileContent = blogPostFilePaths.map((each) => {
    const fileContent = fs.readFileSync(`${basePath}/${each}`, 'utf8');

    const matterResult = matter(fileContent);

    return matterResult.data;
  });

  const sortedBlogPosts = blogPostFileContent.sort(
    (a: any, b: any) => b.postIndex - a.postIndex
  );

  // console.log(sortedBlogPosts);

  return (
    <MainAppLayout>
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 lg:pt-32">
        <section className="hero-section poppins px-3 sm:px-[20px] text-center">
          <div className="large-hero-text font-thin text-5xl md:text-7xl lg:8xl leading-[70px] md:leading-[85px] lg:leading-[100px] lg:px-24">
            The 'minimalist' web3 education platform that turns you into a
            blockchain master.
          </div>
          <div className="hero-buttons-wrapper mt-8 flex gap-6 justify-center">
            <a href="#platform-provisions-section">
              <button className="capitalize w-[120px] sm:w-[150px] sm:text-[16px] text-center py-3 border bg-black rounded-[5px] text-white">
                Get started
              </button>
            </a>
            <Link href="/about">
              <button
                className="capitalize w-[120px] sm:w-[150px] sm:text-[16px] text-center py-3 rounded-[5px] border border-gray-400"
                style={{ boxSizing: 'content-box' }}
              >
                About
              </button>
            </Link>
          </div>
        </section>
        <section
          id="platform-provisions-section"
          className="platform-provisions mt-[220px] md:mt-[100px] py-[30px] md:py-[150px]"
        >
          <CustomSectionHeader headerText="Explore..." />
          <section className="px-3 sm:px-[20px] lg:px-0 grid gap-y-[40px] gap-x-[30px] text-left lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 sm:grid-cols-2 lg:text-left">
            {categoriesData.map((category) => {
              return (
                <Link
                  key={category.categoryName}
                  href={category.categoryRoute}
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
                  <p className={`m-0 w-full text-sm opacity-50`}>
                    {category.categoryBrief}
                  </p>
                </Link>
              );
            })}
          </section>
        </section>
        <section className="latest-blog-posts pt-[70px] pb-[100px] md:py-[100px]">
          <CustomSectionHeader headerText="Latest blog posts" />
          <section className="px-3 sm:px-[20px] grid gap-y-[40px] gap-x-[30px] text-left lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 sm:grid-cols-2 lg:text-left">
            {sortedBlogPosts?.slice(0, 9).map((each) => {
              return (
                <Link
                  key={each.postSlug}
                  href={`/posts/blog/${each.postSlug.replace(/\s/g, '-').toLowerCase()}`}
                  className="card-glass_dark flex flex-col justify-between group rounded-lg border border-gray-300 px-5 py-4 min-h-[270px]"
                >
                  <section>
                    <div
                      className={`mb-3 text-[20px] font-semibold flex items-start justify-between gap-5 sm:gap-8`}
                    >
                      <span className="post-title poppins font-thin">
                        {each.postTitle}
                      </span>
                      <div className="mt-2 inline-flex items-center gap-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        <span className="text-[14px]">Read</span>{' '}
                        <HiArrowLongRight />
                      </div>
                    </div>
                    <p className={`m-0 w-full text-sm opacity-50 post-brief`}>
                      {each.postBrief}
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
        </section>
      </main>
    </MainAppLayout>
  );
}

export default HomePage;
