// 'use client';

import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import PostWrapper from '@/app/(routes)/components/PostWrapper';
import PageNavigator from '../../../components/PageNavigator';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { presetComponents } from '@/app/config/component-configurations';
import PostPageHeadSection from '../../../components/PostPageHeadSection';
import AboutAuthorSection from '../../../components/AboutAuthorSection';

// below import is nextjs specific
export const dynamicParams = true;
const basePath = 'content/tutorials';

async function PostPage({ params }: any) {
  const components = presetComponents;

  const { postId } = params;

  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const currentPostFilePath = mdxPosts.find((each) => {
    return each.replace(/\s/g, '-').split('.')[0] == postId;
  });

  const fileContent = fs.readFileSync(
    `${basePath}/${currentPostFilePath}`,
    'utf8'
  );

  const matterResult = matter(fileContent);
  // console.log(matterResult);

  const postData = {
    authorPhotoUrl: '/web3-mastery-logo.png',
    authorName: 'Andrew James Okpainmo',
    postTitle: 'How to learn Solidity in 2024',
    postDate: 'March 3, 2024',
    authorBio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        placeat velit sapiente voluptas in similique tempora officia illo enim
        maxime iste quas dolor quae, labore asperiores voluptatibus vitae quos
        qui et quam dicta molestias porro? Suscipit accusantium velit
        reprehenderit explicabo odio exercitationem sed repellendus itaque, ab`
  };

  return (
    <MainAppLayout>
      <main className="about-page px-3 sm:px-[20px] mt-[40px]">
        <PostPageHeadSection
          authorPhotoUrl={postData.authorPhotoUrl}
          authorName={postData.authorName}
          postTitle={postData.postTitle}
          postDate={postData.postDate}
        />
        <PostWrapper>
          <article className="sm:mt-[30px]">
            <MDXRemote source={matterResult?.content} components={components} />
          </article>
        </PostWrapper>
        <PageNavigator
          nextTitle={`Lorem ipsum dolor sit amet olor sit amet. em ipsum dolor sit. `}
          previousTitle={`Lorem ipsum dolor sit amet. em ipsum dolor sit amet sum dolor sit a.`}
          previousPostRoute="/"
          nextPostRoute="/"
        />
        <AboutAuthorSection authorBio={postData.authorBio} />
      </main>
    </MainAppLayout>
  );
}

export default PostPage;

export async function generateStaticParams() {
  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const paths = mdxPosts.map((filename) => {
    return { postId: filename.replace(/\s/g, '-').split('.')[0] };
  });

  // console.log(paths);
  return paths;
}
