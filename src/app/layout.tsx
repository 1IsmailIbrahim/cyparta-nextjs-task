import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import logo from "/public/logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyparta - Innovative IT Solutions and Services",
  description:
    "Cyparta provides comprehensive IT solutions including software development, security, UI/UX design, digital marketing, e-commerce, mobile app development, CRM, ERP, and more.",
  keywords:
    "software development, IT solutions, digital marketing, security, UI/UX design, website development, e-commerce, mobile app development, CRM, ERP",
  authors: [{ name: "Cyparta Team" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Cyparta - Innovative IT Solutions and Services",
    description:
      "Explore Cyparta's comprehensive IT solutions ranging from software development and security to digital marketing and e-commerce.",
    type: "website",
    url: "https://www.cyparta.com",
    siteName: "Cyparta",
    images: [
      {
        url: `${logo}`,
        width: 1200,
        height: 630,
        alt: "Cyparta - Innovative IT Solutions and Services",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
