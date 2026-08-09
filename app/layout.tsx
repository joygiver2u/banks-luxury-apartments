import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Banks Luxury Serviced Apartments",
  description:
    "Luxury serviced apartments designed for comfort, style, and exceptional stays.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>

        {children}

        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}