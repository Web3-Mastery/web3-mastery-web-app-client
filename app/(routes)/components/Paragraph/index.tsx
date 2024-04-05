import React from 'react';

function ParagraphElement({ children }: ChildProp) {
  return <p className="py-3 font-[400]">{children}</p>;
}

export default ParagraphElement;
