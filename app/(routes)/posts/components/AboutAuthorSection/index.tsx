import React from 'react';

function AboutAuthorSection({ authorBio }: { authorBio: string }) {
  return (
    <section className="about-author border-t mt-12 py-12 w-full md:w-[70%] lg:w-[50%] md:mx-auto flex flex-col gap-y-4">
      <h3 className="text-base poppins">About The Author</h3>
      <div className="font-[400]">{authorBio}</div>
    </section>
  );
}

export default AboutAuthorSection;
