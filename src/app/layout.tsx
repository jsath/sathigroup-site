import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sathi Group — We Build AI Tools For Your Business",
  description:
    "Custom AI agents that replace expensive software, automate operations, and give your team leverage that compounds every day. AI coaching, implementation, and transformation for serious operators.",
  metadataBase: new URL("https://sathigroup.ai"),
  alternates: {
    canonical: "https://sathigroup.ai",
  },
  keywords: [
    "AI consulting",
    "AI consulting for business",
    "AI implementation services",
    "AI agents",
    "business automation",
    "AI coaching",
    "AI transformation",
    "custom AI tools",
    "AI for business",
    "enterprise AI solutions",
    "hire AI consultant",
  ],
  authors: [{ name: "Sathi Group" }],
  creator: "Sathi Group",
  openGraph: {
    title: "Sathi Group — We Build AI Tools For Your Business",
    description:
      "Custom AI agents that replace expensive software, automate operations, and give your team leverage that compounds every day.",
    type: "website",
    url: "https://sathigroup.ai",
    siteName: "Sathi Group",
    locale: "en_US",
    images: [
      {
        url: "https://sathigroup.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sathi Group — AI Consulting and Implementation for Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathi Group — We Build AI Tools For Your Business",
    description:
      "Custom AI agents that replace expensive software, automate operations, and give your team leverage that compounds every day.",
    images: ["https://sathigroup.ai/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// Schema.org structured data
const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sathigroup.ai/#organization",
      name: "Sathi Group",
      url: "https://sathigroup.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://sathigroup.ai/og-image.png",
      },
      description:
        "Custom AI agents that replace expensive software, automate operations, and give your team leverage that compounds every day.",
      foundingDate: "2024",
      sameAs: [],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://sathigroup.ai/#service",
      name: "Sathi Group — AI Consulting & Implementation",
      url: "https://sathigroup.ai",
      provider: { "@id": "https://sathigroup.ai/#organization" },
      description:
        "AI coaching, custom AI agent development, and business transformation services. From $5K coaching engagements to $250K enterprise transformations.",
      serviceType: [
        "AI Consulting",
        "AI Implementation",
        "AI Coaching",
        "Business Automation",
        "Custom AI Development",
      ],
      areaServed: "Worldwide",
      priceRange: "$5,000 - $250,000",
    },
    {
      "@type": "WebSite",
      "@id": "https://sathigroup.ai/#website",
      url: "https://sathigroup.ai",
      name: "Sathi Group",
      publisher: { "@id": "https://sathigroup.ai/#organization" },
      description:
        "AI consulting, implementation, and transformation for serious business operators.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
