"use client";

import { Lexend_Deca, Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const LexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-LexendDeca",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-Inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${LexendDeca.variable} ${inter.variable} antialiased`}>
        <SessionProvider>{children}</SessionProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
