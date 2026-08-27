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

export default function CentersOfExpertisePage() {
  return (
    <main className={`page ${display.variable} ${body.variable} ${mono.variable}`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__inner">
          {/* Left: Text */}
          <div className="hero__text">
           
            <h1>Welcome to our Global Centers of Expertise</h1>
            <p>
              At SPS, we believe in the power of collaboration, innovation, and collective expertise. We are thrilled to
              invite you to join our distinguished Center of Expertise — a fraternity of subject matter experts dedicated
              to advancing knowledge, fostering collaboration, and shaping the future of technology.
            </p>
            <a href="#join" className="hero__cta">
              Join Us
            </a>
          </div>

          {/* Right: Network Diagram */}
          <div className="hero__diagram">
            <HubDiagram />
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="features">
        <div className="features__inner">
          <h2 className="features__title">What Sets Us Apart</h2>

          <div className="features__grid">
            {[
              {
                title: "Dynamic Community of Experts",
                desc: "Immerse yourself in a vibrant community of professionals who excel in their respective fields. Connect with like-minded experts who share your passion and commitment to pushing the boundaries of knowledge.",
                icon: "👥",
              },
              {
                title: "Collaborative Knowledge Exchange",
                desc: "Our Center of Expertise provides a platform for open dialogue and knowledge exchange. Engage in thought-provoking discussions, share insights, and collaborate on innovative solutions to industry challenges.",
                icon: "💡",
              },
              {
                title: "Access to Exclusive Resources",
                desc: "Stay ahead of the curve with privileged access to cutting-edge research, industry reports, and curated content. Our members enjoy a wealth of resources designed to keep them informed and at the forefront of their expertise.",
                icon: "📚",
              },
              {
                title: "Influence Industry Trends",
                desc: "Be a key player in shaping the future of information technology. Contribute your expertise to discussions, workshops, and events that influence industry best practices and set new standards.",
                icon: "📈",
              },
              {
                title: "Professional Development Opportunities",
                desc: "Elevate your skills and knowledge through specialized workshops, training sessions, and events tailored to the evolving needs of our dynamic industry.",
                icon: "🎓",
              },
            ].map((item, i) => (
              <div key={i} className="feature-card">
                <div className="feature-card__icon">{item.icon}</div>
                <h3 className="feature-card__title">{item.title}</h3>
                <p className="feature-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section id="join" className="join">
        <div className="join__inner">
          <h2 className="join__title">How to Join</h2>
          <p className="join__text">
            Becoming a part of our Center of Expertise is a simple step towards a more enriching professional journey.{" "}
            <a href="#" className="join__link">Click Here</a>{" "}
            to register and unlock a world of opportunities, connections, and insights.
          </p>
          <p className="join__text">
            Join our Global Centers of Expertise today and be a driving force in the evolution of information
            technology. Together, let's redefine excellence!
          </p>
          <a href="#" className="join__cta">Register Now →</a>
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
          --teal: #3a8f8f;
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

        /* ───────────── HERO ───────────── */
        .hero {
          position: relative;
          background: #0F1C3F;
          color: var(--parchment);
          overflow: hidden;
          padding: clamp(3.5rem, 6vw, 5.5rem) clamp(1.5rem, 5vw, 4rem);
          min-height: 85vh;
          display: flex;
          align-items: center;
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
          gap: clamp(2rem, 6vw, 4rem);
          align-items: center;
          width: 100%;
        }
        .hero__text h1 {
          font-family: var(--font-d), sans-serif;
          font-weight: 700;
          font-size: clamp(2.8rem, 6vw, 4.2rem);
          line-height: 1.1;
          margin: 0.4rem 0 0.8rem;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .hero__text p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(245, 247, 250, 0.7);
          max-width: 34rem;
          font-weight: 400;
        }
        .hero__cta {
          display: inline-block;
          margin-top: 0.5rem;
          background: var(--navy-light);
          color: #fff;
          padding: 13px 32px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.5px;
          transition: background 0.2s, transform 0.2s;
          font-family: var(--font-b), sans-serif;
        }
        .hero__cta:hover {
          background: #3a7ec4;
          transform: translateY(-2px);
        }
        .hero__diagram {
          display: flex;
          justify-content: center;
        }
        .hero__diagram svg {
          width: 100%;
          max-width: 420px;
          height: auto;
        }

        @media (max-width: 860px) {
          .hero {
            min-height: auto;
            padding: clamp(3rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem);
          }
          .hero__inner {
            grid-template-columns: 1fr;
          }
          .hero__diagram {
            order: -1;
          }
          .hero__diagram svg {
            max-width: 300px;
          }
        }

        /* ───────────── FEATURES ───────────── */
        .features {
          background: var(--parchment);
          padding: clamp(3.5rem, 7vw, 5.5rem) clamp(1.5rem, 5vw, 4rem);
        }
        .features__inner {
          max-width: 1180px;
          margin: 0 auto;
        }
        .features__title {
          font-family: var(--font-d), sans-serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          color: var(--ink);
          margin-bottom: 2.5rem;
          border-left: 4px solid var(--navy-light);
          padding-left: 16px;
        }
        .features__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .feature-card {
          background: white;
          border-radius: 16px;
          padding: 28px 24px;
          border-top: 4px solid var(--navy-light);
          box-shadow: var(--shadow-sm);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }
        .feature-card__icon {
          font-size: 28px;
          margin-bottom: 12px;
        }
        .feature-card__title {
          font-family: var(--font-d), sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: var(--ink);
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .feature-card__desc {
          color: var(--steel);
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        /* ───────────── JOIN ───────────── */
        .join {
          background: var(--ink-2);
          color: var(--parchment);
          padding: clamp(3.5rem, 7vw, 5rem) clamp(1.5rem, 5vw, 4rem);
        }
        .join__inner {
          max-width: 820px;
          margin: 0 auto;
        }
        .join__title {
          font-family: var(--font-d), sans-serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          margin-bottom: 1.5rem;
          border-left: 4px solid var(--navy-light);
          padding-left: 16px;
        }
        .join__text {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(245, 247, 250, 0.75);
          margin: 0 0 16px;
        }
        .join__link {
          color: var(--navy-light);
          font-weight: 700;
          text-decoration: underline;
        }
        .join__link:hover {
          color: #4a90e2;
        }
        .join__cta {
          display: inline-block;
          margin-top: 20px;
          background: var(--navy-light);
          color: #fff;
          padding: 13px 36px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.4px;
          transition: background 0.2s, transform 0.2s;
        }
        .join__cta:hover {
          background:#0F1C3F;
          transform: translateY(-2px);
        }

        /* ───────────── BUSINESS GROUPS ───────────── */
        .business-groups {
          background: var(--ink);
          padding: 30px clamp(1.5rem, 5vw, 4rem);
          border-top: 1px solid var(--line-on-dark);
        }
        .business-groups__inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .business-groups__label {
          color: var(--navy-light);
          font-weight: 700;
          font-size: 14px;
          margin-right: 8px;
          font-family: var(--font-d), sans-serif;
        }
        .business-groups__tag {
          background: rgba(26, 73, 114, 0.3);
          color: rgba(245, 247, 250, 0.7);
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          border: 1px solid rgba(45, 109, 168, 0.2);
          transition: all 0.2s ease;
          font-family: var(--font-m), monospace;
        }
        .business-groups__tag:hover {
          background: rgba(26, 73, 114, 0.5);
          color: #fff;
          border-color: var(--navy-light);
        }

        @media (max-width: 640px) {
          .features__grid {
            grid-template-columns: 1fr;
          }
          .business-groups__inner {
            gap: 8px;
          }
          .business-groups__tag {
            font-size: 12px;
            padding: 4px 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .feature-card,
          .hero__cta,
          .join__cta,
          .business-groups__tag {
            transition: none !important;
          }
          .feature-card:hover {
            transform: none !important;
          }
          .hero__cta:hover {
            transform: none !important;
          }
          .join__cta:hover {
            transform: none !important;
          }
        }
      `}</style>
    </main>
  );
}

/* ───────────────────────── Hub Diagram SVG ───────────────────────── */

function HubDiagram() {
  return (
    <svg viewBox="0 0 420 360" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Network diagram of Centers of Expertise">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2d6da8" />
          <stop offset="100%" stopColor="#1a4972" />
        </radialGradient>
        <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3a7ec4" />
          <stop offset="100%" stopColor="#1a4972" />
        </radialGradient>
      </defs>

      {/* Connection lines */}
      <g stroke="#2d6da8" strokeWidth="1.5" opacity="0.3">
        <line x1="210" y1="180" x2="90" y2="80" />
        <line x1="210" y1="180" x2="330" y2="80" />
        <line x1="210" y1="180" x2="60" y2="200" />
        <line x1="210" y1="180" x2="360" y2="200" />
        <line x1="210" y1="180" x2="130" y2="300" />
        <line x1="210" y1="180" x2="290" y2="300" />
        <line x1="90" y1="80" x2="330" y2="80" />
        <line x1="60" y1="200" x2="130" y2="300" />
        <line x1="360" y1="200" x2="290" y2="300" />
        <line x1="90" y1="80" x2="60" y2="200" />
        <line x1="330" y1="80" x2="360" y2="200" />
      </g>

      {/* Animated pulse rings on center */}
      <circle cx="210" cy="180" r="42" fill="none" stroke="#2d6da8" strokeWidth="1" opacity="0.15">
        <animate attributeName="r" values="42;62;42" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Satellite nodes */}
      {[
        { cx: 90, cy: 80, label: "AI", icon: "🤖" },
        { cx: 330, cy: 80, label: "Cloud", icon: "☁️" },
        { cx: 60, cy: 200, label: "Cyber", icon: "🔐" },
        { cx: 360, cy: 200, label: "Events", icon: "📅" },
        { cx: 130, cy: 300, label: "Labs", icon: "🔬" },
        { cx: 290, cy: 300, label: "Dev", icon: "💻" },
      ].map((n) => (
        <g key={n.label}>
          <circle cx={n.cx} cy={n.cy} r="34" fill="url(#nodeGrad)" filter="url(#glow)" opacity="0.9" />
          <circle cx={n.cx} cy={n.cy} r="34" fill="none" stroke="#2d6da8" strokeWidth="1.2" opacity="0.5" />
          <text x={n.cx} y={n.cy - 6} textAnchor="middle" fontSize="16" dominantBaseline="middle" fill="#f5f7fa">{n.icon}</text>
          <text x={n.cx} y={n.cy + 14} textAnchor="middle" fontSize="10" fontWeight="700" fill="#b8ccf0" fontFamily="var(--font-m), monospace">{n.label}</text>
        </g>
      ))}

      {/* Center node */}
      <circle cx="210" cy="180" r="48" fill="url(#centerGrad)" filter="url(#glow)" />
      <circle cx="210" cy="180" r="48" fill="none" stroke="#2d6da8" strokeWidth="2" opacity="0.7" />
      <text x="210" y="170" textAnchor="middle" fontSize="22" dominantBaseline="middle" fill="#f5f7fa">🌐</text>
      <text x="210" y="192" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff" fontFamily="var(--font-m), monospace" letterSpacing="0.04em">CENTER OF</text>
      <text x="210" y="205" textAnchor="middle" fontSize="9" fontWeight="800" fill="#7eb3ff" fontFamily="var(--font-m), monospace" letterSpacing="0.04em">EXPERTISE</text>
    </svg>
  );
}