import SyntaxHighlighter from 'react-syntax-highlighter';
import { HighlighterWrapper } from '../(routes)/posts/components/HighlighterWrapper';

export const presetComponents = {
  HighlighterWrapper,
  SyntaxHighlighter,
  h1: (props: any) => <h1 className="font-extralight text-2xl" {...props} />,
  h2: (props: any) => <h2 className="font-extralight text-xl" {...props} />,
  h3: (props: any) => <h3 className="font-extralight text-base" {...props} />,
  a: (props: any) => <a className="text-gray-400 underline" {...props} />,
  li: (props: any) => <li className="list-inside list-disc mt-2" {...props} />,
  em: (props: any) => (
    <em className="relative top-1.5 text-[13px]" {...props} />
  ),
  img: (props: any) => <img className="w-full" {...props} />,
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
