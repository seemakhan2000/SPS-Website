"use client";
import Link from "next/link";
import React from "react";
import {
  Lightbulb,
  FileText,
  PieChart,
  FileSignature,
  Gauge,
  Rocket,
  Building2,
  Factory,
  HeartPulse,
  ShoppingCart,
  Zap,
  Landmark,
  Radio,
  BrainCircuit,
  CloudCog,
  ShieldCheck,
  Wifi,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

/* --------------------------- DATA --------------------------------- */

const journeySteps = [
 {
    number: "01",
    title: "Propose idea",
    icon: Lightbulb,
    link: "/propose-idea",
    body: "Share your startup story, vision, and unique selling points with us. Tell us about the problem you're solving and what makes your solution unique.",
  },
  {
    number: "02",
    title: "Create plan",
    icon: FileText,
    link: "/create-plan",
    body: "Develop a comprehensive business plan including market analysis, financial projections, and operational strategies.",
  },
  {
    number: "03",
    title: "Equity model",
    icon: PieChart,
    link: "/equity-model",
    body: "Formulate an equitable ownership distribution model that aligns with contributions, investment, and long-term vision.",
  },
  {
    number: "04",
    title: "Sign agreement",
    icon: FileSignature,
    link: "/sign-agreement",
    body: "Formalize your commitment through our standardized entrepreneurship agreement protecting all parties involved.",
  },
  {
    number: "05",
    title: "Execute plan",
    icon: Gauge,
    link: "/execute-plan",
    body: "Focus on tracking key milestones, measuring KPIs, and adapting strategies based on real-time feedback and market conditions.",
  },
  {
    number: "06",
    title: "Launch startup",
    icon: Rocket,
    link: "/launch-startup",
    body: "Spin-off as an independent business unit with full operational autonomy and continued strategic support.",
  },
] as const;

const heroPills = [
  { label: "Propose idea", icon: Lightbulb, link: "/propose-idea" },
  { label: "Create plan", icon: FileText, link: "/create-plan" },
  { label: "Equity model", icon: PieChart, link: "/equity-model" },
  { label: "Sign agreement", icon: FileSignature, link: "/sign-agreement" },
  { label: "Execute plan", icon: Gauge, link: "/execute-plan" },
  { label: "Launch startup", icon: Rocket, link: "/launch-startup" },
] as const;

type Vertical = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  tags: string[];
  accent: string;
};

const verticals: Vertical[] = [
  {
    name: "Public Sector",
    icon: Building2,
    description:
      "Now more than ever, governments need to adapt to changing environments. The pandemic demonstrated the urgency of advancing digital transformation and IT modernization across all levels.",
    tags: ["Government", "Public Safety", "Education", "Healthcare – Mid Atl.", "County Government"],
    accent: "from-indigo-600 to-violet-600",
  },
  {
    name: "Industrials",
    icon: Factory,
    description:
      "Many industrial enterprises are primed for analytics and IoT because they struggle with antiquated infrastructure that negatively affects business processes, security posture, and growth.",
    tags: ["Manufacturing", "Textile", "Utilities"],
    accent: "from-slate-600 to-slate-800",
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    description:
      "We support the healthcare industry and those who deliver health and human services — via telehealth or in person — to drive improvements in cost, quality, and innovation.",
    tags: [
      "Telehealth & Remote Patient Monitoring",
      "Multi-Clinic Consolidation",
      "Compliance Requirements",
      "Patient Experience",
      "Health Systems Interoperability",
    ],
    accent: "from-emerald-600 to-teal-600",
  },
  {
    name: "Retail",
    icon: ShoppingCart,
    description:
      "The challenges facing retailers are overwhelming — including navigating the disruption caused by the pandemic. The future of retail means overcoming this complexity head-on.",
    tags: ["Supply Chain", "Marketing & Merchandising", "Personalization & Localization", "Omni-channel Operations", "Convenience Stores"],
    accent: "from-rose-600 to-orange-500",
  },
  {
    name: "Energy",
    icon: Zap,
    description:
      "In today's changing energy landscape, business leaders recognize that sustainability is fundamental to remaining competitive, as the industry shifts toward a more ecosystem-centric model.",
    tags: ["Electric", "Oil & Gas"],
    accent: "from-amber-500 to-yellow-400",
  },
  {
    name: "Financial",
    icon: Landmark,
    description:
      "Financial services firms require real-time modernization to change how they work. From banking to capital markets and insurance, scalable technology drives innovation, service, and security.",
    tags: ["Insurance", "Banking"],
    accent: "from-blue-600 to-cyan-500",
  },
  {
    name: "Telecommunications",
    icon: Radio,
    description:
      "Telecommunications is going through a seismic shift, with providers seeking to connect more digitally and reach beyond their own framework to deliver differentiated industry experiences.",
    tags: ["Telcos"],
    accent: "from-cyan-500 to-sky-500",
  },
];

type TechCard = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  points?: string[];
};

const technologies: TechCard[] = [
  {
    name: "Artificial Intelligence",
    icon: BrainCircuit,
    description:
      "We develop AI-based solutions for corporates and startups. From strategy to execution, we guide clients through digital transformation leveraging Data Analytics, Natural Language Processing, Computer Vision, Machine Learning, Deep Learning, and IoT — going beyond analytics to deliver the insight customers crave.",
  },
  {
    name: "Cloud",
    icon: CloudCog,
    description:
      "From building a holistic strategy to implementing and managing robust cloud technologies, our specialists make sure you get the most out of the cloud — bringing leadership and experience integrating the latest cloud services to help you build secure, industry-ready solutions.",
  },
  {
    name: "Cybersecurity",
    icon: ShieldCheck,
    description:
      "Our Cybersecurity team covers the full spectrum of Digital Trust practices.",
    points: [
      "User Security & Data Security",
      "Mobile Device Management",
      "Threat Management & Cybersecurity Program",
      "SIEM Systems & Application Security",
      "Network Security Keysight – Professional Services",
      "Help Desk Services & Security Operations",
    ],
  },
  {
    name: "IoT",
    icon: Wifi,
    description:
      "Our connected-device specialists pair secure network architecture with the same Digital Trust discipline used across our cybersecurity practice.",
    points: [
      "Device & Network Security",
      "Mobile Device Management",
      "Threat Management & Monitoring",
      "SIEM Integration for Connected Fleets",
      "Professional & Help Desk Services",
      "24/7 Security Operations",
    ],
  },
];

/* --------------------------- PAGE ---------------------------------- */

export default function HomePage() {
  return (
    <main className="font-body bg-white text-slate-900">
      <HeroSection />
      <JourneySection />
      <VerticalsSection />
      <TechnologiesSection />
      <TechHubSection />
    </main>
  );
}

/* --------------------------- HERO ----------------------------------- */

function HeroSection() {
  return (
   <section className="relative overflow-hidden bg-[#0F1C3F] text-white">
  {/* Background Grid */}
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

  {/* Main Content */}
  <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 py-4 md:grid-cols-[1.2fr_1fr] md:py-[130px]">

    {/* Left Side */}
    <div className="text-left">
      <h1 className="font-display mt-2 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
       Startups
      </h1>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
       Experience our streamlined Six-Step Entrepreneurship Journey: "Propose" your startup story, vision, and unique selling points; "Create" a comprehensive business plan; "Formulate" equity allocation model; "Sign" entrepreneurship agreement; "Execute" with a focus on tracking milestones and adapting strategies; and "Spin-Off" when ready to become an independent business unit. Let's collaborate for your success!
      </p>

      {/* Pills - Now Clickable */}
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

    {/* Right Side Visual */}
    <div className="relative hidden min-h-[250px] items-center justify-center md:flex">
      <div className="relative h-56 w-56">

        {/* Orbit Rings */}
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-5 rounded-full border border-white/10" />
        <div className="absolute inset-10 rounded-full border border-cyan-300/20" />

        {/* Center Rocket */}
        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-[#0A0E1F] shadow-xl shadow-indigo-500/30">
          <Rocket className="h-7 w-7" strokeWidth={1.75} />
        </div>

        {/* Orbit Icons - Now Clickable */}
        {heroPills.map(({ label, icon: Icon, link }, i) => {
          const angle =
            (i / heroPills.length) * 2 * Math.PI - Math.PI / 2;

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
              <Icon
                className="h-4 w-4 text-cyan-300"
                strokeWidth={1.75}
              />
            </Link>
          );
        })}
      </div>
    </div>

  </div>
</section>
  );
}

/* --------------------------- JOURNEY ---------------------------------- */

function JourneySection() {
  return (
    <section className="relative bg-[#F6F7FB] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            The Roadmap
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Our six-step entrepreneurship journey
          </h2>
        </div>

        <ol className="relative">
          {/* connecting line */}
          <div
            className="absolute left-[27px] top-2 hidden h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-indigo-300 via-slate-300 to-transparent md:block"
            aria-hidden="true"
          />

          <div className="grid gap-6 md:gap-8">
          {journeySteps.map((step) => (
  <li key={step.number} className="relative">
    <Link
      href={step.link}
      className="group grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:border-indigo-200 hover:shadow-md md:grid-cols-[auto_1fr] md:gap-10 md:p-8"
    >
      <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
        <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200">
          <step.icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <span className="font-display text-4xl font-semibold text-slate-200 md:text-5xl">
          {step.number}
        </span>
      </div>

      <div>
        <h3 className="font-display flex items-center gap-2 text-xl font-semibold text-slate-900 md:text-2xl">
          {step.title}
          <ArrowRight className="h-5 w-5 -translate-x-1 text-indigo-500 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          {step.body}
        </p>
      </div>
    </Link>
  </li>
))}
          </div>
        </ol>

        <p className="mt-14 text-center font-display text-lg font-medium text-slate-800 md:text-xl">
          We look forward to joining forces to support your success.
        </p>
      </div>
    </section>
  );
}

/* --------------------------- VERTICALS ---------------------------------- */

function VerticalsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Industries
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            SPS verticals
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We meet each industry where it stands today, and build the
            roadmap to where it needs to be.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((vertical) => (
            <article
              key={vertical.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
             <div className="flex items-center gap-3 bg-[#0A0E1F] px-6 py-5 text-white">
                <vertical.icon className="h-6 w-6" strokeWidth={1.75} />
                <h3 className="font-display text-lg font-semibold">
                  {vertical.name}
                </h3>
              </div>

              <div className="flex flex-1 flex-col px-6 py-5">
                <p className="text-sm leading-relaxed text-slate-600">
                  {vertical.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {vertical.tags.map((tag) => (
                    <li key={tag}>
                      <a
                        href="#"
                        className="flex items-center justify-between gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-indigo-600"
                      >
                        <span>{tag}</span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:text-indigo-500" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- TECHNOLOGIES ---------------------------------- */

function TechnologiesSection() {
  return (
    <section className="bg-[#0A0E1F] py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
            Capabilities
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Technologies we build with
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {technologies.map((tech) => (
            <article
              key={tech.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-cyan-300/30 hover:bg-white/[0.05] md:p-9"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-[#0A0E1F]">
                  <tech.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  {tech.name}
                </h3>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300 md:text-base">
                {tech.description}
              </p>

              {tech.points && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {tech.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- TECH HUB ---------------------------------- */

function TechHubSection() {
  return (
    <section className="bg-[#F6F7FB] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 px-8 py-14 text-white shadow-xl md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Where it happens
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              A tech hub for innovators and entrepreneurs
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/85 md:text-lg">
              A collaborative space where founders, technologists, and
              industry specialists work side by side — turning early
              ideas into independent, growth-ready businesses.
            </p>

            <Link
              href="/propose-idea"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition-transform hover:-translate-y-0.5"
            >
              Start your journey
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}