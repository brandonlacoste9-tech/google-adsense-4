export default function Privacy() {
  return (
    <main className="min-h-screen bg-white py-32">
      <div className="container px-6 max-w-4xl">
        <span className="text-slate-gold font-black uppercase tracking-[0.3em] text-[10px] mb-6 block text-center">Data Sovereignty</span>
        <h1 className="text-5xl font-black text-judicial uppercase tracking-tighter mb-16 text-center">Privacy Mandate</h1>
        
        <div className="prose prose-slate max-w-none space-y-12 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-black uppercase text-judicial tracking-tight mb-4">1.0 Institutional Commitment</h2>
            <p>
              Legal Nexus operates under a strict mandate of data sovereignty. We recognize that our users are often dealing with sensitive regulatory and legal intelligence. Our commitment to privacy is not merely a legal requirement but an institutional pillar of our intelligence platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase text-judicial tracking-tight mb-4">2.0 Intelligence Collection</h2>
            <p>
              We collect minimal personal data, primarily focused on terminal access credentials and subscription preferences. This may include institutional email addresses, professional titles, and regulatory interests used to personalize your intelligence briefings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase text-judicial tracking-tight mb-4">3.0 Data Protection Protocols</h2>
            <p>
              Your data is encrypted using military-grade protocols and stored on sovereign servers. We do not sell, trade, or lease your intelligence profile to third-party data brokers. All analytical data generated through your use of the terminal is used strictly for internal optimization of our legal algorithms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase text-judicial tracking-tight mb-4">4.0 Global Compliance</h2>
            <p>
              Legal Nexus adheres to the highest global standards of data protection, including GDPR, CCPA, and emerging sovereign data acts. Users retain the right to audit, rectify, or purge their institutional profiles from our terminal at any time.
            </p>
          </section>

          <footer className="pt-12 border-t border-slate-100 italic text-sm">
            Last Updated: May 2026 // Legal Nexus Compliance Board
          </footer>
        </div>
      </div>
    </main>
  );
}
