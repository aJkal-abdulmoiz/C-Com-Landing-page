import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Script from "next/script";

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://c-com.ai"),
  title: {
    default: "c-com.ai | Strategic Conversational AI Readiness for Leading Brands",
    template: "%s | c-com.ai"
  },
  description: "Strategic Conversational AI readiness for leading brands. Build durable competitive advantage through AI-powered conversational commerce, AI discovery optimization, and enterprise AI implementation.",
  keywords: [
    "Conversational AI",
    "AI Strategy Consulting",
    "Conversational Commerce",
    "AI Readiness Framework",
    "Enterprise AI Implementation",
    "AI Discovery Optimization",
    "eCommerce AI Transformation",
    "GEO AEO AIO Strategy",
    "Digital Transformation Consulting",
    "AI Change Management"
  ],
  authors: [{ name: "Faraz Siddiqui", url: "https://c-com.ai" }],
  creator: "Faraz Siddiqui",
  publisher: "c-com.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://c-com.ai",
    siteName: "c-com.ai",
    title: "c-com.ai | Strategic Conversational AI Readiness for Leading Brands",
    description: "Build durable competitive advantage through AI-powered conversational commerce. Expert consulting for enterprise AI strategy, implementation, and organizational readiness.",
    images: [
      {
        url: "/logo-og.png",
        width: 1200,
        height: 630,
        alt: "c-com.ai - Strategic Conversational AI Consulting & Implementation",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@c_com_ai",
    creator: "@farazsiddiqui",
    title: "c-com.ai | Strategic Conversational AI Readiness for Leading Brands",
    description: "Build durable competitive advantage through AI-powered conversational commerce. Expert consulting for enterprise AI strategy and implementation.",
    images: ["/logo-og.png"],
  },
  alternates: {
    canonical: "https://c-com.ai",
  },
  category: "Technology",
  classification: "Business Services - AI Consulting",
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // other: {
    //   'msvalidate.01': 'your-bing-verification-code',
    // },
  },
  other: {
    'theme-color': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://c-com.ai/#organization",
    "name": "c-com.ai",
    "url": "https://c-com.ai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://c-com.ai/logo-og.png",
      "width": 1200,
      "height": 630
    },
    "description": "Strategic Conversational AI readiness consulting for leading brands. Expert guidance on AI-powered conversational commerce and enterprise AI implementation.",
    "founder": {
      "@type": "Person",
      "name": "Faraz Siddiqui",
      "jobTitle": "Conversational AI Strategist",
      "url": "https://www.linkedin.com/in/faraz-siddiqui-4189692/"
    },
    "areaServed": "Global",
    "serviceType": [
      "Conversational AI Consulting",
      "AI Strategy Development",
      "Enterprise AI Implementation",
      "Conversational Commerce Strategy",
      "AI Organizational Readiness"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/faraz-siddiqui-4189692/",
      "https://farazsid.substack.com/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@c-com.ai",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    }
  };

  // JSON-LD Structured Data for Website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://c-com.ai/#website",
    "url": "https://c-com.ai",
    "name": "c-com.ai",
    "description": "Strategic Conversational AI readiness for leading brands",
    "publisher": {
      "@id": "https://c-com.ai/#organization"
    },
    "inLanguage": "en-US"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <CustomCursor />
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
