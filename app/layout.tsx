import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio - Veerabhadra Swamy Uppu",
  description:
    "Portfolio of Veerabhadra Swamy Uppu - engineer working on PLM, enterprise software, automation, system integration, CI/CD, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}