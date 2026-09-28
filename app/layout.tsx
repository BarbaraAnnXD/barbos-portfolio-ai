import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barbos-portfolio-ai.vercel.app"),
  title: {
    default: "Barbara Espericueta | Cybersecurity & Networking",
    template: "%s | Barbara Espericueta",
  },
  description:
    "Barbara Espericueta's cybersecurity and networking portfolio: cloud and API security, systems projects, technical writing, and BarbOS.",
  applicationName: "BarbOS",
  authors: [{ name: "Barbara Espericueta" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "BarbOS",
    title: "Barbara Espericueta | Cybersecurity & Networking",
    description:
      "Explore Barbara Espericueta's cybersecurity, networking, AI, and systems projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
