"use client";

export default function MarketTicker() {
  const indexes = [
    { name: "SUPREME COURT", status: "IN SESSION" },
    { name: "SEC REGULATION", status: "ACTIVE" },
    { name: "IP PROTECTION", status: "VERIFIED" },
    { name: "EU COMPLIANCE", status: "MANDATORY" },
    { name: "CYBER LAW", status: "CRITICAL" },
    { name: "DOJ FILING", status: "UPDATED" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-judicial/90 backdrop-blur-md border-b border-white/10 h-[28px] flex items-center overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {indexes.map((idx, i) => (
          <div key={i} className="flex items-center gap-4 px-12 border-r border-white/5">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-gold">{idx.name}</span>
            <span className="text-[9px] font-bold text-white uppercase tracking-widest">{idx.status}</span>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {indexes.map((idx, i) => (
          <div key={i + 10} className="flex items-center gap-4 px-12 border-r border-white/5">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-gold">{idx.name}</span>
            <span className="text-[9px] font-bold text-white uppercase tracking-widest">{idx.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
