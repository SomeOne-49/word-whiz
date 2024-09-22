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

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${baloo.className} relative h-svh`}>
          <div className="absolute left-0 top-0 z-10 size-full bg-black/50 backdrop-blur-sm" />
          <Image
            src="/assets/auth-bg.svg"
            fill
            alt="books"
            className="object-cover"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
