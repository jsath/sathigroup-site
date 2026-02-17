import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Case Studies — Real Deployments, Real Numbers | Sathi Group",
  description:
    "See how businesses across e-commerce, real estate, SaaS, marketing, legal, and hospitality deployed AI automation — with specific ROI numbers, timelines, and implementation details.",
  alternates: { canonical: "https://sathigroup.ai/case-studies" },
  openGraph: {
    title: "AI Automation Case Studies — Real Deployments, Real Numbers",
    description:
      "Real AI deployment case studies with specific ROI numbers across multiple industries.",
    type: "website",
    images: [
      {
        url: "https://sathigroup.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sathi Group Case Studies — AI Business Automation Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Case Studies | Sathi Group",
    description: "Real AI deployments with real ROI numbers across multiple industries.",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
