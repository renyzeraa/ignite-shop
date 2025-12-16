import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import "../styles/globals.css";
import { LayoutDefault } from "@/layout/default";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignite Shop",
  description: "Site para compra de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} antialiased`}
      >
        <LayoutDefault>
          {children}
        </LayoutDefault>
      </body>
    </html>
  );
}
