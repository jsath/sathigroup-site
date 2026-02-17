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
  title: "Sathi Group — Premium AI Advisory",
  description:
    "White-glove AI coaching, implementation, and transformation for individuals and enterprises. The companies that move now will own the next decade.",
  openGraph: {
    title: "Sathi Group — Premium AI Advisory",
    description:
      "White-glove AI coaching, implementation, and transformation for individuals and enterprises.",
    type: "website",
    url: "https://sathigroup.ai",
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
