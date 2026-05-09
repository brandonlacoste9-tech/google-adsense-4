"use client";
import { useEffect } from "react";
import { ShieldAlert } from "lucide-react";

interface AdSlotProps {
  type: 'leaderboard' | 'sidebar' | 'in-article';
  className?: string;
}

export default function AdSlot({ type, className = "" }: AdSlotProps) {
  const styles = {
    leaderboard: "w-full min-h-[90px] md:min-h-[250px]",
    sidebar: "w-full min-h-[600px]",
    'in-article': "w-full min-h-[300px] my-12"
  };

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className={`relative flex flex-col items-center justify-center overflow-hidden bg-slate-50 border border-slate-200 ${styles[type]} ${className}`}>
      {/* Fallback Placeholder (shows underneath while ad loads or if blocked by adblocker) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-40 z-0 pointer-events-none">
        <div className="flex items-center gap-2">
          <ShieldAlert size={14} className="text-slate-gold" />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Monetization Node</span>
        </div>
      </div>
      
      {/* Actual AdSense Unit */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "100%" }}
          data-ad-client="ca-pub-4276130467303652"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
