import { Mail, Phone, MapPin, Scale } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white pb-32">
      <div className="bg-marble border-b border-slate-200 py-32">
        <div className="container px-6 text-center">
          <Scale size={48} className="text-slate-gold mx-auto mb-8" />
          <h1 className="text-5xl font-black text-judicial uppercase tracking-tighter mb-4">Counsel Inquiries</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Establish a Direct Line to our Regulatory Terminal.</p>
        </div>
      </div>

      <div className="container px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black uppercase text-judicial mb-12 tracking-tighter">Global Headquarters</h2>
          <div className="space-y-12">
            {[
              { title: "Strategic Counsel", info: "counsel@legal-nexus.intel", icon: Mail },
              { title: "Intelligence Support", info: "+1 (888) NEXUS-LAW", icon: Phone },
              { title: "Judicial District", info: "1200 Regulatory Plaza, Washington D.C.", icon: MapPin }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-12 h-12 bg-marble judicial-border flex items-center justify-center text-judicial group-hover:bg-judicial group-hover:text-white transition-all">
                  <item.icon size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-gold mb-2">{item.title}</h4>
                  <p className="text-xl font-bold text-judicial">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-marble p-12 judicial-border">
          <h3 className="text-xl font-black uppercase text-judicial mb-8 tracking-tight">Intelligence Request</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Counsel Name</label>
                <input type="text" className="w-full bg-white border border-slate-200 px-6 py-4 text-sm outline-none focus:border-judicial transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Institutional Email</label>
                <input type="email" className="w-full bg-white border border-slate-200 px-6 py-4 text-sm outline-none focus:border-judicial transition-all" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Jurisdiction</label>
                <select className="w-full bg-white border border-slate-200 px-6 py-4 text-sm outline-none focus:border-judicial transition-all">
                  <option>US Federal</option>
                  <option>EU / GDPR</option>
                  <option>APAC Region</option>
                  <option>Cross-Border / International</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Client Classification</label>
                <select className="w-full bg-white border border-slate-200 px-6 py-4 text-sm outline-none focus:border-judicial transition-all">
                  <option>Corporate Enterprise</option>
                  <option>Legal Counsel / Law Firm</option>
                  <option>Government / Regulatory</option>
                  <option>Academic / Research</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Regulatory Domain</label>
              <select className="w-full bg-white border border-slate-200 px-6 py-4 text-sm outline-none focus:border-judicial transition-all">
                <option>Intellectual Property</option>
                <option>Corporate Compliance</option>
                <option>Tech Regulation</option>
                <option>Data Sovereignty</option>
                <option>Antitrust & Competition</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Matter Classification / Inquiry Brief</label>
              <textarea rows={4} className="w-full bg-white border border-slate-200 px-6 py-4 text-sm outline-none focus:border-judicial transition-all" />
            </div>
            <button className="btn-judicial w-full py-5 text-xs">Transmit Inquiry to Board</button>
          </form>
        </div>
      </div>
    </main>
  );
}
