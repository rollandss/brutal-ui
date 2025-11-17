import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Brutal UI - Next.js Demo',
  description: 'A brutal/neobrutalist UI component library for React',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='uk'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
