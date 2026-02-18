"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CALENDLY_URL = "mailto:kate@sathigroup.ai?subject=AI%20Automation%20Inquiry&body=Hi%20Kate%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20Sathi%20Group%27s%20AI%20automation%20services.%0A%0A";

/* ─── Intersection Observer Hook ─── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Nav ─── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sand-50/90 backdrop-blur-md border-b border-sand-200"
          : ""
      }`}
    >
      <div className="mx-auto max-w-[1200px] flex items-center justify-between px-6 lg:px-8 py-5">
        <a
          href="#"
          className="font-mono text-[13px] tracking-[0.15em] text-ink-muted hover:text-ink transition-colors"
        >
          SATHI GROUP
        </a>
        <div className="hidden sm:flex items-center gap-8">
          {[
            { label: "Services", href: "#services" },
            { label: "Use Cases", href: "#use-cases" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Insights", href: "/blog" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] text-ink-muted hover:text-ink transition-colors link-underline"
            >
              {l.label}
            </a>
          ))}
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
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col justify-end px-6 lg:px-8 pb-16 pt-32">
      <div className="mx-auto max-w-[1200px] w-full">
        <div className="animate-fade-up">
          <p className="font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-6">
            AI ADVISORY · IMPLEMENTATION · TRANSFORMATION
          </p>
        </div>
        <h1 className="text-display font-bold text-ink animate-fade-up-delay-1">
          We build AI tools
          <br />
          for your business.
        </h1>
        <div className="mt-10 grid lg:grid-cols-12 gap-8 animate-fade-up-delay-2">
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg text-ink-muted leading-relaxed">
              Custom AI agents that replace expensive software, automate operations,
              and give your team leverage that compounds every single day.
            </p>
          </div>
        </div>
        <div className="mt-12 animate-fade-up-delay-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.1em] text-sand-50 bg-ink px-8 py-4 hover:bg-ink-light transition-colors duration-300"
          >
            BOOK A CONSULTATION
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
  );
}

/* ─── Problem ─── */

function Problem() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="px-6 lg:px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="rule mb-16" />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p
              className={`font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-3 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              THE REALITY
            </p>
            <h2
              className={`text-headline font-bold text-ink text-balance transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              This isn&apos;t
              <br />
              optional anymore.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div
              className={`space-y-6 transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-lg text-ink leading-[1.75]">
                Every week you delay, companies in your industry are deploying AI systems
                that permanently reduce their cost structure, accelerate their decision-making,
                and compound their advantage.
              </p>
              <p className="text-ink-muted leading-[1.75]">
                This isn&apos;t a technology trend. It&apos;s a structural shift. The organizations
                that integrate AI into their operations now will set the pace for the next decade.
                The ones that don&apos;t will spend that decade trying to catch up — if they survive
                long enough to try.
              </p>
              <p className="text-ink-muted leading-[1.75]">
                The window for &ldquo;wait and see&rdquo; has closed. The question is no longer
                whether to adopt AI, but how fast you can move.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── What We Do ─── */

const services = [
  {
    title: "AI Coaching",
    description:
      "Hands-on training that teaches you how to properly implement AI in ways that actually grow your business. Not theory — real workflows, real tools, real results. You walk away knowing exactly how to leverage AI across every part of your operation.",
  },
  {
    title: "AI Development",
    description:
      "We build secure, production-grade AI employees that plug directly into your business. Custom agents that handle your operations, communicate with your team, and compound their value every single day. Built to your specs, deployed in days.",
  },
];

function WhatWeDo() {
  const { ref, inView } = useInView();
  return (
    <section id="services" ref={ref} className="px-6 lg:px-8 py-24 bg-ink text-sand-100">
      <div className="mx-auto max-w-[1200px]">
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-[13px] text-sand-500 tracking-[0.1em] mb-3">
            SERVICES
          </p>
          <h2 className="text-headline font-bold text-sand-100 text-balance">
            Two ways we
            <br />
            transform your business.
          </h2>
        </div>

        <div className="space-y-0">
          {services.map((s, i) => (
            <div
              key={i}
              className={`border-t border-sand-800 py-10 grid lg:grid-cols-12 gap-6 transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              <div className="lg:col-span-5">
                <h3 className="text-xl font-semibold text-sand-100">
                  {s.title}
                </h3>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-sand-400 leading-[1.75]">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Use Cases ─── */

const useCases = [
  {
    title: "Intelligence Dashboards",
    description:
      "Your AI pulls live data from Shopify, ad platforms, CRMs, and financial tools — then builds real-time KPI dashboards tailored to what actually matters. One screen. Zero logins.",
  },
  {
    title: "Hiring on Autopilot",
    description:
      "Job descriptions written, posted across platforms, candidates screened, and the top 5% surfaced to your inbox. The entire pipeline runs before you finish your morning coffee.",
  },
  {
    title: "Websites in Minutes",
    description:
      "Production websites — designed, built, and deployed to the live internet. What agencies quote six weeks for, your AI delivers in fifteen minutes.",
  },
  {
    title: "Kill Your SaaS Bloat",
    description:
      "CRM, scheduling, reporting, internal tools — all custom-built by your AI, replacing thousands in monthly subscriptions with systems that actually fit your workflow.",
  },
  {
    title: "Lead Generation Engine",
    description:
      "Directories scraped, contacts enriched, personalized outreach drafted, pipeline filled. Runs 24/7 with no commissions, no quotas, and no sick days.",
  },
  {
    title: "Competitor Intelligence",
    description:
      "Your AI monitors competitor websites, pricing pages, and product updates in real time. The moment they change anything — you know before their own customers do.",
  },
  {
    title: "Email & Comms Automation",
    description:
      "Inbox sorted by priority, replies drafted, follow-ups auto-scheduled. Your AI handles the communication overhead so you stay focused on closing.",
  },
  {
    title: "Financial Ops & Reporting",
    description:
      "Transactions auto-reconciled, P&L reports generated, anomalies flagged instantly. A part-time CFO that works around the clock and never misses a line item.",
  },
  {
    title: "Content Machine",
    description:
      "Social posts, newsletters, blog drafts, and marketing copy — all in your brand voice, all on schedule. Consistent output without hiring a content team.",
  },
  {
    title: "Customer Support",
    description:
      "Tier-1 tickets handled, FAQs answered, escalations routed intelligently. Responses in seconds, not hours. Your customers never wait again.",
  },
];

function UseCases() {
  const { ref, inView } = useInView(0.08);
  return (
    <section id="use-cases" ref={ref} className="px-6 lg:px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="rule mb-16" />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-4">
            <p
              className={`font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-3 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              USE CASES
            </p>
            <h2
              className={`text-headline font-bold text-ink text-balance transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              What your AI
              <br />
              actually does.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p
              className={`text-lg text-ink-muted leading-[1.75] transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Not hypotheticals. Not demos. These are production systems we deploy
              into real businesses — running live, generating ROI, compounding daily.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className={`border-t border-sand-300/60 py-8 transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${Math.min((i + 1) * 80, 800)}ms` }}
            >
              <div className="flex gap-4">
                <span className="font-mono text-[13px] text-sand-400 tracking-wide pt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-ink-muted leading-relaxed text-[15px]">
                    {uc.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[13px] font-mono text-ink-muted hover:text-ink transition-colors group tracking-[0.05em]"
          >
            <span>SEE CLIENT RESULTS</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "A focused conversation to understand your business, identify AI opportunities, and determine the highest-impact starting point.",
  },
  {
    number: "02",
    title: "Implementation",
    description:
      "We build and deploy custom AI systems directly into your operations — coaching your team through every step of the integration.",
  },
  {
    number: "03",
    title: "Transformation",
    description:
      "Your organization emerges AI-native. Faster decisions, lower costs, compounding advantage. The gap works in your favor now.",
  },
];

function HowItWorks() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="px-6 lg:px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p
              className={`font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-3 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              PROCESS
            </p>
            <h2
              className={`text-headline font-bold text-ink text-balance transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Three steps.
              <br />
              Sixty days.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-0">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`border-t border-sand-300/60 py-8 flex gap-6 transition-all duration-700 ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 120}ms` }}
                >
                  <span className="font-mono text-[13px] text-sand-400 tracking-wide pt-1 shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-ink mb-2">
                      {step.title}
                    </h3>
                    <p className="text-ink-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Who It's For ─── */

const tiers = [
  {
    label: "The Founder Running on Fumes",
    description:
      "You&apos;re wearing six hats, drowning in ops, and know AI could change everything — but don&apos;t have 40 hours to figure it out. We hand you a fully deployed AI workforce in weeks, not quarters.",
  },
  {
    label: "The Growth-Stage Operator",
    description:
      "Revenue is climbing but headcount is eating margin. You need to 10x output without 10x payroll. We embed AI across your operations so a team of 8 performs like a team of 30.",
  },
  {
    label: "The Agency & Services Leader",
    description:
      "Client work is manual, reporting takes days, and every new account means another hire. We automate the delivery layer so you scale revenue without scaling headcount.",
  },
  {
    label: "The Enterprise Executive",
    description:
      "Your board wants an AI strategy yesterday. Your team doesn&apos;t know where to start. We provide the strategic roadmap and deploy production systems that justify the investment in 60 days.",
  },
];

function WhoItsFor() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="px-6 lg:px-8 py-24 bg-ink text-sand-100">
      <div className="mx-auto max-w-[1200px]">
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-[13px] text-sand-500 tracking-[0.1em] mb-3">
            WHO IT&apos;S FOR
          </p>
          <h2 className="text-headline font-bold text-sand-100 text-balance">
            Serious operators who want to
            <br />
            100x output — not headcount.
          </h2>
          <p className="text-sand-400 leading-[1.75] mt-6 max-w-2xl">
            We don&apos;t work with tire-kickers or &ldquo;AI-curious&rdquo; window shoppers.
            Our clients are builders, founders, and executives who understand that the
            leverage is real — and the window to capture it is closing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`border-t border-sand-800 pt-8 pb-10 transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              <h3 className="text-lg font-semibold text-sand-100 mb-3">
                {tier.label}
              </h3>
              <p
                className="text-sand-400 leading-relaxed text-[15px]"
                dangerouslySetInnerHTML={{ __html: tier.description }}
              />
            </div>
          ))}
        </div>

        <div
          className={`mt-8 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-mono text-sand-500 hover:text-sand-100 transition-colors group tracking-[0.05em]"
          >
            <span>APPLY FOR A CONSULTATION</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */

function CTA() {
  const { ref, inView } = useInView();
  return (
    <section id="contact" className="px-6 lg:px-8 py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="rule mb-16" />
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h2 className="text-display font-bold text-ink leading-[0.95]">
              The companies that
              <br />
              move now will own
              <br />
              the next decade.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-ink-muted leading-relaxed mb-8">
              Every day you wait, the gap widens. Book a confidential consultation
              to discuss how AI can transform your operations.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.1em] text-sand-50 bg-ink px-8 py-4 hover:bg-ink-light transition-colors duration-300 self-start"
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
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className="px-6 lg:px-8 py-8 border-t border-sand-200">
      <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[12px] text-sand-500">
          © {new Date().getFullYear()} Sathi Group
        </span>
        <div className="flex items-center gap-6">
          {["LinkedIn", "X / Twitter"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[12px] text-sand-500 hover:text-ink transition-colors link-underline"
            >
              {link}
            </a>
          ))}
        </div>
        <span className="font-mono text-[11px] text-sand-400 tracking-wide">
          sathigroup.ai
        </span>
      </div>
    </footer>
  );
}

/* ─── Page ─── */

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <WhatWeDo />
        <UseCases />
        <HowItWorks />
        <WhoItsFor />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
