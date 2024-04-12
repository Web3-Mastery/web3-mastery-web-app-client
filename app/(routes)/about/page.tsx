import type { Metadata } from 'next';

import React from 'react';
import Link from 'next/link';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import ParagraphElement from '@/app/global-components/Paragraph';
import PostWrapper from '@/app/global-components/PostWrapper';

export const metadata: Metadata = {
  title: 'About Web3 Mastery',
  description:
    'The "minimalist" web3/blockchain education platform that turns you into a web3/blockchain master.',
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

function AboutPage() {
  return (
    <MainAppLayout>
      <main className="about-page px-3 sm:px-[20px] mt-[40px]">
        <section className="page-heading text-center flex flex-col gap-4">
          <span className="text-[14px]">March 30, 2024</span>
          <h3 className="text-3xl sm:text-4xl poppins font-thin">
            About Web3 Mastery
          </h3>
        </section>
        <section className="sm:mt-[30px]">
          <PostWrapper>
            <ParagraphElement>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              dolorum necessitatibus dolor, nihil natus recusandae cumque totam
              neque quod veniam earum expedita illum corporis velit. Praesentium
              at labore ipsam odit quia. Sint, doloribus ex corrupti dolores
              tempore velit maxime ut, quidem quis sapiente sit neque quibusdam
              praesentium eius inventore quasi pariatur consequatur
              exercitationem aperiam autem maiores? Sequi, quas eius. Quod
              impedit modi repellat porro iusto, sed quo, aperiam error esse
              dolore vitae dolorem distinctio cupiditate in culpa quae tempore
              debitis magni. Unde architecto est fugiat ab dignissimos harum
              ullam pariatur ex iste. Obcaecati et accusantium fugiat
              consectetur possimus vitae ea.
            </ParagraphElement>
            <ParagraphElement>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              dolorum necessitatibus dolor, nihil natus recusandae cumque totam
              neque quod veniam earum expedita illum corporis velit. Praesentium
              at labore ipsam odit quia. Sint, doloribus ex corrupti dolores
              tempore velit maxime ut, quidem quis sapiente sit neque quibusdam
              praesentium eius inventore quasi pariatur consequatur
              exercitationem aperiam autem maiores? Sequi, quas eius. Quod
              impedit modi repellat porro iusto, sed quo, aperiam error esse
              dolore vitae dolorem distinctio cupiditate in culpa quae tempore
              debitis magni. Unde architecto est fugiat ab dignissimos harum
              ullam pariatur ex iste. Obcaecati et accusantium fugiat
              consectetur possimus vitae ea.
            </ParagraphElement>
            <ParagraphElement>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              dolorum necessitatibus dolor, nihil natus recusandae cumque totam
              neque quod veniam earum expedita illum corporis velit. Praesentium
              at labore ipsam odit quia. Sint, doloribus ex corrupti dolores
              tempore velit maxime ut, quidem quis sapiente sit neque quibusdam
              praesentium eius inventore quasi pariatur consequatur
              exercitationem aperiam autem maiores? Sequi, quas eius. Quod
              impedit modi repellat porro iusto, sed quo, aperiam error esse
              dolore vitae dolorem distinctio cupiditate in culpa quae tempore
              debitis magni. Unde architecto est fugiat ab dignissimos harum
              ullam pariatur ex iste. Obcaecati et accusantium fugiat
              consectetur possimus vitae ea.
            </ParagraphElement>
            <Link
              href="/#platform-provisions-section"
              className="mt-10 flex justify-center"
            >
              <button className="w-full sm:w-[400px] py-3 px-4 bg-black text-white rounded-[3px] poppins">
                Explore Web3 Mastery
              </button>
            </Link>
          </PostWrapper>
        </section>
      </main>
    </MainAppLayout>
  );
}
export default AboutPage;
