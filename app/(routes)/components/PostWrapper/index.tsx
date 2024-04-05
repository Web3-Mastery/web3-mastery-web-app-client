import React from 'react';

function PostWrapper({ children }: ChildProp) {
  return (
    <div className="w-full md:w-[65%] lg:w-[50%] md:mx-auto text-[15px] font-[400]">
      {children}
    </div>
  );
}

export default PostWrapper;
