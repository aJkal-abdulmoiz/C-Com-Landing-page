import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "c-com.ai | The Future is Conversational",
  description: "Dominate AI conversations. Strategic Conversational AI readiness for leading brands.",
  keywords: "Conversational AI, AI Strategy, Digital Transformation, AI Consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} font-sans antialiased`}>
      <CustomCursor />
        <Banner />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
