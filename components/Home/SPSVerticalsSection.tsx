"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function SPSVerticalsSection() {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      title: "Public Sector",
      video: "/video/1video.mp4",
      desc: "Governments modernizing infrastructure & citizen services.",
      points: ["Government", "Public Safety", "Education", "Healthcare"],
    },
    {
      title: "Industrials",
      video: "/video/2video.mp4",
      desc: "Efficiency through digital transformation & automation.",
      points: ["Manufacturing", "Textile", "Utilities"],
    },
    {
      title: "Healthcare",
      video: "/video/3video.mp4",
      desc: "Improving care, compliance, and patient experience.",
      points: ["Telehealth", "Compliance", "Patient Experience"],
    },
    {
      title: "Retail",
      video: "/video/1video.mp4",
      desc: "Tech-driven retail transformation & personalization.",
      points: ["Supply Chain", "Omni-channel", "Marketing"],
    },
    {
      title: "Energy",
      video: "/video/2video.mp4",
      desc: "Smart systems powering modern energy ecosystems.",
      points: ["Electric", "Oil & Gas"],
    },
    {
      title: "Financial",
      video: "/video/3video.mp4",
      desc: "Secure, real-time financial infrastructure.",
      points: ["Insurance", "Banking"],
    },
    {
      title: "Telecommunication",
      video: "/video/1video.mp4",
      desc: "Next-gen connectivity & communication platforms.",
      points: ["Telcos"],
    },
  ];

  return (
    <section className="relative py-28 mt-16 bg-[#0b0f1a] overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[700px] h-[700px] bg-blue-600/20 blur-[140px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="relative text-center mb-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          SPS Verticals
        </h2>

        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Industry-focused solutions built with precision, scalability,
          and innovation.
        </p>
      </div>

      {/* CARDS */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              className={`relative group rounded-2xl min-h-[340px] overflow-hidden cursor-pointer transition-all duration-500 border
              
              ${
                isActive
                  ? "border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.25)] scale-[1.02]"
                  : "border-white/10 hover:border-cyan-500/40"
              }`}
            >
              {/* VIDEO BACKGROUND */}
              <video
                src={card.video}
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700
                  
                  ${
                    isActive
                      ? "scale-110 opacity-100"
                      : "scale-100 opacity-60"
                  }`}
              />

              {/* DARK OVERLAY */}
              <div
                className={`absolute inset-0 transition-all duration-500
                ${
                  isActive
                    ? "bg-gradient-to-b from-black/40 via-black/50 to-black/80"
                    : "bg-black/75"
                }`}
              />

              {/* GLOW EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-cyan-500/10" />

              {/* CONTENT */}
              <div className="relative z-10 p-7 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {card.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-6 transition duration-500
                    ${
                      isActive ? "text-gray-100" : "text-gray-300"
                    }`}
                  >
                    {card.desc}
                  </p>

                  <div className="flex items-center gap-2 mb-6 text-sm font-medium text-cyan-300">
                    <span>Explore</span>
                    <ChevronRight size={16} />
                  </div>

                  <ul className="space-y-3">
                    {card.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-white/90"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-300" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* LEFT ACCENT */}
              <div
                className={`absolute left-0 top-0 h-full w-[4px] transition-all duration-500
                ${
                  isActive
                    ? "bg-cyan-300"
                    : "bg-transparent group-hover:bg-cyan-500"
                }`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}