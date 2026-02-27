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
    <section className="min-h-[100svh] flex flex-col justify-end px-6 lg:px-8 pb-16 pt-32 relative overflow-hidden">
      {/* Abstract background visual */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="mx-auto max-w-[1200px] w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
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
            <div className="mt-10 animate-fade-up-delay-2">
              <p className="text-lg text-ink-muted leading-relaxed max-w-lg">
                Custom AI agents that replace expensive software, automate operations,
                and give your team leverage that compounds every single day.
              </p>
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
          
          {/* Professional business image */}
          <div className="lg:col-span-5 flex items-end animate-fade-up-delay-2">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Modern business team collaborating with AI technology"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sand-50/20 to-transparent" />
            </div>
          </div>
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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
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
            
            {/* Data visualization element */}
            <div
              className={`mt-8 p-6 bg-sand-100/50 border border-sand-200 transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-mono text-ink-muted">COST REDUCTION</span>
                  <span className="text-sm font-semibold text-ink">67%</span>
                </div>
                <div className="w-full bg-sand-200 h-1.5">
                  <div className="bg-ink h-1.5 w-2/3 transition-all duration-1000 delay-700" />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-mono text-ink-muted">SPEED INCREASE</span>
                  <span className="text-sm font-semibold text-ink">340%</span>
                </div>
                <div className="w-full bg-sand-200 h-1.5">
                  <div className="bg-ink h-1.5 w-4/5 transition-all duration-1000 delay-800" />
                </div>
                
                <p className="text-[12px] text-ink-muted mt-4">
                  Average metrics from our enterprise implementations
                </p>
              </div>
            </div>
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
    icon: (
      <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    title: "Hiring on Autopilot",
    description:
      "Job descriptions written, posted across platforms, candidates screened, and the top 5% surfaced to your inbox. The entire pipeline runs before you finish your morning coffee.",
    icon: (
      <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Websites in Minutes",
    description:
      "Production websites — designed, built, and deployed to the live internet. What agencies quote six weeks for, your AI delivers in fifteen minutes.",
    icon: (
      <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
      </svg>
    ),
  },
  {
    title: "Kill Your SaaS Bloat",
    description:
      "CRM, scheduling, reporting, internal tools — all custom-built by your AI, replacing thousands in monthly subscriptions with systems that actually fit your workflow.",
    icon: (
      <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Lead Generation Engine",
    description:
      "Directories scraped, contacts enriched, personalized outreach drafted, pipeline filled. Runs 24/7 with no commissions, no quotas, and no sick days.",
    icon: (
      <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: "Competitor Intelligence",
    description:
      "Your AI monitors competitor websites, pricing pages, and product updates in real time. The moment they change anything — you know before their own customers do.",
    icon: (
      <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Email & Comms Automation",
    description:
      "Inbox sorted by priority, replies drafted, follow-ups auto-scheduled. Your AI handles the communication overhead so you stay focused on closing.",
    icon: (
      <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Financial Ops & Reporting",
    description:
      "Transactions auto-reconciled, P&L reports generated, anomalies flagged instantly. A part-time CFO that works around the clock and never misses a line item.",
    icon: (
      <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Content Machine",
    description:
      "Social posts, newsletters, blog drafts, and marketing copy — all in your brand voice, all on schedule. Consistent output without hiring a content team.",
    icon: (
      <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    title: "Customer Support",
    description:
      "Tier-1 tickets handled, FAQs answered, escalations routed intelligently. Responses in seconds, not hours. Your customers never wait again.",
    icon: (
      <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
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
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-[13px] text-sand-400 tracking-wide">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-8 h-8 bg-sand-100 flex items-center justify-center">
                    {uc.icon}
                  </div>
                </div>
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
    <section ref={ref} className="px-6 lg:px-8 py-24 bg-ink text-sand-100 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="100" fill="url(#gradient)" />
          <circle cx="800" cy="300" r="150" fill="url(#gradient)" />
          <circle cx="1000" cy="600" r="80" fill="url(#gradient)" />
        </svg>
      </div>
      
      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7">
            <div
              className={`transition-all duration-700 ${
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
          </div>
          
          <div className="lg:col-span-5">
            <div
              className={`transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Executive leadership team strategizing with AI technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/20" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-sand-50/95 backdrop-blur-sm p-4">
                    <p className="text-[13px] font-mono text-ink tracking-[0.05em]">
                      ENTERPRISE TRANSFORMATION
                    </p>
                    <p className="text-[11px] text-ink-muted mt-1">
                      From strategy to deployment in 60 days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    <section id="contact" className="px-6 lg:px-8 py-32 relative overflow-hidden">
      {/* Subtle background visual */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,200 Q300,50 600,200 T1200,200 V400 H0 V200Z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] transition-all duration-1000 relative z-10 ${
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
            
            {/* Additional visual element */}
            <div className="mt-8 flex items-center gap-6 opacity-60">
              <div className="w-12 h-px bg-ink" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-ink animate-pulse" />
                <div className="w-2 h-2 bg-ink animate-pulse delay-200" />
                <div className="w-2 h-2 bg-ink animate-pulse delay-400" />
              </div>
              <div className="w-12 h-px bg-ink" />
            </div>
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
