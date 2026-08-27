"use client";

import { useState, useMemo } from "react";
import { Menu, Search, ChevronLeft, ChevronRight} from "lucide-react";

interface LaborRate {
  sr: number;
  laborCategory: string;
  unit: string;
  rate: string;
}

const TABS = ["Labor Rate", "Software", "Hardware", "Maintenance", "Other Direct Costs"];

const generateLaborRates = (): LaborRate[] => {
  const categories = [
    "Project Manager",
    "Senior Software Engineer",
    "Software Engineer",
    "Business Analyst",
    "Quality Assurance Engineer",
    "Systems Architect",
    "Database Administrator",
    "Network Engineer",
    "Cybersecurity Specialist",
    "Cloud Solutions Architect",
    "Technical Writer",
    "DevOps Engineer",
    "UI/UX Designer",
    "Data Scientist",
    "Help Desk Technician",
  ];
  return Array.from({ length: 100 }, (_, i) => ({
    sr: i + 1,
    laborCategory: categories[i % categories.length],
    unit: "Hour",
    rate: `$${(85 + ((i * 7) % 140)).toFixed(2)}`,
  }));
};

const ALL_RATES = generateLaborRates();
const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

export default function VitaPricingPage() {
  const [activeTab, setActiveTab] = useState("Labor Rate");
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (!search.trim()) return ALL_RATES;
    const q = search.toLowerCase();
    return ALL_RATES.filter(
      (r) =>
        r.laborCategory.toLowerCase().includes(q) ||
        r.rate.toLowerCase().includes(q) ||
        String(r.sr).includes(q)
    );
  }, [search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const pageRows = filtered.slice(start, start + pageSize);

  return (
    <div className="min-h-screen bg-[#F5F6FA] font-sans text-slate-800">
      {/* Hero (header is absolutely positioned on top of this) */}
      <section className="relative overflow-hidden bg-[#0F1C3F]">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(56,97,251,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(124,58,237,0.30), transparent 50%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Header */}
        <header className="relative z-10 bg-transparent">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#1D4ED8] to-white/10 text-sm font-bold text-white ring-1 ring-white/20">
                SPS
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">
                Software Productivity Strategists, Inc.
              </span>
            </div>
            <button
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#7C9CFF] hover:text-[#7C9CFF]"
            >
              <Menu size={20} />
            </button>
          </div>
        </header>

        <div className="relative mx-auto grid min-h-[calc(60vh+65px)] w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-8 sm:min-h-[calc(70vh+65px)] sm:pb-28 sm:pt-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Left: title & description */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#7C9CFF]">
              GSA / VITA Catalog
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              VITA Pricing
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              Authorized labor categories, rates, and contract terms for VITA
              reseller software and services engagements.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <div className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  VITA Contract Number
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  VA-220218-SPS1
                </p>
              </div>
              <div className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Contract Title
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  IBM Reseller Software/Services
                </p>
              </div>
            </div>
          </div>

          {/* Right: schedule summary panel */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
              Schedule Snapshot
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  {ALL_RATES.length}
                </p>
                <p className="mt-1 text-xs text-slate-400">Labor categories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  $85&ndash;$224
                </p>
                <p className="mt-1 text-xs text-slate-400">Hourly rate range</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">5</p>
                <p className="mt-1 text-xs text-slate-400">Pricing schedules</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">SIN</p>
                <p className="mt-1 text-xs text-slate-400">VITA reseller terms</p>
              </div>
            </div>
            <div className="mt-6 h-px w-full bg-white/10" />
            <p className="mt-4 text-xs leading-relaxed text-slate-400">
              Rates shown below reflect ceiling pricing under the active
              contract term and are subject to standard VITA escalation
              clauses.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs + Table */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="overflow-x-auto">
          <div className="inline-flex min-w-full gap-1 rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-200 sm:min-w-0">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setPage(1);
                }}
                className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-[#0A0E1F] text-white shadow"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-base font-semibold text-slate-900">
              Labor Rate Schedule
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <label className="flex items-center gap-2 text-sm text-slate-500">
                Show
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setPage(1);
                  }}
                  className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-sm text-slate-700 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
                >
                  {PAGE_SIZE_OPTIONS.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                entries
              </label>

              <div className="relative">
                <Search
                  size={16}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search..."
                  className="w-full rounded-lg border border-slate-200 bg-white py-1.5 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 sm:w-56"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <th className="px-5 py-3">Sr</th>
                  <th className="px-5 py-3">Labor Category</th>
                  <th className="px-5 py-3">Unit</th>
                  <th className="px-5 py-3 text-right">Rate</th>
                </tr>
              </thead>
              <tbody>
                {pageRows.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-5 py-10 text-center text-slate-400">
                      No matching records found.
                    </td>
                  </tr>
                ) : (
                  pageRows.map((row, idx) => (
                    <tr
                      key={row.sr}
                      className={`border-b border-slate-100 transition hover:bg-[#1D4ED8]/5 ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                      }`}
                    >
                      <td className="px-5 py-3 font-medium text-slate-500">
                        {row.sr}
                      </td>
                      <td className="px-5 py-3 font-medium text-slate-800">
                        {row.laborCategory}
                      </td>
                      <td className="px-5 py-3 text-slate-500">{row.unit}</td>
                      <td className="px-5 py-3 text-right font-semibold text-[#0A0E1F]">
                        {row.rate}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 p-5 sm:flex-row">
            <p className="text-sm text-slate-500">
              Showing {filtered.length === 0 ? 0 : start + 1} to{" "}
              {Math.min(start + pageSize, filtered.length)} of {filtered.length}{" "}
              entries
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={14} />
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(0, 5)
                .map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`h-9 w-9 rounded-lg text-sm font-medium transition ${
                      currentPage === n
                        ? "bg-[#0A0E1F] text-white"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
}