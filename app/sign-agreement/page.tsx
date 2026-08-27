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
  LogIn,
  FileCheck2,
} from "lucide-react";

const heroPills = [
  { label: "Propose idea", icon: Lightbulb, link: "/propose-idea" },
  { label: "Create plan", icon: FileText, link: "/create-plan" },
  { label: "Equity model", icon: PieChart, link: "/equity-model" },
  { label: "Sign agreement", icon: FileSignature, link: "/sign-agreement" },
  { label: "Execute plan", icon: Gauge, link: "/execute-plan" },
  { label: "Launch startup", icon: Rocket, link: "/launch-startup" },
] as const;

/* --------------------------- HERO SECTION --------------------------------- */

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
            Sign agreement
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
                <Icon className="h-4 w-4 text-cyan-300" strokeWidth={1.75} />
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

            <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-[#0F1C3F] shadow-xl shadow-indigo-500/30">
              <FileSignature className="h-7 w-7" strokeWidth={1.75} />
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
                  <Icon className="h-4 w-4 text-cyan-300" strokeWidth={1.75} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- AGREEMENT SECTION --------------------------------- */

const clauses = [
  {
    title: "Business plan",
    body: "Parties agree to develop a shared plan for the venture.",
  },
  {
    title: "Contributions",
    body: "Each party's input toward the venture is recorded and tracked.",
  },
  {
    title: "Equity distribution",
    body: "Ownership is allocated in proportion to each party's contributions.",
  },
  {
    title: "New parties",
    body: "Additional individuals or entities may join with consent.",
  },
  {
    title: "Intellectual property",
    body: "Rights to work created for the venture are defined upfront.",
  },
] as const;

function AgreementSection() {
  return (
    <section className="bg-[#FAF7F2]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
        </div>

        <h2 className="font-display mb-6 max-w-2xl text-2xl font-semibold leading-snug text-[#1A1F2E] md:text-3xl">
          The entrepreneurship agreement
        </h2>

        <div className="mb-10 max-w-3xl border-l-2 border-[#0F1C3F] pl-5">
          <p className="font-display text-base italic leading-relaxed text-[#1A1F2E] md:text-lg">
            The Entrepreneurship Agreement establishes an arrangement between
            parties&apos; intent to collaborate on a business venture.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#5B6478]">
            It outlines key provisions, including the development of a
            Business Plan, contributions from the Parties to make it
            financially viable, and the establishment of a for-profit entity
            upon achieving milestones. Equity distribution is based on
            contributions, and the Parties may permit additional individuals
            or entities to join. Disputes will be resolved through
            negotiation and arbitration. The agreement also covers
            intellectual property rights and various procedural details
            related to decision-making, costs, and dispute resolution.
            Amendments require written consent from all Parties.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          {/* Clause list */}
          <div className="rounded-2xl border border-[#E3DCD0] bg-white p-6 md:p-8">
            <ol className="divide-y divide-[#E3DCD0]">
              {clauses.map((clause, i) => (
                <li key={clause.title} className="flex gap-4 py-4 first:pt-0">
                  <span className="font-display shrink-0 text-base text-[#0F1C3F]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-[#1A1F2E]">
                      {clause.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#5B6478]">
                      {clause.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-[#1A1F2E] p-6 text-white">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Status
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white" />
                <p className="text-base font-medium">
                  Awaiting your signature
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Log in to review the full terms and add your signature.
              </p>
              <Link
                href="/login"
                className="mt-5 flex items-center justify-center gap-2 rounded-md bg-[#0F1C3F] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#dbb968]"
              >
                <LogIn className="h-4 w-4" strokeWidth={2} />
                Log in
              </Link>
            </div>

            <div className="rounded-2xl border border-[#E3DCD0] bg-white p-6 text-center">
              <p className="mb-3 text-xs uppercase tracking-wide text-[#5B6478]">
                Signature
              </p>
              <svg
                viewBox="0 0 200 60"
                className="h-12 w-full"
                role="img"
                aria-label="Signature line, unsigned"
              >
                <path
                  d="M10 40 C 25 15, 35 50, 50 30 S 75 10, 90 35 S 115 50, 130 28 S 150 15, 170 35"
                  fill="none"
                  stroke="#B4B2A9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <line
                  x1="10"
                  y1="50"
                  x2="190"
                  y2="50"
                  stroke="#E3DCD0"
                  strokeWidth="1"
                />
              </svg>
              <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-[#5B6478]">
                <FileCheck2 className="h-3.5 w-3.5" strokeWidth={1.75} />
                Sign electronically after login
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- PAGE --------------------------------- */

export default function SignAgreementPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AgreementSection />
    </main>
  );
}