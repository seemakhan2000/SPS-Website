"use client";

import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------------------------------------------------------
   Fonts
--------------------------------------------------------- */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

/* ---------------------------------------------------------
   Scroll-reveal hook + wrapper
--------------------------------------------------------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------
   Inline icons (monoline, currentColor)
--------------------------------------------------------- */
const IconAI = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="10" cy="30" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="38" cy="30" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="24" cy="40" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M24 13.2 12.6 27.5M24 13.2 35.4 27.5M13 32.8 22 38M35 32.8 26 38M13.2 30H34.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const IconCloud = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 33h17a7 7 0 0 0 1-13.9A10 10 0 0 0 14.8 22 6.5 6.5 0 0 0 16 33Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const IconIot = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="16" width="16" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="24" cy="24" r="3.4" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M24 16V9M24 39v-7M16 24H9M39 24h-7M19 19l-4.5-4.5M29 19l4.5-4.5M19 29l-4.5 4.5M29 29l4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 8 12 12.5v10.6C12 32.4 17.2 38.6 24 41c6.8-2.4 12-8.6 12-17.9V12.5L24 8Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M18.5 23.5 22.7 27.8 30 19.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconSpark = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6v8M24 34v8M6 24h8M34 24h8M11.5 11.5l5.6 5.6M30.9 30.9l5.6 5.6M11.5 36.5l5.6-5.6M30.9 17.1l5.6-5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconNav = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6L6 42L24 34L42 42L24 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

/* ---------------------------------------------------------
   Data — content kept faithful to source
--------------------------------------------------------- */
const sigs = [
  { code: "SIG—01", name: "Artificial Intelligence", short: "AI", note: "Models, applied ML research", Icon: IconAI },
  { code: "SIG—02", name: "Cloud", short: "CLOUD", note: "Infrastructure, scalable systems", Icon: IconCloud },
  { code: "SIG—03", name: "IOT", short: "IOT", note: "Connected & embedded devices", Icon: IconIot },
  { code: "SIG—04", name: "Cybersecurity", short: "CYBER", note: "Threat defense, secure design", Icon: IconShield },
];

/* ---------------------------------------------------------
   Hero diagram — compass-dial network connecting
   Academia (hub) to the four SIGs (N / E / S / W)
--------------------------------------------------------- */
function NodeGlyph({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <g stroke="var(--accent)" strokeWidth={1.3} strokeLinecap="round" fill="none">
          <circle cx="0" cy="-8" r="2.2" />
          <circle cx="-6.5" cy="5" r="2.2" />
          <circle cx="6.5" cy="5" r="2.2" />
          <path d="M0 -5.8 L-5 3.3 M0 -5.8 L5 3.3 M-4.3 5 L4.3 5" />
        </g>
      );
    case 1:
      return (
        <g stroke="var(--accent)" strokeWidth={1.3} strokeLinejoin="round" fill="none">
          <path d="M-9 5h15a3.6 3.6 0 0 0 0.6-7.15A5.1 5.1 0 0 0 -6.8 -1.2 3.6 3.6 0 0 0 -9 5Z" />
        </g>
      );
    case 2:
      return (
        <g stroke="var(--accent)" strokeWidth={1.3} fill="none">
          <rect x="-6.5" y="-6.5" width="13" height="13" rx="1.3" />
          <circle cx="0" cy="0" r="1.8" />
        </g>
      );
    default:
      return (
        <g stroke="var(--accent)" strokeWidth={1.3} strokeLinejoin="round" fill="none">
          <path d="M0 -8 L7 -4.8V2.6C7 7.8 3 9.8 0 11 -3 9.8 -7 7.8 -7 2.6V-4.8Z" />
          <path d="M-3 1 L-0.7 3.3 L3.4 -1.6" strokeLinecap="round" />
        </g>
      );
  }
}

function HeroDiagram() {
  const cx = 230;
  const cy = 200;
  const hubR = 46;
  const nodeR = 26;
  const nodeDist = 120;

  function polar(angleDeg: number, r: number) {
    const rad = (angleDeg * Math.PI) / 180;
    const x = cx + r * Math.sin(rad);
    const y = cy - r * Math.cos(rad);
    return { x: Math.round(x * 100) / 100, y: Math.round(y * 100) / 100 };
  }

  const ticks = Array.from({ length: 12 }, (_, i) => i * 30);
  const nodeAngles = [0, 90, 180, 270];

  return (
    <svg
      className="hero-diagram"
      viewBox="0 0 480 420"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram: Academia connected to four SIGs — AI, Cloud, IOT, Cybersecurity"
    >
      <circle cx={cx} cy={cy} r={150} fill="none" stroke="var(--rule)" strokeWidth={1} strokeDasharray="2 6" />

      {ticks.map((a) => {
        const p1 = polar(a, 146);
        const p2 = polar(a, 158);
        return <line key={a} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="var(--rule)" strokeWidth={1} />;
      })}

      {nodeAngles.map((angle, i) => {
        const sig = sigs[i];
        const start = polar(angle, hubR);
        const end = polar(angle, nodeDist - nodeR);
        const node = polar(angle, nodeDist);

        let labelAnchor: "start" | "middle" | "end" = "middle";
        let labelX = node.x;
        let codeY = node.y;
        let nameY = node.y;

        if (angle === 0) {
          codeY = node.y - nodeR - 18;
          nameY = node.y - nodeR - 4;
        } else if (angle === 180) {
          codeY = node.y + nodeR + 18;
          nameY = node.y + nodeR + 32;
        } else if (angle === 90) {
          labelAnchor = "start";
          labelX = node.x + nodeR + 12;
          codeY = node.y - 6;
          nameY = node.y + 10;
        } else {
          labelAnchor = "end";
          labelX = node.x - nodeR - 12;
          codeY = node.y - 6;
          nameY = node.y + 10;
        }

        return (
          <g key={sig.code}>
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="var(--accent)"
              strokeWidth={1.2}
              strokeDasharray="1 5"
              opacity={0.85}
            />
            <circle cx={node.x} cy={node.y} r={nodeR} fill="rgba(52, 152, 219, 0.08)" stroke="var(--accent)" strokeWidth={1.4} />
            <g transform={`translate(${node.x} ${node.y})`}>
              <NodeGlyph index={i} />
            </g>
            <text x={labelX} y={codeY} textAnchor={labelAnchor} className="diagram-code">
              {sig.code}
            </text>
            <text x={labelX} y={nameY} textAnchor={labelAnchor} className="diagram-name">
              {sig.short}
            </text>
          </g>
        );
      })}

      <circle cx={cx} cy={cy} r={hubR} fill="rgba(52, 152, 219, 0.12)" stroke="var(--accent)" strokeWidth={1.6} />
      <path d={`M${cx} ${cy - 35} L${cx - 4} ${cy - 12} L${cx + 4} ${cy - 12} Z`} fill="var(--accent)" />
      <text x={cx} y={cy + 4} textAnchor="middle" className="diagram-hub-number">
        04
      </text>
      <text x={cx} y={cy + 20} textAnchor="middle" className="diagram-hub-caption">
        ACTIVE SIGS
      </text>
    </svg>
  );
}



/* ---------------------------------------------------------
   Page
--------------------------------------------------------- */
export default function Academia() {
  return (
    <main className={`${fraunces.variable} ${inter.variable} ${mono.variable} page`}>
    
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-dotgrid" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-top">
              <span className="eyebrow">SPINNLABS — ACADEMIC OUTREACH</span>
              <div className="stamp" aria-hidden="true">
                <span>FIELD
                  <br />
                  NOTES
                </span>
              </div>
            </div>

            <h1 className="hero-title">Academia</h1>

            <p className="hero-lede">
              The Academic Outreach Program at SpinnLabs is focused on introducing the
              faculty and students to the technologies and opportunities that exist in
              industry today.
            </p>

            <div className="hero-meta">
              <span className="meta-item">
                <strong>04</strong>&nbsp;active SIGs
              </span>
              <span className="meta-divider" aria-hidden="true" />
              <span className="meta-item">Faculty + student tracks</span>
            </div>

            <div className="hero-actions">
              <button className="btn-primary">Explore Programs</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <HeroDiagram />
          </div>
        </div>
      </section>

      {/* ---------- PROGRAM / SIGs ---------- */}
      <section className="program">
        <div className="program-inner">
          <Reveal className="program-copy-wrap">
            <span className="section-tag">01 — The Program</span>
            <p className="program-copy">
              The Academic Outreach Program at SpinnLabs is focused on introducing the
              faculty and students to the technologies and opportunities that exist in
              the industry so they can understand the challenges and solve them
              resulting in innovation, entrepreneurship, and startups. We have four
              technology Special Interest Groups (SIGs) to facilitate this process.
            </p>
          </Reveal>

          <div className="sig-grid">
            {sigs.map((s, i) => {
              const Icon = s.Icon;
              return (
                <Reveal key={s.code} delay={i * 90}>
                  <article className="sig-card">
                    <span className="sig-eyelet" aria-hidden="true" />
                    <span className="sig-tab">{s.code}</span>
                    <div className="sig-icon">
                      <Icon />
                    </div>
                    <h3>{s.name}</h3>
                    <p>{s.note}</p>
                    <div className="sig-hover-line" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- TECH HUB (REDESIGNED) ---------- */}
      <section className="techhub">
        <div className="techhub-inner">
          <Reveal className="techhub-header">
            <div className="techhub-headline">
              <span className="section-tag techhub-tag">03 — Innovation Hub</span>
              <h2>Tech Hub for innovators and entrepreneurs</h2>
              <p>
                A dedicated space where ideas transform into reality. We provide
                the tools, mentorship, and community needed to build the next
                generation of technology startups.
              </p>
            </div>
          </Reveal>

          <div className="techhub-features">
            <Reveal delay={80}>
              <div className="feature-card">
                <div className="feature-icon">
                  <IconSpark />
                </div>
                <h4>Mentorship</h4>
                <p>Expert guidance from industry leaders and successful entrepreneurs</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="feature-card">
                <div className="feature-icon">
                  <IconAI />
                </div>
                <h4>Resources</h4>
                <p>Access to cutting-edge tools, labs, and research facilities</p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="feature-card">
                <div className="feature-icon">
                  <IconShield />
                </div>
                <h4>Community</h4>
                <p>Connect with like-minded innovators and potential collaborators</p>
              </div>
            </Reveal>
          </div>

         
        </div>
      </section>

      {/* ---------- CUSTOMERS ---------- */}
      <section className="customers">
        <div className="customers-inner">
          <Reveal className="customers-head">
            <span className="section-tag">02 — Partners</span>
            <h2>Customers we are proud to work with.</h2>
            <p>
              Our mission is to deliver compelling narratives, remarkable experiences,
              and outstanding results for our clients.
            </p>
          </Reveal>

          <div className="partners-grid">
            <Reveal delay={80}>
              <div className="customer-plate">
                <span className="plate-mark">K</span>
                <span className="plate-name">
                  K-ELECTRIC
                  <small>Power utility partner</small>
                </span>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="customer-plate">
                <span className="plate-mark">T</span>
                <span className="plate-name">
                  TECH CORP
                  <small>Innovation partner</small>
                </span>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="customer-plate">
                <span className="plate-mark">G</span>
                <span className="plate-name">
                  GLOBAL SOLUTIONS
                  <small>Strategic partner</small>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        .page {
          --bg-base: #0D1B2A;
          --bg-base-2: #1B2D45;
          --surface: #F4F7FA;
          --surface-2: #E8EEF4;
          --ink: #0D1B2A;
          --ink-soft: #3D4F63;
          --light: #F4F7FA;
          --light-soft: #A0B8CC;
          --accent: #3498DB;
          --accent-dark: #2471A3;
          --accent-light: #85C1E9;
          --navy: #1A365D;
          --navy-light: #2A4A7F;
          --rule: rgba(255, 255, 255, 0.10);
          --rule-paper: rgba(13, 27, 42, 0.08);

          font-family: var(--font-body), system-ui, sans-serif;
          color: var(--ink);
          background: var(--surface);
          overflow-x: hidden;
        }

        .page :global(*:focus-visible) {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }

        /* ---------------- reveal ---------------- */
        .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-visible {
          opacity: 1;
          transform: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal {
            transition: none;
            opacity: 1;
            transform: none;
          }
        }

       
        
        
        /* ---------------- hero ---------------- */
        .hero {
          position: relative;
          background:#0F1C3F;
          color: var(--light);
          padding: 88px 24px 96px;
          isolation: isolate;
        }
        .hero-dotgrid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(52, 152, 219, 0.12) 1px, transparent 1px);
          background-size: 22px 22px;
          mask-image: linear-gradient(to bottom, black, transparent 85%);
          z-index: 0;
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .hero-content {
          flex: 1 1 480px;
          min-width: 0;
        }
        .hero-visual {
          flex: 1 1 420px;
          max-width: 460px;
        }
        :global(.hero-diagram) {
          width: 100%;
          height: auto;
          display: block;
        }
        :global(.hero-diagram .diagram-code) {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          fill: #C8D6E5;
          opacity: 0.9;
        }
        :global(.hero-diagram .diagram-name) {
          font-family: var(--font-body), sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.03em;
          fill: #C8D6E5;
        }
        :global(.hero-diagram .diagram-hub-number) {
          font-family: var(--font-display), serif;
          font-size: 30px;
          font-weight: 700;
          fill: #C8D6E5;
        }
        :global(.hero-diagram .diagram-hub-caption) {
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
          fill: #C8D6E5;
          opacity: 0.75;
        }
        @media (max-width: 900px) {
          .hero-inner {
            flex-direction: column;
            align-items: stretch;
            gap: 48px;
          }
          .hero-visual {
            max-width: 340px;
            margin: 0 auto;
          }
        }
        .hero-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 36px;
        }
        .eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          letter-spacing: 0.16em;
          color: var(--accent);
          text-transform: uppercase;
        }
        .stamp {
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          border: 1.5px dashed rgba(52, 152, 219, 0.6);
          border-radius: 50%;
          display: grid;
          place-items: center;
          transform: rotate(-9deg);
          color: var(--accent);
          font-family: var(--font-mono), monospace;
          font-size: 9.5px;
          letter-spacing: 0.08em;
          text-align: center;
          line-height: 1.3;
        }
        .hero-title {
          font-family: var(--font-display), serif;
          font-weight: 600;
          font-size: clamp(34px, 4.5vw, 52px);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 0 0 18px;
        }
        .hero-lede {
          font-size: clamp(16px, 2vw, 19px);
          line-height: 1.6;
          color: var(--light-soft);
          max-width: 600px;
          margin: 0 0 34px;
        }
        .hero-meta {
          display: flex;
          align-items: center;
          gap: 18px;
          font-family: var(--font-mono), monospace;
          font-size: 12.5px;
          color: var(--light-soft);
          letter-spacing: 0.02em;
          margin-bottom: 36px;
        }
        .meta-item strong {
          color: var(--light);
        }
        .meta-divider {
          width: 1px;
          height: 14px;
          background: var(--rule);
        }
        .hero-actions {
          display: flex;
          gap: 16px;
        }
        .btn-primary {
          background: var(--accent);
          color: var(--bg-base);
          border: none;
          padding: 12px 32px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-primary:hover {
          background: var(--accent-dark);
          color: var(--light);
          transform: translateY(-2px);
        }
        .btn-secondary {
          background: transparent;
          color: var(--light);
          border: 1px solid var(--rule);
          padding: 12px 32px;
          font-size: 14px;
          font-weight: 500;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-secondary:hover {
          background: rgba(52, 152, 219, 0.1);
          border-color: var(--accent);
        }

        /* ---------------- program ---------------- */
        .program {
          background: var(--surface);
          padding: 96px 24px;
        }
        .program-inner {
          max-width: 1020px;
          margin: 0 auto;
        }
        .section-tag {
          display: inline-block;
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 14px;
        }
        .program-copy-wrap {
          max-width: 700px;
          margin-bottom: 56px;
        }
        .program-copy {
          font-size: clamp(17px, 1.7vw, 20px);
          line-height: 1.75;
          color: var(--ink-soft);
          margin: 0;
        }

        .sig-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        @media (max-width: 980px) {
          .sig-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 540px) {
          .sig-grid {
            grid-template-columns: 1fr;
          }
        }

        .sig-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid var(--rule-paper);
          border-radius: 8px;
          padding: 34px 22px 26px;
          box-shadow: 0 2px 4px rgba(13, 27, 42, 0.04);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          overflow: hidden;
        }
        .sig-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(13, 27, 42, 0.10);
        }
        .sig-hover-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .sig-card:hover .sig-hover-line {
          transform: scaleX(1);
        }
        .sig-eyelet {
          position: absolute;
          top: 14px;
          left: 14px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #3498DB, #1A365D 60%, #0D1B2A 100%);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.35);
        }
        .sig-tab {
          position: absolute;
          top: 12px;
          right: 16px;
          font-family: var(--font-mono), monospace;
          font-size: 10.5px;
          letter-spacing: 0.05em;
          color: var(--ink-soft);
        }
        .sig-icon {
          width: 38px;
          height: 38px;
          color: var(--accent);
          margin: 8px 0 18px;
        }
        .sig-icon svg {
          width: 100%;
          height: 100%;
        }
        .sig-card h3 {
          font-family: var(--font-display), serif;
          font-weight: 600;
          font-size: 19px;
          margin: 0 0 6px;
          color: var(--ink);
        }
        .sig-card p {
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--ink-soft);
          margin: 0;
        }

        /* ---------------- tech hub (redesigned) ---------------- */
        .techhub {
          background: #0F1C3F;
          color: var(--light);
          padding: 96px 24px;
        }
        .techhub-inner {
          max-width: 1020px;
          margin: 0 auto;
        }
        .techhub-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .techhub-tag {
          color: var(--accent-light);
        }
        .techhub-headline h2 {
          font-family: var(--font-display), serif;
          font-weight: 600;
          font-size: clamp(28px, 3.5vw, 40px);
          margin: 0 0 16px;
        }
        .techhub-headline p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--light-soft);
          max-width: 620px;
          margin: 0 auto;
        }

        .techhub-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 56px;
        }
        @media (max-width: 760px) {
          .techhub-features {
            grid-template-columns: 1fr;
          }
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 32px 24px;
          text-align: center;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.10);
        }
        .feature-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 16px;
          color: var(--accent-light);
        }
        .feature-icon svg {
          width: 100%;
          height: 100%;
        }
        .feature-card h4 {
          font-family: var(--font-display), serif;
          font-weight: 600;
          font-size: 18px;
          margin: 0 0 8px;
        }
        .feature-card p {
          font-size: 14px;
          line-height: 1.5;
          color: var(--light-soft);
          margin: 0;
        }

        .snapshot-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        @media (max-width: 760px) {
          .snapshot-row {
            grid-template-columns: 1fr;
          }
        }
        .snapshot {
          margin: 0;
        }
        .snapshot-art {
          position: relative;
          height: 190px;
          border-radius: 8px;
          border: 1px solid var(--rule);
          background: linear-gradient(160deg, #1A365D, #0D1B2A);
          overflow: hidden;
        }
        .snapshot-art span {
          position: absolute;
          border-radius: 50%;
          background: var(--accent-light);
          opacity: 0.85;
        }
        .variant-0 span:nth-child(1) { width: 46px; height: 46px; top: 30px; left: 30px; }
        .variant-0 span:nth-child(2) { width: 46px; height: 46px; top: 30px; left: 86px; background: var(--accent); }
        .variant-0 span:nth-child(3) { width: 46px; height: 46px; top: 30px; left: 142px; background: var(--accent-dark); }

        .variant-1 span { border-radius: 4px; }
        .variant-1 span:nth-child(1) { width: 64px; height: 14px; top: 40px; left: 28px; }
        .variant-1 span:nth-child(2) { width: 100px; height: 14px; top: 64px; left: 28px; background: var(--accent); opacity: 0.7; }
        .variant-1 span:nth-child(3) { width: 80px; height: 14px; top: 88px; left: 28px; }

        .variant-2 span:nth-child(1) { width: 10px; height: 10px; top: 36px; left: 36px; }
        .variant-2 span:nth-child(2) { width: 10px; height: 10px; top: 36px; left: 64px; background: var(--accent); }
        .variant-2 span:nth-child(3) { width: 10px; height: 10px; top: 36px; left: 92px; background: var(--accent-dark); }

        .snapshot figcaption {
          margin-top: 12px;
          font-size: 13.5px;
          color: var(--light-soft);
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
        .snap-tag {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--accent-light);
        }

        /* ---------------- customers ---------------- */
        .customers {
          background: var(--surface-2);
          padding: 100px 24px;
          text-align: center;
        }
        .customers-inner {
          max-width: 720px;
          margin: 0 auto;
        }
        .customers-head h2 {
          font-family: var(--font-display), serif;
          font-weight: 600;
          font-size: clamp(26px, 3.4vw, 38px);
          margin: 0 0 14px;
        }
        .customers-head p {
          color: var(--ink-soft);
          font-size: 15.5px;
          line-height: 1.6;
          margin: 0 0 50px;
        }
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 760px) {
          .partners-grid {
            grid-template-columns: 1fr;
          }
        }
        .customer-plate {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #FFFFFF;
          border: 1px solid var(--rule-paper);
          border-radius: 8px;
          padding: 22px 24px;
          box-shadow: 0 2px 4px rgba(13, 27, 42, 0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .customer-plate:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(13, 27, 42, 0.10);
        }
        .plate-mark {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-base);
          color: var(--accent);
          font-family: var(--font-display), serif;
          font-weight: 700;
          display: grid;
          place-items: center;
          font-size: 18px;
        }
        .plate-name {
          display: flex;
          flex-direction: column;
          text-align: left;
          font-weight: 600;
          font-size: 15px;
          color: var(--ink);
        }
        .plate-name small {
          font-weight: 400;
          font-size: 12px;
          color: var(--ink-soft);
          margin-top: 2px;
        }

        /* ---------------- footer ---------------- */
        .footer {
          background: var(--bg-base);
          color: var(--light-soft);
          padding: 48px 24px;
          border-top: 1px solid var(--rule);
        }
        .footer-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--light);
          font-weight: 600;
          font-size: 16px;
        }
        .footer-brand svg {
          width: 24px;
          height: 24px;
          color: var(--accent);
        }
        .footer-links {
          display: flex;
          gap: 24px;
        }
        .footer-links a {
          color: var(--light-soft);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s ease;
        }
        .footer-links a:hover {
          color: var(--light);
        }
        .footer-copy {
          font-size: 12px;
        }
        @media (max-width: 640px) {
          .footer-inner {
            flex-direction: column;
            text-align: center;
          }
          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}