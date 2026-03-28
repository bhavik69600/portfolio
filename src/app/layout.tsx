import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhavin Rajput | Full Stack Developer",
  description: "Portfolio of Bhavin Rajput, a Full Stack Developer specializing in MERN stack, Next.js, and Node.js.",
};

import ClientProviders from "@/components/ClientProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased bg-black text-foreground noise relative`}>
        <div className="bg-mesh pointer-events-none" />

        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}


