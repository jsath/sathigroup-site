"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CALENDLY_URL = "https://app.lemcal.com/@johann";

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

/* ─── Case Studies Data ─── */

const caseStudies = [
  {
    label: "E-COMMERCE",
    headline: "E-Commerce Brand — $2.4M ARR",
    problem:
      "The founder was managing 14 different SaaS subscriptions — CRM, analytics, email marketing, inventory management, customer support, scheduling, and more. Monthly software spend had ballooned to $4,200, and the team was spending hours each week just switching between platforms and reconciling data across them.",
    solution:
      "We audited their entire tool stack, identified nine subscriptions that could be replaced with purpose-built AI agents, and deployed custom systems for customer support triage, inventory forecasting, email campaign generation, reporting dashboards, and internal task management. Each agent was trained on their specific data and integrated directly into their existing workflow.",
    result:
      "Monthly software spend dropped from $4,200 to $380. Annual savings of $45,840. The team reclaimed roughly 20 hours per week previously lost to tool-switching and manual data reconciliation.",
    quote:
      "We didn\u2019t just save money \u2014 we got better tools. The AI agents actually understand our business. Our old SaaS stack never did.",
    attribution: "Founder & CEO",
  },
  {
    label: "REAL ESTATE",
    headline: "Real Estate Agency — 12 Agents",
    problem:
      "Each of the agency\u2019s twelve agents was manually writing listing descriptions, composing follow-up emails, preparing market comparison reports, and managing client communication. Senior agents were spending 30% of their week on administrative tasks instead of closing deals.",
    solution:
      "We deployed AI assistants for the entire team \u2014 each trained on the agency\u2019s brand voice, local market data, and MLS integrations. The system auto-generates listing descriptions from property data, drafts personalized follow-up sequences, produces weekly market reports, and handles initial client inquiry responses.",
    result:
      "Average agent productivity increased 3x. The agency closed 40% more deals in Q1 without adding a single hire. Administrative time per agent dropped from 12 hours/week to under 3.",
    quote:
      "My agents used to dread paperwork. Now they show up and sell. The AI handles everything else. We\u2019ve never had a quarter like this.",
    attribution: "Managing Broker",
  },
  {
    label: "B2B SAAS",
    headline: "B2B SaaS Startup — Series A",
    problem:
      "The founder was personally spending 15 hours every week on lead research and cold outreach \u2014 manually searching LinkedIn, enriching contact data, writing personalized messages, and tracking responses. Pipeline generation was entirely dependent on the founder\u2019s time, which meant it stopped whenever they had to focus on product or fundraising.",
    solution:
      "We built an AI-powered lead generation pipeline that scrapes relevant LinkedIn profiles based on custom ICP criteria, enriches leads with company data and technographic signals, drafts hyper-personalized outreach messages, manages multi-touch sequences, and books qualified meetings directly into the founder\u2019s calendar.",
    result:
      "The founder reclaimed 15 hours per week. Outbound pipeline grew 280% in 90 days. Meeting-to-opportunity conversion improved because the AI\u2019s personalization was more consistent than the founder\u2019s manual efforts at scale.",
    quote:
      "I went from spending half my week on outreach to spending zero. Pipeline didn\u2019t just survive \u2014 it tripled. I wish we\u2019d done this a year ago.",
    attribution: "Founder & CEO",
  },
  {
    label: "MARKETING",
    headline: "Marketing Agency — 8 Employees",
    problem:
      "Client reporting consumed two full days per month across the team. Account managers were manually logging into Google Analytics, Meta Ads Manager, and Shopify dashboards for each client, pulling screenshots, compiling data into branded slide decks, and emailing them out. It was the single most-hated task in the agency.",
    solution:
      "We deployed an AI reporting system that connects to every client\u2019s data sources via API, automatically pulls performance metrics on a configurable schedule, generates branded PDF reports with executive summaries and trend analysis, and emails them directly to clients with personalized commentary.",
    result:
      "Two days of reporting work reduced to zero manual effort. Reports are now more accurate, more consistent, and delivered on time every month. The team redirected 16 hours/month into billable client work.",
    quote:
      "Reporting used to be our worst week of the month. Now it happens automatically and the clients actually like the reports better. We look more professional with less effort.",
    attribution: "Agency Director",
  },
  {
    label: "LEGAL",
    headline: "Law Firm — Solo Practitioner",
    problem:
      "A solo attorney was paying $1,800/month for a virtual assistant to manage scheduling, client intake forms, document preparation, and basic correspondence. The VA was competent but slow, worked limited hours, and still required significant oversight and correction.",
    solution:
      "We replaced 90% of the VA\u2019s tasks with AI systems: an intelligent scheduling agent that handles booking, rescheduling, and reminders; an intake system that collects and organizes client information before consultations; a document preparation assistant trained on the firm\u2019s templates; and an email drafting system for routine correspondence.",
    result:
      "Monthly cost dropped from $1,800 to $79 in API fees. Response times improved from hours to minutes. The attorney retained the VA for the remaining 10% of tasks that require human judgment, at significantly reduced hours.",
    quote:
      "I was skeptical. I\u2019d tried \u2018AI tools\u2019 before and they were toys. This is different. It actually runs my practice. I\u2019m a better lawyer now because I spend my time on law, not logistics.",
    attribution: "Principal Attorney",
  },
  {
    label: "HOSPITALITY",
    headline: "Restaurant Group — 4 Locations",
    problem:
      "Inventory ordering, staff scheduling, and online review management were manual nightmares across all four locations. The operations manager was spending 25+ hours per week on spreadsheets, phone calls with suppliers, and copy-pasting responses to Google and Yelp reviews. Inventory waste was running at 18%.",
    solution:
      "We deployed three integrated AI systems: a predictive inventory agent that forecasts needs based on historical sales data, seasonal patterns, and upcoming events; a scheduling optimizer that builds shift plans based on projected traffic and staff preferences; and a review response agent that monitors all platforms and crafts thoughtful, on-brand responses within hours of each review.",
    result:
      "Inventory waste dropped from 18% to 7%. Labor costs decreased 12% through smarter scheduling. Every Google and Yelp review now receives a response within 4 hours. The ops manager reclaimed 20 hours per week.",
    quote:
      "Running four restaurants is chaos. It\u2019s still chaos \u2014 but now I have an AI operations team handling the parts that used to keep me up at night. The inventory savings alone paid for the entire engagement in month one.",
    attribution: "Operations Director",
  },
];

/* ─── Case Study Card ─── */

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) {
  const { ref, inView } = useInView(0.1);
  return (
    <article
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="rule mb-12" />
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-3">
            {study.label} · CASE STUDY {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="text-headline font-bold text-ink text-balance">
            {study.headline}
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-8">
          <div>
            <p className="font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-3">
              THE PROBLEM
            </p>
            <p className="text-ink-muted leading-[1.75]">{study.problem}</p>
          </div>
          <div>
            <p className="font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-3">
              WHAT WE BUILT
            </p>
            <p className="text-ink-muted leading-[1.75]">{study.solution}</p>
          </div>
          <div>
            <p className="font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-3">
              THE RESULT
            </p>
            <p className="text-ink leading-[1.75] font-medium">
              {study.result}
            </p>
          </div>
          <blockquote className="border-l-2 border-sand-300 pl-6 py-2">
            <p className="text-ink italic leading-[1.75]">
              &ldquo;{study.quote}&rdquo;
            </p>
            <p className="font-mono text-[12px] text-ink-muted tracking-[0.1em] mt-3">
              — {study.attribution.toUpperCase()}
            </p>
          </blockquote>
        </div>
      </div>
    </article>
  );
}

/* ─── Page ─── */

export default function CaseStudies() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="px-6 lg:px-8 pt-32 pb-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="animate-fade-up">
              <p className="font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-6">
                CASE STUDIES
              </p>
            </div>
            <h1 className="text-display font-bold text-ink animate-fade-up-delay-1">
              Real deployments.
              <br />
              Real numbers.
            </h1>
            <div className="mt-10 grid lg:grid-cols-12 gap-8 animate-fade-up-delay-2">
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-lg text-ink-muted leading-relaxed">
                  Every engagement below followed the same pattern: identify the
                  highest-leverage AI opportunity, build and deploy production systems,
                  and measure the impact in weeks — not quarters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-[1200px] space-y-24">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={i} study={study} index={i} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-8 py-32">
          <div className="mx-auto max-w-[1200px]">
            <div className="rule mb-16" />
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <h2 className="text-display font-bold text-ink leading-[0.95]">
                  Your case study
                  <br />
                  starts here.
                </h2>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-end">
                <p className="text-ink-muted leading-relaxed mb-8">
                  Book a confidential consultation. We&apos;ll assess your operations,
                  identify the highest-impact AI opportunities, and show you exactly
                  what&apos;s possible.
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
      </main>

      {/* Footer */}
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
    </>
  );
}
