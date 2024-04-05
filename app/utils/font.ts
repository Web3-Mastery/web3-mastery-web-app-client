import { Nunito_Sans, Poppins } from 'next/font/google';

const nunito_sans_init = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito_sans',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

const poppins_init = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

export const nunito_sans = nunito_sans_init.variable;
export const poppins = poppins_init.variable;
