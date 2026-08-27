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
  Target,
  Search,
  CheckCircle2,
  ClipboardList,
  Wallet,
  PenTool,
  Scale,
  Stamp,
  Banknote,
  Presentation,
  Users,
  Handshake,
  Package,
  FlaskConical,
  Map,
  Sparkles,
  Megaphone,
  Globe,
  ShoppingBag,
  Truck,
  UserPlus,
  Database,
  Calculator,
  PiggyBank,
  Network,
  Building,
  FileCheck,
  Copyright,
  Cpu,
  TestTube,
  RefreshCw,
  Rocket as RocketIcon,
  TrendingUp,
  Compass,
  ShieldAlert,
} from "lucide-react";

/* --------------------------- DATA --------------------------------- */

const heroPills = [
  { label: "Propose idea", icon: Lightbulb, link: "/propose-idea" },
  { label: "Create plan", icon: FileText, link: "/create-plan" },
  { label: "Equity model", icon: PieChart, link: "/equity-model" },
  { label: "Sign agreement", icon: FileSignature, link: "/sign-agreement" },
  { label: "Execute plan", icon: Gauge, link: "/execute-plan" },
  { label: "Launch startup", icon: Rocket, link: "/launch-startup" },
] as const;

type ChecklistItem = {
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
};

type ChecklistSection = {
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: ChecklistItem[];
};

const checklistSections: ChecklistSection[] = [
  {
    number: "01",
    title: "Idea Generation and Validation",
    icon: Lightbulb,
    items: [
      {
        title: "Identify a Problem",
        body: "Start by identifying a real problem or need in the market that your startup can address.",
        icon: Search,
      },
      {
        title: "Market Research",
        body: "Conduct thorough market research to understand the target audience, competition, and industry trends.",
        icon: ClipboardList,
      },
      {
        title: "Idea Validation",
        body: "Test your startup idea with potential customers, gather feedback, and validate its viability.",
        icon: CheckCircle2,
      },
    ],
  },
  {
    number: "02",
    title: "Business Planning",
    icon: FileText,
    items: [
      {
        title: "Business Plan",
        body: "Create a comprehensive business plan that outlines your vision, mission, objectives, and strategies.",
        icon: FileText,
      },
      {
        title: "Target Market",
        body: "Define your target market and buyer personas.",
        icon: Target,
      },
      {
        title: "Revenue Model",
        body: "Determine how your startup will generate revenue (e.g., subscription, e-commerce, advertising).",
        icon: Wallet,
      },
      {
        title: "Financial Projections",
        body: "Develop financial forecasts, including income statements, balance sheets, and cash flow statements.",
        icon: TrendingUp,
      },
    ],
  },
  {
    number: "03",
    title: "Legal and Regulatory Considerations",
    icon: Scale,
    items: [
      {
        title: "Business Structure",
        body: "Choose the legal structure for your startup (e.g., LLC, corporation, sole proprietorship).",
        icon: Building,
      },
      {
        title: "Name and Trademarks",
        body: "Select a unique business name and check for trademark availability.",
        icon: Stamp,
      },
      {
        title: "Permits and Licenses",
        body: "Identify and acquire any necessary permits and licenses for your industry and location.",
        icon: FileCheck,
      },
    ],
  },
  {
    number: "04",
    title: "Funding and Financing",
    icon: Banknote,
    items: [
      {
        title: "Funding Strategy",
        body: "Determine how you'll finance your startup (e.g., self-funding, loans, investors, crowdfunding).",
        icon: PiggyBank,
      },
      {
        title: "Pitch Deck",
        body: "Prepare a compelling pitch deck for potential investors.",
        icon: Presentation,
      },
    ],
  },
  {
    number: "05",
    title: "Team Building",
    icon: Users,
    items: [
      {
        title: "Co-Founders and Team",
        body: "Identify and recruit co-founders and key team members with the required skills and expertise.",
        icon: UserPlus,
      },
      {
        title: "Advisors and Mentors",
        body: "Build a network of advisors and mentors who can provide guidance.",
        icon: Handshake,
      },
    ],
  },
  {
    number: "06",
    title: "Product or Service Development",
    icon: Package,
    items: [
      {
        title: "Product/Service Definition",
        body: "Clearly define your product or service and its unique selling points.",
        icon: PenTool,
      },
      {
        title: "Prototyping",
        body: "Develop a prototype or minimum viable product (MVP) for testing.",
        icon: FlaskConical,
      },
      {
        title: "Development Roadmap",
        body: "Create a product development roadmap with milestones and timelines.",
        icon: Map,
      },
    ],
  },
  {
    number: "07",
    title: "Branding and Marketing",
    icon: Sparkles,
    items: [
      {
        title: "Brand Identity",
        body: "Develop a strong brand identity, including a logo, color scheme, and brand guidelines.",
        icon: Sparkles,
      },
      {
        title: "Marketing Strategy",
        body: "Create a marketing strategy that encompasses online and offline channels.",
        icon: Megaphone,
      },
      {
        title: "Website and Online Presence",
        body: "Establish an online presence with a professional website and social media profiles.",
        icon: Globe,
      },
    ],
  },
  {
    number: "08",
    title: "Sales and Distribution",
    icon: ShoppingBag,
    items: [
      {
        title: "Sales Strategy",
        body: "Outline your sales strategy and set sales goals.",
        icon: Target,
      },
      {
        title: "Distribution Channels",
        body: "Determine how you'll deliver your product or service to customers.",
        icon: Truck,
      },
    ],
  },
  {
    number: "09",
    title: "Customer Acquisition",
    icon: UserPlus,
    items: [
      {
        title: "Customer Acquisition Plan",
        body: "Develop a plan for acquiring your first customers.",
        icon: Target,
      },
      {
        title: "Customer Relationship Management (CRM)",
        body: "Choose a CRM system to manage customer relationships.",
        icon: Database,
      },
    ],
  },
  {
    number: "10",
    title: "Financial Management",
    icon: Calculator,
    items: [
      {
        title: "Financial Tools",
        body: "Set up financial tracking and accounting systems.",
        icon: Calculator,
      },
      {
        title: "Budgeting",
        body: "Create a budget for startup expenses and operations.",
        icon: PiggyBank,
      },
    ],
  },
  {
    number: "11",
    title: "Networking and Support",
    icon: Network,
    items: [
      {
        title: "Networking",
        body: "Build relationships with other entrepreneurs, industry peers, and potential partners.",
        icon: Network,
      },
      {
        title: "Support Ecosystem",
        body: "Explore startup incubators, accelerators, and co-working spaces in your area.",
        icon: Building,
      },
    ],
  },
  {
    number: "12",
    title: "Legal Documentation",
    icon: FileSignature,
    items: [
      {
        title: "Contracts and Agreements",
        body: "Draft any necessary contracts, such as partnership agreements or employment contracts.",
        icon: FileSignature,
      },
      {
        title: "Intellectual Property",
        body: "Protect your intellectual property through patents, trademarks, or copyrights as needed.",
        icon: Copyright,
      },
    ],
  },
  {
    number: "13",
    title: "Technology and Tools",
    icon: Cpu,
    items: [
      {
        title: "Tech Stack",
        body: "Choose the technology stack for your product and consider the tools needed for operations and marketing.",
        icon: Cpu,
      },
    ],
  },
  {
    number: "14",
    title: "Testing and Feedback",
    icon: TestTube,
    items: [
      {
        title: "Beta Testing",
        body: "Conduct beta testing with early users and gather feedback.",
        icon: TestTube,
      },
      {
        title: "Iterate",
        body: "Continuously improve your product or service based on user feedback.",
        icon: RefreshCw,
      },
    ],
  },
  {
    number: "15",
    title: "Launch and Growth Plan",
    icon: RocketIcon,
    items: [
      {
        title: "Launch Strategy",
        body: "Develop a comprehensive launch plan to create buzz around your startup.",
        icon: RocketIcon,
      },
      {
        title: "Growth Strategies",
        body: "Outline strategies for scaling and expanding your business.",
        icon: TrendingUp,
      },
    ],
  },
  {
    number: "16",
    title: "Adaptability and Resilience",
    icon: Compass,
    items: [
      {
        title: "Pivot Plan",
        body: "Be prepared to pivot your business strategy if needed based on market feedback.",
        icon: Compass,
      },
      {
        title: "Resilience",
        body: "Develop a mindset of resilience to face challenges and setbacks.",
        icon: ShieldAlert,
      },
    ],
  },
];

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
            Plan
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

/* --------------------------- CHECKLIST SECTION --------------------------------- */

function ChecklistCard({ section }: { section: ChecklistSection }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-xs font-bold tracking-widest text-indigo-500">
              {section.number}
            </span>
            <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
              {section.title}
            </h3>
          </div>

          <div className="mt-5 space-y-4">
            {section.items.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-indigo-600">
                 <ItemIcon className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                    <span className="font-semibold text-slate-900">
                      {item.title}:
                    </span>{" "}
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChecklistSectionBlock() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            Startup Checklist
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Conceiving a Startup
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Conceiving a startup is an exciting but challenging process. To
            help you get started, here&apos;s a checklist of essential tasks
            to execute when conceiving a startup:
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {checklistSections.map((section) => (
            <ChecklistCard key={section.number} section={section} />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-indigo-100 bg-indigo-50 p-6 text-center md:p-8">
          <p className="text-base leading-relaxed text-slate-700">
            Starting a startup is a complex journey that requires careful
            planning, dedication, and adaptability. This checklist can serve
            as a guide to ensure you cover the crucial tasks at each stage of
            the process.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- PAGE --------------------------------- */

export default function CreatePlanPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ChecklistSectionBlock />
    </main>
  );
}