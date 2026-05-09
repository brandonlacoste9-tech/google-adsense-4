import { Scale, Clock, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { slug: "outlook-2026" },
    { slug: "ai-authorship" },
    { slug: "cyber-liability" },
    { slug: "esg-governance" },
    { slug: "antitrust-tech" },
    { slug: "privacy-sovereignty" },
  ];
}

export default async function BriefingArticle(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const db = {
    "outlook-2026": {
      title: "Global Compliance Shift: The 2026 Regulatory Outlook",
      category: "Regulatory Affairs",
      readTime: "12 Min",
      content: `As we approach the second half of 2026, the global legal landscape is undergoing its most significant transformation since the digital pivot of the early 2000s. Nation-states are increasingly asserting "digital sovereignty," moving away from globalized data frameworks toward strictly regulated national digital borders. This shift represents a fundamental challenge for multi-national corporations who have built their operations on the premise of borderless data flow.`
    },
    "ai-authorship": {
      title: "Neural Authorship: The Supreme Court's AI IP Mandate",
      category: "Intellectual Property",
      readTime: "15 Min",
      content: `The Supreme Court's upcoming decision on the "Neural Authorship Act" will determine the next decade of intellectual property law. At the heart of the debate is whether non-human entities can hold copyright over autonomously generated datasets. Legal Nexus analysts predict a move toward "Hybrid Ownership" models that emphasize human oversight over pure algorithmic generation.`
    },
    "cyber-liability": {
      title: "Quantum Breach: The New Standard for Cyber Liability",
      category: "Cyber Law",
      readTime: "10 Min",
      content: `The Quantum Cryptography Act of 2025 has entirely redefined what constitutes "reasonable care" in institutional data protection. Corporations that fail to implement post-quantum encryption protocols are now facing strict liability in the event of a breach. This briefing explores the new thresholds for cyber negligence.`
    },
    "esg-governance": {
      title: "ESG Transparency: Mandatory Disclosure Protocols",
      category: "Corporate Governance",
      readTime: "8 Min",
      content: `New transparency mandates in the EU and North America are forcing a re-evaluation of corporate governance. ESG (Environmental, Social, and Governance) metrics are no longer optional "marketing" tokens but legally binding performance indicators that carry significant liability if misrepresented in public filings.`
    },
    "antitrust-tech": {
      title: "Silicon Antitrust: Breaking the Sovereign Clouds",
      category: "Tech Regulation",
      readTime: "14 Min",
      content: `The Department of Justice has launched its most aggressive campaign against hyper-scale cloud providers to date. By classifying fundamental cloud infrastructure as "essential public utilities," regulators are attempting to force interoperability mandates that could fundamentally disrupt the business models of the world's largest tech conglomerates.`
    },
    "privacy-sovereignty": {
      title: "The Sovereignty Act: National Data Borders in 2026",
      category: "Data Privacy",
      readTime: "11 Min",
      content: `The era of the "global internet" is rapidly fracturing into regional, highly regulated intranets. The European Union's updated Data Sovereignty Act now requires all foreign entities to store, process, and encrypt European citizen data strictly within physical EU borders, carrying unprecedented financial penalties for non-compliance.`
    }
  };

  const article = db[params.slug as keyof typeof db];
  
  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-judicial py-24 text-white">
        <div className="container px-6">
          <Link href="/briefing" className="flex items-center gap-2 text-slate-gold text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:-translate-x-2 transition-transform">
            <ArrowLeft size={14} /> Back to Repository
          </Link>
          <span className="bg-slate-gold/20 text-slate-gold px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Institutional Report</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1] mb-8">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-2"><Clock size={14} /> {article.readTime} Read</div>
            <div className="flex items-center gap-2"><Scale size={14} /> {article.category}</div>
            <div className="flex items-center gap-2 text-slate-gold"><ShieldCheck size={14} /> Verified Intelligence</div>
          </div>
        </div>
      </div>

      <div className="container px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-16">
        <div className="lg:col-span-3">
          <div className="prose prose-slate max-w-none space-y-8 text-lg text-slate-600 leading-relaxed">
            <p className="text-2xl font-bold text-judicial leading-tight italic">
              Executive Summary: {article.content.substring(0, 150)}...
            </p>
            
            <AdSlot type="in-article" />

            <h2 className="text-3xl font-black text-judicial uppercase tracking-tighter pt-8">Strategic Analysis</h2>
            <p>{article.content}</p>
            <p>
              In our continued monitoring of this sector, Legal Nexus has identified several key vectors that institutional counsel must prepare for. The velocity of regulatory change in this domain is unprecedented. 
            </p>
            <p>
              Firms that adopt a proactive compliance posture—integrating these new mandates into their core operational architecture—will find themselves insulated from the upcoming wave of multi-jurisdictional enforcement actions.
            </p>

            <div className="bg-marble p-12 judicial-border my-16 italic font-medium text-judicial">
              "We are seeing a move away from 'Self-Regulation' toward 'Algorithmic Compliance'—where the law is no longer just written in books, but embedded directly into the software that powers the global economy."
            </div>

            <h2 className="text-3xl font-black text-judicial uppercase tracking-tighter pt-8">Actionable Guidance for Counsel</h2>
            <p>
              Immediate steps should include a comprehensive audit of existing data flows and a review of third-party vendor agreements to ensure strict alignment with the new {article.category} standards.
            </p>
            
            <AdSlot type="in-article" />
          </div>
        </div>

        <aside className="space-y-12">
          <div className="p-8 judicial-border bg-marble">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-gold mb-6">Counsel Assigned</h4>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-judicial rounded-full flex items-center justify-center text-white font-black">MS</div>
              <div>
                <p className="text-sm font-black uppercase text-judicial">Marcus Sterling</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase">Senior Regulatory Analyst</p>
              </div>
            </div>
          </div>
          
          <AdSlot type="sidebar" />

          <div className="p-8 bg-judicial text-white">
            <h4 className="text-sm font-black uppercase tracking-widest mb-4">Request Full Brief</h4>
            <p className="text-xs text-slate-400 mb-6">Access the raw data and case filings associated with this report.</p>
            <Link href="/contact" className="block text-center w-full bg-slate-gold text-judicial py-3 font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors">Client Login</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
