import React from 'react';

function CustomSectionHeader({ headerText }: { headerText: string }) {
  return (
    <section
      className="px-3 sm:px-[20px] section-header text-3xl md:text-4xl font-extralight
          mb-[75px] relative after:w-[60px] after:absolute after:h-[1px] after:bg-black after:block after:top-[50px] 
          after:left-3 sm:after:left-[20px] after:right-0 lg:px-0 lg:after:left-0"
    >
      {headerText}
    </section>
  );
}

export default CustomSectionHeader;
