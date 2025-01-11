
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/components/Navbar/Desktop/Navbar';
import Footer from '@/components/Footer/Desktop/Footer';
import "../globals.css"
// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default async function RootLayout({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Awaitable params
}) {
  const params = await rawParams; // Await the params
  const { locale } = params; // Destructure the awaited params
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="body min-h-screen ">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className="w-full sticky top-0 z-50 lg:z-[200]">
            <Navbar locale={locale} />
          </header>
          <main>
            {children}
          </main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
