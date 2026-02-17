"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com";

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
          {["Approach", "Team", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[13px] text-ink-muted hover:text-ink transition-colors link-underline"
            >
              {l}
            </a>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-mono tracking-[0.05em] text-ink border border-ink/20 px-4 py-2 hover:bg-ink hover:text-sand-50 transition-all duration-300"
          >
            Book a Call
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
          The future satisfies
          <br />
          no one who waits.
        </h1>
        <div className="mt-10 grid lg:grid-cols-12 gap-8 animate-fade-up-delay-2">
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg text-ink-muted leading-relaxed">
              The gap between AI adopters and everyone else is widening every day.
              Sathi Group provides the strategic clarity and hands-on implementation
              to ensure you&apos;re on the right side of that divide.
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
    title: "AI Strategy & Coaching",
    description:
      "One-on-one advisory that cuts through the noise. We assess your operations, identify the highest-leverage AI opportunities, and build a roadmap tailored to your business.",
  },
  {
    title: "Custom AI Implementation",
    description:
      "Purpose-built AI agents and automation systems deployed directly into your workflow. Not demos — working infrastructure that delivers measurable ROI from day one.",
  },
  {
    title: "Team Training & Enablement",
    description:
      "Transform your team from AI-curious to AI-native. In-person or virtual programs that embed AI fluency into your company culture and daily operations.",
  },
];

function WhatWeDo() {
  const { ref, inView } = useInView();
  return (
    <section id="approach" ref={ref} className="px-6 lg:px-8 py-24 bg-ink text-sand-100">
      <div className="mx-auto max-w-[1200px]">
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-[13px] text-sand-500 tracking-[0.1em] mb-3">
            WHAT WE DO
          </p>
          <h2 className="text-headline font-bold text-sand-100 text-balance">
            Cognitive leverage,
            <br />
            deployed with precision.
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
    label: "Individuals & Operators",
    description:
      "Founders, executives, and independent professionals who want to personally harness AI — with a dedicated coach and custom-built AI systems tailored to your workflow.",
  },
  {
    label: "Growth Companies",
    description:
      "Teams under 25 people ready to embed AI across their operations. In-person or virtual training, multiple custom AI deployments, and 60 days of strategic support.",
  },
  {
    label: "Enterprise",
    description:
      "Large organizations requiring full-scale AI transformation. Comprehensive strategy, deployment, training, and ongoing advisory at the highest level.",
  },
];

function WhoItsFor() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="px-6 lg:px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="rule mb-16" />
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-3">
            WHO IT&apos;S FOR
          </p>
          <h2 className="text-headline font-bold text-ink text-balance">
            Serious operators only.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`border-t border-sand-300/60 pt-8 transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              <h3 className="text-lg font-semibold text-ink mb-3">
                {tier.label}
              </h3>
              <p className="text-ink-muted leading-relaxed text-[15px]">
                {tier.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-mono text-ink-muted hover:text-ink transition-colors group tracking-[0.05em]"
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

/* ─── Team ─── */

const team = [
  {
    name: "Johann Sathianathen",
    role: "AI Architect & Co-Founder",
    bio: "Built and sold multiple companies before turning 21. Deep technical background in AI systems architecture, with a track record of turning complex technology into operational advantage for businesses across industries.",
  },
  {
    name: "Darien K. Smith",
    role: "Sales Strategist & Co-Founder",
    bio: "Sales strategist and LinkedIn thought leader with a proven ability to build high-performance revenue engines. Brings the commercial acumen and go-to-market expertise that ensures AI investments translate directly to business growth.",
  },
];

function Team() {
  const { ref, inView } = useInView();
  return (
    <section id="team" ref={ref} className="px-6 lg:px-8 py-24 bg-ink text-sand-100">
      <div
        className={`mx-auto max-w-[1200px] transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-[13px] text-sand-500 tracking-[0.1em] mb-3">
              LEADERSHIP
            </p>
            <h2 className="text-headline font-bold text-sand-100">
              Built by operators,
              <br />
              for operators.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-0">
              {team.map((person, i) => (
                <div
                  key={i}
                  className="border-t border-sand-800 py-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-sand-100">
                      {person.name}
                    </h3>
                    <span className="text-sm text-sand-500">{person.role}</span>
                  </div>
                  <p className="text-sand-400 leading-[1.75]">{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
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
        <HowItWorks />
        <WhoItsFor />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
