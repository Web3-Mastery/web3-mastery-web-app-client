// 'use client';

import type { Metadata } from 'next';
import './styles/globals.css';
import { nunito_sans, poppins } from './utils/font';
import { RTKProvider } from './rtk-base/provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://web3-mastery-web-app-client.vercel.app/')
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <RTKProvider>
      <html lang="en" className={`${nunito_sans} ${poppins}`}>
        <body className="nunito_sans">{children}</body>
      </html>
    </RTKProvider>
  );
}
