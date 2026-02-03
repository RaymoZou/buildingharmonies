import type { Metadata } from "next";
import { Geist, Geist_Mono, Titan_One, Sniglet } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const titan_one = Titan_One({
    weight: "400",
    variable: "--font-titan",
    subsets: ['latin'],
})

const sniglet = Sniglet({
    weight: "400",
    variable: "--font-sniglet",
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
                className={`${geistSans.variable} ${titan_one.variable} ${geistMono.variable}  ${sniglet.variable} antialiased min-h-screen bg-[#F7F2Eb]`}
            >
                <Header />
                <main className="pt-24">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
