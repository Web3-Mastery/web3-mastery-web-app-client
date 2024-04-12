// 'use client';

import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import PostWrapper from '@/app/global-components/PostWrapper';
import PageNavigator from '../../../components/PageNavigator';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
// import { serialize } from 'next-mdx-remote/serialize';
import { presetComponents } from '@/app/config/component-configurations';
import PostPageHeadSection from '../../../components/PostPageHeadSection';
import AboutAuthorSection from '../../../components/AboutAuthorSection';

// below import is nextjs specific
export const dynamicParams = true;
const basePath = 'content/foundry';

async function PostPage({ params }: any) {
  const components = presetComponents;

  const { postId } = params;

  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const currentPostFilePath = mdxPosts.find((each) => {
    // remove initial number and hyphen in from of each post name
    return each.slice(2).replace(/\s/g, '-').split('.')[0] == postId;
  });

  const fileContent = fs.readFileSync(
    `${basePath}/${currentPostFilePath}`,
    'utf8'
  );

  const matterResult = matter(fileContent);
  const {
    authorPhotoUrl,
    authorName,
    postTitle,
    postDate,
    authorBio,
    postIndex,
    postTags,
    authorSocials
  } = matterResult.data;

  const postData = {
    authorPhotoUrl,
    authorName,
    postTitle,
    postDate,
    authorBio,
    authorSocials
  };

  const allPostFilePaths = mdxPosts.map((each) => {
    return each;
  });

  const allPostFileContent = allPostFilePaths.map((each) => {
    const fileContent = fs.readFileSync(`${basePath}/${each}`, 'utf8');

    const matterResult = matter(fileContent);

    return matterResult;
  });

  // smiles: js index play at work here - I simplified things by using js indexing pattern on the posts
  const previousPostIndex = Number(postIndex) - 1;
  const nextPostIndex = Number(postIndex) + 1;

  const previousPostData = allPostFileContent[previousPostIndex]?.data;
  const nextPostData = allPostFileContent[nextPostIndex]?.data;

  return (
    <MainAppLayout>
      <main className="post-page px-3 sm:px-[20px] mt-[40px]">
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
          nextTitle={nextPostData?.postTitle}
          previousTitle={previousPostData?.postTitle}
          previousPostRoute={`/posts/foundry/${previousPostData?.postSlug}`}
          nextPostRoute={`/posts/foundry/${nextPostData?.postSlug}`}
        />
        <AboutAuthorSection
          authorBio={postData.authorBio}
          authorSocials={postData.authorSocials}
        />
      </main>
    </MainAppLayout>
  );
}

export default PostPage;

export async function generateStaticParams() {
  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const paths = mdxPosts.map((filename) => {
    return { postId: filename.slice(2).replace(/\s/g, '-').split('.')[0] };
  });

  // console.log(paths);
  return paths;
}
