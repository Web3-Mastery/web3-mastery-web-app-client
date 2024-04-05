import React from 'react';

function PostListPageTitleHeader({
  pageTitle,
  pageIntroText
}: {
  pageTitle: string;
  pageIntroText: string;
}) {
  return (
    <section className="flex items-center mt-[50px] px-3 sm:px-[20px] lg:px-12">
      <h1 className="page-header text-2xl sm:text-4xl poppins pr-4">
        {pageTitle}
      </h1>
      <p className="section-intro border-l-[2px] pl-4 md:w-[600px] text-gray-400">
        {pageIntroText}
      </p>
    </section>
  );
}

export default PostListPageTitleHeader;
