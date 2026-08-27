'use client';

import React from 'react';
import Link from "next/link";
import {
  Lightbulb,
  FileText,
  PieChart,
  FileSignature,
  Gauge,
  Rocket,
  Clock,
  Compass,
  Target,
  TrendingUp,
  ShieldCheck,
  Wallet,
  Scale,
  Users,
  BarChart3,
  LogOut,
  Link2,
  ArrowRight,
  LogIn,
} from "lucide-react";

const heroPills = [
  { label: "Propose idea", icon: Lightbulb, link: "/propose-idea" },
  { label: "Create plan", icon: FileText, link: "/create-plan" },
  { label: "Equity model", icon: PieChart, link: "/equity-model" },
  { label: "Sign agreement", icon: FileSignature, link: "/sign-agreement" },
  { label: "Execute plan", icon: Gauge, link: "/execute-plan" },
  { label: "Launch startup", icon: Rocket, link: "/launch-startup" },
] as const;

/* --------------------------- HERO SECTION (unchanged) --------------------------- */

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0F1C3F] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[380px] w-[380px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, #6366F1 0%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[320px] w-[320px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, #22D3EE 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 py-4 md:grid-cols-[1.2fr_1fr] md:py-[130px]">
        <div className="text-left">
          <h1 className="font-display mt-2 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
          Launch Startup
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            Experience our streamlined Six-Step Entrepreneurship Journey: &quot;Propose&quot; your startup story, vision, and unique selling points; &quot;Create&quot; a comprehensive business plan; &quot;Formulate&quot; equity allocation model; &quot;Sign&quot; entrepreneurship agreement; &quot;Execute&quot; with a focus on tracking milestones and adapting strategies; and &quot;Spin-Off&quot; when ready to become an independent business unit. Let&apos;s collaborate for your success!
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {heroPills.map(({ label, icon: Icon, link }, i) => (
              <Link
                key={label}
                href={link}
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-sm transition-colors hover:border-cyan-300/40 hover:bg-white/[0.08] cursor-pointer"
              >
                <span className="font-display text-xs font-semibold text-cyan-300/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="h-4 w-4 text-cyan-300"  />
                <span className="text-sm font-medium text-slate-200">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[250px] items-center justify-center md:flex">
          <div className="relative h-56 w-56">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-5 rounded-full border border-white/10" />
            <div className="absolute inset-10 rounded-full border border-cyan-300/20" />

            <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-[#0A0E1F] shadow-xl shadow-indigo-500/30">
              <Rocket className="h-7 w-7"  />
            </div>

            {heroPills.map(({ label, icon: Icon, link }, i) => {
              const angle = (i / heroPills.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 100;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <Link
                  key={label}
                  href={link}
                  className="absolute flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] backdrop-blur-sm transition-all hover:border-cyan-300/40 hover:bg-white/[0.12] hover:scale-110 cursor-pointer"
                  style={{
                    left: `calc(50% + ${x}px - 20px)`,
                    top: `calc(50% + ${y}px - 20px)`,
                  }}
                >
                  <Icon className="h-4 w-4 text-cyan-300"  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------
   SPIN-OFF SECTION — "The Spin-Off Playbook"

   A 13-step vertical timeline that mirrors the Pie Slicer's own visual
   language: a slim indigo→cyan "slice" rail runs down the left edge,
   with each milestone marked by a numbered pie-wedge badge. Order
   genuinely matters here — this is the sequence a venture moves through
   on its way to independence — so the numbering encodes real
   information rather than decoration.
-------------------------------------------------------------------- */

type Step = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  body: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Timing is crucial",
    icon: Clock,
    body: (
      <p>
        Don&apos;t rush a spin-off. The right moment arrives once the venture
        has reached real maturity, stability, and self-sufficiency — not
        before.
      </p>
    ),
  },
  {
    title: "Operational independence",
    icon: Compass,
    body: (
      <p>
        Give the new unit its own management team, budget, and
        decision-making process. It should run independently of the parent
        organization from day one.
      </p>
    ),
  },
  {
    title: "Distinct objectives",
    icon: Target,
    body: (
      <p>
        Set goals that belong to the spun-off unit alone — aligned with its
        own mission, and distinct from the parent company&apos;s broader
        agenda.
      </p>
    ),
  },
  {
    title: "Focused growth opportunities",
    icon: TrendingUp,
    body: (
      <p>
        An independent unit can move faster. It can chase opportunities tied
        directly to its core business, rather than the parent&apos;s wider
        priorities.
      </p>
    ),
  },
  {
    title: "Resource allocation",
    icon: PieChart,
    body: (
      <p>
        Resources flow more efficiently when a unit operates on its own. It
        can allocate budget and effort to what it actually needs, free from
        the parent&apos;s constraints.
      </p>
    ),
  },
  {
    title: "Risk management",
    icon: ShieldCheck,
    body: (
      <p>
        Spinning off contains risk. Whatever happens within the new unit
        stays within the new unit, limiting the impact on the parent
        company&apos;s overall operations.
      </p>
    ),
  },
  {
    title: "Financial structure",
    icon: Wallet,
    body: (
      <p>
        Plan the spun-off unit&apos;s finances on their own terms. It may
        need to secure its own funding, and it should have a clear financial
        strategy to support growth.
      </p>
    ),
  },
  {
    title: "Legal & organizational structure",
    icon: Scale,
    body: (
      <p>
        Confirm full legal and regulatory compliance — including a separate
        legal entity where needed — and put a board or advisory structure in
        place.
      </p>
    ),
  },
  {
    title: "Communication & culture",
    icon: Users,
    body: (
      <p>
        Keep employees, customers, and stakeholders informed throughout the
        transition. The unit should build its own identity while staying
        connected to shared values.
      </p>
    ),
  },
  {
    title: "Monitoring & evaluation",
    icon: BarChart3,
    body: (
      <p>
        Track the spun-off unit closely after launch. Regular reviews of
        financial performance and mission alignment keep it on course.
      </p>
    ),
  },
  {
    title: "Legal & regulatory compliance",
    icon: FileSignature,
    body: (
      <p>
        Make sure the startup meets every applicable law, regulation, and
        licensing requirement — in its new jurisdiction as well as its old
        one.
      </p>
    ),
  },
  {
    title: "Exit strategy",
    icon: LogOut,
    body: (
      <p>
        Decide the parent&apos;s endgame in advance: sell the unit, take it
        public, or let it run as an independent subsidiary — whatever fits
        long-term goals.
      </p>
    ),
  },
  {
    title: "Continued collaboration",
    icon: Link2,
    body: (
      <p>
        Independence doesn&apos;t mean isolation. Parent and spin-off can
        keep collaborating wherever there&apos;s mutual benefit or shared
        interest.
      </p>
    ),
  },
];

function SpinOffSection() {
  return (
    <section className="relative bg-[#F7F8FC] py-20 md:py-28">
      {/* subtle backdrop accents echoing the hero */}
      <div
        className="pointer-events-none absolute -top-24 right-[-8%] h-[320px] w-[320px] rounded-full opacity-[0.10] blur-3xl"
        style={{ background: "radial-gradient(circle at center, #6366F1 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] left-[-8%] h-[280px] w-[280px] rounded-full opacity-[0.10] blur-3xl"
        style={{ background: "radial-gradient(circle at center, #22D3EE 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
              From division to independent unit
            </span>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[#0A0E1F] md:text-4xl">
              The spin-off playbook
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
              Spinning off a venture into its own business unit isn&apos;t
              only for large companies — startups can apply the same
              discipline when the time is right. Here&apos;s what to work
              through, step by step.
            </p>
          </div>

          <button className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#1E1B4B] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-[#2A2566]">
            <LogIn className="h-4 w-4"  />
            Log in
          </button>
        </div>

        {/* Timeline */}
        <ol className="relative mt-16 space-y-10">
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-indigo-400 via-indigo-200 to-cyan-300 md:left-[23px]"
          />

          {steps.map(({ title, icon: Icon, body }, i) => (
            <li key={title} className="relative flex gap-5 md:gap-6">
              <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-indigo-100 bg-white shadow-sm md:h-12 md:w-12">
                <Icon className="h-4.5 w-4.5 text-indigo-500 md:h-5 md:w-5"  />
                <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#1E1B4B] font-display text-[10px] font-semibold text-cyan-300">
                  {i + 1}
                </span>
              </div>

              <div className="flex-1 rounded-2xl border border-indigo-100/70 bg-white px-5 py-4 shadow-sm shadow-indigo-500/[0.03] md:px-6 md:py-5">
                <h3 className="font-display text-base font-semibold text-[#1E1B4B] md:text-lg">
                  {title}
                </h3>
                <div className="mt-2 text-sm leading-relaxed text-slate-600 md:text-[15px]">
                  {body}
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Closing summary / CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-[#0A0E1F] px-6 py-10 text-white md:px-10 md:py-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(3, 4, 75, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative max-w-2xl">
            <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
              A spin-off is a strategic call — make it a deliberate one
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
              Base it on a thorough read of the venture&apos;s readiness,
              market conditions, and the parent organization&apos;s broader
              goals. Get it right, and both sides come away more focused,
              more agile, and built to grow.
            </p>
            <button className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-slate-100 backdrop-blur-sm transition-colors hover:border-cyan-300/40 hover:bg-white/[0.1]">
              Start your equity model
              <ArrowRight className="h-4 w-4 text-cyan-300 transition-transform group-hover:translate-x-0.5"  />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- PAGE --------------------------------- */

export default function EquityModelPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <SpinOffSection />
    </main>
  );
}