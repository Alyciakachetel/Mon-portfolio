import type { Metadata } from "next";

import "./globals.css";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Portfolio d'Aycia'",
  description: "Bienvenue dans mon portfolio personnel !",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={firaCode.variable} lang="en">
      <body>{children}</body>
    </html>
  );
}
