import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/navigation/ResponsiveNav";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WAYFINDER RESEARCH & CONSULTANCY",
  description: "Empowering organizations and communities through evidence-based solutions and sustainable development initiatives.",
  openGraph:{
    images: '/good-logo.png'
  },
  twitter: {
    card: 'summary_large_image',
    images: '/good-logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-100`}
      >
        <ResponsiveNav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
