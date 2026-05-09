import { Scale, ShieldCheck, Briefcase, FileText, Gavel, ArrowRight } from "lucide-react";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";

export default function Home() {
  const practiceAreas = [
    { title: "Corporate Compliance", desc: "Navigating the complexities of global regulatory frameworks.", icon: ShieldCheck },
    { title: "Intellectual Property", desc: "Securing the future of innovation through strategic protection.", icon: Briefcase },
    { title: "Civil Litigation", desc: "Expert representation in complex commercial disputes.", icon: Gavel },
    { title: "Tech Regulation", desc: "The intersection of law and the next generation of computing.", icon: Scale }
  ];

  return (
    <main className="min-h-screen">
      {/* Institutional Navigation */}
      <nav className="bg-judicial text-white py-6">
        <div className="container flex justify-between items-center px-6">
          <Link href="/" className="flex items-center gap-3">
            <Scale size={24} className="text-slate-gold" />
            <span className="font-black tracking-tighter text-xl uppercase">Legal<span className="text-slate-gold">Nexus</span></span>
          </Link>
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="/briefing" className="hover:text-slate-gold transition-colors">Compliance</Link>
            <Link href="/briefing" className="hover:text-slate-gold transition-colors">Repository</Link>
            <Link href="/contact" className="hover:text-slate-gold transition-colors">Counsel</Link>
            <Link href="/about" className="hover:text-slate-gold transition-colors">About</Link>
          </div>
          <button className="btn-judicial py-3 text-[10px]">Client Terminal</button>
        </div>
      </nav>

      {/* Hero Section - Maximum Authority */}
      <header className="bg-marble border-b border-slate-200 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
           <Scale size={800} className="-mr-64 -mt-32" />
        </div>
        <div className="container px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="section-label">Institutional Intelligence</span>
            <h1 className="text-7xl font-black mb-8 leading-[0.9] text-judicial uppercase tracking-tighter">
              The Architecture of <span className="text-slate-gold italic">Justice.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              Legal Nexus is the definitive repository for corporate counsel, providing institutional-grade analysis on global regulatory shifts and intellectual property protection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/briefing" className="btn-judicial">Explore Case Studies</Link>
              <Link href="/briefing" className="px-8 py-4 border-2 border-judicial font-black text-[10px] uppercase tracking-widest hover:bg-judicial hover:text-white transition-all">Review Reports</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Top Monetization Node */}
      <div className="container px-6 py-12">
        <AdSlot type="leaderboard" />
      </div>

      {/* Practice Areas - Trust Signals */}
      <section className="py-24 bg-white">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="section-label">Domain Expertise</span>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-judicial">Specialized Legal Intelligence</h2>
            </div>
            <p className="text-slate-500 font-bold text-sm max-w-sm">Focusing on high-stakes sectors where precision is the only standard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, i) => (
              <div key={i} className="legal-card p-10 judicial-border group">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center text-judicial mb-8 group-hover:bg-judicial group-hover:text-white transition-all">
                  <area.icon size={20} />
                </div>
                <h3 className="text-lg font-black mb-4 uppercase tracking-tight text-judicial">{area.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">{area.desc}</p>
                <Link href="/briefing" className="text-[10px] font-black uppercase tracking-widest text-judicial flex items-center gap-2 group-hover:gap-4 transition-all">
                  Full Brief <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jurisdictional Intelligence Map */}
      <section className="py-24 bg-judicial text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          {/* Simulated Map Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="container px-6 relative z-10">
          <div className="mb-20">
            <span className="text-slate-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Global Coverage</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Jurisdictional <br />Intelligence.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { region: "Americas", status: "STRICT", info: "SEC Compliance & Silicon Valley Tech Regulation Hub." },
              { region: "European Union", status: "ACTIVE", info: "GDPR Mastery & Digital Sovereignty Frameworks." },
              { region: "APAC Region", status: "EMERGING", info: "Cross-Border Trade Law & IP Protection Intelligence." }
            ].map((zone, i) => (
              <div key={i} className="border-l border-white/10 pl-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-slate-gold animate-pulse" />
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-gold">{zone.region}</span>
                </div>
                <div className="text-[10px] font-black mb-4 uppercase tracking-[0.3em] text-white/40">Status: {zone.status}</div>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{zone.info}</p>
                <Link href="/briefing" className="text-[9px] font-black uppercase tracking-widest text-white hover:text-slate-gold transition-colors">Review Region Profile</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Intelligence Section (AdSense Bait) */}
      <section className="py-24 bg-marble">
        <div className="container px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-judicial">Latest Legal Briefs</h2>
            {[
              "Global Compliance Shift: The 2026 Regulatory Outlook",
              "AI & Copyright: Navigating the New Frontier of IP Law",
              "Cyber Liability: The Legal Implications of Data Breaches",
              "Privacy Mandates: Understanding the Global Sovereignty Act"
            ].map((title, i) => (
              <Link href="/briefing" key={i} className="flex gap-8 group cursor-pointer border-b border-slate-200 pb-12 last:border-0">
                <div className="text-4xl font-black text-slate-200 group-hover:text-slate-gold transition-colors">0{i+1}</div>
                <div>
                  <h4 className="text-xl font-bold text-judicial mb-2 group-hover:translate-x-2 transition-transform">{title}</h4>
                  <p className="text-sm text-slate-500 max-w-xl leading-relaxed">Detailed analysis of the upcoming changes to international legal standards and how they affect multi-national operations.</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="space-y-12">
            <AdSlot type="sidebar" />
            <div className="legal-card p-8 bg-judicial text-white">
              <h4 className="text-sm font-black uppercase tracking-widest mb-4">The Nexus Brief</h4>
              <p className="text-xs text-slate-400 mb-8">Weekly intelligence reports delivered to your terminal.</p>
              <input type="email" placeholder="Counsel Email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs mb-4 outline-none focus:border-slate-gold" />
              <button className="w-full bg-slate-gold text-judicial py-3 font-black text-[10px] uppercase tracking-widest">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-judicial text-white py-24 border-t border-white/5">
        <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
             <div className="flex items-center gap-3 mb-8">
              <Scale size={24} className="text-slate-gold" />
              <span className="font-black tracking-tighter text-xl uppercase">Legal<span className="text-slate-gold">Nexus</span></span>
            </div>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Legal Nexus is a premier intelligence platform for corporate law and regulatory compliance. Part of the Capital Pulse Media Group.
            </p>
          </div>
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-slate-gold">Legal</h5>
            <ul className="space-y-4 text-xs text-slate-400">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimers</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-slate-gold">Support</h5>
            <ul className="space-y-4 text-xs text-slate-400">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Counsel</Link></li>
              <li><Link href="/briefing" className="hover:text-white transition-colors">Intelligence Repo</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Institutional</Link></li>
            </ul>
          </div>
        </div>
        <div className="container px-6 mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest italic">ca-pub-4276130467303652 // AD-AUTHORITY-VERIFIED</p>
          <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest">© 2026 Legal Nexus Intelligence Group.</p>
        </div>
      </footer>
    </main>
  );
}
