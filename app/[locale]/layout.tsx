import RootLayoutClient from './RootLayoutClient';
import { getMessages } from 'next-intl/server';
import '../globals.css'
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
