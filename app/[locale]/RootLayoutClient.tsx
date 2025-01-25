
"use client";

import { NextIntlClientProvider } from 'next-intl';
import Navbar from '@/components/Navbar/Desktop/Navbar';
import Footer from '@/components/Footer/Desktop/Footer';
import NavbarMobile from '@/components/Navbar/Mobile/NavbarMobile';
import LoadingPage from '@/components/LoadingPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import LiveChatButton from '@/components/LiveChatButton';
import BackToTopButton from '@/components/BackToTopButton';
import { usePathname } from 'next/navigation';
import SessionProviderWrapper from '@/components/SessionProviderWrapper';
import fonts from "../../messages/fonts.json";
import "./styleFont.css"
import MobileNavigationBar from '@/components/Navbar/Mobile/MobileNavigationBar';


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
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading (2 seconds)
    return () => clearTimeout(timer);
  }, []);

  // console.log('Current pathname:', pathname);

  // Adjust the comparison to account for the locale in the path
  const isLoginPage =
    typeof pathname === 'string' &&
    pathname.toLowerCase().replace(/\/$/, '').endsWith('/login');

  const isRegisterPage =
    typeof pathname === 'string' &&
    pathname.toLowerCase().replace(/\/$/, '').endsWith('/register');

  const selectedFont =
    (fonts.fonts as any)[locale]?.fontFamily;

  return (
    <html lang={locale} style={{ fontFamily: selectedFont }}>
      <body className="body min-h-screen">
        {isLoading ? (
          <LoadingPage />
        ) : (
          <NextIntlClientProvider locale={locale} messages={messages}>
            <SessionProviderWrapper>
              <header className="w-full sticky top-0 z-50 lg:z-[200]">
                <div className="hidden lg:block">
                  <Navbar locale={locale} />
                </div>
                <LiveChatButton />
                <BackToTopButton />
                <div className="lg:hidden">
                  <NavbarMobile locale={locale} />
                </div>
              </header>
              <main>{children}</main>

              <div className='block lg:hidden'>
                <MobileNavigationBar />
              </div>

              {!isLoginPage && !isRegisterPage && (
                <div >
                  <Footer locale={locale} />
                </div>
              )}
            </SessionProviderWrapper>
          </NextIntlClientProvider>
        )}
      </body>
    </html>
  );
}
