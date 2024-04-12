import React from 'react';
import IconWrapper from '@/app/global-components/layout/Footer/IconWrapper';
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';
import { BiLogoGithub } from 'react-icons/bi';

function AboutAuthorSection({
  authorBio,
  authorSocials
}: {
  authorBio: string;
  authorSocials: string[];
}) {
  return (
    <section className="about-author border-t mt-12 py-12 w-full md:w-[70%] lg:w-[50%] md:mx-auto flex flex-col gap-y-4">
      <h3 className="text-base poppins">About The Author</h3>
      <div className="font-[400]">{authorBio}</div>
      <section className="author-socials flex gap-6 justify-start mb-16">
        <a href={authorSocials[0]}>
          <IconWrapper>
            <IoLogoTwitter className="text-[17px] translate-y-[1px]" />
          </IconWrapper>
        </a>
        <a href={authorSocials[1]}>
          <IconWrapper>
            <IoLogoLinkedin className="text-[16.5px] translate-y-[1px]" />
          </IconWrapper>
        </a>
        <a href={authorSocials[2]}>
          <IconWrapper>
            <BiLogoGithub className="text-[19px] translate-x-[-1px] translate-y-[-0.5px]" />
          </IconWrapper>
        </a>
      </section>
    </section>
  );
}

export default AboutAuthorSection;
