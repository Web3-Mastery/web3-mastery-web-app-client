import type { Metadata } from 'next';

import React from 'react';
import Link from 'next/link';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import ParagraphElement from '@/app/global-components/Paragraph';
import PostWrapper from '@/app/global-components/PostWrapper';

export const metadata: Metadata = {
  title: 'About Web3 Mastery',
  description:
    'The "minimalist" web3 education platform that turns you into a blockchain master.',
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
              Since coming into web3 and becoming a blockchain developer over a
              year ago, I've continued to be fascinated by the ingenious
              technology that powers this(web3) space - I've remained passionate
              about web3 and blockchain technology.
            </ParagraphElement>
            <ParagraphElement>
              Despite all the passion and love for the space, my engagements and
              continued growth as a full-stack(web2) software engineer continued
              to create a gap between me and web3.
            </ParagraphElement>
            <ParagraphElement>
              So I decided to change that in 2024 by becoming a web3-heavy
              full-stack software engineer.
            </ParagraphElement>
            <ParagraphElement>
              After some serious refresher and upgrading of my web3/blockchain
              skils in 2024, I was certainly ready for jobs/opportunities in the
              web3 space - especially thanks to my gift of brilliance, and my
              prior software engineering skills/experience in web2. Hence, as a
              way to both keep me continuously engaged in the space - building a
              better portfolio, while also continuing to show and share my web3
              expertise, I decided to build Web3 Mastery.
            </ParagraphElement>
            <ParagraphElement>
              Beyond all that, building Web3 Mastery aligns with my
              tech-obsession of building and scaling startups
            </ParagraphElement>
            <ParagraphElement>
              Web3 Mastery is a web3 education platform that aims to help build
              the next generation of blockchain developers and web3 netizens. It
              is a platform on a mission to build a base where all categories of
              blockchain/web3 folks - veterans, mid-level folks, and beginners
              alike, will readily come on - to learn and to also find and share
              opportunities.
            </ParagraphElement>
            <ParagraphElement>
              For now, you can explore(learn and get informed) from an array of
              awesome articles. But soon(as more features continuing to ship-in
              fast), users will be able to access more awesomeness like job
              opportunities(smart-contract engineering, bug-bounties, audits
              etcetera), more features to foster better learning, and more.
            </ParagraphElement>
            <ParagraphElement>Thanks for being here frens!</ParagraphElement>
            <ParagraphElement>
              See you inside Web3 Mastery - the button just below should help.
            </ParagraphElement>
            <div className="text-3xl">🤓</div>
            <div className="italic mt-10 text-[13px]">
              - Andrew James Okpainmo
            </div>

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
