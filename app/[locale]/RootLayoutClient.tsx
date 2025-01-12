"use client";

import { NextIntlClientProvider } from 'next-intl';
import Navbar from '@/components/Navbar/Desktop/Navbar';
import Footer from '@/components/Footer/Desktop/Footer';
import NavbarMobile from '@/components/Navbar/Mobile/NavbarMobile';
import LoadingPage from '@/components/LoadingPage';
import "../globals.css";
// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';

export default function RootLayoutClient({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading (2 seconds)
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang={locale}>
      <body className="body min-h-screen">
        {isLoading ? (
          <LoadingPage />
        ) : (
          <NextIntlClientProvider locale={locale} messages={messages}>
            <header className="w-full sticky top-0 z-50 lg:z-[200]">
              {/* Show Desktop Navbar on large screens and Mobile Navbar on small screens */}
              <div className="hidden lg:block">
                <Navbar locale={locale} />
              </div>
              <div className="lg:hidden">
                <NavbarMobile locale={locale} />
              </div>
            </header>
            <main>{children}</main>
            <div className="hidden lg:block">
              <Footer locale={locale} />
            </div>
          </NextIntlClientProvider>
        )}
      </body>
    </html>
  );
}
