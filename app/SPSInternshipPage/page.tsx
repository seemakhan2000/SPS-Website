"use client";
import Link from "next/link";
import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

interface Phase {
  label: string;
  title: string;
  desc: string;
}

interface Area {
  icon: string;
  label: string;
  title: string;
}

interface WhyItem {
  icon: string;
  title: string;
  desc: string;
}

interface Step {
  num: string;
  icon: string;
  title: string;
  desc: string;
}

export default function SPSInternshipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      q: "How do I apply for the internship, and what documents are needed?",
      a: "You can apply by clicking the 'Apply Now' button at the top of the page. Please include your resume, relevant certificates or academic transcripts, and a brief statement of interest.",
    },
    {
      q: "What is the duration of the internship, and will a certificate be provided upon completion?",
      a: "The internship duration varies by program track. Upon successful completion, participants receive an official SPS certificate recognizing their achievements.",
    },
    {
      q: "Could you please clarify the mode of the internship, the minimum attendance requirements, and supervision?",
      a: "The internship can be completed virtually or in-person depending on availability. Minimum attendance is required for all sessions and supervised by dedicated mentors.",
    },
    {
      q: "What kind of trainings, certifications, and projects will be available?",
      a: "Participants gain access to technical training modules, industry certifications, and real-world project assignments aligned with their chosen career field.",
    },
    {
      q: "What kind of supervisory support will be available during the internship?",
      a: "Each intern is assigned a dedicated supervisor who provides guidance, feedback, and performance evaluations throughout the program.",
    },
    {
      q: "Can I post/publish about my work and certifications on my social media accounts?",
      a: "Yes, you are encouraged to share your achievements on professional networks like LinkedIn. Please follow SPS guidelines for sharing proprietary project details.",
    },
  ];

  const phases: Phase[] = [
    {
      label: "Phase 1",
      title: "Trainee",
      desc: "Participants receive foundational training on various products and services, preparing them for real-world applications.",
    },
    {
      label: "Phase 2",
      title: "Shadower",
      desc: "Interns observe and learn the dynamics of client interactions, including pre- and post-sales engagements.",
    },
    {
      label: "Phase 3",
      title: "Apprentice",
      desc: "Upon demonstrating professional and business skills, interns gain opportunities to collaborate closely with teams, simulating coworker responsibilities.",
    },
    {
      label: "Phase 4",
      title: "Full Timer",
      desc: "After successful completion of the apprenticeship phase and obtaining relevant certifications, participants are positioned to transition into paid roles.",
    },
  ];

  const areas: Area[] = [
    { icon: "⚖️", label: "ATTORNEYS", title: "Human Resource, Accounting, Legal & Compliance, Administration" },
    { icon: "🔐", label: "CYBERSECURITY", title: "Cybersecurity, Cloud Computing, AI & Automation, Learning & Events" },
    { icon: "📊", label: "SALES", title: "Business Management, Sales, Marketing" },
  ];

  const whySPS: WhyItem[] = [
    {
      icon: "🌍",
      title: "Real World Experience",
      desc: "Gain practical hands-on experience working alongside industry professionals on real projects.",
    },
    {
      icon: "📈",
      title: "Learning Development",
      desc: "Stay ahead with access to cutting-edge learning resources and mentorship designed to help you grow quickly.",
    },
    {
      icon: "🔄",
      title: "Flexibility",
      desc: "Access the internship at your own pace with flexible scheduling that accommodates students in all time zones.",
    },
    {
      icon: "🏆",
      title: "Career Launchpad",
      desc: "Take advantage of employment pathways, with many SPS interns converting to full-time positions upon program completion.",
    },
  ];

  const whatYoullDo: string[] = [
    "Solve real-world technology challenges and become part of the knowledge-sharing community.",
    "Complete assignments, present outputs, and contribute to live projects.",
    "Support senior professionals, participate in team meetings.",
    "Showcase your technical skills with access to the latest tools.",
    "Receive ongoing mentorship and career growth support.",
  ];

  const eligibility: string[] = [
    "Strong passion and commitment to your desired domain.",
    "Strong work ethic and ability to meet deadlines.",
    "Ability to work effectively in remote or hybrid environments.",
    "Willingness to learn, adapt, and contribute meaningfully to the team.",
    "Ready to Launch Your Career? If you're selected to join the SPS Internship program, you'll gain the skills, experience, and credentials to break into the job market. Make an impact today, launch your career at SPS!",
  ];

  const steps: Step[] = [
    { num: "01", icon: "📋", title: "Application", desc: "Submit your online application form and upload your personal message." },
    { num: "02", icon: "🎤", title: "Recorded Interview", desc: "Record and submit your video interview as part of the application." },
    { num: "03", icon: "🔍", title: "Screening", desc: "Prepare for the internship by completing any preliminary tasks to develop key skills." },
    { num: "04", icon: "✅", title: "Offer", desc: "Receive your offer letter and from there, your success story begins with SPS!" },
  ];

  const overviewCards = [
    {
      icon: "🎓",
      title: "Professional Development",
      desc: "Get the training you need and set a professional direction through specialized skill-building activities.",
    },
    {
      icon: "🌐",
      title: "Flexible Work Environment",
      desc: "The program accommodates various participation styles and locations, whether remote or in-person, adapting to each intern's situation.",
    },
    {
      icon: "🤝",
      title: "Real Responsibility",
      desc: "In this program, you take on meaningful tasks that contribute to real outcomes, gaining the confidence needed for a full-time role.",
    },
    {
      icon: "🔗",
      title: "Networking",
      desc: "SPS connects interns with industry leaders and professionals, and graduates often secure positions in well-established organizations.",
    },
  ];

  return (
    <main
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, 'Times New Roman', serif",
        background: "#0F1C3F",
        color: "#1a1a2e",
        overflowX: "hidden",
      }}
    >
      {/* ─── HERO SECTION - SIMPLIFIED TEXT ─── */}
      <section
        style={{
          background: "#0a1628",
          padding: "120px 0",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 50,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left Content */}
            <div style={{ flex: "1.2", minWidth: 280 }}>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.2,
                  marginBottom: 20,
                  letterSpacing: "-0.02em",
                }}
              >
                Start your professional journey with SPS Internship Program
              </h1>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  marginBottom: 32,
                  maxWidth: 550,
                }}
              >
                Join our hybrid internship program open to graduate and undergraduate students.
                Choose your career track, work with expert mentors, earn certifications — and launch your career.
              </p>
           <Link href="/apply-now">
  <span
    style={{
      display: "inline-block",
      background: "#ffffff",
      color: "#0a1628",
      fontWeight: 600,
      padding: "12px 32px",
      borderRadius: 40,
      textDecoration: "none",
      fontSize: "0.9rem",
      transition: "0.2s ease",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#e0e0e0";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "#ffffff";
    }}
  >
    Apply Now →
  </span>
</Link>
            </div>

            {/* Right Side - Simple Info Cards */}
            <div style={{ flex: "0.8", display: "flex", flexDirection: "column", gap: 20, minWidth: 260 }}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 24,
                  padding: "22px 26px",
                  borderLeft: "4px solid #2e71af",
                  transition: "0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 24 }}>🚀</span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: 1,
                      color: "#8ab3ff",
                      textTransform: "uppercase",
                    }}
                  >
                    Featured Track
                  </span>
                </div>
                <p style={{ fontWeight: 600, color: "#ffffff", marginBottom: 6 }}>Tech Leadership Program</p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", margin: 0 }}>
                  8-week immersive track with real-world cloud projects.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 24,
                  padding: "22px 26px",
                  borderLeft: "4px solid #8ab3ff",
                  transition: "0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 24 }}>📅</span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: 1,
                      color: "#8ab3ff",
                      textTransform: "uppercase",
                    }}
                  >
                    Upcoming Cohort
                  </span>
                </div>
                <p style={{ fontWeight: 600, color: "#ffffff", marginBottom: 6 }}>Summer 2026 · Applications Open</p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", margin: 0 }}>
                  Deadline: May 30, 2026 · Limited spots available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ─── */}
      <section style={{ background: "#ffffff", padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <Tag>Overview</Tag>
          <p
            style={{
              color: "#555",
              lineHeight: 1.7,
              fontSize: "1rem",
              maxWidth: 900,
              marginBottom: 48,
            }}
          >
            The SPS Intern-to-Job Program is designed to prepare recent college graduates and entry-level students
            for careers by connecting them to real-world experience. Through immersive tracks, interns receive study plans,
            solid support structures, and first-hand industry exposure. "At SPS, you'll be taken under the mentorship of
            office professionals in a real-world environment."
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
            }}
          >
            {overviewCards.map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  background: "#fff",
                  borderRadius: 20,
                  padding: 24,
                  margin: 0,
                  transition: "all 0.2s ease",
                  boxShadow: "0 6px 14px rgba(0,0,0,0.02)",
                  border: "1px solid #eef2f6",
                }}
              >
                <span style={{ fontSize: 28, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontSize: "1rem", marginBottom: 8, fontWeight: 700 }}>{item.title}</h3>
                  <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRESSIVE PHASES ─── */}
      <section style={{ background: "#f0f4f8", padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <Tag>Progressive Phases of Internship</Tag>
          <p style={{ color: "#555", marginBottom: 48, maxWidth: 700 }}>
            Each phase builds upon the last — moving participants from foundational learning to full professional integration.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {phases.map((p, i) => (
              <div
                key={p.title}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 6px 14px rgba(0,0,0,0.02)",
                  borderTop: `4px solid ${i === 0 || i === 3 ? "#2e71af" : "#2196f3"}`,
                }}
              >
                <div style={{ padding: "24px" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: 2,
                      color: i === 0 || i === 3 ? "#2e71af" : "#2196f3",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.label}
                  </span>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "12px 0 8px", color: "#1a1a2e" }}>
                    {p.title}
                  </h3>
                  <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AREAS OF INTERNSHIP ─── */}
      <section style={{ background: "#ffffff", padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <Tag>Areas of Internship</Tag>
          <p style={{ marginBottom: 6 }}>Our internship program features positions in 25+ career tracks offering critical industry knowledge.</p>
          <p style={{ marginBottom: 42, fontStyle: "italic", color: "#777" }}>A world-class internship in emerging, impactful domains.</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 28,
            }}
          >
            {areas.map((a) => (
              <div
                key={a.label}
                style={{
                  background: "linear-gradient(135deg,#0a1628,#1a3a5c)",
                  borderRadius: 20,
                  padding: "36px 28px",
                  color: "#fff",
                }}
              >
                <span style={{ fontSize: 36 }}>{a.icon}</span>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: 2,
                    margin: "16px 0 6px",
                  }}
                >
                  {a.label}
                </p>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.5, margin: 0, color: "rgba(255,255,255,0.85)" }}>
                  {a.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SPS ─── */}
      <section style={{ background: "#fefaf5", padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 50,
              alignItems: "center",
            }}
          >
            <div>
              <Tag>Why SPS?</Tag>
              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 28 }}>
                {whySPS.map((w) => (
                  <div key={w.title} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: "#2e71af20",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      {w.icon}
                    </div>
                    <div>
                      <h3 style={{ marginBottom: 6, fontSize: "1.05rem" }}>{w.title}</h3>
                      <p style={{ color: "#555", fontSize: "0.85rem", lineHeight: 1.5 }}>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(145deg,#0f253f,#0a1628)",
                borderRadius: 28,
                padding: "44px 32px",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <div style={{ fontSize: 60 }}>☁️</div>
              <h3 style={{ fontSize: "1.6rem", margin: "16px 0" }}>Cloud-First Learning</h3>
              <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                Powered by cutting-edge cloud platforms — every intern gets exposure to modern enterprise tech.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  marginTop: 28,
                }}
              >
                {["AWS", "Azure", "GCP"].map((c) => (
                  <div
                    key={c}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "6px 14px",
                      borderRadius: 40,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STUDENT PARTICIPATION ─── */}
      <section style={{ background: "#ffffff", padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <Tag center>Student Participation From Universities</Tag>
          <p style={{ maxWidth: 600, margin: "0 auto 48px" }}>
            Students from leading universities across the country participate in the SPS Internship Program.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 32,
            }}
          >
            {["Virtual University", "NUST", "MED University"].map((u) => (
              <div
                key={u}
                style={{
                  border: "2px solid #1a3a5c",
                  borderRadius: 18,
                  padding: "28px 36px",
                  minWidth: 170,
                  transition: "all 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0a1628";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#1a1a2e";
                }}
              >
                <div style={{ fontSize: 38 }}>🎓</div>
                <p style={{ fontWeight: 700, marginTop: 8 }}>{u}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL DO + ELIGIBILITY ─── */}
      <section style={{ background: "#f0f4f8", padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 50,
            }}
          >
            <div>
              <Tag>What You'll Do</Tag>
              <ul style={{ listStyle: "none", padding: 0, marginTop: 28 }}>
                {whatYoullDo.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 12,
                      marginBottom: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        background: "#2e71af",
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "white",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      {i + 1}
                    </span>
                    <p style={{ margin: 0, color: "#444", fontSize: "0.9rem", lineHeight: 1.5 }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Tag>Eligibility</Tag>
              <p style={{ fontWeight: 600, margin: "24px 0 8px" }}>Who can apply?</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {eligibility.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      marginBottom: 16,
                    }}
                  >
                    <span style={{ color: "#11568f", fontWeight: 700, fontSize: "1.1rem", flexShrink: 0 }}>
                      {i === eligibility.length - 1 ? "🚀" : "✓"}
                    </span>
                    <p
                      style={{
                        margin: 0,
                        color: i === eligibility.length - 1 ? "#1a1a2e" : "#555",
                        fontSize: "0.9rem",
                        lineHeight: 1.5,
                        fontStyle: i === eligibility.length - 1 ? "italic" : "normal",
                      }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APPLICATION PROCESS ─── */}
      <section id="apply" style={{ background: "#0a1628", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <Tag light center>
            Application Process
          </Tag>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              maxWidth: 560,
              margin: "0 auto 56px",
              lineHeight: 1.6,
            }}
          >
            Getting started is simple. Our four-step process takes you from application to orientation smoothly.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {steps.map((s, i) => (
              <div
                key={s.num}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(245,166,35,0.2)",
                  borderRadius: 20,
                  padding: "32px 24px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    right: 20,
                    top: 10,
                    fontSize: "2rem",
                    fontWeight: 800,
                    opacity: 0.1,
                    fontFamily: "monospace",
                  }}
                >
                  {s.num}
                </span>
                <div style={{ fontSize: 34, marginBottom: 14 }}>{s.icon}</div>
                <p style={{ fontWeight: 700, color: "#8ab3ff", margin: "0 0 8px" }}>{s.title}</p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>
                  {s.desc}
                </p>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      right: -12,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#2d5db4",
                      fontSize: 20,
                    }}
                  >
                    ›
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ background: "#ffffff", padding: "72px 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <Tag center>Frequently Asked Questions</Tag>
          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid",
                  borderColor: openFaq === i ? "#3d75b6" : "#e2e8f0",
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "18px 24px",
                    background: openFaq === i ? "#fff8ef" : "#ffffff",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "inherit",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#1e293b",
                  }}
                >
                  <span style={{ paddingRight: 16 }}>{faq.q}</span>
                  <span
                    style={{
                      fontSize: 20,
                      color: openFaq === i ? "#2171a0" : "#999",
                      transition: "transform 0.2s",
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  >
                    ⌄
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    style={{
                      padding: "0 24px 20px 24px",
                      color: "#4a5568",
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                      borderTop: "1px solid #f0e4c8",
                      background: "#fff8ef",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── Helper Components ───
interface TagProps {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}

function Tag({ children, center, light }: TagProps) {
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      <span
        style={{
          display: "inline-block",
          borderBottom: `3px solid ${light ? "#f5a623" : "#2e71af"}`,
          paddingBottom: 6,
          fontSize: "1.35rem",
          fontWeight: 800,
          color: light ? "#ffffff" : "#0a1628",
          letterSpacing: "-0.3px",
        }}
      >
        {children}
      </span>
    </div>
  );
}