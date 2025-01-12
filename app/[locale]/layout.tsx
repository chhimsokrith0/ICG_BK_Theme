// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages } from 'next-intl/server';
// import Navbar from '@/components/Navbar/Desktop/Navbar';
// import Footer from '@/components/Footer/Desktop/Footer';
// import NavbarMobile from '@/components/Navbar/Mobile/NavbarMobile';
// import "../globals.css";
// // Import Font Awesome CSS
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default async function RootLayout({
//   children,
//   params: rawParams,
// }: {
//   children: React.ReactNode;
//   params: Promise<{ locale: string }>; // Awaitable params
// }) {
//   const params = await rawParams; // Await the params
//   const { locale } = params; // Destructure the awaited params
//   const messages = await getMessages({ locale });

//   return (
//     <html lang={locale}>
//       <body className="body min-h-screen">
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <header className="w-full sticky top-0 z-50 lg:z-[200]">
//             {/* Show Desktop Navbar on large screens and Mobile Navbar on small screens */}
//             <div className="hidden lg:block">
//               <Navbar locale={locale} />
//             </div>
//             <div className="lg:hidden">
//               <NavbarMobile locale={locale} />
//             </div>
//           </header>
//           <main>
//             {children}
//           </main>
//           <div className="hidden lg:block">
//             <Footer locale={locale} />
//           </div>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }






import RootLayoutClient from './RootLayoutClient';
import { getMessages } from 'next-intl/server';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Type definition for locale
}) {
  const { locale } = await params; // Directly access the locale property
  const messages = await getMessages({ locale }); // Server-side fetching of messages

  return (
    <RootLayoutClient locale={locale} messages={messages}>
      {children}
    </RootLayoutClient>
  );
}
