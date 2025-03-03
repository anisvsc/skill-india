import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

// euclid font
const euclid = localFont({
  src: [
    {
      path: "../../public/fonts/EuclidCircularBRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/EuclidCircularBMedium.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "CSMU Skill India: E-Learning and Job Portal",
  description: "Free online skill development platform offering courses, certification program sand job opportunities to help unemployed youth and under privileged communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased max-w-6xl mx-auto px-4 relative min-h-screen", euclid.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
