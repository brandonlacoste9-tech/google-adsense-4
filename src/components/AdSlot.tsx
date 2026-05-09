import { ShieldAlert } from "lucide-react";

interface AdSlotProps {
  type: 'leaderboard' | 'sidebar' | 'in-article';
  className?: string;
}

export default function AdSlot({ type, className = "" }: AdSlotProps) {
  const styles = {
    leaderboard: "w-full h-[90px] md:h-[250px]",
    sidebar: "w-full h-[600px]",
    'in-article': "w-full h-[300px] my-12"
  };

  return (
    <div className={`ad-slot-legal flex flex-col items-center justify-center gap-4 ${styles[type]} ${className}`}>
      <div className="flex items-center gap-2">
        <ShieldAlert size={14} className="text-slate-gold" />
        <span>PREMIUM LEGAL ADVISORY ZONE</span>
      </div>
      <div className="text-[10px] opacity-50">AUTHORITY MONETIZATION NODE</div>
    </div>
  );
}
