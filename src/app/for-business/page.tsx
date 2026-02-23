"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CALENDLY_URL = "mailto:kate@sathigroup.ai?subject=Business%20Automation%20Consultation&body=Hi%20Kate%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20how%20you%20can%20help%20automate%20my%20business%20operations.%0A%0AMy%20business%3A%20%0ABest%20time%20to%20call%3A%20%0A%0AThanks%21";

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
          href="/"
          className="font-mono text-[13px] tracking-[0.15em] text-ink-muted hover:text-ink transition-colors"
        >
          SATHI GROUP
        </a>
        <div className="hidden sm:flex items-center gap-8">
          {[
            { label: "Services", href: "/#services" },
            { label: "Use Cases", href: "/#use-cases" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "For Business", href: "/for-business" },
            { label: "Contact", href: "/#contact" },
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
            BUSINESS AUTOMATION · DIGITAL EMPLOYEE · OPERATIONS
          </p>
        </div>
        <h1 className="text-display font-bold text-ink animate-fade-up-delay-1">
          Your business runs itself.
          <br />
          Even when you&apos;re not there.
        </h1>
        <div className="mt-10 grid lg:grid-cols-12 gap-8 animate-fade-up-delay-2">
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg text-ink-muted leading-relaxed">
              Stop working evenings and weekends. Never miss another follow-up. 
              We set up a digital employee that handles your admin, customer follow-ups, 
              and daily operations—24 hours a day, 7 days a week.
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
            BOOK FREE CONSULTATION
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
        <div className="mt-8 animate-fade-up-delay-4">
          <p className="font-mono text-[13px] text-sand-400">
            Speak with Kate personally • No salespeople • 15-minute call
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Pain Points ─── */

const painPoints = [
  {
    title: "Working weekends (again)",
    description:
      "You started this business for freedom, but you're working more hours than ever. Every day off gets interrupted by 'urgent' tasks.",
  },
  {
    title: "Missed follow-ups cost money",
    description:
      "Hot leads go cold because someone forgot to call back. You know you're losing sales, but tracking everything manually is impossible.",
  },
  {
    title: "Hiring headaches",
    description:
      "Good assistants are expensive and hard to find. Training takes forever, and they still make mistakes or leave for better opportunities.",
  },
  {
    title: "Drowning in admin",
    description:
      "Scheduling, invoicing, follow-ups, customer service—it never ends. You spend more time on paperwork than growing your business.",
  },
  {
    title: "Nothing happens without you",
    description:
      "Take a vacation? Ha. The business stops when you stop. Every decision, every task waits for your approval.",
  },
  {
    title: "Falling behind competitors",
    description:
      "Other businesses seem to run smoother, respond faster, and grow quicker. You're working harder but falling behind.",
  },
];

function PainPoints() {
  const { ref, inView } = useInView(0.08);
  return (
    <section ref={ref} className="px-6 lg:px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="rule mb-16" />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-4">
            <p
              className={`font-mono text-[13px] text-ink-muted tracking-[0.1em] uppercase mb-3 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              THE PROBLEM
            </p>
            <h2
              className={`text-headline font-bold text-ink text-balance transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Sound familiar?
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p
              className={`text-lg text-ink-muted leading-[1.75] transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              The problems that keep business owners up at night.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
          {painPoints.map((pain, i) => (
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
                    {pain.title}
                  </h3>
                  <p className="text-ink-muted leading-relaxed text-[15px]">
                    {pain.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Solution ─── */

const digitalEmployeeTasks = [
  "Customer follow-ups and appointment reminders",
  "Lead qualification and initial sales conversations",
  "Scheduling and calendar management",
  "Invoice generation and payment follow-ups",
  "Customer service and support tickets",
  "Data entry and record keeping",
  "Email management and responses",
  "Social media posting and engagement",
];

function Solution() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="px-6 lg:px-8 py-24 bg-ink text-sand-100">
      <div className="mx-auto max-w-[1200px]">
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-[13px] text-sand-500 tracking-[0.1em] uppercase mb-3">
            THE SOLUTION
          </p>
          <h2 className="text-headline font-bold text-sand-100 text-balance">
            What your digital employee handles
          </h2>
          <p className="text-sand-400 leading-[1.75] mt-6 max-w-3xl">
            We set up a digital employee that handles your repetitive tasks, follows up with customers, 
            manages your schedule, and keeps your operations running smoothly—without sick days, 
            vacation requests, or salary negotiations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="space-y-0">
              {digitalEmployeeTasks.map((task, i) => (
                <div
                  key={i}
                  className={`border-t border-sand-800 py-6 flex gap-4 transition-all duration-700 ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 80}ms` }}
                >
                  <svg
                    className="w-5 h-5 text-sand-300 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-sand-300">{task}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div
              className={`border-t border-sand-800 pt-8 transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h4 className="text-xl font-semibold text-sand-100 mb-6">The result?</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sand-300 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="text-sand-400">
                    <strong className="text-sand-100">40+ hours</strong> back in your week
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sand-300 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="text-sand-400">
                    <strong className="text-sand-100">Zero missed</strong> follow-ups or opportunities
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sand-300 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-sand-400">
                    Business runs while you <strong className="text-sand-100">actually take breaks</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */

const steps = [
  {
    number: "01",
    title: "We learn your business",
    description:
      "Kate spends time understanding your processes, customer interactions, and daily tasks. No forms to fill out—just a conversation about how you currently work.",
  },
  {
    number: "02",
    title: "We set everything up",
    description:
      "Our team builds and configures your digital employee to handle your specific needs. You don't touch any technology—we handle all the technical setup.",
  },
  {
    number: "03",
    title: "Your business runs itself",
    description:
      "Watch as tasks get done automatically, customers get responses instantly, and you finally have time to focus on growth instead of daily operations.",
  },
];

function HowItWorks() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="px-6 lg:px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="rule mb-16" />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p
              className={`font-mono text-[13px] text-ink-muted tracking-[0.1em] uppercase mb-3 transition-all duration-700 ${
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
              Simple setup.
              <br />
              Immediate results.
            </h2>
            <p
              className={`text-ink-muted leading-[1.75] mt-6 transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              No technical knowledge required.
            </p>
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

/* ─── Cost Comparison ─── */

function CostComparison() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="px-6 lg:px-8 py-24 bg-ink text-sand-100">
      <div className="mx-auto max-w-[1200px]">
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-[13px] text-sand-500 tracking-[0.1em] uppercase mb-3">
            THE MATH
          </p>
          <h2 className="text-headline font-bold text-sand-100 text-balance">
            Compare the true cost of
            <br />
            hiring vs. automation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`border-t border-sand-800 pt-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-5 h-5 text-sand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <h3 className="text-xl font-semibold text-sand-100">Hiring an Assistant</h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-sand-400">Salary (part-time)</span>
                <span className="font-mono text-sand-100">$2,500/month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sand-400">Benefits & taxes</span>
                <span className="font-mono text-sand-100">$500/month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sand-400">Training time</span>
                <span className="font-mono text-sand-100">20+ hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sand-400">Mistakes & sick days</span>
                <span className="font-mono text-sand-100">Ongoing cost</span>
              </div>
            </div>
            <div className="border-t border-sand-800 pt-4 flex justify-between">
              <span className="text-sand-400 font-semibold">Total monthly cost</span>
              <span className="font-mono text-xl font-bold text-sand-100">$3,000+</span>
            </div>
          </div>

          <div
            className={`border-t border-sand-800 pt-8 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-5 h-5 text-sand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <h3 className="text-xl font-semibold text-sand-100">Digital Employee</h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-sand-400">Setup & configuration</span>
                <span className="font-mono text-sand-100">One-time</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sand-400">Monthly service</span>
                <span className="font-mono text-sand-100">$997/month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sand-400">Training time</span>
                <span className="font-mono text-sand-100">0 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sand-400">Sick days & mistakes</span>
                <span className="font-mono text-sand-100">Never</span>
              </div>
            </div>
            <div className="border-t border-sand-800 pt-4 flex justify-between">
              <span className="text-sand-400 font-semibold">Total monthly cost</span>
              <span className="font-mono text-xl font-bold text-sand-100">$997</span>
            </div>
          </div>
        </div>

        <div
          className={`mt-12 transition-all duration-700 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="border-t border-sand-800 pt-8">
            <h4 className="text-2xl font-bold text-sand-100 mb-4">
              Save $2,000+ per month
            </h4>
            <p className="text-sand-400 leading-[1.75]">
              Plus get back 40+ hours of your time every week. That&apos;s time you can spend 
              with family, growing your business, or actually taking a vacation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ─── */

function FinalCTA() {
  const { ref, inView } = useInView();
  return (
    <section className="px-6 lg:px-8 py-32">
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
              Stop working in
              <br />
              your business.
              <br />
              Start working on it.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-ink-muted leading-relaxed mb-8">
              Book a 15-minute call with Kate. No sales pitch—just an honest 
              conversation about whether this makes sense for your business.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.1em] text-sand-50 bg-ink px-8 py-4 hover:bg-ink-light transition-colors duration-300 self-start"
            >
              BOOK YOUR FREE CONSULTATION
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
            <p className="font-mono text-[13px] text-sand-400 mt-6">
              kate@sathigroup.ai • Usually responds within 2 hours
            </p>
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

export default function ForBusiness() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <HowItWorks />
        <CostComparison />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}