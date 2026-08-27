"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

// ─── MENU DATA ────────────────────────────────────────────────────────────────

const menuItems = [
  { name: "Home", link: "/" },

  {
    name: "Product",
    dropdown: [
      {
        name: "SPS",
        link: "#",
        submenu: [
          { name: "MYID Self Verify", link: "/myid" },
          { name: "Azalio", link: "/azalio" },
          { name: "Fabrico", link: "/fabrico" },
          { name: "BMS", link:"/sps/bms" },
          { name: "CSM", link: "/csm" },
        ],
      },
      {
        name: "IBM",
        link: "#",
        submenu: [
          { name: "Automation", link: "/ibm/automation/" },
          { name: "Data & AI", link: "/ibm/data-ai/" },
          { name: "Security", link: "/ibm/security/" },
          { name: "Sustainability", link: "ibm/sustainability/" },
        ],
      },
      {
        name: "Others",
        link: "/index.php?techProviderSection",
      },
    ],
  },

  {
    name: "Services",
    dropdown: [
      {
        name: "Cybersecurity",
        link: "/services/cybersecurity",
        submenu: [
          { name: "Network Security", link: "/services/network-security" },
          { name: "SMaaS", link: "/security/smaas" },
          { name: "GRC", link: "/security/grc" },
          { name: "Identity & Access", link: "/security/iam" },
          { name: "Threat Management", link: "/security/threat-management" },
          { name: "Data Security", link: "/security/data-security" },
        ],
      },
      {
        name: "Cloud",
        link: "/services/cloud",
        submenu: [
          { name: "Cloud Migration", link: "/services/cloud/migration" },
          { name: "Cloud Security", link: "/services/cloud/security" },
          { name: "Managed Cloud", link: "/services/cloud/managed" },
        ],
      },
      {
        name: "AI & Automation",
        link: "/services/ai-automation",
        submenu: [
          { name: "AI Solutions", link: "/services/ai-automation/solutions" },
          { name: "Process Automation", link: "/services/ai-automation/process" },
          { name: "Data for AI", link: "/services/ai-automation/data" },
        ],
      },
      {
        name: "Collaboration",
        link: "/services/collaboration",
        submenu: [
          { name: "Microsoft 365", link: "/services/collaboration/m365" },
          { name: "Google Workspace", link: "/services/collaboration/google" },
          { name: "Unified Communications", link: "/services/collaboration/unified" },
        ],
      },
      {
        name: "Training",
        link: "/services/training",
        submenu: [
          { name: "Cyber Range", link: "/services/training/cyber-range" },
          { name: "Executive Training", link: "/services/training/executive" },
          { name: "Certifications", link: "/services/training/certifications" },
        ],
      },
    ],
  },

  {
    name: "Verticals",
    dropdown: [
      {
        name: "Public Sector",
        link: "/verticals/public-sector",
        submenu: [
          { name: "County Government", link: "/public-sector/county-government" },
          { name: "Healthcare", link: "https://www.spsnet.com/industries/public-sector/healthcare-mid-atl" },
          { name: "Government", link: "https://www.spsnet.com/industries/public-sector/government" },
          { name: "Public Safety", link: "https://www.spsnet.com/industries/public-sector/public-safety" },
          { name: "Education", link: "https://www.spsnet.com/industries/public-sector/education" },
        ],
      },
      {
        name: "Industrials",
        link: "/verticals/industrials",
        submenu: [
          { name: "Manufacturing", link: "https://www.spsnet.com/industries/industrials/manufacturing" },
          { name: "Textile", link: "https://www.spsnet.com/industries/industrials/textile" },
          { name: "Utilities", link: "https://www.spsnet.com/industries/industrials/utilities" },
        ],
      },
      {
        name: "Healthcare",
        link: "/verticals/healthcare",
        submenu: [
          { name: "Compliance Requirements", link: "https://www.spsnet.com/industries/healthcare/compliance-requirements" },
          { name: "Health Systems Interoperability", link: "https://www.spsnet.com/industries/healthcare/health-systems-interoperability" },
          { name: "Multi-Clinic Consolidation", link: "https://www.spsnet.com/industries/healthcare/multi-clinic-consolidation" },
          { name: "Patient Experience", link: "https://www.spsnet.com/industries/healthcare/patient-experience" },
          { name: "Retail", link: "https://www.spsnet.com/industries/healthcare/retail-1" },
          { name: "Telehealth & Remote Patient Monitoring", link: "https://www.spsnet.com/industries/healthcare/telehealth-amp-remote-patient-monitoring" },
        ],
      },
      {
        name: "Retail",
        link: "/verticals/retail",
        submenu: [
          { name: "Convenience Store", link: "https://www.spsnet.com/industries/retail/convenience-stores" },
          { name: "Marketing/Merchandising", link: "https://www.spsnet.com/industries/retail/marketing-merchandising" },
          { name: "Omni-channel Operations", link: "https://www.spsnet.com/industries/retail/omni-channel-operations" },
          { name: "Personalization & Localization", link: "https://www.spsnet.com/industries/retail/personalization-amp-localization" },
          { name: "Supply Chain", link: "https://www.spsnet.com/industries/retail/supply-chain" },
        ],
      },
      {
        name: "Energy",
        link: "/verticals/energy",
        submenu: [
          { name: "Electric", link: "https://www.spsnet.com/industries/energy/electric" },
          { name: "Oil & Gas", link: "https://www.spsnet.com/industries/energy/oil-amp-gas" },
        ],
      },
      {
        name: "Financial",
        link: "/verticals/finance",
        submenu: [
          { name: "Banking", link: "https://www.spsnet.com/industries/financial/banking" },
          { name: "Insurance", link: "https://www.spsnet.com/industries/financial/insurance" },
        ],
      },
      {
        name: "Telecommunications",
        link: "/verticals/telecommunications",
        submenu: [
          { name: "Telcos", link: "https://www.spsnet.com/industries/telecommunications/telcos" },
        ],
      },
    ],
  },

  { 
    name: "SpinnLabs",
    dropdown: [
      { name: "Overview", link: "/overview" },
      { name: "Academia", link: "/academia" },
      { name: "Industry", link: "/industry" },
      { name: "Centers of Expertise", link: "/centers-of-expertise" },
      { name: "Startups", link: "/Startups" },
    ],
  },

  {
    name: "Activities",
    dropdown: [
      {
        name: "Roundtables",
        link: "/sps-events",
        submenu: [
          { name: "VISO Roundtable Series for Virginia Information Security Officers", link: "/viso-roundtable-series-for-virginia-information-security-officers" },
        ],
      },
      {
        name: "Webinars",
        link: "https://www.spsnet.com/sps-events/",
        submenu: [
          { name: "Agentic Security", link: "https://www.spsnet.com/sps-events/webinar/agentic-security" },
          { name: "Past Webinars", link: "https://www.spsnet.com/sps-events/past-events/" },
        ],
      },
      { name: "Workshops", link: "#" },
      { name: "Special Interest Groups", link: "https://www.spsnet.com/sps-sigs/" },
      { name: "Training", link: "/training" },
      { name: "Internship Program 2026", link: "/SPSInternshipPage" },
    ],
  },

  {
    name: "Contracts",
    dropdown: [
      {
        name: "VITA",
        link: "#",
        submenu: [
          { name: "Pricing", link: "/vita-pricing" },
        ],
      },
    ],
  },

  {
    name: "About Us",
    dropdown: [
      { name: "Our Story", link: "/about-us/OurStory" },
      { name: "Careers", link: "/about-us/careers" },
    ],
  },
  { name: "Contact Us", link: "/contact" },
];

// ─── TYPES ────────────────────────────────────────────────────────────────────

type SubmenuItem = { name: string; link: string };

type DropdownItem = {
  name: string;
  link?: string;
  submenu?: SubmenuItem[];
};

type MenuItem = {
  name: string;
  link?: string;
  dropdown?: DropdownItem[];
};

// ─── DROPDOWN PANEL ──────────────────────────────────────────────────────────
// Design matches the screenshot: white panels, blue bold text, arrow icons,
// horizontal dividers between every item, submenu slides in on the right.

function DropdownPanel({ items }: { items: DropdownItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    const firstWithSub = items.findIndex((i) => i.submenu);
    setActiveIndex(firstWithSub >= 0 ? firstWithSub : null);
  }, [items]);

  return (
    <div
      className="absolute top-full left-0 z-50"
      style={{
        marginTop: "0px",
      }}
    >
      <div className="relative flex">
        {/* LEFT PANEL */}
        <div
          className="bg-white shadow-xl"
          style={{
            minWidth: "230px",
            borderTop: "3px solid #1a3c8f",
          }}
        >
          {items.map((item, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                style={{
                  borderBottom: "1px solid #e5e7eb",
                  position: "relative",
                }}
              >
                <Link href={item.link || "#"}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 20px",
                      cursor: "pointer",
                      backgroundColor:
                        isActive && item.submenu
                          ? "#f3f6ff"
                          : "white",
                      transition: "0.2s",
                    }}
                  >
                    <span
                      style={{
                        color: "#1a3c8f",
                        fontWeight: 700,
                        fontSize: "15px",
                      }}
                    >
                      {item.name}
                    </span>

                    {item.submenu && (
                      <ArrowRight
                        size={16}
                        style={{
                          color: "#1a3c8f",
                        }}
                      />
                    )}
                  </div>
                </Link>

                {/* SUBMENU */}
                {isActive && item.submenu && (
                  <div
                    className="absolute bg-white shadow-xl"
                    style={{
                      left: "100%",
                      top: "10px", // ← ye niche la raha hai
                      minWidth: "260px",
                      borderLeft: "1px solid #e5e7eb",
                    }}
                  >
                    {item.submenu.map((sub, j) => (
                      <Link key={j} href={sub.link}>
                        <div
                          style={{
                            padding: "16px 22px",
                            borderBottom: "1px solid #e5e7eb",
                            color: "#1a3c8f",
                            fontWeight: 600,
                            fontSize: "15px",
                            cursor: "pointer",
                            background: "white",
                            transition: "0.2s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background =
                              "#f3f6ff")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background =
                              "white")
                          }
                        >
                          {sub.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <nav
        className={`backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div
          ref={navRef}
          className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between"
        >
          {/* LOGO - Made Bold */}
          <div className="flex items-center font-bold">
            <img
              src={isScrolled ? "/images/black-logo.png" : "/images/logo-white.png"}
              className="h-16 w-[250px] object-contain transition-all duration-300"
              alt="logo"
            />
          </div>

          {/* MENU */}
          <div
            className={`hidden md:flex items-center gap-6 text-sm font-medium transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {(menuItems as MenuItem[]).map((item, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenIndex(i)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                {!item.dropdown ? (
                  <Link href={item.link || "#"}>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-400 transition-colors duration-200 py-5">
                      {item.name}
                    </div>
                  </Link>
                ) : (
                  <>
                    <div className="flex items-center gap-1 cursor-pointer  transition-colors duration-200 py-5 select-none">
                      {item.name}
                      <ChevronDown
                        size={13}
                        className={`mt-[1px] transition-transform duration-200 ${
                          openIndex === i ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`transition-all duration-200 ${
                        openIndex === i
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1"
                      }`}
                    >
                      <DropdownPanel items={item.dropdown} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT - Internship Button Made Bold */}
          <div className="flex items-center gap-4">
            <Link href="/SPSInternshipPage">
              <button
                className={`px-5 py-2 rounded-full border font-bold transition-all duration-200 ${
                  isScrolled
                    ? "border-black text-black hover:bg-black hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                Internship
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}