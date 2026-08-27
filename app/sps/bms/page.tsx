"use client";

import { useState, useEffect, useRef } from "react";

const BMS_AREAS = [
  "Sales",
  "Accounting",
  "HR",
  "Product Management",
  "Services Management",
  "Business Forecast",
  "Business Statements",
  "Web Content Management",
 "Learning and Education",
  "IT",
  "Marketing",
];

function BarChart() {
  const bars = [
    { heights: [35, 55, 25, 70, 45], color: "#31b6d8" },
    { heights: [25, 45, 60, 35, 80], color: "#0b7285" },
    { heights: [55, 25, 45, 60, 35], color: "#06b6d4" },
    { heights: [45, 70, 35, 55, 60], color: "#67e8f9" },
    { heights: [60, 35, 70, 25, 55], color: "#0e7490" },
  ];

  return (
    <div
      className="flex items-end gap-3 px-2"
      style={{ height: "128px" }}
    >
      {[...Array(8)].map((_, gi) => (
        <div key={gi} className="flex items-end gap-1" style={{ height: "100%" }}>
          {bars.map((bar, bi) => (
            <div
              key={bi}
              style={{
                width: 8,
                height: `${bar.heights[gi % 5]}%`,
                background: bar.color,
                borderRadius: "3px 3px 0 0",
                opacity: 0.9,
                transformOrigin: "bottom",
                animation: `growBar 0.8s ease-out ${gi * 0.1 + bi * 0.05}s both`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function HeroChart() {
  return (
    <svg viewBox="0 0 200 140" width="100%" height="100%">
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#31b6d8" />
          <stop offset="100%" stopColor="#0b7285" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#a5f3fc" />
        </linearGradient>
      </defs>

      {[20, 40, 60, 80, 100, 120, 140].map((x, i) => (
        <rect
          key={i}
          x={x - 12}
          y={140 - (i + 1) * 16}
          width={22}
          height={(i + 1) * 16}
          fill="url(#barGrad)"
          rx="3"
          opacity="0.9"
        />
      ))}

      <polyline
        points="8,124 28,108 48,88 68,68 88,48 108,28 128,12 148,4 168,2"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <polygon points="158,-2 176,6 162,16" fill="#a5f3fc" />
    </svg>
  );
}

export default function BMSPage() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

        @keyframes growBar {
          from { transform: scaleY(0); opacity: 0; }
          to   { transform: scaleY(1); opacity: 0.9; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.02); }
        }

        .font-syne  { font-family: 'Syne', sans-serif; }
        .font-dm    { font-family: 'DM Sans', sans-serif; }

        .hero-fadeup { animation: fadeUp 0.8s ease-out both; }
        .hero-fadeup-1 { animation-delay: 0.1s; }
        .hero-fadeup-2 { animation-delay: 0.25s; }
        .hero-fadeup-3 { animation-delay: 0.4s; }
        .hero-fadeup-4 { animation-delay: 0.55s; }

        .chart-float { animation: float 4s ease-in-out infinite; }

        .gradient-text {
          background: linear-gradient(135deg, #67e8f9, #a5f3fc, #e0f2fe);
          -webkit-background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .shimmer-text {
          background: linear-gradient(90deg, #67e8f9 0%, #ffffff 40%, #a5f3fc 60%, #67e8f9 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .hero-grid-bg {
          background-image:
            linear-gradient(rgba(49,182,216,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(49,182,216,.06) 1px, transparent 1px);
          background-size: 56px 56px;
        }

        .hero-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4;
        }

        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(11,114,133,.15);
          border-color: rgba(49,182,216,.4);
        }

        .area-item-hover {
          transition: all 0.2s ease;
        }
        .area-item-hover:hover {
          background: linear-gradient(135deg, rgba(4,43,53,0.06), rgba(49,182,216,0.08));
          border-color: rgba(49,182,216,.45);
          transform: translateX(4px);
        }

        .cta-btn {
          background: linear-gradient(135deg, #0b7285, #0e7490);
          transition: all 0.25s ease;
          box-shadow: 0 4px 20px rgba(11,114,133,.35);
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(11,114,133,.5);
          background: linear-gradient(135deg, #0e7490, #0b7285);
        }

        .glow-ring {
          box-shadow: 0 0 0 1px rgba(49,182,216,.2), 0 0 40px rgba(49,182,216,.07);
        }

        .pulse-animation {
          animation: pulseGlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[95vh] flex items-center overflow-hidden font-dm"
      >
        {/* Background Layer */}
       <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2e] via-[#11183f] to-[#1a2560]" />
        <div className="absolute inset-0 hero-grid-bg" />
        <div className="absolute inset-0 hero-noise" />
        
        {/* Ambient Orbs */}
        <div className="absolute top-20 right-[10%] w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pulse-animation" />
        <div className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-teal-300/10 blur-3xl pulse-animation" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              

             <h1 className="font-syne font-bold text-white hero-fadeup hero-fadeup-2 tracking-tight mt-[30px]"
    style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.2 }}>
    Business Management <br />
    <span className="gradient-text">System</span>
</h1>
              <p className="hero-fadeup hero-fadeup-3 text-base leading-relaxed mt-5 mb-6 text-cyan-50/80 max-w-lg">
                Get real-time insights into every aspect of your company's
                performance, optimize processes and streamline business with our
                Business Management System.
              </p>

              <div className="hero-fadeup hero-fadeup-4 flex flex-wrap gap-4 items-center">
                <a href="#" className="cta-btn inline-flex items-center gap-3 text-white font-semibold rounded-xl px-6 py-3 text-[.875rem] no-underline shadow-xl hover:shadow-cyan-900/30 transition-all">
                  Request Consultation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="inline-flex items-center gap-2 font-medium text-[.875rem] no-underline transition-all hover:gap-3 text-cyan-200 hover:text-white">
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor"/>
                    </svg>
                  </span>
                  Watch Demo
                </a>
              </div>

              {/* Stats */}
              <div className="hero-fadeup hero-fadeup-4 flex gap-8 mt-8 pt-4 border-t border-white/10">
                {[
                  { value: "20+", label: "Years Experience" },
                  { value: "500+", label: "Companies Served" },
                  { value: "99.9%", label: "Uptime SLA" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-syne font-bold text-xl text-cyan-300">{stat.value}</div>
                    <div className="text-[0.7rem] text-cyan-100/60 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Chart Card */}
            <div className="chart-float lg:mt-0 mt-6">
              <div
                className="rounded-2xl p-5 glow-ring bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[0.7rem] font-semibold tracking-wider uppercase mb-1 text-cyan-300">
                      Performance Overview
                    </p>
                    <p className="font-syne font-bold text-white text-lg">Q4 Business Analytics</p>
                  </div>
                  <span
                    className="text-[0.7rem] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  >
                    ↑ 24.6%
                  </span>
                </div>

                <div className="h-32">
                  <HeroChart />
                </div>

                <div className="flex gap-4 mt-3 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-[0.7rem] text-cyan-100/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#31b6d8]" />
                    Revenue
                  </div>
                  <div className="flex items-center gap-1.5 text-[0.7rem] text-cyan-100/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#a5f3fc]" />
                    Growth
                  </div>
                  <div className="flex items-center gap-1.5 text-[0.7rem] text-cyan-100/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                    Projection
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-3 mt-5 text-cyan-100/50 text-[0.7rem]">
                <span className="flex -space-x-2">
                  {["https://randomuser.me/api/portraits/men/32.jpg", "https://randomuser.me/api/portraits/women/68.jpg", "https://randomuser.me/api/portraits/men/45.jpg"].map((img, i) => (
                    <img key={i} src={img} className="w-5 h-5 rounded-full border-2 border-white/20" alt="client" />
                  ))}
                </span>
                <span>Trusted by industry leaders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-cyan-200/50 text-[0.7rem] animate-bounce">
          <span>Scroll to explore</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="bg-slate-50 text-slate-900 font-dm">
        {/* ... rest of your sections remain exactly the same ... */}
        {/* How can BMS help section */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-8 py-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 rounded-full" style={{ background: "#0b7285" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#0b7285" }}>Overview</span>
            </div>
            <h2 className="font-syne font-bold text-slate-900 mb-6"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
              How can BMS help your business?
            </h2>
            <p className="text-[1.0625rem] text-slate-500 leading-[1.9] max-w-3xl">
              With a fully-integrated system, employees across departments can use the same reliable
              information to meet their day-to-day needs. The system should bring the front office
              and back office together — it's a full enterprise management solution. Once you've
              implemented BMS, you'll identify areas that need improvement and make cost-effective
              decisions. This will enable you to unleash your full potential and take your company
              to the next level.
            </p>
          </div>
        </section>

        {/* Benefits section */}
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-8 py-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 rounded-full" style={{ background: "#0b7285" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#0b7285" }}>Benefits</span>
            </div>
            <h2 className="font-syne font-bold text-slate-900 mb-4"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
              What are the benefits of BMS?
            </h2>
            <p className="text-[1rem] text-slate-500 leading-[1.85] max-w-2xl mb-10">
              BMS offers more than traditional ERP solutions. Our system is tailored to your business
              needs so you can streamline operations and collaborate effectively. Real-time insights
              from one platform.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🔗", title: "Fully Integrated", desc: "Unified platform that connects every department so nothing falls through the cracks." },
                { icon: "📊", title: "Real-Time Insights", desc: "Live dashboards and analytics to make informed decisions at every level." },
                { icon: "⚙️", title: "Tailored to You", desc: "Configurable modules designed around your exact business workflows." },
                { icon: "🤝", title: "Cross-Department", desc: "Break silos and foster seamless collaboration between teams." },
                { icon: "📈", title: "Cost-Effective", desc: "Eliminate redundant tools and reduce operational overhead significantly." },
                { icon: "🚀", title: "Scalable Growth", desc: "Infrastructure that scales with you — from startup to enterprise." },
              ].map((b, i) => (
                <div
                  key={i}
                  className="card-hover bg-white rounded-2xl p-6 border border-slate-200"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                    style={{ background: "rgba(11,114,133,.08)", border: "1px solid rgba(11,114,133,.12)" }}
                  >
                    {b.icon}
                  </div>
                  <h3 className="font-syne font-bold text-slate-900 text-[1.05rem] mb-2">{b.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CMS Feature Spotlight */}
       <section className="bg-gradient-to-br from-[#0a0e2e] via-[#11183f] to-[#1a2560]">
          <div className="absolute inset-0 hero-grid-bg opacity-30" />
          <div className="relative z-10 max-w-6xl mx-auto px-8 py-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)" }}
              >
                🌐
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#a5f3fc" }}>
                  Feature Spotlight
                </p>
                <h3 className="font-syne font-bold text-white text-xl mb-3">
                  Integrated Content Management System
                </h3>
                <p className="text-[.9375rem] leading-[1.85]" style={{ color: "rgba(224,242,254,.75)", maxWidth: 680 }}>
                  It's business oriented. With BMS, companies can now manage their products and services
                  directly inside the platform and publish website content with just one click —
                  no more need for full-time technical resources to manage the website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Management Areas */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-8 py-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 rounded-full" style={{ background: "#0b7285" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#0b7285" }}>Modules</span>
            </div>
            <h2 className="font-syne font-bold text-slate-900 mb-2"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
              Business Management Areas
            </h2>
            <p className="text-slate-500 text-sm mb-10">End-to-end coverage across every business function.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0">
                {BMS_AREAS.map((area, i) => (
                  <li
                    key={area}
                    className="area-item-hover flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm font-medium cursor-default"
                  >
                    <span
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: "rgba(11,114,133,.1)", color: "#0b7285" }}
                    >
                      {i + 1}
                    </span>
                    {area}
                  </li>
                ))}
              </ul>

             <div className="rounded-2xl p-6 overflow-hidden bg-gradient-to-br from-[#0a0e2e]">
                <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#67e8f9" }}>
                  Module Activity
                </p>
                <p className="font-syne font-bold text-white text-base mb-5">Cross-Department Usage</p>
                <div style={{ height: "128px", overflow: "hidden", position: "relative" }}>
                  <BarChart />
                </div>
                <div className="flex gap-3 mt-4 pt-4 flex-wrap" style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
                  {[["Sales", "#31b6d8"], ["HR", "#0b7285"], ["Ops", "#06b6d4"], ["IT", "#67e8f9"], ["Mktg", "#0e7490"]].map(([l, c]) => (
                    <div key={l} className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(224,242,254,.55)" }}>
                      <span className="w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner */}
       <section
  className="relative overflow-hidden text-center px-8 py-24 mb-[30px] bg-[#0a0e2e]"
>
          <div className="absolute inset-0 hero-grid-bg opacity-20" />
          <div className="absolute inset-0 hero-noise" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ border: "1px solid rgba(103,232,249,.07)" }} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
            style={{ border: "1px solid rgba(103,232,249,.1)" }} />

          <div className="relative z-10 max-w-3xl mx-auto mb-[10px]">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-xs font-bold tracking-widest uppercase"
              style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)", color: "#a5f3fc" }}
            >
              Our Legacy
            </div>
            <h2 className="font-syne font-bold text-white mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.2 }}>
              20 years of building digital products and we are{" "}
              <span className="shimmer-text">just getting started!</span>
            </h2>
            <p className="text-[1rem] mb-10" style={{ color: "rgba(224,242,254,.65)" }}>
              Trusted by hundreds of enterprises worldwide to manage, optimize, and grow.
            </p>
            <a href="#" className="cta-btn inline-flex items-center gap-3 text-white font-semibold rounded-xl px-8 py-4 text-[.9375rem] no-underline">
              Get Started Today
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>

      </main>
    </>
  );
}