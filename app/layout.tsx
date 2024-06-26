import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My SasS Ideas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/next.svg" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-gray md:p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
