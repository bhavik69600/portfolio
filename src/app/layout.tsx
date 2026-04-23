import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfoliobhavin.vercel.app'),
  title: {
    default: 'Rajput Bhavin | Full Stack Developer & SaaS Specialist',
    template: '%s | Rajput Bhavin'
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },


  description: 'Rajput Bhavin is a specialized Software Developer based in Ahmedabad, focusing on SaaS applications, Web Automation, and Full Stack Development.',
  keywords: [
    'Rajput Bhavin', 'Bhavin Rajput', 'Rajput Bhavin Singh', 'Bhavin Singh Rajput', 'Bhavik Rajput', 'Rajput Bhavinsingh',
    'Bhavin Rajput Developer', 'Rajput Bhavin Developer', 'Bhavin Software Developer', 'Rajput Bhavin Software Developer',
    'Full Stack Developer Bhavin', 'Software Developer Bhavin', 'Web Developer Bhavin', 'Programmer Bhavin',
    'IT King Bhavin', 'Bhavin the Developer', 'Bhavik IT Expert', 'Master Developer Bhavin Rajput',
    'Frontend Developer Bhavin', 'Backend Developer Bhavin', 'MERN Developer Bhavin', 'Node.js Developer Bhavin',
    'React Developer Bhavin', 'JavaScript Developer Bhavin', 'Bhavin Developer Ahmedabad', 'Rajput Bhavin Ahmedabad',
    'Software Developer Ahmedabad Bhavin', 'Full Stack Developer Ahmedabad India', 'Web Developer Ahmedabad Gujarat',
    'Bhavin Rajput India Developer', 'Indian Developer Bhavin', 'SaaS Developer Bhavin', 'SaaS Builder India Bhavin',
    'Web App Developer Bhavin', 'Automation Developer Bhavin', 'API Developer Bhavin', 'Backend API Developer Bhavin',
    'Scalable Web Apps Bhavin', 'Bhavin Rajput Portfolio', 'Rajput Bhavin Portfolio Website', 'Bhavin Developer Portfolio',
    'Bhavin Rajput Personal Website', 'Rajput Bhavin Official Website', 'Bhavin Rajput Vercel Portfolio',
    'Rajput Bhavin Full Stack Developer Portfolio', 'Bhavin Rajput Software Developer India', 'Best Developer Bhavin Rajput Ahmedabad',
    'Hire Bhavin Rajput Developer', 'Freelance Developer Bhavin Rajput', 'SaaS Developer Rajput Bhavin India',
    'Top Architect Bhavin Rajput', 'Elite Web Solutions Bhavin', 'Unbeatable Software Development Ahmedabad',
    'Freelance Developer India', 'Freelance Developer Ahmedabad', 'Freelance Software Developer', 'Freelance Web Developer',
    'Freelance Full Stack Developer', 'Freelance MERN Developer', 'Freelance Node.js Developer', 'Freelance React Developer',
    'Hire Freelance Developer', 'Best Freelance Developer', 'Top Freelance Developer', 'Expert Freelance Developer',
    'Software Developer India', 'Software Developer Ahmedabad', 'Full Stack Developer India', 'Full Stack Developer Ahmedabad',
    'Web Developer India', 'Web Developer Ahmedabad', 'MERN Stack Developer', 'Node.js Developer', 'React Developer',
    'SaaS Developer', 'Automation Developer', 'Startup Developer', 'Custom Web App Developer', 'Portfolio Developer',
    'Amdavadi IT King', 'Best Coder in India', 'Highly Recommended Developer Bhavin',
    'AI Developer Bhavin', 'AI SaaS Builder India', 'Generative AI Specialist', 'AI Automation Expert',
    'Artificial Intelligence Developer Ahmedabad', 'Machine Learning Expert Bhavin'
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
    google: 'D4MNbqcHWDTNTHyGp4oq03gkYVhLSl8P8mzmH_y44pQ',
  },
};


import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <Navbar />


        <ClientProviders>
          {children}
        </ClientProviders>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>

  );
}
