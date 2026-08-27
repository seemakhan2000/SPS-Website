"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "AZALIO",
    desc: "Reward employees, track engagement, and manage workforce operations seamlessly.",
    img: "/images/aza.jpg",
  },
  {
    title: "MYID Self Verify",
    desc: "Secure identity management with a seamless mobile-first experience.",
    img: "/images/my2.jpg",
  },
  {
    title: "CSM",
    desc: "Manage risks, compliance, and security frameworks efficiently.",
    img: "/images/csm.jpg",
  },
  {
    title: "BMS",
    desc: "Get real-time insights and streamline business operations easily.",
    img: "/images/bms.jpg",
  },
];

export default function ModernCards() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Our Products
        </h2>
        <p className="text-slate-600 mt-4 text-lg">
          Next-gen SaaS tools built for performance, security, and growth.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl bg-[#0f172a] border border-slate-700 hover:border-indigo-500 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative p-7 z-10">
              <h3 className="text-2xl font-bold text-white mb-3">
                {card.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-6">
                {card.desc}
              </p>

              <button className="flex items-center gap-2 text-indigo-400 font-semibold group-hover:text-white transition-colors duration-300">
                Explore
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/20 pointer-events-none"></div>

            {/* Corner Light Effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
}