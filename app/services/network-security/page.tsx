"use client";

import Image from "next/image";
import { Network, Settings2, GraduationCap, ArrowRight, Shield, Zap, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Network Visibility Operations Services",
    icon: Network,
    tag: "01",
    desc: `The SPS Network Visibility Operations Service suite offers three levels of service to address specific client environments: 1) Basic Health Check; 2) Configuration Review & Testing; 3) Comprehensive Documentation and Training.`,
    accent: "#00d4ff",
  },
  {
    title: "Network Visibility Design & Implementation Services",
    icon: Settings2,
    tag: "02",
    desc: `SPS will design and implement your network visibility infrastructure and solutions during network infrastructure and security architecture refresh and upgrade projects.`,
    accent: "#0ea5e9",
  },
  {
    title: "Keysight IxNetwork Training",
    icon: GraduationCap,
    tag: "03",
    desc: `Talk to SPS about Keysight Training on Keysight's IxNetwork Testing System. IxNetwork provides L2-3 network infrastructure performance testing that scales to business needs.`,
    accent: "#06b6d4",
  },
];

const clients = [
  "/images/ci1.webp",
  "/images/tra2.jpg",
  "/images/ke3.webp",
];

export default function NetworkSecurityPage() {
  return (
    <main
      className="text-[#0f172a] overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#f0f5fa" }}
    >
      {/* ─── GOOGLE FONT IMPORT ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');

        .hero-grid {
          background-image:
            linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .service-card {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          padding: 0;
          overflow: hidden;
          border: 1px solid rgba(14,165,233,0.12);
          transition: box-shadow 0.4s ease, transform 0.4s ease;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,180,220,0.14);
        }

        .card-top-bar {
          height: 4px;
          width: 100%;
          background: linear-gradient(90deg, #042b35, #0b7285, #31b6d8, #00d4ff);
        }

        .card-body {
          padding: 36px 36px 40px;
        }

        .card-number {
          font-family: 'Syne', sans-serif;
          font-size: 64px;
          font-weight: 800;
          line-height: 1;
          color: rgba(11,114,133,0.08);
          position: absolute;
          top: 16px;
          right: 24px;
          pointer-events: none;
          user-select: none;
        }

        .icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #042b35 0%, #0b7285 100%);
          color: #00d4ff;
          margin-bottom: 24px;
          flex-shrink: 0;
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 19px;
          font-weight: 700;
          color: #0c1e28;
          line-height: 1.35;
          margin-bottom: 14px;
        }

        .card-desc {
          font-size: 14.5px;
          color: #4a6070;
          line-height: 1.85;
        }

        .card-footer {
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid rgba(14,165,233,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .learn-link {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #0b7285;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: gap 0.25s;
        }
        .learn-link:hover { gap: 14px; }

        .arrow-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0b7285, #31b6d8);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .client-tile {
          background: #fff;
          border-radius: 20px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e2eaf2;
          transition: box-shadow 0.3s, border-color 0.3s;
        }
        .client-tile:hover {
          border-color: #31b6d8;
          box-shadow: 0 12px 40px rgba(49,182,216,0.1);
        }

        .section-pill {
          display: inline-block;
          background: linear-gradient(90deg, #e0f7fc, #b2ebf2);
          color: #0b7285;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-radius: 100px;
          padding: 6px 16px;
          margin-bottom: 16px;
        }
      `}</style>

      {/* ─── HERO SECTION (Refined - Balanced Space & Better Readability) ─── */}
      <section
        className="relative w-full min-h-[85vh] flex items-center hero-grid bg-gradient-to-br from-[#0a0e2e]"
        style={{
          background: "linear-gradient(135deg, #0a0e2e 0%, #020131 55%, #0f0338 100%)",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            border: "1px solid rgba(0,212,255,0.15)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            border: "1px solid rgba(0,212,255,0.1)",
            pointerEvents: "none",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* LEFT SIDE - Reduced width, more compact */}
            <div className="flex-1 lg:flex-[1.2]">
              <div className="max-w-xl">
                <span
                  className="section-pill inline-block"
                  style={{
                    background: "#0F1C3F",
                    color: "#7ee8fa",
                    marginBottom: "20px",
                  }}
                >
                 
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.2] text-white mb-5">
                  Network Security — Built for Modern Infrastructure
                </h1>
                <p className="text-slate-200/90 text-base lg:text-[17px] leading-relaxed max-w-md">
                  SPS delivers scalable and intelligent network visibility,
                  monitoring, testing, and implementation services that help
                  enterprises strengthen performance, resilience, and cybersecurity
                  operations.
                </p>
                
                {/* Stats row - more compact */}
                <div className="mt-8 flex gap-8 flex-wrap">
                  <div>
                    <div className="text-2xl font-bold text-cyan-300">99.9%</div>
                    <div className="text-xs text-white/70 mt-0.5">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-300">500+</div>
                    <div className="text-xs text-white/70 mt-0.5">Deployments</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-300">24/7</div>
                    <div className="text-xs text-white/70 mt-0.5">Support</div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="mt-10 group flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/20 transition-all duration-300">
                  Explore Solutions
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - Feature icons or visual card (replaces the previous standalone text) */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="bg-cyan-400/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="text-cyan-300" size={24} />
                  </div>
                  <h4 className="text-white font-semibold text-base mb-1">Zero Trust Ready</h4>
                  <p className="text-white/60 text-xs">NIST compliant security architecture</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="bg-cyan-400/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="text-cyan-300" size={24} />
                  </div>
                  <h4 className="text-white font-semibold text-base mb-1">Real-time Visibility</h4>
                  <p className="text-white/60 text-xs">Microsecond monitoring & alerting</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 sm:col-span-2">
                  <div className="bg-cyan-400/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="text-cyan-300" size={24} />
                  </div>
                  <h4 className="text-white font-semibold text-base mb-1">AI-Driven Analytics</h4>
                  <p className="text-white/60 text-xs">Predictive threat detection with ML models</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-28" style={{ background: "#f0f5fa" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="section-pill">Our Services</span>
              <h2
                style={{ fontSize: "clamp(28px,3.5vw,38px)", fontWeight: 700, color: "#0c1e28", lineHeight: 1.25 }}
              >
                Our Network Security Services
              </h2>
            </div>
            <p
              style={{ maxWidth: "380px", fontSize: "15px", color: "#4a6070", lineHeight: 1.8 }}
            >
              Advanced visibility, implementation, and testing solutions engineered
              to optimize enterprise infrastructure and secure mission-critical environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div className="service-card" key={i}>
                  <div className="card-top-bar" />
                  <div className="card-body">
                    <span className="card-number">{service.tag}</span>
                    <div className="icon-wrap">
                      <Icon size={22} />
                    </div>
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-desc">{service.desc}</p>
                    <div className="card-footer">
                      <a href="#" className="learn-link">
                        Learn More
                        <span className="arrow-circle">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6h8M7 3l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </a>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          color: "#aabbc8",
                          textTransform: "uppercase",
                        }}
                      >
                        SPS Service
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CLIENTS ─── */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-14 items-start">
            <div className="md:w-1/3 shrink-0">
              <span className="section-pill">Trusted Clients</span>
              <h2
                style={{
                  fontSize: "clamp(24px,3vw,34px)",
                  fontWeight: 700,
                  color: "#0c1e28",
                  lineHeight: 1.3,
                  marginBottom: "16px",
                }}
              >
                Customers We Are Proud To Work With
              </h2>
              <p style={{ fontSize: "15px", color: "#4a6070", lineHeight: 1.8 }}>
                Our mission is to deliver compelling narratives, remarkable
                experiences, and outstanding results for our clients.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {clients.map((logo, i) => (
                <div className="client-tile" key={i}>
                  <Image
                    src={logo}
                    alt="client logo"
                    width={160}
                    height={90}
                    className="object-contain"
                    style={{ opacity: 0.75, transition: "opacity 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLImageElement).style.opacity = "1")}
                    onMouseLeave={(e) => ((e.target as HTMLImageElement).style.opacity = "0.75")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}