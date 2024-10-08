import Header from '@/components/shared/header/Header';
import Navigation from '@/components/shared/navigation/navigation';
import { Toaster } from '@/components/ui/toaster';
import { baloo } from '@/config/fonts';
import { siteConfig } from '@/config/site';

import '@/styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
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
    <ClerkProvider>
      <html lang="en">
        <body className={`${baloo.className} relative flex h-svh`}>
          <div className="absolute left-0 top-0 z-10 size-full bg-primary/25 backdrop-blur-sm" />
          <Image
            src="/assets/app-bg-2.png"
            fill
            alt="books"
            className="object-cover"
          />
          <div className="relative z-50 m-auto flex h-full max-w-sm grow flex-col justify-between gap-3 bg-white p-3">
            <Header />
            <main className="grow overflow-hidden rounded-2xl bg-white">
              {children}
            </main>
            <Navigation />
          </div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
