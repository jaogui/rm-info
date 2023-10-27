import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextData } from "./data/hooks/ContextData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty Info",
  description: "Data API Rick and Morty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextData>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ContextData>
  );
}
