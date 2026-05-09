import { Scale, ShieldCheck, Globe } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-marble pb-32">
      <div className="bg-judicial py-32 text-white">
        <div className="container px-6">
          <span className="text-slate-gold font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Mandate</span>
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            The Guardian of <br /><span className="text-slate-gold italic">Global Compliance.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Legal Nexus was founded on the principle that in an era of rapid technological and regulatory shift, institutional precision is the only safeguard for global enterprise.
          </p>
        </div>
      </div>

      <div className="container px-6 -mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Judicial Integrity", desc: "Every analysis we publish is vetted against the highest standards of regulatory accuracy.", icon: Scale },
          { title: "Global Reach", desc: "Providing intelligence on multi-jurisdictional frameworks from the EU to the Pacific Rim.", icon: Globe },
          { title: "Digital Sovereignty", desc: "Specializing in the intersection of law, AI, and sovereign data protection.", icon: ShieldCheck }
        ].map((item, i) => (
          <div key={i} className="bg-white p-12 judicial-border shadow-xl group hover:-translate-y-2 transition-all">
            <div className="w-12 h-12 bg-slate-100 flex items-center justify-center text-judicial mb-8 group-hover:bg-judicial group-hover:text-white transition-colors">
              <item.icon size={20} />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-judicial mb-4">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

    <div className="container px-6 py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-black uppercase text-judicial mb-8 tracking-tighter">A Legacy of Regulatory Intelligence</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              Legal Nexus operates as a premier intelligence hub for corporate counsel, policy makers, and intellectual property strategists. Our mission is to democratize complex legal insights, providing the modern professional with the tools needed to navigate the ever-evolving global regulatory landscape.
            </p>
            <p>
              By leveraging AI-driven analysis and deep-bench institutional expertise, we deliver briefings that go beyond the surface of judicial filings, uncovering the strategic implications of law in the digital age.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-black uppercase text-judicial mb-12 tracking-tighter border-t border-slate-200 pt-12">Board of Counsel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Marcus Sterling", role: "Senior Regulatory Analyst", expertise: "Cross-Border Litigation & Sovereign Data", initials: "MS" },
              { name: "Elena Rostova", role: "Director of IP Strategy", expertise: "AI Authorship & Patent Frameworks", initials: "ER" },
              { name: "Julian Vance", role: "Chief Compliance Officer", expertise: "ESG Mandates & Corporate Governance", initials: "JV" },
            ].map((counsel, i) => (
              <div key={i} className="bg-marble p-8 judicial-border border border-slate-200">
                <div className="w-16 h-16 bg-judicial rounded-sm flex items-center justify-center text-slate-gold font-black text-xl mb-6">
                  {counsel.initials}
                </div>
                <h3 className="text-xl font-black text-judicial uppercase tracking-tight mb-2">{counsel.name}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-gold mb-4">{counsel.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed italic border-t border-slate-200 pt-4">
                  Expertise: {counsel.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
