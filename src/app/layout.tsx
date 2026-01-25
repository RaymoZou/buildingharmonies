import type { Metadata } from "next";
import { Geist, Geist_Mono, Barrio, Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const barrio = Barrio({
    weight: "400",
    variable: "--font-barrio",
    subsets: ['latin'],
})

const cedarville_cursive = Cedarville_Cursive({
    weight: "400",
    variable: "--font-cedarville-cursive",
    subsets: ['latin'],
})

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Building Harmonies - A Community Night of Connection through Song",
    description: "Join us on Saturday, March 21, 2026 for a fun night of singing (and dinner!) - RSVP now!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${barrio.variable} ${cedarville_cursive.variable} antialiased min-h-screen bg-[#F7F2Eb]`}
            >
                <Header />
                <main className="pt-16">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
