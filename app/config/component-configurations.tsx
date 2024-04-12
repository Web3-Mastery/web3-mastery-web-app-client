import SyntaxHighlighter from 'react-syntax-highlighter';
import { HighlighterWrapper } from '../(routes)/posts/components/HighlighterWrapper';

export const presetComponents = {
  HighlighterWrapper,
  SyntaxHighlighter,
  h1: (props: any) => (
    <h1
      className="font-extralight text-2xl md:text-[25px] poppins mt-10"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="font-extralight text-xl md:text-[23px] poppins mt-10"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="font-extralight text-base md:text-[18px] poppins mt-10"
      {...props}
    />
  ),
  a: (props: any) => <a className="text-gray-400 underline" {...props} />,
  ul: (props: any) => <ul className="list-inside list-disc my-2" {...props} />,
  ol: (props: any) => (
    <ol className="list-inside list-decimal my-2" {...props} />
  ),
  li: (props: any) => <li className="my-4" {...props} />,
  em: (props: any) => (
    <em className="relative top-[-10px] text-[13px]" {...props} />
  ),
  img: (props: any) => <img className="w-full py-4" {...props} />,
  // img,
  p: (props: any) => <p className="my-4 leading-[25px]" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="py-4 px-8 italic bg-slate-700 border-l-4 border-gray-400 text-white my-6"
      {...props}
    />
  ),
  code: (props: any) => <code className="py-6 px-4" {...props} />
};
