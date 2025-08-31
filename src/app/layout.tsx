import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const quicksand = localFont({
  src: "./quicksand.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Total Fit Academia",
  description: "Dashboard administrativo da Total Fit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
