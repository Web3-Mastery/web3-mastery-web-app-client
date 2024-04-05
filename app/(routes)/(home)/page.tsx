import Image from 'next/image';
import Link from 'next/link';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import { HiArrowLongRight } from 'react-icons/hi2';
import { categoriesData } from '@/app/config/categories-config';
import CustomSectionHeader from '@/app/global-components/CustomSectionHeader';

function HomePage() {
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
          className=" mt-[150px] py-[100px]"
        >
          <CustomSectionHeader headerText="Explore..." />
          <section className="platform-provisions px-3 sm:px-[20px] lg:px-0 grid gap-y-[40px] gap-x-[30px] text-left lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 sm:grid-cols-2 lg:text-left">
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
      </main>
    </MainAppLayout>
  );
}

export default HomePage;
