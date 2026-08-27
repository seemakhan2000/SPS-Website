"use client";

import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

type Vertical = {
  code: string;
  name: string;
  status: "LIVE" | "FORMING";
  href?: string;
};

const verticals: Vertical[] = [
  { code: "SIG-01", name: "Innovation in Oil and Gas", status: "LIVE", href: "#" },
  { code: "SIG-02", name: "Securing the Electric Grid", status: "LIVE", href: "#" },
  { code: "SIG-03", name: "Innovation in Textile", status: "FORMING" },
  { code: "SIG-04", name: "Banking", status: "FORMING" },
  { code: "SIG-05", name: "Metaverse", status: "FORMING" },
];

const galleryPanels = [
  {
    label: "Recognition",
    caption: "Certificates awarded to founders completing the program.",
    icon: "ribbon",
  },
  {
    label: "Roundtable",
    caption: "Industry leaders and SpinnLabs teams aligning on priorities.",
    icon: "table",
  },
  {
    label: "Build session",
    caption: "Hands-on working sessions inside the lab.",
    icon: "laptop",
  },
] as const;

export default function Industry() {
  return (
    <main className={`page ${display.variable} ${body.variable} ${mono.variable}`}>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__text">
            <span className="hero__badge">Outreach Program</span>
            <h1>Industry</h1>
            <p>
              The Industry Outreach Program at SpinnLabs is focused on understanding
              the challenges and opportunities faced by the industry and help solve
              them resulting in innovation, entrepreneurship and startups.
            </p>
            <div className="hero__stats">
              <div className="stat">
                <span className="stat__number">5</span>
                <span className="stat__label">Verticals</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat__number">3</span>
                <span className="stat__label">Live SIGs</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat__number">2</span>
                <span className="stat__label">Forming</span>
              </div>
            </div>
          </div>

          <div className="hero__diagram">
            <HubDiagram />
          </div>
        </div>
      </section>

      {/* ───────────────────────── VERTICALS ───────────────────────── */}
      <section className="verticals">
        <div className="verticals__head">
          <span className="eyebrow eyebrow--dark">Special interest groups</span>
          <p className="verticals__lede">
            We are currently leading Special Interest Groups in the following
            verticals.
          </p>
        </div>

        <div className="verticals__grid">
          {/* Top row - 3 cards */}
          <div className="verticals__row">
            {verticals.slice(0, 3).map((v) => {
              const Tag = v.href ? "a" : "div";
              return (
                <Tag
                  key={v.code}
                  {...(v.href ? { href: v.href } : {})}
                  className={`vertical-card ${v.href ? "is-linked" : ""} ${v.status === "LIVE" ? "vertical-card--live" : "vertical-card--forming"}`}
                >
                  <div className="vertical-card__header">
                    <span className="vertical-card__code">{v.code}</span>
                    <span className={`vertical-card__status vertical-card__status--${v.status.toLowerCase()}`}>
                      {v.status}
                    </span>
                  </div>
                  <h3 className="vertical-card__name">{v.name}</h3>
                  {v.href && (
                    <span className="vertical-card__arrow" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  )}
                  {!v.href && (
                    <span className="vertical-card__dot" aria-hidden="true">•</span>
                  )}
                </Tag>
              );
            })}
          </div>

          {/* Bottom row - 2 cards with same width as top cards */}
          <div className="verticals__row verticals__row--bottom">
            {verticals.slice(3, 5).map((v) => {
              const Tag = v.href ? "a" : "div";
              return (
                <Tag
                  key={v.code}
                  {...(v.href ? { href: v.href } : {})}
                  className={`vertical-card ${v.href ? "is-linked" : ""} ${v.status === "LIVE" ? "vertical-card--live" : "vertical-card--forming"}`}
                >
                  <div className="vertical-card__header">
                    <span className="vertical-card__code">{v.code}</span>
                    <span className={`vertical-card__status vertical-card__status--${v.status.toLowerCase()}`}>
                      {v.status}
                    </span>
                  </div>
                  <h3 className="vertical-card__name">{v.name}</h3>
                  {v.href && (
                    <span className="vertical-card__arrow" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  )}
                  {!v.href && (
                    <span className="vertical-card__dot" aria-hidden="true">•</span>
                  )}
                </Tag>
              );
            })}
            {/* Empty divs to maintain grid with 3 columns and same width */}
            <div className="vertical-card-placeholder" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── TECH HUB ───────────────────────── */}
      <section className="techhub">
        <div className="techhub__intro">
          <div className="techhub__icon" aria-hidden="true">
            <NetworkIcon />
          </div>
          <h2>Tech Hub for innovators and entrepreneurs</h2>
        </div>

        <div className="techhub__gallery">
          {galleryPanels.map((p) => (
            <figure className="panel" key={p.label}>
              <div className="panel__icon" aria-hidden="true">
                <PanelIcon kind={p.icon} />
              </div>
              <figcaption>
                <span className="panel__label">{p.label}</span>
                <span className="panel__caption">{p.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <style jsx>{`
        :global(:root) {
          --ink: #0b1a2e;
          --ink-2: #0f2440;
          --parchment: #f5f7fa;
          --navy: #1a4972;
          --navy-light: #2d6da8;
          --navy-soft: rgba(26, 73, 114, 0.08);
          --navy-hover: rgba(26, 73, 114, 0.04);
          --teal: #3a8f8f;
          --teal-soft: rgba(58, 143, 143, 0.08);
          --steel: #5b6a7e;
          --line-on-dark: rgba(245, 247, 250, 0.10);
          --line-on-light: rgba(11, 26, 46, 0.06);
          --ink-text: #1a2636;
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.04);
          --shadow-hover: 0 8px 24px rgba(11, 26, 46, 0.08);
        }

        .page {
          --font-d: var(--font-display);
          --font-b: var(--font-body);
          --font-m: var(--font-mono);
          font-family: var(--font-b), sans-serif;
          color: var(--ink-text);
          background: var(--parchment);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-m), monospace;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--navy-light);
          font-weight: 500;
        }
        .eyebrow::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--navy-light);
          opacity: 0.7;
        }
        .eyebrow--dark {
          color: var(--steel);
        }
        .eyebrow--dark::before {
          background: var(--teal);
        }

        /* ───────────── HERO ───────────── */
        .hero {
          position: relative;
          background: #0F1C3F;
          color: var(--parchment);
          overflow: hidden;
          padding: clamp(1.8rem, 3vw, 2.8rem) clamp(1.5rem, 5vw, 4rem);
        }
        .hero__grid {
          position: absolute;
          inset: 0;
          background-image: 
            repeating-linear-gradient(
              0deg,
              var(--line-on-dark) 0px,
              var(--line-on-dark) 1px,
              transparent 1px,
              transparent 64px
            ),
            repeating-linear-gradient(
              90deg,
              var(--line-on-dark) 0px,
              var(--line-on-dark) 1px,
              transparent 1px,
              transparent 64px
            );
          mask-image: radial-gradient(ellipse 60% 70% at 30% 40%, black 20%, transparent 70%);
          opacity: 0.4;
        }
        .hero__inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: center;
        }
        .hero__badge {
          display: inline-block;
          font-family: var(--font-m), monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(245, 247, 250, 0.5);
          background: rgba(245, 247, 250, 0.06);
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          border: 1px solid var(--line-on-dark);
        }
        .hero__text h1 {
          font-family: var(--font-d), sans-serif;
          font-weight: 700;
          font-size: clamp(2.8rem, 6vw, 4.2rem);
          line-height: 0.95;
          margin: 0.2rem 0 0.6rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff 60%, rgba(255,255,255,0.7));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero__text p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(245, 247, 250, 0.7);
          max-width: 34rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
        }
        .hero__stats {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 0.5rem;
        }
        .stat {
          display: flex;
          flex-direction: column;
        }
        .stat__number {
          font-family: var(--font-d), sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 1;
          color: white;
          letter-spacing: -0.02em;
        }
        .stat__label {
          font-size: 0.7rem;
          color: rgba(245, 247, 250, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 0.15rem;
        }
        .stat-divider {
          width: 1px;
          height: 2rem;
          background: var(--line-on-dark);
        }
        .hero__diagram {
          display: flex;
          justify-content: center;
        }
        .hero__diagram svg {
          width: 100%;
          max-width: 320px;
          height: auto;
        }

        @media (max-width: 860px) {
          .hero__inner {
            grid-template-columns: 1fr;
          }
          .hero__diagram {
            order: -1;
            margin-bottom: 0.5rem;
          }
          .hero__diagram svg {
            max-width: 180px;
          }
          .hero__stats {
            gap: 0.75rem;
          }
          .stat__number {
            font-size: 1.2rem;
          }
        }

        /* ───────────── VERTICALS (CARD DESIGN - SAME SIZE) ───────────── */
        .verticals {
          background: var(--parchment);
          padding: clamp(3.5rem, 7vw, 5.5rem) clamp(1.5rem, 5vw, 4rem);
        }
        .verticals__head {
          max-width: 1180px;
          margin: 0 auto 3rem;
        }
        .verticals__lede {
          font-size: 1.05rem;
          margin: 0.7rem 0 0;
          color: var(--ink-text);
          max-width: 36rem;
          opacity: 0.8;
        }

        .verticals__grid {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .verticals__row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .verticals__row--bottom {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .vertical-card {
          background: white;
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid var(--line-on-light);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          position: relative;
          box-shadow: var(--shadow-sm);
          min-height: 160px;
          height: 100%;
          width: 100%;
        }

        .vertical-card-placeholder {
          visibility: hidden;
          min-height: 160px;
          height: 100%;
          width: 100%;
        }

        .vertical-card--live {
          border-left: 4px solid var(--navy-light);
        }

        .vertical-card--forming {
          border-left: 4px solid var(--teal);
          opacity: 0.7;
        }

        .vertical-card.is-linked {
          cursor: pointer;
        }

        .vertical-card.is-linked:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: var(--navy-light);
          opacity: 1;
        }

        .vertical-card.is-linked:focus-visible {
          outline: 2px solid var(--navy-light);
          outline-offset: 2px;
        }

        .vertical-card__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .vertical-card__code {
          font-family: var(--font-m), monospace;
          font-size: 0.7rem;
          color: var(--steel);
          letter-spacing: 0.08em;
          font-weight: 500;
        }

        .vertical-card__status {
          font-family: var(--font-m), monospace;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .vertical-card__status--live {
          background: var(--navy-soft);
          color: var(--navy-light);
        }

        .vertical-card__status--forming {
          background: var(--teal-soft);
          color: var(--teal);
        }

        .vertical-card__name {
          font-family: var(--font-d), sans-serif;
          font-weight: 500;
          font-size: 1.1rem;
          margin: 0;
          line-height: 1.3;
          flex: 1;
        }

        .vertical-card__arrow {
          color: var(--navy-light);
          align-self: flex-end;
          margin-top: 0.25rem;
          opacity: 0;
          transition: opacity 0.25s ease, transform 0.25s ease;
          transform: translateX(-4px);
        }

        .vertical-card.is-linked:hover .vertical-card__arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .vertical-card__dot {
          color: var(--steel);
          align-self: flex-end;
          font-size: 1.2rem;
          opacity: 0.4;
        }

        @media (max-width: 1024px) {
          .verticals__row {
            grid-template-columns: repeat(2, 1fr);
          }
          .verticals__row--bottom {
            grid-template-columns: repeat(2, 1fr);
          }
          .vertical-card-placeholder {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .verticals__row {
            grid-template-columns: 1fr;
          }
          .verticals__row--bottom {
            grid-template-columns: 1fr;
          }
          .vertical-card {
            padding: 1.25rem;
            min-height: 140px;
          }
          .vertical-card-placeholder {
            display: none;
          }
        }

        /* ───────────── TECH HUB ───────────── */
        .techhub {
          background: #0F1C3F;
          color: var(--parchment);
          padding: clamp(3.5rem, 7vw, 5.5rem) clamp(1.5rem, 5vw, 4rem);
        }
        .techhub__intro {
          max-width: 1180px;
          margin: 0 auto 2.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .techhub__icon {
          flex: none;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: var(--ink);
          border: 1px solid var(--line-on-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s ease;
        }
        .techhub__icon:hover {
          border-color: var(--navy-light);
        }
        .techhub__icon svg {
          width: 28px;
          height: 28px;
        }
        .techhub__intro h2 {
          font-family: var(--font-d), sans-serif;
          font-weight: 700;
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .techhub__gallery {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .panel {
          margin: 0;
          background: var(--ink);
          border: 1px solid var(--line-on-dark);
          border-radius: 18px;
          padding: 1.6rem;
          transition: border-color 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .panel:hover {
          border-color: var(--navy-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .panel__icon {
          width: 44px;
          height: 44px;
          margin-bottom: 1.2rem;
        }
        .panel__icon svg {
          width: 100%;
          height: 100%;
        }
        .panel figcaption {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .panel__label {
          font-family: var(--font-d), sans-serif;
          font-weight: 500;
          font-size: 1.05rem;
        }
        .panel__caption {
          font-size: 0.88rem;
          color: rgba(245, 247, 250, 0.6);
          line-height: 1.5;
        }

        @media (max-width: 860px) {
          .techhub__gallery {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vertical-card,
          .panel,
          .techhub__icon {
            transition: none !important;
          }
          .vertical-card.is-linked:hover {
            transform: none !important;
          }
          .panel:hover {
            transform: none !important;
          }
        }
      `}</style>
    </main>
  );
}

/* ───────────────────────── inline graphics ───────────────────────── */

function HubDiagram() {
  const nodes: { x: number; y: number; live: boolean }[] = [
    { x: 200, y: 60, live: true },
    { x: 340, y: 160, live: true },
    { x: 280, y: 320, live: false },
    { x: 120, y: 320, live: false },
    { x: 60, y: 160, live: false },
  ];

  return (
    <svg viewBox="0 0 400 400" fill="none" role="img" aria-label="Diagram of SpinnLabs as a hub connecting five industry verticals">
      <circle cx="200" cy="200" r="140" stroke="rgba(245,247,250,0.10)" strokeDasharray="2 8" />
      {nodes.map((n, i) => (
        <line
          key={i}
          x1="200"
          y1="200"
          x2={n.x}
          y2={n.y}
          stroke={n.live ? "#2d6da8" : "rgba(245,247,250,0.20)"}
          strokeWidth="1.5"
          strokeDasharray={n.live ? "none" : "4 4"}
          opacity={n.live ? 0.8 : 0.4}
        />
      ))}
      <circle cx="200" cy="200" r="32" fill="#0f2440" stroke="#2d6da8" strokeWidth="2" />
      <circle cx="200" cy="200" r="28" fill="none" stroke="rgba(45,109,168,0.2)" strokeWidth="1" />
      <text x="200" y="206" textAnchor="middle" fontSize="11" fontFamily="var(--font-m), monospace" fill="#F5F7FA" fontWeight="500" letterSpacing="0.04em">
        SL
      </text>
      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x}
            cy={n.y}
            r="10"
            fill={n.live ? "#1a4972" : "#0f2440"}
            stroke={n.live ? "#2d6da8" : "#3a8f8f"}
            strokeWidth="1.8"
          />
          <circle
            cx={n.x}
            cy={n.y}
            r="5"
            fill={n.live ? "#2d6da8" : "none"}
            opacity={n.live ? 0.6 : 0}
          />
        </g>
      ))}
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="9" r="4" stroke="#2d6da8" strokeWidth="1.6" />
      <circle cx="7" cy="24" r="4" stroke="#3a8f8f" strokeWidth="1.6" />
      <circle cx="25" cy="24" r="4" stroke="#3a8f8f" strokeWidth="1.6" />
      <path d="M13.5 12.2L9 20.6M18.5 12.2L23 20.6M11 24H21" stroke="#F5F7FA" strokeWidth="1.3" strokeOpacity="0.4" />
      <circle cx="16" cy="9" r="1.5" fill="#2d6da8" opacity="0.5" />
    </svg>
  );
}

function PanelIcon({ kind }: { kind: "ribbon" | "table" | "laptop" }) {
  if (kind === "ribbon") {
    return (
      <svg viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="16" r="10" stroke="#2d6da8" strokeWidth="1.8" />
        <path d="M16 24L13 38L22 33L31 38L28 24" stroke="#2d6da8" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M17.5 16L20.5 19L26.5 12.5" stroke="#3a8f8f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "table") {
    return (
      <svg viewBox="0 0 44 44" fill="none">
        <ellipse cx="22" cy="22" rx="14" ry="9" stroke="#2d6da8" strokeWidth="1.8" />
        <circle cx="22" cy="8" r="2.6" fill="#3a8f8f" />
        <circle cx="8" cy="22" r="2.6" fill="#3a8f8f" />
        <circle cx="36" cy="22" r="2.6" fill="#3a8f8f" />
        <circle cx="14" cy="34" r="2.6" fill="#3a8f8f" />
        <circle cx="30" cy="34" r="2.6" fill="#3a8f8f" />
        <ellipse cx="22" cy="22" rx="10" ry="6" stroke="rgba(45,109,168,0.15)" strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 44 44" fill="none">
      <rect x="9" y="11" width="26" height="17" rx="1.6" stroke="#2d6da8" strokeWidth="1.8" />
      <path d="M14 33H30" stroke="#2d6da8" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 16H20M14 20H24" stroke="#3a8f8f" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="27" cy="22" r="3" stroke="#3a8f8f" strokeWidth="1.6" />
      <rect x="9" y="11" width="26" height="17" rx="1.6" stroke="rgba(45,109,168,0.08)" strokeWidth="1" />
    </svg>
  );
}