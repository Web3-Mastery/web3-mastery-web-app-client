// import React from 'react';

function IconWrapper({ children }: ChildProp) {
  return (
    <div className="icon-wrapper w-[32px] h-[32px] rounded-full border border-gray-500 pl-[7px] pr-[4px] pt-[6.2px] pb-[4.2px]">
      {children}
    </div>
  );
}

export default IconWrapper;
