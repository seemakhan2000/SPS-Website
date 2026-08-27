"use client";

import { Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b1220] text-white pt-20 pb-10 px-6 md:px-16 overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[160px] rounded-full" />
      </div>

      {/* CONTACT CARDS */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-4 gap-6 mb-16">

        <div>
          <h2 className="text-xl font-semibold">
            Get in Touch with us
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Software Productivity Strategist
          </p>
        </div>

        <ContactCard
          icon={<Phone size={18} />}
          title="Call Us"
          value="+301-337-2290"
        />

        <ContactCard
          icon={<Mail size={18} />}
          title="Send us a Mail"
          value="support@spsoft.com"
        />

        <ContactCard
          icon={<Clock size={18} />}
          title="Opening Time"
          value="Mon - Sat: 7:00 - 17:00"
        />
      </div>

      {/* MAIN GRID */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-5 gap-10 border-t border-white/10 pt-14">

        {/* BRAND */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/images/footerlogo.png"
              alt="logo"
              width={250}
              height={250}
            />
           
          </div>

          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            Whether you are an entrepreneur looking for an engineering team
            or an enterprise pursuing digital transformation we can help
            you bring your vision to reality.
          </p>
        </div>

        {/* LINKS */}
        <FooterColumn
          title="Our Services"
          items={[
            "Cybersecurity",
            "Cloud",
            "AI & Automation",
            "Collaboration",
            "Training",
          ]}
        />

        <FooterColumn
          title="Verticals"
          items={[
            "Public Sector",
            "Industrials",
            "Healthcare",
            "Retail",
            "Energy",
            "Financial",
          ]}
        />

        <FooterColumn
          title="Activities"
          items={[
            "Internship Program 2025",
            "Webinars",
            "Workshops",
            "Special Interest Groups",
            "Training",
          ]}
        />

        <FooterColumn
          title="SpinnLabs"
          items={[
            "Overview",
            "Academia",
            "Industry",
            "Centers of Expertise",
            "Startups",
          ]}
        />
      </div>

      {/* BOTTOM BAR */}
      <div className="relative max-w-7xl mx-auto mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        © 2026{" "}
        <span className="text-cyan-400 font-medium">
          Software Productivity Strategist
        </span>{" "}
        . All Rights Reserved.
      </div>
    </footer>
  );
}

//////////////////////////////////////////////////////
// 🧊 CONTACT CARD
//////////////////////////////////////////////////////

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition">

      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600/20 text-cyan-300">
          {icon}
        </div>
        <p className="font-medium">{title}</p>
      </div>

      <p className="text-sm text-gray-400">{value}</p>
    </div>
  );
}

//////////////////////////////////////////////////////
// 📦 FOOTER COLUMN
//////////////////////////////////////////////////////

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-white">{title}</h3>

      <ul className="space-y-2 text-sm text-gray-400">
        {items.map((item, i) => (
          <li
            key={i}
            className="hover:text-cyan-300 transition cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}