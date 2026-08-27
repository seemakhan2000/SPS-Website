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
  Search,
  ClipboardList,
  Landmark,
  Wallet,
  Users,
  Wrench,
  Megaphone,
  ShoppingCart,
  Heart,
  Banknote,
  BadgeCheck,
  TrendingUp,
  Compass,
  Handshake,
  LineChart,
  Mountain,
  DoorOpen,
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
            Execute Plan
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

            <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-[#0A0E1F] shadow-xl shadow-indigo-500/30">
              <Rocket className="h-7 w-7" strokeWidth={1.75} />
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

/* --------------------------- LOGIN BAR --------------------------- */

function LoginBar() {
  return (
    <div className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl justify-end px-6 py-4">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-full bg-[#1E1B4B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#312E81]"
        >
          <LogIn className="h-4 w-4" strokeWidth={2} />
          Login
        </Link>
      </div>
    </div>
  );
}

/* --------------------------- INTRO --------------------------- */

function IntroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 pt-12 pb-4 text-center">
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          Executing a startup plan involves a series of well-defined steps and
          a significant amount of dedication, hard work, and adaptability.
          Here&apos;s a comprehensive guide on what it takes to execute a
          startup plan:
        </p>
      </div>
    </section>
  );
}

/* --------------------------- THE TRAIL (signature element) --------------------------- */

const trailSteps: {
  title: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  body: React.ReactNode;
}[] = [
  {
    title: "Idea and Market Research",
    icon: Search,
    body: (
      <ul className="space-y-2">
        <li>
          Start by coming up with a unique and viable business idea. Ensure
          it solves a real problem or meets a demand in the market.
        </li>
        <li>
          Conduct thorough market research to understand your target
          audience, competition, and industry trends.
        </li>
      </ul>
    ),
  },
  {
    title: "Business Plan",
    icon: ClipboardList,
    body: (
      <ul className="space-y-2">
        <li>
          Create a detailed business plan outlining your mission, vision,
          objectives, and strategies for success.
        </li>
        <li>
          Define your target market, marketing and sales strategies,
          financial projections, and operational plan.
        </li>
      </ul>
    ),
  },
  {
    title: "Legal Structure and Registration",
    icon: Landmark,
    body: (
      <ul className="space-y-2">
        <li>
          Choose the legal structure for your business (e.g., sole
          proprietorship, LLC, corporation) and register your company with
          the appropriate authorities.
        </li>
      </ul>
    ),
  },
  {
    title: "Funding",
    icon: Wallet,
    body: (
      <ul className="space-y-2">
        <li>
          Determine your startup&apos;s financial needs and secure the
          necessary funding. Options include bootstrapping, loans, venture
          capital, angel investors, or crowdfunding.
        </li>
      </ul>
    ),
  },
  {
    title: "Team Building",
    icon: Users,
    body: (
      <ul className="space-y-2">
        <li>
          Recruit a skilled and motivated team with the expertise required to
          bring your idea to life. Surround yourself with people who share
          your vision and complement your skills.
        </li>
      </ul>
    ),
  },
  {
    title: "Product / Service Development",
    icon: Wrench,
    body: (
      <ul className="space-y-2">
        <li>
          Develop your product or service, ensuring it meets the needs of
          your target market.
        </li>
        <li>Test and iterate to improve your offering based on user feedback.</li>
      </ul>
    ),
  },
  {
    title: "Marketing and Branding",
    icon: Megaphone,
    body: (
      <ul className="space-y-2">
        <li>Develop a strong brand identity and marketing strategy.</li>
        <li>
          Utilize various marketing channels, such as social media, content
          marketing, and advertising, to reach your target audience.
        </li>
      </ul>
    ),
  },
  {
    title: "Sales and Distribution",
    icon: ShoppingCart,
    body: (
      <ul className="space-y-2">
        <li>Establish a sales process and distribution channels.</li>
        <li>Train your sales team and monitor their performance.</li>
      </ul>
    ),
  },
  {
    title: "Customer Acquisition and Retention",
    icon: Heart,
    body: (
      <ul className="space-y-2">
        <li>
          Focus on acquiring early customers and retaining them through
          excellent customer service and product quality.
        </li>
        <li>
          Implement customer feedback to improve your product or service
          continually.
        </li>
      </ul>
    ),
  },
  {
    title: "Financial Management",
    icon: Banknote,
    body: (
      <ul className="space-y-2">
        <li>Set up robust financial systems and track your income, expenses, and cash flow.</li>
        <li>Stay within your budget and be prepared to pivot if financial conditions change.</li>
      </ul>
    ),
  },
  {
    title: "Legal and Regulatory Compliance",
    icon: BadgeCheck,
    body: (
      <ul className="space-y-2">
        <li>
          Ensure that your startup complies with all applicable laws,
          regulations, and licenses.
        </li>
      </ul>
    ),
  },
  {
    title: "Scaling",
    icon: TrendingUp,
    body: (
      <ul className="space-y-2">
        <li>
          Plan for growth by scaling your operations, increasing your
          customer base, and expanding into new markets.
        </li>
      </ul>
    ),
  },
  {
    title: "Adaptability",
    icon: Compass,
    body: (
      <ul className="space-y-2">
        <li>
          Be prepared to pivot and make adjustments to your business plan as
          needed based on changing market conditions or customer feedback.
        </li>
      </ul>
    ),
  },
  {
    title: "Networking and Partnerships",
    icon: Handshake,
    body: (
      <ul className="space-y-2">
        <li>Build a strong network of mentors, advisors, and industry peers who can offer guidance and support.</li>
        <li>Explore potential partnerships that can help your business grow.</li>
      </ul>
    ),
  },
  {
    title: "Measuring Success",
    icon: LineChart,
    body: (
      <ul className="space-y-2">
        <li>Define key performance indicators (KPIs) and regularly assess your progress, vision.</li>
        <li>Be willing to make data-driven decisions and adjust your strategies accordingly.</li>
      </ul>
    ),
  },
  {
    title: "Resilience and Perseverance",
    icon: Mountain,
    body: (
      <ul className="space-y-2">
        <li>Expect setbacks and challenges, and be resilient in the face of adversity.</li>
        <li>Perseverance is often the key to overcoming obstacles and achieving success.</li>
      </ul>
    ),
  },
  {
    title: "Exit Strategy",
    icon: DoorOpen,
    body: (
      <ul className="space-y-2">
        <li>
          Consider your long-term goals, whether it&apos;s building a
          sustainable business, going public, or selling the company.
        </li>
      </ul>
    ),
  },
];

function TrailItem({
  step,
  index,
}: {
  step: (typeof trailSteps)[number];
  index: number;
}) {
  const Icon = step.icon;
  const isLast = index === trailSteps.length - 1;

  return (
    <div className="relative flex gap-5 md:gap-8">
      {/* Rail */}
      <div className="relative flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/20 md:h-14 md:w-14">
          <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.75} />
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-indigo-200 to-transparent" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-10 md:pb-14">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-xs font-bold tracking-[0.2em] text-indigo-400">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-lg font-semibold text-[#1E1B4B] md:text-xl">
            {step.title}
          </h3>
        </div>
        <div className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:marker:text-cyan-400 md:text-[15px]">
          {step.body}
        </div>
      </div>
    </div>
  );
}

function ExecutionTrail() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 pb-4">
        <div className="pt-2">
          {trailSteps.map((step, i) => (
            <TrailItem key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- CLOSING --------------------------- */

function ClosingSection() {
  return (
    <section className="bg-[#F5F4FF]">
      <div className="mx-auto max-w-3xl px-6 py-14 text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-white shadow-lg shadow-indigo-500/20">
          <Rocket className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <p className="text-sm leading-relaxed text-slate-600 md:text-base">
          Executing a startup plan is a demanding and dynamic process.
          Success often requires a combination of a solid plan, hard work,
          adaptability, and a bit of luck. It&apos;s essential to remain
          agile, continuously learn, and stay committed to your vision.
          Remember that most successful startups face obstacles and failures
          along the way but use them as opportunities to learn and grow.
        </p>
      </div>
    </section>
  );
}

/* --------------------------- PAGE --------------------------- */

export default function ExecutePlanPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <LoginBar />
      <IntroSection />
      <ExecutionTrail />
      <ClosingSection />
    </main>
  );
}