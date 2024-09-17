import Header from '@/components/shared/header/Header';
import Navbar from '@/components/shared/navbar/Navbar';
import { baloo } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baloo.className} relative`}>
        <div className="absolute left-0 top-0 z-10 size-full bg-primary/25 backdrop-blur-[7px]" />
        <Image
          src="/assets/app-bg.png"
          fill
          alt="books"
          className="object-cover"
        />
        <div className="relative z-50 mx-auto flex h-screen max-w-sm flex-col justify-between gap-3 bg-white p-3 text-primary">
          <Header />
          <main className="grow overflow-hidden">
            {children}
          </main>
          <Navbar />
        </div>
      </body>
    </html>
  );
}
