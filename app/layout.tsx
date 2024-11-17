import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iskcon Ramgarh",
  description: "Official Website of ISKCON Ramgarh 🌼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
