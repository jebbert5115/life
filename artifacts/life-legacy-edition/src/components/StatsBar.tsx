import { useEffect, useState, useRef } from "react";

function AnimatedNumber({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current = Math.min(current + increment, target);
            setValue(Math.floor(current));
            if (current >= target) clearInterval(interval);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stat-counter">
      {prefix}{value.toLocaleString()}{suffix}
    </div>
  );
}

export default function StatsBar() {
  const stats = [
    { label: "Players Enrolled", value: 8280000000, suffix: "" },
    { label: "Server Slots Available", value: 0, suffix: "" },
    { label: "Average Session Length", value: 79, suffix: " Years" },
    { label: "Expansion Packs Shipped", value: 1, suffix: "" },
    { label: "Known Bugs (Unfixed)", value: 32847, suffix: "+" },
  ];

  return (
    <div className="relative bg-gradient-to-r from-[#0a0700] via-[#140e03] to-[#0a0700] border-y border-amber-800/30 py-8">
      <div className="ribbon-banner absolute top-0 left-0 right-0 h-px opacity-60" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient mb-1">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-cinzel text-[10px] tracking-widest text-amber-700/60 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="ribbon-banner absolute bottom-0 left-0 right-0 h-px opacity-60" />
    </div>
  );
}
