import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shivali V | Data Engineering & ML Systems Architect",
  description:
    "Explore Shivali V's portfolio focused on data engineering, machine learning systems, analytics, and scalable data platforms built for measurable impact.",
  keywords: [
    "Shivali V",
    "Data Engineer",
    "Machine Learning Engineer",
    "Data Science Portfolio",
    "Analytics Engineer",
    "MLOps",
  ],
  authors: [{ name: "Shivali V" }],
  openGraph: {
    title: "Shivali V | Data Engineering Portfolio",
    description:
      "Data Engineering and ML systems portfolio showcasing scalable pipelines, intelligent models, and analytics products.",
    url: "https://shivali-portfolio.vercel.app",
    siteName: "Shivali V Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Shivali V Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivali V | Data Engineering & ML",
    description:
      "Designing reliable data pipelines and intelligent ML systems.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
