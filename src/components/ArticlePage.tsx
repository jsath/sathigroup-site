"use client";

import Link from "next/link";

const CALENDLY_URL = "mailto:kate@sathigroup.ai?subject=AI%20Automation%20Inquiry&body=Hi%20Kate%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20Sathi%20Group%27s%20AI%20automation%20services.%0A%0A";

interface Section {
  heading: string;
  content: string;
}

interface ArticlePageProps {
  category: string;
  title: string;
  subtitle: string;
  publishDate: string;
  readTime: string;
  sections: Section[];
}

export default function ArticlePage({
  category,
  title,
  subtitle,
  publishDate,
  readTime,
  sections,
}: ArticlePageProps) {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-sand-50/90 backdrop-blur-md border-b border-sand-200">
        <div className="mx-auto max-w-[1200px] flex items-center justify-between px-6 lg:px-8 py-5">
          <Link
            href="/"
            className="font-mono text-[13px] tracking-[0.15em] text-ink-muted hover:text-ink transition-colors"
          >
            SATHI GROUP
          </Link>
          <div className="hidden sm:flex items-center gap-8">
            <Link
              href="/"
              className="text-[13px] text-ink-muted hover:text-ink transition-colors link-underline"
            >
              Home
            </Link>
            <Link
              href="/case-studies"
              className="text-[13px] text-ink-muted hover:text-ink transition-colors link-underline"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="text-[13px] text-ink-muted hover:text-ink transition-colors link-underline"
            >
              Insights
            </Link>
            <a
              href={CALENDLY_URL}
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
        {/* Hero */}
        <section className="px-6 lg:px-8 pt-32 pb-12">
          <div className="mx-auto max-w-[800px]">
            <p className="font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-4">
              {category}
            </p>
            <h1 className="text-display font-bold text-ink mb-6">{title}</h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-6">
              {subtitle}
            </p>
            <div className="flex items-center gap-4 text-[13px] text-sand-500 font-mono">
              <span>{publishDate}</span>
              <span>·</span>
              <span>{readTime}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-[800px] space-y-12">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-ink mb-4">
                  {section.heading}
                </h2>
                <div
                  className="text-ink-muted leading-[1.85] space-y-4 article-content"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}

            {/* Internal Links */}
            <div className="border-t border-sand-300/60 pt-10">
              <h2 className="text-xl font-bold text-ink mb-4">
                Continue Reading
              </h2>
              <div className="flex flex-col gap-3">
                <Link
                  href="/case-studies"
                  className="text-ink-muted hover:text-ink transition-colors link-underline inline-block"
                >
                  → View our case studies and client results
                </Link>
                <Link
                  href="/"
                  className="text-ink-muted hover:text-ink transition-colors link-underline inline-block"
                >
                  → Learn about our AI consulting services
                </Link>
                <Link
                  href="/blog"
                  className="text-ink-muted hover:text-ink transition-colors link-underline inline-block"
                >
                  → Browse all insights
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-sand-300/60 pt-10">
              <h2 className="text-2xl font-bold text-ink mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-ink-muted leading-relaxed mb-6">
                Book a confidential consultation with our team to identify your
                highest-impact AI opportunities and get a concrete implementation
                roadmap.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.1em] text-sand-50 bg-ink px-8 py-4 hover:bg-ink-light transition-colors duration-300"
              >
                BOOK YOUR CONSULTATION
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 lg:px-8 py-8 border-t border-sand-200">
        <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[12px] text-sand-500">
            © {new Date().getFullYear()} Sathi Group
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-[12px] text-sand-500 hover:text-ink transition-colors"
            >
              Insights
            </Link>
            <Link
              href="/case-studies"
              className="text-[12px] text-sand-500 hover:text-ink transition-colors"
            >
              Case Studies
            </Link>
          </div>
          <span className="font-mono text-[11px] text-sand-400 tracking-wide">
            sathigroup.ai
          </span>
        </div>
      </footer>
    </>
  );
}
