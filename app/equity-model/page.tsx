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
  Coins,
  Clock,
  Users,
  Scale,
  ShieldCheck,
  TrendingUp,
  SlidersHorizontal,
  Eye,
  Wallet,
  Search,
  LogOut,
  ArrowRight,
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
            Equity model
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

/* ----------------------- EQUITY DISTRIBUTION SECTION (V2) ----------------------- */
/*
  Direction: "The Wedge" — a bright, modern SaaS-dashboard aesthetic that
  visually echoes the product itself (the Pie Slicer). A soft violet/indigo
  gradient backdrop (continuing the hero's color language), a large pie-wedge
  motif as the section's signature element, and content organized into a
  2-column grid of feature cards with consistent iconography — mirroring how
  a cap table dashboard groups features into tiles.
*/

const features: {
  title: string;
  body: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    title: "Always 100% fair",
    icon: ShieldCheck,
    body: (
      <p>
        The Slicing Pie model is anchored in real-world events and
        automatically adapts to maintain fairness over time, regardless of
        evolving circumstances. Our founder startup calculator aids in
        determining the value of your founder equity and equitably allocating
        equity among founders, employees, and partners.
      </p>
    ),
  },
  {
    title: "As easy as pie to manage",
    icon: SlidersHorizontal,
    body: (
      <p>
        Our Pie Slicer software simplifies the process of keeping track of
        your equity split. Slicing Pie&apos;s equity allocations evolve in
        response to participants&apos; contributions of time, money, ideas,
        relationships, facilities, supplies, equipment, or any other essential
        resources your company relies on.
      </p>
    ),
  },
  {
    title: "A universal, fair formula",
    icon: Scale,
    body: (
      <>
        <p>
          <strong className="text-[#1E1B4B]">Slicing Pie</strong> is a
          universal formula for creating a perfectly fair equity split in an
          early-stage, bootstrapped startup. Traditional, old-fashioned equity
          splits are based on guesses about the future, negotiation skills and
          rules-of-thumb. The Slicing Pie model is different because it&apos;s
          based on what participants actually contribute over time.
        </p>
        <p className="mt-3">
          The Pie Slicer applies the Slicing Pie formula as outlined in the
          book Slicing Pie and The Slicing Pie Handbook.
        </p>
      </>
    ),
  },
  {
    title: "Track what people actually contribute",
    icon: Clock,
    body: (
      <>
        <p>
          The Slicing Pie Pie Slicer application will help you and your team
          keep track of your individual contributions and calculate the pie
          based on the calculations in Slicing Pie. Keep track of time,
          expenses, supplies, equipment, royalties on ideas, commissions on
          sales and any other contribution an individual could make.
        </p>
        <p className="mt-3">
          Contributions can be set to repeat at regular intervals — set a
          monthly rent contribution or a weekly payroll, for instance.
        </p>
      </>
    ),
  },
  {
    title: "Manage access &amp; monitor contributions",
    icon: Eye,
    body: (
      <p>
        Team members can submit their own contributions through their own
        account. Pie administrators can manage what individual users can see
        or do in the Pie Slicer. For instance, the Employee setting allows the
        user to see only their own contributions while the Executive setting
        allows the user to see all contributions. Administrators can require
        approval before slices are added.
      </p>
    ),
  },
  {
    title: "Track cash investments with the Well",
    icon: Wallet,
    body: (
      <p>
        The Well feature allows the team to track cash investments in the
        company. When money is invested it is held in the Well. When money is
        drawn to cover company expenses, the Pie Slicer allocates slices to
        each participant according to their share — preventing unnecessary
        equity allocations until funds are actually consumed.
      </p>
    ),
  },
  {
    title: "Customize to your company&apos;s policies",
    icon: Coins,
    body: (
      <>
        <p>
          The Pie Slicer&apos;s default settings reflect best practices for
          fairness as outlined in the Slicing Pie books. However, variables
          can be changed to reflect your industry norms or company policy.
        </p>
        <p className="mt-3">
          For example, administrators can edit commission and royalty rates,
          set up their own project categories, or determine how to calculate
          mileage rates.
        </p>
      </>
    ),
  },
  {
    title: "Make due diligence a snap",
    icon: Search,
    body: (
      <p>
        The Pie Slicer includes logs, reports and charts based on the
        team&apos;s contributions, providing valuable insight for managers and
        potential investors. Gain a deeper understanding of how your team is
        spending their time, investing their cash, and consuming other inputs
        such as supplies or equipment.
      </p>
    ),
  },
  {
    title: "Handle departures fairly",
    icon: LogOut,
    body: (
      <p>
        When someone leaves the company, the Pie Slicer helps calculate the
        fair buyout price and re-allocate slices depending on the
        circumstances of the separation. Slicing Pie protects the interests of
        both the company and the individual — being fair to ex-employees is as
        important as being fair with employees.
      </p>
    ),
  },
  {
    title: "Your cap table is always fair",
    icon: TrendingUp,
    body: (
      <p>
        With Slicing Pie, your cap table always shows the fairest split no
        matter what changes. All other models and online tools create
        one-off, fixed equity splits based on estimates and guesses. Slicing
        Pie is the only equity model that guarantees a perfectly fair split.
      </p>
    ),
  },
];

function PieWedgeMark() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="92" fill="#EEF2FF" />
      <path d="M100 100 L100 8 A92 92 0 0 1 192 100 Z" fill="#6366F1" />
      <path d="M100 100 L192 100 A92 92 0 0 1 146 182 Z" fill="#22D3EE" />
      <path d="M100 100 L146 182 A92 92 0 0 1 54 182 Z" fill="#A5B4FC" />
      <path d="M100 100 L54 182 A92 92 0 0 1 8 100 Z" fill="#C7D2FE" />
      <path d="M100 100 L8 100 A92 92 0 0 1 100 8 Z" fill="#E0E7FF" />
      <circle cx="100" cy="100" r="34" fill="#FFFFFF" />
      <circle cx="100" cy="100" r="34" fill="none" stroke="#6366F1" strokeWidth="2" />
    </svg>
  );
}

function EquityDistributionSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#F5F4FF] via-white to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header row */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
              <PieChart className="h-3.5 w-3.5" />
              Equity Model
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1E1B4B] md:text-4xl">
              Equity Distribution
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
              We implement the Slicing Pie model for fair equity allocation.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
              The Slicing Pie model is your solution for achieving a truly
              equitable distribution of equity within an early-stage,
              bootstrapped startup. It&apos;s a universal, one-size-fits-all
              model that creates a perfectly fair equity split. The core
              principle is straightforward: a person&apos;s percentage share
              of equity should always align with their share of at-risk
              contributions.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
              At-risk contributions encompass a wide range of valuable inputs
              such as time, money, ideas, relationships, supplies, equipment,
              facilities, or any other non-monetized support provided to the
              company. This dynamic model adjusts in real-time to ensure
              fairness as contributions evolve.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
              Contributions come in two fundamental types: cash and non-cash.
              Non-cash contributions, like unpaid time, are just as important
              as cash contributions, such as unreimbursed expenses. Slicing
              Pie standardizes both cash and non-cash contributions,
              converting them into a fictional unit called a &quot;Slice,&quot;
              much like a poker chip.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1E1B4B] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/10 transition-transform hover:scale-[1.03]">
              Login
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Signature pie wedge mark */}
          <div className="mx-auto h-56 w-56 md:h-64 md:w-64">
            <PieWedgeMark />
          </div>
        </div>

        {/* Formula banner */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-[#1E1B4B] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                The Formula
              </span>
              <p className="mt-3 text-xl font-bold leading-snug md:text-2xl">
                Individual Equity Share = Individual Slices ÷ Total Slices
              </p>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-indigo-100/90">
              <p>
                This formula provides a perfect equity split at any given
                moment. It remains in effect until your company achieves
                breakeven or secures sufficient capital to compensate
                participants for their contributions. At this point, the
                equity split becomes static and determines how dividends or
                proceeds from a sale are distributed.
              </p>
              <p>
                Slicing Pie not only ensures an equitable equity split but
                also aids in calculating a fair buyout price when a team
                member departs before breakeven. This model is embraced by
                entrepreneurs worldwide, and the resources below offer
                comprehensive guidance on implementing it effectively in your
                company. Slicing Pie is, without a doubt, the fairest way to
                allocate equity.
              </p>
            </div>
          </div>
        </div>

        {/* Feature card grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {features.map(({ title, body, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
             <Icon className="h-5 w-5" />
              </div>
              <h3
                className="mt-4 text-lg font-semibold text-[#1E1B4B]"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                {body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EquityModelPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <EquityDistributionSection />
    </main>
  );
}