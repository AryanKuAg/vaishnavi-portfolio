import type { Metadata } from "next";
import { Roboto, Itim } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaishnavi's Portfolio",
  description: "Vaishnavi's Portfolio 🌼",
};

// Configure fonts
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify font weights you need
  variable: '--font-roboto', // Define CSS variable for the font
});

const itim = Itim({
  subsets: ['latin'],
  weight: ['400'], // Specify font weights you need
  variable: '--font-itim', // Define CSS variable for the font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${itim.variable}`}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
