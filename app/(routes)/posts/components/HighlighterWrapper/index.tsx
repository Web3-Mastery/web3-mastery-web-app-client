'use client';

import { useState } from 'react';
import { IoIosCopy } from 'react-icons/io';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const HighlighterWrapper = ({
  //   children,
  language,
  content
}: {
  //   children: React.ReactNode;
  language: string;
  content: string;
}) => {
  const [isContentCopied, setIsContentCopied] = useState(false);
  //   console.log(isContentCopied);

  async function copyContent(content: string) {
    try {
      await navigator.clipboard.writeText(content);
      console.log('Content copied to clipboard');
      setIsContentCopied(!isContentCopied);

      setTimeout(() => {
        setIsContentCopied(false);
      }, 2000);
      // console.log(content);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <section className="highlighter-wrapper w-full mt-[40px] mb-[30px]">
      <div className="px-3 py-4 bg-gray-200 flex justify-between items-center">
        <div className="font-extralight">{language ? language : ''}</div>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={(e: React.MouseEvent<HTMLDivElement>) =>
            copyContent(content)
          }
        >
          <div
            className={`${isContentCopied == true ? 'hidden' : 'inline-block'}`}
          >
            copy
          </div>
          <div
            className={`${isContentCopied == true ? 'inline-block' : 'hidden'}`}
          >
            copied
          </div>
          <IoIosCopy />
        </div>
      </div>
      <div>
        <SyntaxHighlighter
          showLineNumbers
          showInlineLineNumbers={true}
          customStyle={{ paddingLeft: '0' }}
        >{`${content}`}</SyntaxHighlighter>
      </div>
    </section>
  );
};
