import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
