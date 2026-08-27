// app/page.tsx
'use client';

import React, { useState } from 'react';
import Link from "next/link";
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

/* --------------------------- HERO SECTION  --------------------------------- */

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0F1C3F] text-white">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(2, 3, 34, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[380px] w-[380px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, #0F1C3F 0%, transparent 70%)",
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

            {/* Orbit Icons */}
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





/* --------------------------- MAIN HOME COMPONENT --------------------------------- */

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectName: '',
    visionMission: '',
    passion: '',
    marketOpportunity: '',
    targetAudience: '',
    uniqueValueProp: '',
    revenueModel: '',
    hasBusinessPlan: '',
    goToMarketStrategy: '',
    competitiveAnalysis: '',
    team: '',
    financialPlan: '',
    timeline: '',
    challenges: '',
    adaptToMarket: '',
    longTermVision: '',
    ipLegal: '',
    exitStrategy: '',
    validationSteps: '',
    mentorsNetwork: '',
    handleSetbacks: '',
    personalBackground: '',
    ethicalSocial: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <HeroSection />
      

      {/* Main Form Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-[#0A0E1F] from-blue-600 to-indigo-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Submit an Idea</h2>
              <p className="text-blue-100 mt-1">Fill out the form below to start your entrepreneurial journey</p>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">1. Your Full Name *</label>
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">2. Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">3. Phone No.</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">4. Suggest a Name of this Project? *</label>
                  <input type="text" name="projectName" required value={formData.projectName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { label: '5. Please share your Vision, Mission and Idea?', name: 'visionMission', rows: 3 },
                  { label: '6. Why are you passionate about this idea?', name: 'passion', rows: 2 },
                  { label: '7. What is the market opportunity?', name: 'marketOpportunity', rows: 2 },
                  { label: '8. Who is your target audience?', name: 'targetAudience', rows: 2 },
                  { label: '9. What is your unique value proposition?', name: 'uniqueValueProp', rows: 2 },
                  { label: '10. What is your revenue model?', name: 'revenueModel', rows: 2 },
                  { label: '11. Do you have a business plan?', name: 'hasBusinessPlan', rows: 1, type: 'select', options: ['Yes', 'No', 'In Progress'] },
                  { label: '12. What is your go-to-market strategy?', name: 'goToMarketStrategy', rows: 2 },
                  { label: '13. What is your competitive analysis?', name: 'competitiveAnalysis', rows: 2 },
                  { label: '14. Who is on your team?', name: 'team', rows: 2 },
                  { label: '15. What is your financial plan and funding needs?', name: 'financialPlan', rows: 2 },
                  { label: '16. What is your timeline for launch and growth?', name: 'timeline', rows: 2 },
                  { label: '17. What challenges do you anticipate?', name: 'challenges', rows: 2 },
                  { label: '18. How do you plan to adapt to market changes?', name: 'adaptToMarket', rows: 2 },
                  { label: '19. What is your long-term vision for the company?', name: 'longTermVision', rows: 2 },
                  { label: '20. How do you plan to handle intellectual property and legal issues?', name: 'ipLegal', rows: 2 },
                  { label: '21. What is your exit strategy?', name: 'exitStrategy', rows: 2 },
                  { label: '22. What have you done so far to validate your idea?', name: 'validationSteps', rows: 2 },
                  { label: '23. Do you have a network of mentors or advisors?', name: 'mentorsNetwork', rows: 2 },
                  { label: '24. How do you plan to handle setbacks and failures?', name: 'handleSetbacks', rows: 2 },
                  { label: '25. What is your personal background and experience?', name: 'personalBackground', rows: 3 },
                  { label: '26. Have you considered the ethical and social implications of your business?', name: 'ethicalSocial', rows: 2 },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                    {field.type === 'select' ? (
                      <select name={field.name} value={formData[field.name as keyof typeof formData] as string} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option value="">Select</option>
                        {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    ) : (
                      <textarea name={field.name} rows={field.rows} value={formData[field.name as keyof typeof formData] as string} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button type="submit" className="bg-[#0A0E1F] from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl">
                  Submit Idea
                </button>
              </div>
            </form>
          </div>

          {submitted && (
            <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-in slide-in-from-right">
              Thank you! Your idea has been submitted successfully.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}