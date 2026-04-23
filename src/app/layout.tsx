import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Rajput Bhavin | Full Stack Developer & SaaS Specialist',
    template: '%s | Rajput Bhavin'
  },
  description: 'Rajput Bhavin is a specialized Software Developer based in Ahmedabad, focusing on SaaS applications, Web Automation, and Full Stack Development.',
  keywords: [
    'Rajput Bhavin', 'Bhavin Rajput', 'Bhavik Rajput', 'Rajput Bhavik',
    'Bhau', 'Bhavin', 'Bhavik', 'Bhau Developer', 'Bhavik Developer',
    'Rajput bhau', 'Bhavin bhau', 'Bhavik bhau', 'Amdavadi Developer',
    'Rajput Bhavin Singh', 'Software Developer Bhavin', 'Full Stack Developer Bhavin', 
    'Programmer Bhavin', 'Bhavin Developer Ahmedabad', 'SaaS Developer India', 
    'Web Developer Bhavin', 'Node.js Developer Bhavin', 'React Developer Bhavin', 
    'Portfolio Bhavin Rajput', 'Rajput Portfolio', 'Best Developer in Ahmedabad'
  ],


  authors: [{ name: 'Rajput Bhavin' }],
  creator: 'Rajput Bhavin',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://portfoliobhavin.vercel.app/',
    siteName: 'Rajput Bhavin Portfolio',
    title: 'Rajput Bhavin | Expert Full Stack Developer',
    description: 'High-performance SaaS and Automation solutions by Rajput Bhavin.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Rajput Bhavin Portfolio' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajput Bhavin | Full Stack Developer',
    description: 'Specializing in MERN stack and SaaS solutions.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // User can add this later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rajput Bhavin",
    "alternateName": ["Bhavin Rajput", "Rajput Bhavin", "Bhavik Rajput", "Bhavin Developer Ahmedabad"],
    "url": "https://portfoliobhavin.vercel.app/",
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://github.com/bhavik69600/",
      "https://www.linkedin.com/in/rajput-bhavin-9512a028a"
    ],
    "description": "Rajput Bhavin is an expert Software Developer specializing in SaaS development, Web Apps, and Automation logic."

  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://portfoliobhavin.vercel.app/" />
      </head>
      <body className={`${inter.variable} antialiased bg-black text-foreground noise relative`}>
        <div className="bg-mesh pointer-events-none" />

        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
