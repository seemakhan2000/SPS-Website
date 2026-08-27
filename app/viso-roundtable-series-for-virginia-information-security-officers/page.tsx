"use client";

import { useEffect, useState } from "react";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

// ---------------------------------------------------------------------------
// Data (kept identical to source content)
// ---------------------------------------------------------------------------

const EVENT_TARGET = new Date("2026-07-16T13:00:00-04:00"); // Thu Jul 16 2026, 1:00 PM Eastern

const FUTURE_TOPICS = [
  "Onboarding",
  "Audit Readiness and Compliance Artifacts",
  "Security Controls Implementation & Monitoring",
  "Incident Response",
  "Disaster Recovery",
  "Business Continuity",
];

const WHY_ATTEND = [
  "Benchmark their security maturity against peers",
  "Gain actionable templates and artifacts",
  "Learn directly from practitioners — not consultants",
];

const GOALS = [
  {
    title: "Strengthen Cybersecurity Posture",
    desc: "Improve resilience across Virginia state and local agencies",
  },
  {
    title: "Accelerate SEC530 & NIST Cybersecurity Framework (CSF) Alignment",
    desc: "Share practical, audit-ready approaches",
  },
  {
    title: "Promote Reusable Artifacts",
    desc: "Leverage shared policies, templates, and best practices",
  },
  {
    title: "Enable Peer Collaboration",
    desc: "Foster open dialogue, benchmarking, and problem-solving",
  },
  {
    title: "Enhance Audit Readiness",
    desc: "Move toward proactive, compliance-driven operations",
  },
  {
    title: "Address Emerging Threats",
    desc: "Collaborate on evolving risks and response strategies",
  },
];

const AGENDA = [
  "Real-world implementation challenges",
  "Lessons learned from achieving compliance",
  "Practical strategies for audit readiness",
  "Framework alignment approaches (SEC530, NIST)",
  "Peer-driven discussion on emerging threats and solutions",
];

const WHO_SHOULD_JOIN = [
  {
    bold: "Chief Information Security Officers (CISOs) and Information Security Officers (ISOs)",
    rest: "across Virginia state agencies",
  },
  {
    bold: "County and Municipal IT & Security Leaders",
    rest: "responsible for cybersecurity and compliance",
  },
  {
    bold: "Risk, Compliance, and Governance Professionals",
    rest: "aligned with SEC530 and NIST Cybersecurity Framework (CSF)",
  },
  {
    bold: "IT Directors and Technology Leaders",
    rest: "overseeing security operations and infrastructure",
  },
  {
    bold: "Security Architects and Program Managers",
    rest: "involved in implementing cybersecurity frameworks",
  },
];

const FOOTER_GROUPS = {
  "Business Groups": ["AI", "Cloud", "Cybersecurity", "Events & Learning", "Spinnlabs"],
  More: ["Our Story", "Events", "Careers", "Privacy Policy"],
};

// ---------------------------------------------------------------------------
// Countdown hook
// ---------------------------------------------------------------------------

function useCountdown(target: Date) {
  const [remaining, setRemaining] = useState<number>(() =>
    Math.max(0, target.getTime() - Date.now())
  );

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, target.getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#3E7CB9] bg-[#152238] font-[family-name:var(--font-mono)] text-lg tracking-wide text-[#3E7CB9]">
      {initials}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#3E7CB9]">
      <span className="h-px w-8 bg-[#3E7CB9]" />
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Page() {
  const { days, hours, minutes, seconds } = useCountdown(EVENT_TARGET);

  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen bg-white font-[family-name:var(--font-body)] text-[#1B2027]`}
    >
      {/* ---------------------------------------------------------------- */}
      {/* Top bar - TRANSPARENT with dark text for visibility on blue bg */}
      {/* ---------------------------------------------------------------- */}
      <header className="sticky top-0 z-40 border-b border-[#3E7CB9]/20 bg-transparent backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            
          </div>
          <button
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F6F3EC]/30 text-[#F6F3EC] transition hover:border-[#3E7CB9] hover:text-[#3E7CB9]"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/* Hero / dossier cover - HEIGHT INCREASED BY ADDITIONAL 5px */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative -mt-[72px] overflow-hidden bg-[#0F1C3F] text-[#EDE7D9] pt-[72px]">
        {/* faint ruled paper texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 27px, #3E7CB9 28px)",
          }}
        />
        

        {/* INCREASED PADDING BY ADDITIONAL 5px (2.5px top + 2.5px bottom) */}
        <div className="relative mx-auto max-w-6xl px-6 pb-[80.5px] pt-[80.5px] sm:pb-[82.5px] sm:pt-[82.5px]">
          {/* LEFT-RIGHT GRID */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* LEFT COLUMN */}
            <div>
              <Eyebrow>VISO Roundtable Series</Eyebrow>

              {/* SIMPLE H1 - NO ITALIC */}
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-normal leading-[1.05] text-[#F6F3EC] sm:text-5xl">
                Configuration Management
              </h1>
              <p className="mt-3 text-[14px] leading-relaxed text-[#C9C2AE]">
                For Virginia Information Security Officers — a closed-door
                briefing for the Commonwealth&apos;s security leadership.
              </p>

              {/* Date / time strip */}
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-[#3E7CB9]/25 py-3 font-[family-name:var(--font-mono)] text-xs">
                <span className="text-[#3E7CB9]">
                  THU · JUL&nbsp;16,&nbsp;2026
                </span>
                <span className="text-[#8FA6BC]">1:00&nbsp;PM – 2:00&nbsp;PM ET</span>
              </div>

              {/* Host / co-host badges */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-md border border-[#3E7CB9]/30 bg-[#152238] p-3">
                  <Initials name="Dave Shure" />
                  <div>
                    <div className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.2em] text-[#3E7CB9]">
                      Host
                    </div>
                    <div className="mt-0.5 font-semibold text-[#F6F3EC] text-sm">
                      Dave Shure
                    </div>
                    <div className="mt-0.5 text-[10px] leading-snug text-[#9FA9BB]">
                      ISO, VA SBSD
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-md border border-[#3E7CB9]/30 bg-[#152238] p-3">
                  <Initials name="Nouman Abbasi" />
                  <div>
                    <div className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.2em] text-[#3E7CB9]">
                      Co-Host
                    </div>
                    <div className="mt-0.5 font-semibold text-[#F6F3EC] text-sm">
                      Nouman Abbasi
                    </div>
                    <div className="mt-0.5 text-[10px] leading-snug text-[#9FA9BB]">
                      Sr VP, SPS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Countdown + Future Topics */}
            <div>
              {/* Countdown */}
              <div>
                <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#3E7CB9]">
                  Session opens in
                </div>
                <div className="mt-2 flex gap-2 sm:gap-3">
                  {[
                    { label: "Days", value: days },
                    { label: "Hrs", value: hours },
                    { label: "Min", value: minutes },
                    { label: "Sec", value: seconds },
                  ].map((u) => (
                    <div
                      key={u.label}
                      className="flex w-14 flex-col items-center rounded-md border border-[#3E7CB9]/40 bg-[#0C1524] py-2 sm:w-16"
                    >
                      <span className="font-[family-name:var(--font-mono)] text-xl font-semibold text-[#F6F3EC] sm:text-2xl">
                        {pad(u.value)}
                      </span>
                      <span className="font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.2em] text-[#8FA6BC]">
                        {u.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future topics roadmap */}
              <div className="mt-6 rounded-md border border-[#3E7CB9]/25 bg-[#0C1524]/70 p-4">
                <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#3E7CB9]">
                  Future Topics
                </div>
                <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
                  {FUTURE_TOPICS.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-1.5 text-xs text-[#D6D0BE]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#3E7CB9]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* About Roundtable                                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Eyebrow>About the Roundtable</Eyebrow>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[#101B2D] sm:text-4xl">
          A monthly briefing for Virginia&apos;s security leadership
        </h2>

        <p className="mt-6 text-[15px] leading-relaxed text-[#3A3F47]">
          SPS is hosting a monthly Information Security Officer Roundtable
          for the Commonwealth of Virginia, bringing together cybersecurity
          leaders across state and local government to collaborate, share,
          and strengthen collective security posture. This invite-only forum
          will be led by{" "}
          <strong className="text-[#101B2D]">Dave Shure</strong>, Information
          Security Officer for the Virginia Department of Small Business and
          Supplier Diversity (SBSD), who has led SBSD&apos;s journey toward
          compliance with SEC530 and NIST 800-53 framework.
        </p>

        <dl className="mt-8 grid grid-cols-1 gap-4 border-y border-[#1B2027]/10 py-6 sm:grid-cols-3">
          {[
            ["Frequency", "3rd Thursday of every month"],
            ["Start Date", "June 18th, 2026"],
            ["Format", "Virtual (Microsoft Teams)"],
          ].map(([dt, dd]) => (
            <div key={dt}>
              <dt className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[#3E7CB9]">
                {dt}
              </dt>
              <dd className="mt-1 text-sm font-medium text-[#1B2027]">{dd}</dd>
            </div>
          ))}
        </dl>

        {/* Why Attend */}
        <div className="mt-14">
          <h3 className="font-[family-name:var(--font-display)] text-2xl italic text-[#101B2D]">
            Why Attend
          </h3>
          <p className="mt-3 text-sm text-[#3A3F47]">
            It is a peer collaboration forum. Participants will:
          </p>
          <ul className="mt-4 space-y-2">
            {WHY_ATTEND.map((w) => (
              <li key={w} className="flex gap-3 text-[15px] text-[#1B2027]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3E7CB9]" />
                {w}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm italic text-[#5B6070]">
            Contribute to improving cybersecurity across Virginia.
          </p>
        </div>

        {/* Goals & Objectives */}
        <div className="mt-16">
          <h3 className="font-[family-name:var(--font-display)] text-2xl italic text-[#101B2D]">
            Goals &amp; Objectives
          </h3>
          <div className="mt-6 grid gap-px overflow-hidden rounded-md border border-[#1B2027]/10 bg-[#1B2027]/10 sm:grid-cols-2">
            {GOALS.map((g, i) => (
              <div key={g.title} className="bg-white p-6">
                <div className="font-[family-name:var(--font-mono)] text-xs text-[#3E7CB9]">
                  {pad(i + 1)}
                </div>
                <div className="mt-2 text-[15px] font-semibold text-[#101B2D]">
                  {g.title}
                </div>
                <div className="mt-1 text-sm text-[#5B6070]">{g.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Agenda */}
        <div className="mt-16">
          <h3 className="font-[family-name:var(--font-display)] text-2xl italic text-[#101B2D]">
            Agenda
          </h3>
          <ol className="mt-5 space-y-3 border-l border-[#3E7CB9]/40 pl-6">
            {AGENDA.map((a, i) => (
              <li key={a} className="relative text-[15px] text-[#1B2027]">
                <span className="absolute -left-[29px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#3E7CB9] font-[family-name:var(--font-mono)] text-[9px] font-bold text-white">
                  {i + 1}
                </span>
                {a}
              </li>
            ))}
          </ol>
        </div>

        {/* Who should join */}
        <div className="mt-16">
          <h3 className="font-[family-name:var(--font-display)] text-2xl italic text-[#101B2D]">
            Who Should Join
          </h3>
          <ul className="mt-5 space-y-4">
            {WHO_SHOULD_JOIN.map((w) => (
              <li key={w.bold} className="flex gap-3 text-[15px] leading-relaxed text-[#1B2027]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3E7CB9]" />
                <span>
                  <strong className="text-[#101B2D]">{w.bold}</strong>{" "}
                  <span className="text-[#3A3F47]">{w.rest}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal Participants */}
        <div className="mt-16 rounded-md border border-[#3E7CB9]/30 bg-[#101B2D] p-8 text-[#EDE7D9]">
          <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#3E7CB9]">
            Ideal Participants
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-[#D6D0BE]">
            This roundtable is designed for{" "}
            <strong className="text-[#F6F3EC]">
              decision-makers and practitioners
            </strong>{" "}
            who are directly responsible for improving cybersecurity
            posture, managing compliance, and leading security initiatives
            within the Virginia state and local government.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Registration                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6">
          <Eyebrow>Roundtable Registration</Eyebrow>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[#101B2D]">
            Request your seat at the table
          </h2>
          <p className="mt-3 text-sm text-[#5B6070]">
            This is an invite-only forum. Submit your details and the SPS
            team will confirm your credentials.
          </p>

          <form
            className="mt-10 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { label: "Name", type: "text", id: "name" },
              { label: "Email Address", type: "email", id: "email" },
              { label: "Organization", type: "text", id: "organization" },
              { label: "Job Title / Role", type: "text", id: "role" },
              { label: "Phone", type: "tel", id: "phone" },
            ].map((f, i) => (
              <div key={f.id} className="relative">
                <label
                  htmlFor={f.id}
                  className="mb-1.5 flex items-center gap-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[#2C5C86]"
                >
                  <span className="text-[#3E7CB9]">{pad(i + 1)}</span>
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  className="w-full rounded-md border border-[#1B2027]/15 bg-white px-4 py-3 text-sm text-[#1B2027] outline-none transition focus:border-[#3E7CB9] focus:ring-2 focus:ring-[#3E7CB9]/20"
                />
              </div>
            ))}

            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-[#101B2D] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-[#F6F3EC] transition hover:bg-[#0C1524] sm:w-auto"
            >
              Register
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}