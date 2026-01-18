import "./globals.css";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jomarie Esguerra",
  icons: {
    icon: "../public/joms.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen pt-16">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
