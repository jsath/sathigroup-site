"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  Globe, 
  FileText, 
  Link as LinkIcon, 
  Eye, 
  Mail, 
  DollarSign, 
  Edit3, 
  MessageCircle,
  Zap,
  Target,
  Cpu,
  ArrowRight,
  Sparkles,
  TrendingUp
} from "lucide-react";

const CALENDLY_URL = "mailto:kate@sathigroup.ai?subject=AI%20Automation%20Inquiry&body=Hi%20Kate%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20Sathi%20Group%27s%20AI%20automation%20services.%0A%0A";

/* ─── Motion Components ─── */

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Geometric Background Components ─── */

const FloatingGeometry = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[20%] right-[10%] w-32 h-32 opacity-[0.03]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-ink">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.3" fill="none" />
        </svg>
      </motion.div>
      
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[60%] left-[5%] w-24 h-24 opacity-[0.04]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-ink">
          <polygon points="50,10 90,90 10,90" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
      </motion.div>
      
      <motion.div 
        style={{ y: y3 }}
        className="absolute top-[40%] right-[20%] w-16 h-16 opacity-[0.05]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-ink">
          <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="0.3" fill="none" />
        </svg>
      </motion.div>
    </div>
  );
};

const AnimatedCounter = ({ target, suffix = "" }: { target: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = target;
      const duration = 2000;
      const increment = end / (duration / 50);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <span ref={ref} className="font-semibold text-ink">
      {count}{suffix}
    </span>
  );
};

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
        <motion.a
          href="#"
          className="font-mono text-[13px] tracking-[0.15em] text-ink-muted hover:text-ink transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          SATHI GROUP
        </motion.a>
        <div className="hidden sm:flex items-center gap-8">
          {[
            { label: "Services", href: "#services" },
            { label: "Use Cases", href: "#use-cases" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Insights", href: "/blog" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              className="text-[13px] text-ink-muted hover:text-ink transition-colors link-underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {l.label}
            </motion.a>
          ))}
          <motion.a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-mono tracking-[0.05em] text-ink border border-ink/20 px-4 py-2 hover:bg-ink hover:text-sand-50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col justify-end px-6 lg:px-8 pb-16 pt-32 relative overflow-hidden">
      <FloatingGeometry />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-[0.02]"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, #1a1915 0%, transparent 40%)",
              "radial-gradient(circle at 80% 20%, #1a1915 0%, transparent 40%)",
              "radial-gradient(circle at 40% 40%, #1a1915 0%, transparent 40%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="mx-auto max-w-[1200px] w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p 
                className="font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-6 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  className="w-2 h-2 bg-ink-muted rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                AI ADVISORY · IMPLEMENTATION · TRANSFORMATION
              </motion.p>
            </motion.div>
            
            <motion.h1 
              className="text-display font-bold text-ink"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We build AI tools
              <br />
              <span className="relative">
                for your business.
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-ink/20 via-ink/40 to-ink/20"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
            </motion.h1>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-lg text-ink-muted leading-relaxed max-w-lg">
                Custom AI agents that replace expensive software, automate operations,
                and give your team leverage that compounds every single day.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.1em] text-sand-50 bg-ink px-8 py-4 hover:bg-ink-light transition-colors duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                BOOK A CONSULTATION
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Coded graphic instead of stock photo */}
          <div className="lg:col-span-5 flex items-end">
            <motion.div 
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-sand-100 to-sand-200 border border-sand-300/50"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Animated network visualization */}
              <div className="absolute inset-0 p-8">
                <svg viewBox="0 0 300 200" className="w-full h-full">
                  {/* Nodes */}
                  <motion.circle 
                    cx="60" cy="50" r="4" 
                    className="fill-ink/30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.circle 
                    cx="150" cy="30" r="5" 
                    className="fill-ink/40"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.circle 
                    cx="240" cy="60" r="4" 
                    className="fill-ink/30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                  <motion.circle 
                    cx="80" cy="120" r="6" 
                    className="fill-ink/50"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                  />
                  <motion.circle 
                    cx="200" cy="140" r="5" 
                    className="fill-ink/40"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                  />
                  
                  {/* Connections */}
                  <motion.line 
                    x1="60" y1="50" x2="150" y2="30" 
                    className="stroke-ink/20" strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                  />
                  <motion.line 
                    x1="150" y1="30" x2="240" y2="60" 
                    className="stroke-ink/20" strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.7 }}
                  />
                  <motion.line 
                    x1="60" y1="50" x2="80" y2="120" 
                    className="stroke-ink/20" strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.9 }}
                  />
                  <motion.line 
                    x1="240" y1="60" x2="200" y2="140" 
                    className="stroke-ink/20" strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 2.1 }}
                  />
                  <motion.line 
                    x1="80" y1="120" x2="200" y2="140" 
                    className="stroke-ink/20" strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 2.3 }}
                  />
                </svg>
              </div>
              
              {/* Overlay with icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="bg-sand-50/80 backdrop-blur-sm rounded-xl p-4 border border-sand-300/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.8 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Cpu className="w-6 h-6 text-ink/60" />
                    </motion.div>
                    <div className="text-xs font-mono text-ink-muted">
                      AI SYSTEMS ONLINE
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Problem ─── */

function Problem() {
  return (
    <section className="px-6 lg:px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="rule mb-16" />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-4">
            <FadeInWhenVisible>
              <p className="font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-3">
                THE REALITY
              </p>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.1}>
              <h2 className="text-headline font-bold text-ink text-balance">
                This isn&apos;t
                <br />
                optional anymore.
              </h2>
            </FadeInWhenVisible>
            
            {/* Enhanced data visualization */}
            <FadeInWhenVisible delay={0.3}>
              <div className="mt-8 p-6 bg-gradient-to-br from-sand-100/50 to-sand-200/30 border border-sand-200 rounded-2xl backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-mono text-ink-muted flex items-center gap-2">
                      <TrendingUp className="w-3 h-3" />
                      COST REDUCTION
                    </span>
                    <motion.span 
                      className="text-sm font-semibold text-ink"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <AnimatedCounter target={67} suffix="%" />
                    </motion.span>
                  </div>
                  <div className="w-full bg-sand-200 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-ink h-1.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "67%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-mono text-ink-muted flex items-center gap-2">
                      <Zap className="w-3 h-3" />
                      SPEED INCREASE
                    </span>
                    <motion.span 
                      className="text-sm font-semibold text-ink"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <AnimatedCounter target={340} suffix="%" />
                    </motion.span>
                  </div>
                  <div className="w-full bg-sand-200 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-ink h-1.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </div>
                  
                  <p className="text-[12px] text-ink-muted mt-4 flex items-center gap-2">
                    <Sparkles className="w-3 h-3" />
                    Average metrics from our enterprise implementations
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6">
              <FadeInWhenVisible delay={0.2}>
                <p className="text-lg text-ink leading-[1.75]">
                  Every week you delay, companies in your industry are deploying AI systems
                  that permanently reduce their cost structure, accelerate their decision-making,
                  and compound their advantage.
                </p>
              </FadeInWhenVisible>
              
              <FadeInWhenVisible delay={0.3}>
                <p className="text-ink-muted leading-[1.75]">
                  This isn&apos;t a technology trend. It&apos;s a structural shift. The organizations
                  that integrate AI into their operations now will set the pace for the next decade.
                  The ones that don&apos;t will spend that decade trying to catch up — if they survive
                  long enough to try.
                </p>
              </FadeInWhenVisible>
              
              <FadeInWhenVisible delay={0.4}>
                <p className="text-ink-muted leading-[1.75]">
                  The window for &ldquo;wait and see&rdquo; has closed. The question is no longer
                  whether to adopt AI, but how fast you can move.
                </p>
              </FadeInWhenVisible>
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
    icon: <Target className="w-8 h-8" />,
  },
  {
    title: "AI Development",
    description:
      "We build secure, production-grade AI employees that plug directly into your business. Custom agents that handle your operations, communicate with your team, and compound their value every single day. Built to your specs, deployed in days.",
    icon: <Cpu className="w-8 h-8" />,
  },
];

function WhatWeDo() {
  return (
    <section id="services" className="px-6 lg:px-8 py-24 bg-ink text-sand-100 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="mx-auto max-w-[1200px] relative z-10">
        <FadeInWhenVisible>
          <div className="mb-16">
            <p className="font-mono text-[13px] text-sand-500 tracking-[0.1em] mb-3 flex items-center gap-2">
              <motion.div
                className="w-2 h-2 bg-sand-500 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              SERVICES
            </p>
            <h2 className="text-headline font-bold text-sand-100 text-balance">
              Two ways we
              <br />
              transform your business.
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="space-y-0">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="border-t border-sand-800 py-10 grid lg:grid-cols-12 gap-6"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="text-sand-400"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {s.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-sand-100">
                    {s.title}
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-sand-400 leading-[1.75]">{s.description}</p>
              </div>
            </motion.div>
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
    icon: BarChart3,
  },
  {
    title: "Hiring on Autopilot",
    description:
      "Job descriptions written, posted across platforms, candidates screened, and the top 5% surfaced to your inbox. The entire pipeline runs before you finish your morning coffee.",
    icon: Users,
  },
  {
    title: "Websites in Minutes",
    description:
      "Production websites — designed, built, and deployed to the live internet. What agencies quote six weeks for, your AI delivers in fifteen minutes.",
    icon: Globe,
  },
  {
    title: "Kill Your SaaS Bloat",
    description:
      "CRM, scheduling, reporting, internal tools — all custom-built by your AI, replacing thousands in monthly subscriptions with systems that actually fit your workflow.",
    icon: FileText,
  },
  {
    title: "Lead Generation Engine",
    description:
      "Directories scraped, contacts enriched, personalized outreach drafted, pipeline filled. Runs 24/7 with no commissions, no quotas, and no sick days.",
    icon: LinkIcon,
  },
  {
    title: "Competitor Intelligence",
    description:
      "Your AI monitors competitor websites, pricing pages, and product updates in real time. The moment they change anything — you know before their own customers do.",
    icon: Eye,
  },
  {
    title: "Email & Comms Automation",
    description:
      "Inbox sorted by priority, replies drafted, follow-ups auto-scheduled. Your AI handles the communication overhead so you stay focused on closing.",
    icon: Mail,
  },
  {
    title: "Financial Ops & Reporting",
    description:
      "Transactions auto-reconciled, P&L reports generated, anomalies flagged instantly. A part-time CFO that works around the clock and never misses a line item.",
    icon: DollarSign,
  },
  {
    title: "Content Machine",
    description:
      "Social posts, newsletters, blog drafts, and marketing copy — all in your brand voice, all on schedule. Consistent output without hiring a content team.",
    icon: Edit3,
  },
  {
    title: "Customer Support",
    description:
      "Tier-1 tickets handled, FAQs answered, escalations routed intelligently. Responses in seconds, not hours. Your customers never wait again.",
    icon: MessageCircle,
  },
];

function UseCases() {
  return (
    <section id="use-cases" className="px-6 lg:px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="rule mb-16" />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-4">
            <FadeInWhenVisible>
              <p className="font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-3">
                USE CASES
              </p>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.1}>
              <h2 className="text-headline font-bold text-ink text-balance">
                What your AI
                <br />
                actually does.
              </h2>
            </FadeInWhenVisible>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <FadeInWhenVisible delay={0.2}>
              <p className="text-lg text-ink-muted leading-[1.75]">
                Not hypotheticals. Not demos. These are production systems we deploy
                into real businesses — running live, generating ROI, compounding daily.
              </p>
            </FadeInWhenVisible>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              className="border-t border-sand-300/60 py-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.1, 0.8) }}
            >
              <div className="flex gap-4">
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-[13px] text-sand-400 tracking-wide">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <motion.div 
                    className="w-8 h-8 bg-sand-100 rounded-lg flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#e8e4dd",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <uc.icon className="w-4 h-4 text-ink-muted" />
                  </motion.div>
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
            </motion.div>
          ))}
        </div>

        <FadeInWhenVisible delay={0.7}>
          <div className="mt-12">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[13px] font-mono text-ink-muted hover:text-ink transition-colors group tracking-[0.05em]"
            >
              <span>SEE CLIENT RESULTS</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </div>
        </FadeInWhenVisible>
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
    icon: <Target className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "Implementation",
    description:
      "We build and deploy custom AI systems directly into your operations — coaching your team through every step of the integration.",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "Transformation",
    description:
      "Your organization emerges AI-native. Faster decisions, lower costs, compounding advantage. The gap works in your favor now.",
    icon: <Zap className="w-6 h-6" />,
  },
];

function HowItWorks() {
  return (
    <section className="px-6 lg:px-8 py-24 relative overflow-hidden">
      {/* Animated divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-transparent via-sand-300 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      
      <div className="mx-auto max-w-[1200px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <FadeInWhenVisible>
              <p className="font-mono text-[13px] text-ink-muted tracking-[0.1em] mb-3">
                PROCESS
              </p>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.1}>
              <h2 className="text-headline font-bold text-ink text-balance">
                Three steps.
                <br />
                Sixty days.
              </h2>
            </FadeInWhenVisible>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="border-t border-sand-300/60 py-8 flex gap-6"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-[13px] text-sand-400 tracking-wide pt-1">
                      {step.number}
                    </span>
                    <motion.div 
                      className="text-ink-muted"
                      whileHover={{ 
                        scale: 1.1,
                        color: "#1a1915",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ink mb-2">
                      {step.title}
                    </h3>
                    <p className="text-ink-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
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
  return (
    <section className="px-6 lg:px-8 py-24 bg-ink text-sand-100 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-sand-100/5 to-sand-200/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-sand-100/5 to-sand-200/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      
      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7">
            <FadeInWhenVisible>
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
            </FadeInWhenVisible>
          </div>
          
          <div className="lg:col-span-5">
            <FadeInWhenVisible delay={0.3}>
              {/* Executive dashboard graphic */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-sand-100/10 to-sand-200/5 border border-sand-800 backdrop-blur-sm">
                <div className="absolute inset-0 p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-sand-400">TRANSFORMATION METRICS</span>
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { label: "Cost Reduction", value: "67%", color: "bg-green-400/20 border-green-400/30" },
                        { label: "Speed Increase", value: "340%", color: "bg-blue-400/20 border-blue-400/30" },
                        { label: "ROI Timeline", value: "60 days", color: "bg-purple-400/20 border-purple-400/30" },
                      ].map((metric, i) => (
                        <motion.div
                          key={i}
                          className={`p-3 ${metric.color} border rounded-lg backdrop-blur-sm`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.1 + 0.5 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-sand-200">{metric.label}</span>
                            <span className="text-sm font-bold text-sand-100">{metric.value}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              className="border-t border-sand-800 pt-8 pb-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-sand-100 mb-3 flex items-center gap-3">
                <motion.div
                  className="w-1.5 h-1.5 bg-sand-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
                {tier.label}
              </h3>
              <p
                className="text-sand-400 leading-relaxed text-[15px]"
                dangerouslySetInnerHTML={{ __html: tier.description }}
              />
            </motion.div>
          ))}
        </div>

        <FadeInWhenVisible delay={0.5}>
          <div className="mt-8">
            <motion.a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-mono text-sand-500 hover:text-sand-100 transition-colors group tracking-[0.05em]"
              whileHover={{ scale: 1.02 }}
            >
              <span>APPLY FOR A CONSULTATION</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

/* ─── CTA ─── */

function CTA() {
  return (
    <section id="contact" className="px-6 lg:px-8 py-32 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.008]">
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,200 Q300,50 600,200 T1200,200 V400 H0 V200Z"
            fill="currentColor"
            animate={{
              d: [
                "M0,200 Q300,50 600,200 T1200,200 V400 H0 V200Z",
                "M0,200 Q300,250 600,200 T1200,200 V400 H0 V200Z",
                "M0,200 Q300,50 600,200 T1200,200 V400 H0 V200Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </motion.svg>
      </div>
      
      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="rule mb-16" />
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <FadeInWhenVisible>
              <h2 className="text-display font-bold text-ink leading-[0.95]">
                The companies that
                <br />
                move now will own
                <br />
                the next decade.
              </h2>
            </FadeInWhenVisible>
            
            {/* Enhanced visual element */}
            <FadeInWhenVisible delay={0.3}>
              <div className="mt-8 flex items-center gap-6 opacity-60">
                <motion.div 
                  className="w-12 h-px bg-ink"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
                <div className="flex items-center gap-2">
                  {[0, 200, 400].map((delay, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-ink"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: delay / 1000 
                      }}
                    />
                  ))}
                </div>
                <motion.div 
                  className="w-12 h-px bg-ink"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </FadeInWhenVisible>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <FadeInWhenVisible delay={0.4}>
              <p className="text-ink-muted leading-relaxed mb-8">
                Every day you wait, the gap widens. Book a confidential consultation
                to discuss how AI can transform your operations.
              </p>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.6}>
              <motion.a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.1em] text-sand-50 bg-ink px-8 py-4 hover:bg-ink-light transition-colors duration-300 self-start group rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                BOOK YOUR CONSULTATION
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </FadeInWhenVisible>
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
            <motion.a
              key={link}
              href="#"
              className="text-[12px] text-sand-500 hover:text-ink transition-colors link-underline"
              whileHover={{ scale: 1.05 }}
            >
              {link}
            </motion.a>
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