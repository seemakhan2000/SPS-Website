"use client";

import React, { useState, useRef } from "react";

// ─── TYPES ───────────────────────────────────────────────────

interface FormData {
  internship: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  university: string;
  degree: string;
  cgpa: string;
  semester: string;
  projects: string[];
  competencies: string[];
  specializations: string[];
  microInternships: string[];
  videoLink: string;
  resume: File | null;
  transcript: File | null;
  picture: File | null;
}

// ─── DATA ────────────────────────────────────────────────────

const UNIVERSITIES: string[] = [
  "FAST-NUCES",
  "NUST",
  "LUMS",
  "IBA Karachi",
  "UET Lahore",
  "COMSATS",
  "Air University",
  "Other",
];

const DEGREES: string[] = [
  "Bachelor's",
  "Master's",
  "PhD",
  "Associate Degree",
];

const PROJECTS: Record<string, string[]> = {
  Business: ["Market Analysis", "Digital Marketing", "Business Development", "CRM Management"],
  Technical: ["AI / ML", "Cloud Infrastructure", "Cybersecurity", "Full Stack Development"],
};

const COMPETENCIES: Record<string, string[]> = {
  Business: ["Communication", "Leadership", "Sales", "Project Management"],
  Technical: ["Python", "React", "AWS", "DevSecOps"],
};

// Vendor -> Product -> Specializations (nested for the Specializations accordion)
const SPECIALIZATIONS_TREE: Record<string, Record<string, string[]>> = {
  Appian: {
    "Appian Platform": ["Process Automation", "Low-Code Development", "RPA Integration"],
  },
  "Fischer Identity": {
    "Identity Governance": ["Identity Lifecycle Management", "Access Certification"],
  },
  Fortinet: {
    "FortiGate": ["Network Security", "VPN Configuration"],
    "FortiAnalyzer": ["Log Analysis", "Threat Reporting"],
  },
  IBM: {
    "Watson AI": ["Conversational AI", "Machine Learning Pipelines"],
    "Cloud Pak": ["Application Modernization", "Hybrid Cloud Integration"],
  },
  Microsoft: {
    Azure: ["Cloud Architecture", "Azure DevOps"],
    "Power Platform": ["Power Automate", "Power BI"],
  },
  "Trend Micro": {
    "Cloud One": ["Workload Security", "Container Security"],
    "Vision One": ["Threat Detection", "Endpoint Protection"],
  },
};

const MICRO_INTERNSHIPS: { title: string; info: string }[] = [
  {
    title: "Document Classifier",
    info: "Build and train a model that automatically sorts incoming documents into categories to speed up internal workflows.",
  },
  {
    title: "Auto-Generate RFP Proposal Responses using Agentic and Generative AI",
    info: "Use agentic and generative AI techniques to draft, review, and refine responses to Requests for Proposals.",
  },
  {
    title: "Leverage OpenClaw to create Agentic Environments for SPS Roles",
    info: "Design agentic environments using OpenClaw that simulate real SPS roles for training and evaluation purposes.",
  },
];

// "Choose Your Internship Path at SPS" accordion content
const TRACK_ITEMS: { icon: string; title: string; body: string }[] = [
  {
    icon: "💼",
    title: "Project / Role-Based Internships (Start Here)",
    body:
      "Step into a real role on a live project team. You'll be assigned tasks tied to an actual business or technical deliverable, work alongside mentors, and build a track record you can point to in interviews. This is the recommended starting point for most students because it gives you immediate, hands-on context for everything else SPS offers.",
  },
  {
    icon: "👥",
    title: "Competency-Based Internships (Choose Your Role)",
    body:
      "Focus on building a specific skill set, business or technical, through structured exercises and guided practice. Choose the competencies that match the role you're aiming for, and work through a curriculum designed to bring you up to a professional standard in that area.",
  },
  {
    icon: "⚙️",
    title: "Specialization-Based Internships (Master a Technology)",
    body:
      "Go deep on a specific vendor platform or product, such as IBM, Fortinet, or Microsoft Azure. These tracks are built in partnership with technology vendors and prepare you for industry-recognized skills and certifications on that platform.",
  },
  {
    icon: "⚡",
    title: "Micro-Internships (Short-Term, Project-Focused)",
    body:
      "Take on a short, well-scoped project with a clear deliverable, often completed in a few weeks. Micro-internships are a great way to add a focused, modern project (like agentic AI workflows) to your portfolio without a long-term commitment.",
  },
];

const TRACK_EXTRA_ITEMS: { icon: string; title: string; body: string }[] = [
  {
    icon: "🔗",
    title: "How These Tracks Fit Together",
    body:
      "Most interns start with a Project / Role-Based internship to get oriented, then layer in Competency-Based learning to sharpen specific skills, add a Specialization to stand out on a particular technology, and round things out with a Micro-Internship to ship a focused deliverable. The tracks are designed to be combined; you are not limited to just one.",
  },
  {
    icon: "🧭",
    title: "Which One Should You Choose?",
    body:
      "If you're not sure where to begin, start with a Project / Role-Based internship. If you already know the role you want (for example, a cloud engineer or business analyst), a Competency-Based track will help you build the right foundation. If you want to specialize in a specific vendor's tools for certification purposes, choose a Specialization. If you have limited time but want a concrete project for your resume, a Micro-Internship is the fastest path.",
  },
  {
    icon: "🔑",
    title: "Key Takeaway",
    body:
      "Every track is designed to be hybrid and remote-friendly, so you can build real, verifiable experience without leaving campus. Pick the path that matches where you are today, you can always add more tracks as you progress through the program.",
  },
];

const INTERNSHIP_TRACKS: { icon: string; title: string; desc: string }[] = [
  { icon: "🗂️", title: "Project Based", desc: "Hands-on experience" },
  { icon: "🌟", title: "Competency Based", desc: "Skill driven pathways" },
  { icon: "⚙️", title: "Specializations", desc: "Learn from experts" },
  { icon: "⚡", title: "Micro Internships", desc: "Short sprint projects" },
];

// ─── STYLES (inline for simplicity) ─────────────────────────

const styles: Record<string, React.CSSProperties> = {
  root: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    background: "#ffffff",
    minHeight: "100vh",
  },
  hero: {
    position: "relative",
    minHeight: "90vh",
    background: "#0A0E1F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 24px",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: 1200,
    textAlign: "center" as const,
  },
  heroTitle: {
    fontSize: "clamp(32px, 5vw, 48px)",
    lineHeight: 1.3,
    color: "#ffffff",
    fontWeight: 700,
    margin: 0,
    marginBottom: "16px",
  },
  heroAccent: {
    color: "#93c5fd",
  },
  heroSub: {
    maxWidth: 700,
    margin: "0 auto 42px",
    color: "#dbeafe",
    fontSize: 17,
    lineHeight: 1.8,
  },
  trackGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
    marginBottom: 40,
  },
  trackCard: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 18,
    padding: 20,
    display: "flex",
    gap: 14,
    textAlign: "left" as const,
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  trackIcon: {
    fontSize: 28,
  },
  trackTitle: {
    color: "#ffffff",
    fontWeight: 700,
    marginBottom: 6,
  },
  trackDesc: {
    color: "#dbeafe",
    fontSize: 13,
  },
  formSection: {
    padding: "90px 24px",
    background: "#ffffff",
  },
  formWrapper: {
    maxWidth: 900,
    margin: "0 auto",
  },
  formHeader: {
    textAlign: "center" as const,
    marginBottom: 50,
  },
  formTag: {
    display: "inline-block",
    padding: "8px 18px",
    borderRadius: 999,
    background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: 12,
    marginBottom: 18,
  },
  formTitle: {
    fontSize: "clamp(28px,5vw,42px)",
    fontWeight: 800,
    color: "#0f172a",
    margin: 0,
  },
  section: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: 22,
    marginBottom: 24,
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(15,23,42,0.05)",
    transition: "all 0.3s ease",
  },
  sectionHeader: {
    padding: "22px 28px",
    borderBottom: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "linear-gradient(90deg,#f0f9ff,#ffffff)",
  },
  sectionIcon: {
    fontSize: 22,
  },
  sectionTitle: {
    margin: 0,
    fontSize: 18,
    fontWeight: 700,
    color: "#0f172a",
  },
  sectionBody: {
    padding: 28,
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 8,
    marginBottom: 20,
  },
  row2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
  },
  row3: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 18,
  },
  label: {
    fontSize: 13,
    fontWeight: 700,
    color: "#1e3a8a",
    letterSpacing: "0.3px",
  },
  input: {
    width: "100%",
    padding: "15px 16px",
    background: "#f8fafc",
    border: "2px solid #e2e8f0",
    borderRadius: 12,
    color: "#0f172a",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "all 0.3s ease",
  },
  select: {
    width: "100%",
    padding: "15px 16px",
    background: "#f8fafc",
    border: "2px solid #e2e8f0",
    borderRadius: 12,
    color: "#0f172a",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "all 0.3s ease",
  },
  catLabel: {
    color: "#1e3a8a",
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 12,
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
  },
  checkGrid: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: 10,
  },
  pill: {
    padding: "10px 18px",
    borderRadius: 999,
    border: "2px solid #e2e8f0",
    background: "#f8fafc",
    color: "#334155",
    fontSize: 13,
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: 500,
  },
  pillActive: {
    background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
    color: "#ffffff",
    border: "2px solid #1e3a8a",
    boxShadow: "0 4px 12px rgba(15,23,42,0.2)",
  },
  microItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    padding: "14px 16px",
    borderRadius: 14,
    border: "2px solid #e2e8f0",
    background: "#f8fafc",
    color: "#0f172a",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  microInfoBtn: {
    marginLeft: "auto",
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "#1e3a8a",
    color: "#fff",
    fontSize: 12,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
    flexShrink: 0,
  },
  microInfoText: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 8,
    lineHeight: 1.6,
    paddingLeft: 32,
  },
  fileLabel: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    flexWrap: "wrap" as const,
  },
  fileBtn: {
    background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
    padding: "12px 24px",
    borderRadius: 12,
    color: "#fff",
    fontWeight: 700,
    fontSize: 13,
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "none",
    display: "inline-block",
  },
  fileName: {
    fontSize: 13,
    color: "#64748b",
    fontWeight: 500,
  },
  submitWrap: {
    marginTop: 34,
    display: "flex",
    justifyContent: "center",
  },
  submitBtn: {
    border: "none",
    background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
    color: "#fff",
    borderRadius: 999,
    padding: "18px 56px",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(15,23,42,0.25)",
    letterSpacing: "0.5px",
  },
  successScreen: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#f0f9ff,#ffffff)",
    padding: 24,
  },
  successCard: {
    background: "#ffffff",
    border: "2px solid #e2e8f0",
    borderRadius: 28,
    padding: "60px 40px",
    textAlign: "center" as const,
    maxWidth: 520,
    width: "100%",
    boxShadow: "0 20px 40px rgba(15,23,42,0.1)",
  },
  successIcon: {
    width: 82,
    height: 82,
    borderRadius: "50%",
    margin: "0 auto 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
    color: "#fff",
    fontSize: 34,
    fontWeight: 800,
  },
  successTitle: {
    fontSize: 34,
    marginBottom: 16,
    color: "#0f172a",
    fontWeight: 800,
  },
  successText: {
    color: "#475569",
    lineHeight: 1.8,
    fontSize: 15,
    marginBottom: 30,
  },
  successBtn: {
    border: "none",
    background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
    color: "#fff",
    borderRadius: 999,
    padding: "15px 30px",
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  // ── Path / Accordion panel (matches the screenshot's blue-tinted box) ──
  pathPanel: {
    background: "linear-gradient(180deg,#eff6ff,#f8fafc)",
    border: "1px solid #bfdbfe",
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
  },
  pathTitle: {
    fontSize: 19,
    fontWeight: 800,
    color: "#0f172a",
    margin: "0 0 10px",
  },
  pathIntro: {
    fontSize: 13.5,
    color: "#475569",
    lineHeight: 1.8,
    marginBottom: 18,
  },
  accordionItem: {
    border: "1px solid #dbeafe",
    borderRadius: 14,
    background: "#ffffff",
    marginBottom: 10,
    overflow: "hidden",
  },
  accordionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    width: "100%",
    padding: "14px 18px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    textAlign: "left" as const,
    fontSize: 14,
    fontWeight: 700,
    color: "#1e3a8a",
  },
  accordionHeaderLeft: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  accordionChevron: {
    fontSize: 12,
    color: "#1e3a8a",
    transition: "transform 0.2s ease",
    flexShrink: 0,
  },
  accordionBody: {
    padding: "0 18px 16px 18px",
    fontSize: 13.5,
    color: "#475569",
    lineHeight: 1.8,
  },

  // ── Nested expandable list for Projects / Competencies / Specializations ──
  expandItem: {
    border: "1px solid #e2e8f0",
    borderRadius: 14,
    marginBottom: 10,
    overflow: "hidden",
    background: "#f8fafc",
  },
  expandHeader: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    width: "100%",
    padding: "14px 16px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    textAlign: "left" as const,
    fontSize: 14,
    fontWeight: 700,
    color: "#0f172a",
  },
  expandPlus: {
    width: 22,
    height: 22,
    borderRadius: 8,
    background: "#dbeafe",
    color: "#1e3a8a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 800,
    flexShrink: 0,
  },
  expandBody: {
    padding: "4px 16px 16px 48px",
  },
  nestedExpandItem: {
    border: "1px solid #e2e8f0",
    borderRadius: 12,
    marginBottom: 8,
    overflow: "hidden",
    background: "#ffffff",
  },
  nestedExpandHeader: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    width: "100%",
    padding: "12px 14px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    textAlign: "left" as const,
    fontSize: 13,
    fontWeight: 600,
    color: "#1e3a8a",
  },
};

// ─── SUBCOMPONENTS ───────────────────────────────────────────

const FormSection: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div style={styles.section}>
    <div style={styles.sectionHeader}>
      <span style={styles.sectionIcon}>{icon}</span>
      <h3 style={styles.sectionTitle}>{title}</h3>
    </div>
    <div style={styles.sectionBody}>{children}</div>
  </div>
);

const CheckPill: React.FC<{ label: string; checked: boolean; onChange: () => void }> = ({ label, checked, onChange }) => (
  <label
    style={{
      ...styles.pill,
      ...(checked ? styles.pillActive : {}),
    }}
    onClick={onChange}
  >
    <input type="checkbox" checked={checked} onChange={() => {}} style={{ display: "none" }} />
    {label}
  </label>
);

const FileUpload: React.FC<{ accept: string; onChange: (file: File | null) => void; file: File | null }> = ({
  accept,
  onChange,
  file,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    onChange(selectedFile);
  };

  return (
    <div style={styles.fileLabel}>
      <input type="file" accept={accept} style={{ display: "none" }} ref={inputRef} onChange={handleChange} />
      <button type="button" style={styles.fileBtn as React.CSSProperties} onClick={handleClick}>
        Choose File
      </button>
      <span style={styles.fileName}>{file ? file.name : "No file chosen"}</span>
    </div>
  );
};

// Single accordion item used in the "Choose Your Internship Path at SPS" panel
const AccordionItem: React.FC<{
  icon: string;
  title: string;
  body: string;
  open: boolean;
  onToggle: () => void;
}> = ({ icon, title, body, open, onToggle }) => (
  <div style={styles.accordionItem}>
    <button type="button" style={styles.accordionHeader} onClick={onToggle}>
      <span style={styles.accordionHeaderLeft}>
        <span>{icon}</span>
        <span>{title}</span>
      </span>
      <span
        style={{
          ...styles.accordionChevron,
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >
        ▼
      </span>
    </button>
    {open && <div style={styles.accordionBody}>{body}</div>}
  </div>
);

// Generic expandable category (used for Projects / Competencies / Specializations)
const ExpandCategory: React.FC<{
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}> = ({ label, open, onToggle, children }) => (
  <div style={styles.expandItem}>
    <button type="button" style={styles.expandHeader} onClick={onToggle}>
      <span style={styles.expandPlus}>{open ? "−" : "+"}</span>
      <span>{label}</span>
    </button>
    {open && <div style={styles.expandBody}>{children}</div>}
  </div>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────

export default function InternshipPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Open state for "Choose Your Internship Path at SPS" accordion items
  const [openTracks, setOpenTracks] = useState<Record<string, boolean>>({});
  const toggleTrack = (key: string) => setOpenTracks((prev) => ({ ...prev, [key]: !prev[key] }));

  // Open state for Projects / Competencies categories
  const [openProjectCats, setOpenProjectCats] = useState<Record<string, boolean>>({});
  const [openCompetencyCats, setOpenCompetencyCats] = useState<Record<string, boolean>>({});
  const toggleProjectCat = (key: string) => setOpenProjectCats((prev) => ({ ...prev, [key]: !prev[key] }));
  const toggleCompetencyCat = (key: string) => setOpenCompetencyCats((prev) => ({ ...prev, [key]: !prev[key] }));

  // Open state for Specializations (Vendor -> Product)
  const [openVendors, setOpenVendors] = useState<Record<string, boolean>>({});
  const [openProducts, setOpenProducts] = useState<Record<string, boolean>>({});
  const toggleVendor = (key: string) => setOpenVendors((prev) => ({ ...prev, [key]: !prev[key] }));
  const toggleProduct = (key: string) => setOpenProducts((prev) => ({ ...prev, [key]: !prev[key] }));

  // Open state for micro-internship info tooltips
  const [openMicroInfo, setOpenMicroInfo] = useState<Record<string, boolean>>({});
  const toggleMicroInfo = (key: string) => setOpenMicroInfo((prev) => ({ ...prev, [key]: !prev[key] }));

  const [form, setForm] = useState<FormData>({
    internship: "2026",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    degree: "",
    cgpa: "",
    semester: "",
    projects: [],
    competencies: [],
    specializations: [],
    microInternships: [],
    videoLink: "",
    resume: null,
    transcript: null,
    picture: null,
  });

  const toggleArray = (arr: string[], val: string): string[] =>
    arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];

  const handleMulti = (field: keyof FormData, val: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: toggleArray(prev[field] as string[], val),
    }));
  };

  const handleText = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelect = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFile = (field: keyof FormData, file: File | null) => {
    setForm((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.university) {
      alert("Please fill all required fields: First Name, Last Name, Email, and University.");
      return;
    }
    setSubmitted(true);
    console.log("Form submitted:", form);
  };

  if (submitted) {
    return (
      <div style={styles.successScreen}>
        <div style={styles.successCard}>
          <div style={styles.successIcon}>✓</div>
          <h2 style={styles.successTitle}>Application Submitted</h2>
          <p style={styles.successText}>
            Thank you for applying to the SPS Internship Program. Our team will review your application and get back to you soon.
          </p>
          <button
            style={styles.successBtn}
            onClick={() => {
              setSubmitted(false);
              setForm({
                internship: "2026",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                university: "",
                degree: "",
                cgpa: "",
                semester: "",
                projects: [],
                competencies: [],
                specializations: [],
                microInternships: [],
                videoLink: "",
                resume: null,
                transcript: null,
                picture: null,
              });
            }}
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.root}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>
            Launch Your Career
            <br />
            <span style={styles.heroAccent}>Without Leaving Campus</span>
          </h2>
          <p style={styles.heroSub}>
            Gain hands-on experience in AI, Cloud, Cybersecurity, Business Operations and Emerging Technologies.
          </p>
          <div style={styles.trackGrid}>
            {INTERNSHIP_TRACKS.map((track) => (
              <div key={track.title} style={styles.trackCard}>
                <div style={styles.trackIcon}>{track.icon}</div>
                <div>
                  <div style={styles.trackTitle}>{track.title}</div>
                  <div style={styles.trackDesc}>{track.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="apply" style={styles.formSection}>
        <div style={styles.formWrapper}>
          <div style={styles.formHeader}>
            <span style={styles.formTag}>APPLICATION FORM</span>
            <h2 style={styles.formTitle}>Tell Us About Yourself</h2>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <FormSection icon="👤" title="Personal Information">
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Internship:*</label>
                <select style={styles.select} value={form.internship} onChange={(e) => handleSelect("internship", e.target.value)}>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </div>

              <div style={styles.row2}>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>First Name *</label>
                  <input
                    style={styles.input}
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) => handleText("firstName", e.target.value)}
                  />
                </div>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Last Name *</label>
                  <input
                    style={styles.input}
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => handleText("lastName", e.target.value)}
                  />
                </div>
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Email *</label>
                <input
                  type="email"
                  style={styles.input}
                  placeholder="Please enter your Email"
                  value={form.email}
                  onChange={(e) => handleText("email", e.target.value)}
                />
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Phone Number</label>
                <input
                  style={styles.input}
                  placeholder="Phone Number (e.g. 03165####### or +9231654######)"
                  value={form.phone}
                  onChange={(e) => handleText("phone", e.target.value)}
                />
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>University *</label>
                <select style={styles.select} value={form.university} onChange={(e) => handleSelect("university", e.target.value)}>
                  <option value="">Select University</option>
                  {UNIVERSITIES.map((u) => (
                    <option key={u}>{u}</option>
                  ))}
                </select>
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Degree Pursued</label>
                <select style={styles.select} value={form.degree} onChange={(e) => handleSelect("degree", e.target.value)}>
                  <option value="">Select Degree Pursued</option>
                  {DEGREES.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>CGPA</label>
                <input
                  style={styles.input}
                  placeholder="e.g. 3.33"
                  value={form.cgpa}
                  onChange={(e) => handleText("cgpa", e.target.value)}
                />
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Current semester</label>
                <select style={styles.select} value={form.semester} onChange={(e) => handleSelect("semester", e.target.value)}>
                  <option value="">Select Current semester</option>
                  {["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "Graduated"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </FormSection>

            {/* Choose Your Internship Path at SPS */}
            <div style={styles.pathPanel}>
              <h3 style={styles.pathTitle}>Choose Your Internship Path at SPS</h3>
              <p style={styles.pathIntro}>
                At SPS, you have a choice of four different internship tracks, each designed to help you
                learn in a different way depending on your interests and career goals. These tracks are
                connected — most interns naturally move from one to another as they gain clarity and
                experience.
              </p>

              {TRACK_ITEMS.map((item) => (
                <AccordionItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  body={item.body}
                  open={!!openTracks[item.title]}
                  onToggle={() => toggleTrack(item.title)}
                />
              ))}

              <div style={{ height: 8 }} />

              {TRACK_EXTRA_ITEMS.map((item) => (
                <AccordionItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  body={item.body}
                  open={!!openTracks[item.title]}
                  onToggle={() => toggleTrack(item.title)}
                />
              ))}
            </div>

            {/* Projects */}
            <FormSection icon="🗂️" title="Projects">
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Choose Projects:*</label>
              </div>
              {Object.entries(PROJECTS).map(([cat, items]) => (
                <ExpandCategory
                  key={cat}
                  label={cat}
                  open={!!openProjectCats[cat]}
                  onToggle={() => toggleProjectCat(cat)}
                >
                  <div style={styles.checkGrid}>
                    {items.map((p) => (
                      <CheckPill key={p} label={p} checked={form.projects.includes(p)} onChange={() => handleMulti("projects", p)} />
                    ))}
                  </div>
                </ExpandCategory>
              ))}
            </FormSection>

            {/* Competencies */}
            <FormSection icon="⭐" title="Competencies">
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Choose Competencies:</label>
              </div>
              {Object.entries(COMPETENCIES).map(([cat, items]) => (
                <ExpandCategory
                  key={cat}
                  label={cat}
                  open={!!openCompetencyCats[cat]}
                  onToggle={() => toggleCompetencyCat(cat)}
                >
                  <div style={styles.checkGrid}>
                    {items.map((c) => (
                      <CheckPill key={c} label={c} checked={form.competencies.includes(c)} onChange={() => handleMulti("competencies", c)} />
                    ))}
                  </div>
                </ExpandCategory>
              ))}
            </FormSection>

            {/* Specializations */}
            <FormSection icon="⚙️" title="Specializations">
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Choose Specializations:</label>
              </div>
              <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>
                Expand a <strong>Vendor</strong>, then a <strong>Product</strong>, to browse and select
                specializations that match your skills or interests.
              </div>

              {Object.entries(SPECIALIZATIONS_TREE).map(([vendor, products]) => (
                <ExpandCategory
                  key={vendor}
                  label={vendor}
                  open={!!openVendors[vendor]}
                  onToggle={() => toggleVendor(vendor)}
                >
                  {Object.entries(products).map(([product, specs]) => {
                    const productKey = `${vendor}::${product}`;
                    return (
                      <div key={productKey} style={styles.nestedExpandItem}>
                        <button
                          type="button"
                          style={styles.nestedExpandHeader}
                          onClick={() => toggleProduct(productKey)}
                        >
                          <span style={{ ...styles.expandPlus, width: 18, height: 18, fontSize: 12 }}>
                            {openProducts[productKey] ? "−" : "+"}
                          </span>
                          <span>{product}</span>
                        </button>
                        {openProducts[productKey] && (
                          <div style={{ padding: "0 14px 12px 40px" }}>
                            <div style={styles.checkGrid}>
                              {specs.map((s) => (
                                <CheckPill
                                  key={s}
                                  label={s}
                                  checked={form.specializations.includes(s)}
                                  onChange={() => handleMulti("specializations", s)}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </ExpandCategory>
              ))}
            </FormSection>

            {/* Micro-Internships */}
            <FormSection icon="⚡" title="Micro-Internships">
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Apply to Micro-Internships:</label>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {MICRO_INTERNSHIPS.map((m) => (
                  <div key={m.title} style={styles.microItem}>
                    <input
                      type="checkbox"
                      checked={form.microInternships.includes(m.title)}
                      onChange={() => handleMulti("microInternships", m.title)}
                      style={{ marginTop: 2 }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "flex-start" }}>
                        <span>{m.title}</span>
                        <button
                          type="button"
                          style={styles.microInfoBtn}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleMicroInfo(m.title);
                          }}
                          aria-label={`More info about ${m.title}`}
                        >
                          i
                        </button>
                      </div>
                      {openMicroInfo[m.title] && <div style={styles.microInfoText}>{m.info}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </FormSection>

            {/* Documents & Media */}
            <FormSection icon="📎" title="Documents & Media">
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Video interview link:</label>
                <input
                  style={styles.input}
                  placeholder="Paste your video link (e.g. Google Drive, OneDrive)"
                  value={form.videoLink}
                  onChange={(e) => handleText("videoLink", e.target.value)}
                />
                <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
                  ⓘ Video Interview Submission Instructions: Provide a link to an unlisted video (max 3 min).
                </div>
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Resume *</label>
                <FileUpload accept=".pdf" file={form.resume} onChange={(f) => handleFile("resume", f)} />
                <div style={{ fontSize: 12, color: "#94a3b8" }}>PDF only, max 5MB</div>
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Degree/Transcript *</label>
                <FileUpload accept=".pdf" file={form.transcript} onChange={(f) => handleFile("transcript", f)} />
                <div style={{ fontSize: 12, color: "#94a3b8" }}>PDF only, max 5MB</div>
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Picture (Passport sized):</label>
                <FileUpload accept=".jpg,.png,.jpeg,.gif" file={form.picture} onChange={(f) => handleFile("picture", f)} />
                <div style={{ fontSize: 12, color: "#94a3b8" }}>JPG, PNG or GIF, max 2MB</div>
              </div>

              <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 12 }}>*We do not share your information with any third parties.</div>
            </FormSection>

            <div style={styles.submitWrap}>
              <button type="submit" style={styles.submitBtn}>
                APPLY
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}