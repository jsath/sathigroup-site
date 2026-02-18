import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Business Insights & Guides | Sathi Group",
  description:
    "Expert guides on AI consulting, implementation services, enterprise AI solutions, and business automation. Learn how to leverage AI for competitive advantage.",
  alternates: { canonical: "https://sathigroup.ai/blog" },
  openGraph: {
    title: "AI Business Insights & Guides | Sathi Group",
    description:
      "Expert guides on AI consulting, implementation, and business automation from Sathi Group.",
  },
};

const articles = [
  {
    slug: "ai-consulting-for-business",
    title: "AI Consulting for Business: The Complete 2025 Guide",
    description:
      "Everything you need to know about AI consulting — what it is, why it matters, and how to choose the right partner for your business.",
    category: "GUIDE",
  },
  {
    slug: "ai-implementation-services",
    title: "AI Implementation Services: From Strategy to Production in 60 Days",
    description:
      "A practical breakdown of what AI implementation actually looks like, common pitfalls, and how top firms deliver production-ready systems fast.",
    category: "DEEP DIVE",
  },
  {
    slug: "enterprise-ai-solutions",
    title: "Enterprise AI Solutions: 7 High-ROI Use Cases for 2025",
    description:
      "The most impactful enterprise AI applications — from intelligent automation to predictive analytics — with real ROI benchmarks.",
    category: "LISTICLE",
  },
  {
    slug: "how-to-hire-ai-consultant",
    title: "How to Hire an AI Consultant: 10 Questions to Ask Before You Sign",
    description:
      "A no-BS framework for evaluating AI consultants. What to look for, what to avoid, and the questions that separate real operators from pretenders.",
    category: "GUIDE",
  },
  {
    slug: "ai-business-automation-case-studies",
    title: "AI Business Automation: 5 Case Studies That Prove the ROI",
    description:
      "Real-world case studies of businesses that automated operations with AI — with specific numbers, timelines, and lessons learned.",
    category: "CASE STUDIES",
  },
];

export default function BlogIndex() {
  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-sand-50/90 backdrop-blur-md border-b border-sand-200">
        <div className="mx-auto max-w-[1200px] flex items-center justify-between px-6 lg:px-8 py-5">
          <Link
            href="/"
            className="font-mono text-[13px] tracking-[0.15em] text-ink-muted hover:text-ink transition-colors"
          >
            SATHI GROUP
          </Link>
          <div className="hidden sm:flex items-center gap-8">
            <Link href="/" className="text-[13px] text-ink-muted hover:text-ink transition-colors link-underline">Home</Link>
            <Link href="/case-studies" className="text-[13px] text-ink-muted hover:text-ink transition-colors link-underline">Case Studies</Link>
            <a
              href="mailto:kate@sathigroup.ai?subject=AI%20Automation%20Inquiry&body=Hi%20Kate%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20Sathi%20Group%27s%20AI%20automation%20services.%0A%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-mono tracking-[0.05em] text-ink border border-ink/20 px-4 py-2 hover:bg-ink hover:text-sand-50 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="px-6 lg:px-8 pt-32 pb-16">
          <div className="mx-auto max-w-[1200px]">
            <p className="font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-6">INSIGHTS</p>
            <h1 className="text-display font-bold text-ink mb-6">
              AI strategy &<br />implementation guides.
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
              Practical, no-fluff articles on AI consulting, implementation, and business
              automation from the team at Sathi Group.
            </p>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-[1200px] space-y-0">
            {articles.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="block border-t border-sand-300/60 py-10 group">
                <div className="grid lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-2">
                    <p className="font-mono text-[13px] text-sand-400 tracking-[0.1em]">{a.category}</p>
                  </div>
                  <div className="lg:col-span-10">
                    <h2 className="text-xl font-semibold text-ink group-hover:text-ink-light transition-colors mb-2">
                      {a.title}
                    </h2>
                    <p className="text-ink-muted leading-relaxed">{a.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="px-6 lg:px-8 py-8 border-t border-sand-200">
        <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[12px] text-sand-500">© {new Date().getFullYear()} Sathi Group</span>
          <span className="font-mono text-[11px] text-sand-400 tracking-wide">sathigroup.ai</span>
        </div>
      </footer>
    </>
  );
}
