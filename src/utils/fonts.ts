import { Inter, EB_Garamond, Montserrat } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const ebGaramond = EB_Garamond({
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
  });

export const montserrat = Montserrat({
    weight: ['400','700','800', '900'],
    subsets: ['latin'],
  });
