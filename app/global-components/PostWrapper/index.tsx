import React from 'react';

function PostWrapper({ children }: ChildProp) {
  return (
    <div className="w-full md:w-[65%] lg:w-[50%] xl:w-[40%] md:mx-auto text-[15px] font-[400] md:text-[16px]">
      {children}
    </div>
  );
}

export default PostWrapper;
