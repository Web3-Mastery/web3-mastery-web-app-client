import SyntaxHighlighter from 'react-syntax-highlighter';

export const presetComponents = {
  SyntaxHighlighter,
  h1: (props: any) => (
    <h1
      className="font-extralight text-3xl sm:text-4xl md:text-5xl "
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="font-extralight text-2xl sm:text-3xl md:text-4xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="font-extralight text-xl sm:text-2xl md:text-3xl"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className="font-extralight text-[20px] sm:text-xl md:text-2xl"
      {...props}
    />
  ),
  li: (props: any) => <li className="list-inside list-disc mt-2" {...props} />,
  img: (props: any) => <img className="w-full" {...props} />,
  // img,
  p: (props: any) => <p className="my-4 leading-[25px]" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="py-4 px-8 italic bg-slate-900 text-white my-6"
      {...props}
    />
  ),
  code: (props: any) => <code className="py-6 px-4" {...props} />
};
