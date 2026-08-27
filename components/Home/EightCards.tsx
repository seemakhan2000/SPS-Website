"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

type CardType = {
  title: string;
  desc: string;
  icon: string;
  active?: boolean;
};

const cardsData: CardType[] = [
  {
    title: "GateKeyper",
    desc: "Ensure heavy equipment safety with smart monitoring and operator tracking solutions.",
    icon: "/images/1.png",
  },
  {
    title: "CREyield",
    desc: "Advanced real estate insights platform for investors and property owners.",
    icon: "/images/2.png",
    active: true,
  },
  {
    title: "CSM",
    desc: "Security management built around NIST framework with enterprise-grade compliance.",
    icon: "/images/3.png",
  },
  {
    title: "MyHealthChart",
    desc: "Empowering patients with digital health records and seamless doctor communication.",
    icon: "/images/4.png",
  },
  {
    title: "Analytics Dashboard",
    desc: "Track KPIs and performance metrics with powerful real-time dashboards.",
    icon: "/images/5.png",
  },
  {
    title: "AIMY",
    desc: "AI-powered assistant recognized by IBM for social innovation and engagement.",
    icon: "/images/6.png",
  },
  {
    title: "HerDomain",
    desc: "Supporting women in digital economy across South Asia and Middle East.",
    icon: "/images/7.png",
  },
  {
    title: "Watch Over",
    desc: "Parental monitoring app ensuring child safety in digital environments.",
    icon: "/images/8.png",
  },
];

export default function EightCards() {
  return (
    <div className="bg-[#f9fafb] py-20 px-6 md:px-16">

      {/* HEADER */}
      <div className="mb-16 max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Explore Our Products
        </h2>
        <p className="text-gray-500 mt-4">
          A suite of powerful digital solutions built to scale businesses and simplify operations.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`group flex items-start gap-5 p-6 rounded-2xl border transition-all duration-300
            ${
              card.active
                ? "bg-white border-cyan-500 shadow-md"
                : "bg-white border-gray-200 hover:border-cyan-400 hover:shadow-lg"
            }`}
          >

            {/* ICON */}
            <div className={`min-w-[60px] h-[60px] rounded-xl flex items-center justify-center
              ${card.active ? "bg-cyan-50" : "bg-gray-100 group-hover:bg-cyan-50"}
            `}>
              <img src={card.icon} alt="icon" className="w-8 h-8 object-contain" />
            </div>

            {/* CONTENT */}
            <div className="flex-1">

              <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                {card.title}

                <span className="opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight size={18} className="text-cyan-600" />
                </span>
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {card.desc}
              </p>

              {/* LINE CTA */}
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-cyan-600">
                Learn more
                <span className="w-6 h-[2px] bg-cyan-500 group-hover:w-10 transition-all"></span>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}