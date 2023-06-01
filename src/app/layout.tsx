import Navbar from '../components/Navbar';
import './globals.css';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Seminal Frontend Test',
  description: 'Seminal Frontend Test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Navbar />
        </nav>
        {children}
      </body>
    </html>
  );
}
