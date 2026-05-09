import { Scale, Clock, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";

export default function Briefing() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-judicial py-24 text-white">
        <div className="container px-6">
          <Link href="/" className="flex items-center gap-2 text-slate-gold text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:-translate-x-2 transition-transform">
            <ArrowLeft size={14} /> Back to Terminal
          </Link>
          <span className="bg-slate-gold/20 text-slate-gold px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Institutional Report</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Global Compliance Shift: <br /><span className="text-slate-gold italic">The 2026 Regulatory Outlook.</span>
          </h1>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-2"><Clock size={14} /> 12 Min Read</div>
            <div className="flex items-center gap-2"><Scale size={14} /> Regulatory Affairs</div>
            <div className="flex items-center gap-2 text-slate-gold"><ShieldCheck size={14} /> Verified Intelligence</div>
          </div>
        </div>
      </div>

      <div className="container px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-16">
        <div className="lg:col-span-3">
          <div className="prose prose-slate max-w-none space-y-8 text-lg text-slate-600 leading-relaxed">
            <p className="text-2xl font-bold text-judicial leading-tight italic">
              As we approach the second half of 2026, the global legal landscape is undergoing its most significant transformation since the digital pivot of the early 2000s.
            </p>
            
            <AdSlot type="leaderboard" />

            <h2 className="text-3xl font-black text-judicial uppercase tracking-tighter pt-8">The Rise of Sovereign Data Mandates</h2>
            <p>
              Nation-states are increasingly asserting "digital sovereignty," moving away from globalized data frameworks toward strictly regulated national digital borders. This shift represents a fundamental challenge for multi-national corporations who have built their operations on the premise of borderless data flow.
            </p>

            <h2 className="text-3xl font-black text-judicial uppercase tracking-tighter pt-8">AI-Generated IP: The New Frontier</h2>
            <p>
              The Supreme Court's upcoming decision on the "Neural Authorship Act" will determine the next decade of intellectual property law. At the heart of the debate is whether non-human entities can hold copyright over autonomously generated datasets. Legal Nexus analysts predict a move toward "Hybrid Ownership" models that emphasize human oversight.
            </p>

            <div className="bg-marble p-12 judicial-border my-16 italic font-medium text-judicial">
              "We are seeing a move away from 'Self-Regulation' toward 'Algorithmic Compliance'—where the law is no longer just written in books, but embedded directly into the software that powers the global economy."
            </div>

            <h2 className="text-3xl font-black text-judicial uppercase tracking-tighter pt-8">The ESG Regulatory Pivot</h2>
            <p>
              New transparency mandates in the EU and North America are forcing a re-evaluation of corporate governance. ESG (Environmental, Social, and Governance) metrics are no longer optional "marketing" tokens but legally binding performance indicators that carry significant liability if misrepresented.
            </p>
          </div>
        </div>

        <aside className="space-y-12">
          <div className="p-8 judicial-border bg-marble">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-gold mb-6">Counsel Assigned</h4>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-judicial rounded-full flex items-center justify-center text-white font-black">NV</div>
              <div>
                <p className="text-sm font-black uppercase text-judicial">Marcus Sterling</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase">Senior Regulatory Analyst</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed italic">
              Specializing in cross-border litigation and tech-sovereignty frameworks.
            </p>
          </div>
          
          <AdSlot type="sidebar" />

          <div className="p-8 bg-judicial text-white">
            <h4 className="text-sm font-black uppercase tracking-widest mb-4">Request Full Brief</h4>
            <p className="text-xs text-slate-400 mb-6">Access the raw data and case filings associated with this report.</p>
            <button className="w-full bg-slate-gold text-judicial py-3 font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors">Client Login</button>
          </div>
        </aside>
      </div>
    </main>
  );
}
