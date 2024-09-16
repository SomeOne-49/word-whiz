import Header from '@/components/shared/header/Header';
import Navbar from '@/components/shared/navbar/Navbar';
import { baloo } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';
import type { Metadata } from 'next';
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
      <body className={`${baloo.className} bg-primary`}>
        <div className="mx-auto flex h-screen max-w-xl flex-col justify-between gap-3 rounded-3xl bg-primary p-3 text-white">
          <Header />
          <main className="max-h-[calc(100vh-140px)] flex-1 overflow-hidden">{children}</main>
          <Navbar />
        </div>
      </body>
    </html>
  );
}
