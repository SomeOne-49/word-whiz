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
        <body className={`${baloo.className} relative max-h-screen overflow-hidden`}>
          <div className="absolute left-0 top-0 z-10 size-full bg-black/50 backdrop-blur-sm" />
          <Image
            src="/assets/auth-bg.svg"
            fill
            alt="books"
            className="object-cover"
          />
          <main className="relative z-50 mx-auto h-screen max-w-sm overflow-hidden">
            <div className="absolute left-0 top-0 z-10 size-full bg-black/50"></div>
            <Image
              src="/assets/auth-bg.svg"
              fill
              alt="books"
              className="object-cover"
            />
            <div className="absolute left-1/2 top-[10%] z-40 -translate-x-1/2">
              <Image
                src="/assets/logo-sm.svg"
                width={150}
                height={150}
                alt="books"
                className="object-cover"
              />
            </div>
            <div className="relative h-screen">
              <div className="absolute bottom-0 left-0 z-20 min-h-80 w-full pt-24">
                <Image
                  className="absolute left-0 top-0 -z-10"
                  src="/assets/login-shape.svg"
                  priority
                  width={500}
                  height={400}
                  alt="shape"
                />
                {children}
              </div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
