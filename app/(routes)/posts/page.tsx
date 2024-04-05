import Image from 'next/image';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import ParagraphElement from '@/app/(routes)/components/Paragraph';
import PostWrapper from '@/app/(routes)/components/PostWrapper';
import AuthorPhoto from '../../assets/images/web3-mastery-logo.png';

function AboutPage() {
  return (
    <MainAppLayout>
      <main className="about-page px-3 sm:px-[20px] mt-[40px]">
        <section className="author-intro text-center flex flex-col gap-4 items-center mb-8 sm:mb-12">
          <div className="author-image-wrapper">
            <Image
              src={AuthorPhoto}
              width={40}
              alt="author-image"
              className="w-[45px] h-[45px] rounded-full"
            />
          </div>
          <h3 className="text-[14px] uppercase poppins font-thin">
            Andrew James Okpainmo
          </h3>
        </section>
        <section className="page-heading text-center flex flex-col gap-4">
          <span className="text-[14px]">March 30, 2024</span>
          <h3 className="text-3xl sm:text-4xl poppins font-thin">
            How to learn Solidity in 2024
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
          </PostWrapper>
        </section>
      </main>
    </MainAppLayout>
  );
}
export default AboutPage;
