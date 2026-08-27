"use client";

import React, { useEffect, useRef, useState } from "react";

const NAVY   = "#0F1C3F";
const INDIGO = "#1A3A8F";
const SKY    = "#2C6FD4";
const SLATE  = "#F4F6FB";
const STONE  = "#8A95A8";
const WHITE  = "#FFFFFF";

/* ─── Scroll-reveal hook ─────────────────────────────────────── */
function useReveal() {
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const obs: IntersectionObserver[] = [];
    Object.entries(refs.current).forEach(([k, el]) => {
      if (!el) return;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setVisible(v => ({ ...v, [k]: true })); },
        { threshold: 0.12 }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach(o => o.disconnect());
  }, []);

  const bind = (k: string) => (el: HTMLElement | null) => { refs.current[k] = el; };
  const cls  = (k: string, delay = 0) =>
    `transition-all duration-700 ease-out ${delay ? `delay-[${delay}ms]` : ""} ${
      visible[k] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return { bind, cls, visible };
}

/* ─── Eyebrow ────────────────────────────────────────────────── */
function Eyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="inline-block w-[3px] h-[18px] rounded-sm" style={{ background: SKY }} />
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: SKY }}>
        {label}
      </span>
    </div>
  );
}

/* ─── Hero Ecosystem SVG ─────────────────────────────────────── */
function HeroDiagram() {
  return (
    <svg viewBox="0 0 400 370" width="400" height="370"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: "100%", overflow: "visible" }}
    >
      <circle cx="200" cy="185" r="138" fill="none" stroke="rgba(44,111,212,0.10)" strokeWidth="1"/>
      <circle cx="200" cy="185" r="82"  fill="none" stroke="rgba(44,111,212,0.07)" strokeWidth="1"/>

      {[
        [200,185,200,52],[200,185,337,130],[200,185,352,248],
        [200,185,200,320],[200,185,50,248],[200,185,64,130],
      ].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(44,111,212,0.22)" strokeWidth="1.2" strokeDasharray="4 4"/>
      ))}

      {[
        [200,118],[268,157],[276,216],[200,252],[125,216],[132,157],
      ].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill="#2C6FD4" opacity="0.5"/>
      ))}

      {/* Center */}
      <circle cx="200" cy="185" r="44" fill="#1A3A8F"/>
      <circle cx="200" cy="185" r="44" fill="none" stroke="rgba(44,111,212,0.65)" strokeWidth="1.8"/>
      <text x="200" y="180" textAnchor="middle" fill="white" fontSize="11" fontWeight="800"
        fontFamily="Georgia,serif" letterSpacing="0.5">SPINN</text>
      <text x="200" y="196" textAnchor="middle" fill="#7ba7e8" fontSize="9"
        fontFamily="Inter,sans-serif" letterSpacing="1">LABS</text>

      {/* Satellite nodes */}
      {[
        { cx:200, cy:52,  lines:["Mentor-","ship"] },
        { cx:337, cy:130, lines:["Fund-","ing"] },
        { cx:352, cy:248, lines:["Indus-","try"] },
        { cx:200, cy:320, lines:["Train-","ing"] },
        { cx:50,  cy:248, lines:["64","Univers."] },
        { cx:64,  cy:130, lines:["162","Faculty"] },
      ].map(({ cx, cy, lines }) => (
        <g key={cx+"-"+cy}>
          <circle cx={cx} cy={cy} r="28" fill="#0d1835" stroke="#2C6FD4" strokeWidth="1.2"/>
          <text x={cx} y={cy - 7} textAnchor="middle" fill="#7ba7e8" fontSize="9"
            fontFamily="Inter,sans-serif">{lines[0]}</text>
          <text x={cx} y={cy + 6} textAnchor="middle" fill="#7ba7e8" fontSize="9"
            fontFamily="Inter,sans-serif">{lines[1]}</text>
        </g>
      ))}
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function SpinnLabsOverview() {
  const { bind, cls } = useReveal();

  const hubCards = [
    {
      label: "Workshop",
      span: "col-span-2",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      alt: "Workshop event",
    },
    {
      label: "Ceremony",
      span: "col-span-1",
      img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80",
      alt: "Ceremony",
    },
    {
      label: "Lab Session",
      span: "col-span-1",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
      alt: "Lab session",
    },
    {
      label: "Networking",
      span: "col-span-2",
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
      alt: "Networking event",
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: NAVY }}
      className="bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        className="relative min-h-[580px] flex items-center px-8 md:px-16 py-24"
        style={{ background: NAVY }}
      >
        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:
            "linear-gradient(rgba(44,111,212,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(44,111,212,0.055) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}/>
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none" style={{
          background: "radial-gradient(circle at 80% 20%, rgba(44,111,212,0.16) 0%, transparent 65%)",
        }}/>

        <div className="relative z-10 w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
           
            <h1 className="text-5xl md:text-[58px] font-black leading-[1.04] mb-6"
              style={{ fontFamily: "Georgia, serif", color: WHITE, letterSpacing: "-0.028em" }}>
             Overview
            </h1>
            <p className="text-[15px] leading-[1.75] mb-9"
              style={{ color: "rgba(255,255,255,0.52)", maxWidth: 440 }}>
              SPINN Labs is a hub for Pakistan's brightest CS graduates — connecting them with
              mentors, funding, industry partners, and a community committed to making Pakistan,
              and the world, a better place.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Mentorship","Funding","Training","Industry Network"].map(p => (
                <span key={p} className="text-[11px] font-semibold tracking-wide rounded-full px-4 py-[5px]"
                  style={{
                    color: "#5B9CF6",
                    border: "1px solid rgba(44,111,212,0.35)",
                    background: "rgba(44,111,212,0.08)",
                    letterSpacing: "0.08em",
                  }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Right diagram */}
          <div className="flex items-center justify-center">
            <HeroDiagram />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "rgba(44,111,212,0.28)" }}/>
      </section>

      

      {/* ══════════════════════════════════════════
          OUR APPROACH
      ══════════════════════════════════════════ */}
      <section className="py-24 px-8 md:px-16 bg-white" ref={bind("approach") as any}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1px_1fr] gap-0 items-start">

          <div className={cls("approach")}>
            <Eyebrow label="Our Approach" />
            <h2 className="text-3xl font-black leading-tight mb-5"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}>
              Imaginative risk-takers who challenge assumptions
            </h2>
            <p className="text-sm leading-[1.8] mb-4" style={{ color: STONE }}>
              We challenge status quo assumptions and transform hardworking individuals
              into successful professionals. We consider multiple sources of evidence
              and diverse perspectives to engage in continuous improvement.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: STONE }}>
              We share leadership and responsibility in our work with youth by committing
              time and effort to ensure more effective outcomes.
            </p>
          </div>

          <div className="hidden md:block mx-14 self-stretch"
            style={{ background: "rgba(15,28,63,0.09)" }}/>

          <div className={cls("approach")} style={{ transitionDelay: "120ms" }}>
            <Eyebrow label="Graduate Potential" />
            <h2 className="text-3xl font-black leading-tight mb-5"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}>
              Every CS graduate carries unique potential
            </h2>
            <p className="text-sm leading-[1.8] mb-4" style={{ color: STONE }}>
              We appreciate every CS graduate has a unique potential to become a valuable
              resource. We base our work on knowledge insights about global industry skill
              requirements.
            </p>
            <p className="text-sm leading-[1.8]" style={{ color: STONE }}>
              We respect the dignity, worth, and uniqueness of each individual — recognising
              that adults achieve their full potential in relationships built on trust and respect.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRIDGE CALLOUT
      ══════════════════════════════════════════ */}
      <section className="py-14 px-8 md:px-16" style={{ background: NAVY }}>
        <div className="max-w-5xl mx-auto rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6"
          style={{ background: "rgba(44,111,212,0.1)", border: "1px solid rgba(44,111,212,0.22)" }}>
          <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center"
            style={{ background: SKY }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"
                fill="white" opacity=".9"/>
              <rect x="9" y="19" width="6" height="2" rx="1" fill="white" opacity=".6"/>
            </svg>
          </div>
          <div>
            <p className="text-lg font-bold mb-1"
              style={{ color: WHITE, fontFamily: "Georgia, serif" }}>
              Academia &amp; Industry — bridging the gap
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
              SPINN Labs promotes high-quality skill training of faculty to provide students
              with skills and industry practice, giving them an extra advantage in the job market.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECH HUB
      ══════════════════════════════════════════ */}
      <section className="py-24 px-8 md:px-16" style={{ background: SLATE }}
        ref={bind("hub") as any}>
        <div className="max-w-5xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-16 items-center ${cls("hub")}`}>

            {/* Left */}
            <div>
              <Eyebrow label="Community" />
              <h2 className="text-4xl font-black leading-tight mb-5"
                style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.025em", color: NAVY }}>
                Tech hub for innovators and entrepreneurs
              </h2>
              <p className="text-sm leading-[1.8] mb-8" style={{ color: STONE }}>
                A thriving community where bold ideas meet industry expertise. SPINN Labs
                connects CS graduates with mentors, funding, and professionals committed
                to building a better Pakistan.
              </p>
              {[
                ["Mentorship", "Direct guidance from tech industry professionals"],
                ["Funding",    "Opportunities to apply for startup and project grants"],
                ["Network",    "Access to 64+ universities and 162 faculty advisors"],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 mb-5">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                    style={{ background: SKY }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: NAVY }}>{title}</p>
                    <p className="text-sm" style={{ color: STONE }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — image card grid */}
            <div className={cls("hub")} style={{ transitionDelay: "150ms" }}>
              <div className="grid grid-cols-3 gap-3">
                {hubCards.map(({ label, span, img, alt }) => (
                  <div
                    key={label}
                    className={`${span} h-36 rounded-xl overflow-hidden relative flex items-end`}
                  >
                    <img
                      src={img}
                      alt={alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(10,18,48,0.78) 0%, rgba(10,18,48,0.18) 60%, transparent 100%)",
                      }}
                    />
                    <span
                      className="relative z-10 text-[10px] font-bold tracking-widest uppercase p-4"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PARTNERS
      ══════════════════════════════════════════ */}
     {/* ══════════════════════════════════════════
    PARTNERS
══════════════════════════════════════════ */}
<section className="py-24 px-8 md:px-16 bg-white" ref={bind("customers") as any}>
  <div className="max-w-5xl mx-auto">

    {/* Top header — 2 col */}
    <div className={`grid md:grid-cols-2 gap-10 items-end mb-14 ${cls("customers")}`}>
      <div>
        <Eyebrow label="Partners" />
        <h2
          className="text-4xl font-black leading-tight"
          style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.022em", color: NAVY }}
        >
          Customers we are proud<br />to work with.
        </h2>
      </div>
      <div className="pb-1">
        <p className="text-sm leading-[1.75] mb-5" style={{ color: STONE }}>
          Our mission is to deliver compelling narratives, remarkable experiences,
          and outstanding results for our clients.
        </p>
        <span
          className="inline-flex items-center gap-2 text-[11px] font-semibold rounded-full px-4 py-[5px]"
          style={{
            color: SKY,
            background: "rgba(44,111,212,0.07)",
            border: "1px solid rgba(44,111,212,0.2)",
            letterSpacing: "0.06em",
          }}
        >
          <span className="w-[6px] h-[6px] rounded-full" style={{ background: SKY }} />
          Trusted by industry leaders
        </span>
      </div>
    </div>

    {/* Divider */}
    <div className="mb-12" style={{ height: 1, background: "rgba(15,28,63,0.08)" }} />

    {/* Logo grid */}
    <div
      className={`grid grid-cols-3 rounded-2xl overflow-hidden ${cls("customers")}`}
      style={{
        gap: 1,
        background: "rgba(15,28,63,0.08)",
        border: "1px solid rgba(15,28,63,0.08)",
        transitionDelay: "120ms",
      }}
    >
      {/* Keysight — featured, spans 2 cols */}
      <div
        className="col-span-2 flex flex-col items-center justify-center gap-3 py-11 px-8 relative"
        style={{ background: "#F8FAFF" }}
      >
        <span
          className="absolute top-4 right-4 text-[10px] font-bold tracking-wide uppercase rounded-full px-3 py-[3px]"
          style={{
            color: SKY,
            background: "rgba(44,111,212,0.08)",
            border: "1px solid rgba(44,111,212,0.18)",
            letterSpacing: "0.12em",
          }}
        >
          Industry Partner
        </span>
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-[9px] flex items-center justify-center flex-shrink-0"
            style={{ background: "#dc2626" }}
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M8 2l2 4h4l-3 2.5 1 4L8 10l-4 2.5 1-4L2 6h4l2-4z" fill="white"/>
            </svg>
          </div>
          <span
            className="text-[22px] font-black tracking-tight"
            style={{ fontFamily: "Georgia, serif", color: NAVY }}
          >
            KEYSIGHT
          </span>
        </div>
        <span
          className="text-[10px] font-semibold tracking-[0.22em] uppercase"
          style={{ color: STONE }}
        >
          Technologies
        </span>
      </div>

      {/* Coming soon cells */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center gap-2 py-11"
          style={{ background: "rgba(244,246,251,0.5)" }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center mb-1"
            style={{
              border: "1.5px dashed #D0D5E0",
              color: "#C5CAD6",
              fontSize: 18,
              fontWeight: 300,
            }}
          >
            +
          </div>
          <span
            className="text-[11px] font-semibold tracking-widest uppercase"
            style={{ color: "#C5CAD6" }}
          >
            Coming soon
          </span>
        </div>
      ))}
    </div>

    {/* Footer CTA */}
    <div
      className={`flex items-center justify-between mt-8 ${cls("customers")}`}
      style={{ transitionDelay: "200ms" }}
    >
      <p className="text-xs" style={{ color: "#A0A8B8" }}>
        Interested in partnering with SPINN Labs?
      </p>
      <button
        className="text-xs font-semibold flex items-center gap-1"
        style={{ color: SKY, background: "none", border: "none", cursor: "pointer" }}
      >
        Become a partner →
      </button>
    </div>

  </div>
</section>
    </div>
  );
}