export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-white py-32">
      <div className="container px-6 max-w-4xl">
        <span className="text-slate-gold font-black uppercase tracking-[0.3em] text-[10px] mb-6 block text-center">Regulatory Protocol</span>
        <h1 className="text-5xl font-black text-judicial uppercase tracking-tighter mb-16 text-center">Judicial Disclaimer</h1>
        
        <div className="prose prose-slate max-w-none space-y-12 text-slate-600 leading-relaxed bg-marble p-12 judicial-border">
          <section>
            <h2 className="text-xl font-black uppercase text-judicial tracking-tight mb-4">No Attorney-Client Relationship</h2>
            <p className="font-bold text-judicial">
              The information provided on Legal Nexus does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only.
            </p>
            <p>
              Accessing or using the Legal Nexus terminal, or communicating with us via email or contact forms, does not create an attorney-client relationship between you and Legal Nexus or any of its contributing authors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase text-judicial tracking-tight mb-4">Accuracy & Completeness</h2>
            <p>
              Information on this website may not constitute the most up-to-date legal or other information. This website contains links to other third-party websites. Such links are only for the convenience of the reader, user or browser; Legal Nexus and its members do not recommend or endorse the contents of the third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase text-judicial tracking-tight mb-4">Professional Consultation</h2>
            <p>
              Readers of this website should contact their attorney to obtain advice with respect to any particular legal matter. No reader, user, or browser of this site should act or refrain from acting on the basis of information on this site without first seeking legal advice from counsel in the relevant jurisdiction.
            </p>
          </section>

          <footer className="pt-12 border-t border-slate-200 italic text-[10px] uppercase tracking-widest text-slate-400">
            Institutional Publication ID: 4276130467303652 // Nexus Intelligence Group
          </footer>
        </div>
      </div>
    </main>
  );
}
