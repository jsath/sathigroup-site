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
    "Custom AI agents that replace expensive software, automate operations, and give your team leverage that compounds every day. Coaching, implementation, and transformation for serious operators.",
  metadataBase: new URL("https://sathigroup.ai"),
  keywords: [
    "AI consulting",
    "AI implementation",
    "AI agents",
    "business automation",
    "AI coaching",
    "AI transformation",
    "custom AI tools",
    "AI for business",
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
        alt: "Sathi Group — We Build AI Tools For Your Business",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
