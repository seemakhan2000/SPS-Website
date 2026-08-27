"use client";

import { useState } from "react";
import {
  Shield,
  Cloud,
  Bot,
  Users,
  Network,
  RefreshCcw,
  Settings,
  Brain,
  ArrowUpRight,
} from "lucide-react";

type TabType = "cyber" | "cloud" | "ai" | "collab";

type CardItem = {
  title: string;
  desc?: string;
  list?: string[];
  icon?: React.ReactNode;
};

const data: Record<TabType, CardItem[]> = {
  cyber: [
    {
      title: "Cybersecurity",
      icon: <Shield size={24} />,
      desc:
        "Enterprise-grade security architecture with proactive threat intelligence and advanced protection.",
    },
    {
      title: "Network Security",
      icon: <Network size={24} />,
      list: [
        "Network Visibility",
        "Design & Implementation",
        "Security Operations",
      ],
    },
    {
      title: "SMaaS",
      icon: <Settings size={24} />,
      list: [
        "Policy Management",
        "Monitoring & Response",
        "Security Automation",
      ],
    },
  ],

  cloud: [
    {
      title: "Cloud Solutions",
      icon: <Cloud size={24} />,
      desc:
        "Scalable cloud infrastructure engineered for performance, reliability, and flexibility.",
    },
    {
      title: "DevOps",
      icon: <Settings size={24} />,
      list: ["CI/CD Pipelines", "Containerization", "Cloud Monitoring"],
    },
    {
      title: "Migration",
      icon: <RefreshCcw size={24} />,
      list: ["AWS Migration", "Office 365", "Hybrid Cloud"],
    },
  ],

  ai: [
    {
      title: "AI Solutions",
      icon: <Brain size={24} />,
      desc:
        "Intelligent automation powered by AI, machine learning, and modern data technologies.",
    },
    {
      title: "Data Science",
      icon: <Bot size={24} />,
      list: ["Generative AI", "IoT Analytics", "Predictive Insights"],
    },
    {
      title: "Automation",
      icon: <Settings size={24} />,
      list: ["Low Code Apps", "Workflow Automation", "Appian"],
    },
  ],

  collab: [
    {
      title: "Events",
      icon: <Users size={24} />,
      list: ["Corporate Events", "Professional Workshops", "Training"],
    },
    {
      title: "Learning",
      icon: <Users size={24} />,
      desc:
        "Professional learning programs designed for teams and enterprises.",
    },
    {
      title: "Services",
      icon: <Users size={24} />,
      list: ["Virtual Training", "Media Editing", "Production Support"],
    },
  ],
};

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("cyber");

  const tabs = [
    {
      key: "cyber",
      label: "Cybersecurity",
      icon: <Shield size={18} />,
    },
    {
      key: "cloud",
      label: "Cloud",
      icon: <Cloud size={18} />,
    },
    {
      key: "ai",
      label: "AI & Automation",
      icon: <Bot size={18} />,
    },
    {
      key: "collab",
      label: "Collaboration",
      icon: <Users size={18} />,
    },
  ] as const;

  return (
   <section className="relative py-28 overflow-hidden bg-gray-100 text-black">
  {/* Background */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-200 bg-cyan-50 text-cyan-600 text-sm tracking-wide uppercase">
        Premium Services
      </span>

      <h2 className="mt-7 text-5xl md:text-6xl font-bold leading-tight text-black">
        Smart Solutions <br />
        For Digital Growth
      </h2>

      <p className="mt-6 text-gray-600 text-base leading-relaxed">
        We empower businesses with modern cybersecurity, AI, cloud, and
        collaboration technologies designed for scalability and innovation.
      </p>
    </div>

    {/* Tabs */}
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key as TabType)}
          className={`relative px-7 py-3 rounded-2xl transition-all duration-300 border text-sm font-medium flex items-center gap-2
          ${
            activeTab === tab.key
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 border-transparent text-white shadow-[0_10px_40px_rgba(6,182,212,0.35)]"
              : "bg-white border-gray-200 text-gray-700 hover:border-cyan-400 hover:bg-gray-50"
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>

    {/* Service Cards */}
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      {data[activeTab].map((item, index) => (
        <div
          key={index}
          className="group relative rounded-[32px] border border-gray-200 bg-white p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/50 shadow-sm hover:shadow-xl"
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>

          {/* Top */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              {item.icon}
            </div>

            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-cyan-500 group-hover:text-white transition">
              <ArrowUpRight size={18} />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 mt-10">
            <h3 className="text-2xl font-semibold mb-5 text-black">
              {item.title}
            </h3>

            {item.list ? (
              <div className="space-y-4">
                {item.list.map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-700 text-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                    {text}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            )}
          </div>

          {/* Bottom Line */}
          <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}