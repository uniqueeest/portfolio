import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'uniqueeest',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center w-full dark:bg-gray800">
        {children}
      </body>
    </html>
  );
}
