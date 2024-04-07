import type { Metadata } from 'next';
import './styles/globals.css';
import { nunito_sans, poppins } from './utils/font';
import { store } from './rtk-base/store';
import { Provider } from 'react-redux';

export const metadata: Metadata = {
  metadataBase: new URL('https://web3-mastery-web-app-client.vercel.app/')
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en" className={`${nunito_sans} ${poppins}`}>
        <body className="nunito_sans">{children}</body>
      </html>
    </Provider>
  );
}
