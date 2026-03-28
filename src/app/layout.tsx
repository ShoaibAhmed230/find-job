import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import TopLoader from "@/components/TopLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TalentVare | Your Gateway to Dream Careers",
  description: "Explore thousands of job opportunities across top companies. From technical roles to creative positions, TalentVare helps you discover your next big career move with ease.",
  keywords: ["jobs", "career", "employment", "hiring", "recruitment", "TalentVare", "job portal"],
  authors: [{ name: "TalentVare Team" }],
  openGraph: {
    title: "TalentVare | Discover Your Next Career Move",
    description: "Connect with top employers and find your dream job today. A modern, fast, and professional job search platform.",
    url: "https://find-job-pi.vercel.app/",
    siteName: "TalentVare",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TalentVare | Find Your Dream Career",
    description: "Browse curated job listings and apply to top companies in seconds.",
    creator: "@shoaibahmed230",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
        <Suspense fallback={null}>
          <TopLoader />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
