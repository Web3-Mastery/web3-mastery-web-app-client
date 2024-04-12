import React from 'react';
import Image from 'next/image';

function PostPageHeadSection({
  authorPhotoUrl,
  authorName,
  postDate,
  postTitle
}: {
  authorPhotoUrl: string;
  authorName: string;
  postDate: string;
  postTitle: string;
}) {
  return (
    <>
      <section className="author-intro text-center flex flex-col gap-4 items-center mb-8">
        <div className="author-image-wrapper">
          <Image
            src={authorPhotoUrl}
            width={50}
            height={50}
            alt="author-image"
            className="w-[45px] h-[45px] rounded-full"
          />
        </div>
        <h3 className="text-[14px] uppercase poppins font-thin">
          {authorName}
        </h3>
      </section>
      <section className="page-heading text-center flex flex-col gap-4">
        <span className="text-[14px]">{postDate}</span>
        <h3 className="text-3xl sm:text-4xl poppins font-thin mb-5 capitalize">
          {postTitle}
        </h3>
      </section>
    </>
  );
}

export default PostPageHeadSection;
