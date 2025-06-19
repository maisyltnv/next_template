import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_Lao_Looped, Noto_Sans_Thai, Noto_Sans } from "next/font/google";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { ReduxProviders } from "@/providers/ReduxProviders";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/sonner";

const lao = Noto_Sans_Lao_Looped({ subsets: ['latin'] })
const thai = Noto_Sans_Thai({ subsets: ['thai'] })
const noto = Noto_Sans({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "Branding",
  description: "Branding is a comprehensive enterprise resource planning software.",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  const fontClass = {
    la: lao.className,
    th: thai.className,
  }[locale] ?? noto.className;

  return (
    <ReduxProviders>
      <ReactQueryClientProvider>
        <html lang={locale} suppressHydrationWarning>
          <body className={`${fontClass} antialiased`} suppressHydrationWarning>
            <NextIntlClientProvider messages={messages}>
              <NuqsAdapter>{children}</NuqsAdapter>
              <Toaster />
            </NextIntlClientProvider>
          </body>
        </html>
      </ReactQueryClientProvider>
    </ReduxProviders>
  );
}
