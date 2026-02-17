import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    type: "article",
    siteName: "Sathi Group",
    locale: "en_US",
    images: [
      {
        url: "https://sathigroup.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sathi Group — AI Consulting & Implementation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://sathigroup.ai/og-image.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
