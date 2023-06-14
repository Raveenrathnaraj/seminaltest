import './globals.css';

import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import seminalIcon from '../../public/seminal_round.png';
import RightClickHandler from '@/components/RightClickHandler';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Seminal Frontend Test',
  description: 'Seminal Frontend Hiring Challenge',
  openGraph: {
    title: 'Seminal Frontend Test',
    url: 'https://frontendtest-three.vercel.app/',
    images: [
      {
        url: seminalIcon.src,
        width: 800,
        height: 600,
      },
    ],
    authors: ['Raveen, Adhavakkannan'],
    description: 'Only the best can solve this challenge. Are you the best?',
  },
  twitter: {
    title: 'Seminal Frontend Test',
    images: [
      {
        url: seminalIcon.src,
        width: 800,
        height: 600,
      },
    ],
    creator: 'Raveen',
    description: 'Only the best can solve this challenge. Are you the best?',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`select-none ${inter.className}`}>
        <nav>
          <Navbar />
        </nav>
        <div className='px-20'>
          <RightClickHandler />
          {children}
        </div>
      </body>
    </html>
  );
}
