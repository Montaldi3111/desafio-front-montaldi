"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import StoreProvider from "../StoreProvider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
        </body>
    </html>
  );
}
