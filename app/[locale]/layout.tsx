import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { cn } from "@/lib/utils";
import { Navbar } from '@/components/layout/Navbar';
import { FooterSection } from "@/components/layout/Footer";
import Providers from '@/app/providers';


const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Minimal English",
    description: "Minimal English",
    icons: {
        icon: '/images/logo.png',
    }
};

export default async function RootLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    const translate = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <link rel="icon" href="/logo.png" sizes="any" />
            <body className={cn("min-h-screen bg-background", openSans.className)}>
                <NextIntlClientProvider messages={translate}>
                    <Providers>
                        <Navbar />
                        {children}
                        <FooterSection/>
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

