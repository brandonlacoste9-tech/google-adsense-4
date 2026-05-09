import { Scale, Clock, ShieldCheck, ArrowRight, Search, Filter } from "lucide-react";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";

export default function Briefing() {
  const reports = [
    {
      id: "outlook-2026",
      title: "Global Compliance Shift: The 2026 Regulatory Outlook",
      category: "Regulatory Affairs",
      readTime: "12 Min",
      desc: "An exhaustive analysis of upcoming treaty changes and their impact on cross-border data sovereignty."
    },
    {
      id: "ai-authorship",
      title: "Neural Authorship: The Supreme Court's AI IP Mandate",
      category: "Intellectual Property",
      readTime: "15 Min",
      desc: "Examining the legal framework for non-human authorship in the wake of the 2026 judicial session."
    },
    {
      id: "cyber-liability",
      title: "Quantum Breach: The New Standard for Cyber Liability",
      category: "Cyber Law",
      readTime: "10 Min",
      desc: "How the Quantum Cryptography Act of 2025 has redefined 'reasonable care' in data protection."
    },
    {
      id: "esg-governance",
      title: "ESG Transparency: Mandatory Disclosure Protocols",
      category: "Corporate Governance",
      readTime: "8 Min",
      desc: "Detailed breakdown of the new SEC mandates regarding environmental and social governance reporting."
    },
    {
      id: "antitrust-tech",
      title: "Silicon Antitrust: Breaking the Sovereign Clouds",
      category: "Tech Regulation",
      readTime: "14 Min",
      desc: "Analysis of the DOJ's recent moves against hyper-scale cloud providers and data monopolies."
    },
    {
      id: "privacy-sovereignty",
      title: "The Sovereignty Act: National Data Borders in 2026",
      category: "Data Privacy",
      readTime: "11 Min",
      desc: "Understanding the shift from globalized data frameworks to strictly regulated national digital borders."
    }
  ];

  return (
    <main className="min-h-screen bg-marble">
      <div className="bg-judicial py-24 text-white">
        <div className="container px-6">
          <span className="text-slate-gold font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Intelligence Terminal</span>
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            Regulatory <br /><span className="text-slate-gold italic">Repository.</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-6 max-w-4xl">
            <div className="flex-1 bg-white/5 border border-white/10 px-6 py-4 flex items-center gap-4">
              <Search size={18} className="text-slate-gold" />
              <input type="text" placeholder="Search Intelligence Repo..." className="bg-transparent border-none outline-none text-sm w-full font-bold" />
            </div>
            <button className="bg-slate-gold text-judicial px-8 py-4 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
              <Filter size={14} /> Filter by Jurisdiction
            </button>
          </div>
        </div>
      </div>

      <div className="container px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reports.map((report, i) => (
                <div key={i} className="bg-white p-10 judicial-border group hover:shadow-2xl transition-all border border-slate-200">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-gold">{report.category}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{report.readTime} Read</span>
                  </div>
                  <h3 className="text-xl font-black text-judicial mb-4 uppercase tracking-tight group-hover:text-slate-gold transition-colors">{report.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-8">{report.desc}</p>
                  <Link href={`/briefing/${report.id}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-judicial flex items-center gap-2 group-hover:gap-4 transition-all">
                    Access Report <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
            <AdSlot type="leaderboard" />
          </div>

          <aside className="space-y-12">
            <div className="p-8 judicial-border bg-judicial text-white">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-gold mb-6">Terminal Access</h4>
              <p className="text-xs text-slate-400 mb-8 leading-relaxed">Institutional users can download raw case filings and regulatory datasets directly from the terminal.</p>
              <button className="w-full border border-white/20 py-4 font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-judicial transition-all">Download Dataset</button>
            </div>
            <AdSlot type="sidebar" />
          </aside>
        </div>
      </div>
    </main>
  );
}
