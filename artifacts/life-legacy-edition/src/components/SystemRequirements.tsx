export default function SystemRequirements() {
  const minimum = [
    { label: "OS", value: "Human Body (Any Version, Post-1900 Recommended)" },
    { label: "Processor", value: "Brain (Minimum 1 Hemisphere)" },
    { label: "Memory", value: "16 GB RAM (Severely Degrades After 45 Years)" },
    { label: "Storage", value: "Approximately 37 Trillion Cells" },
    { label: "Network", value: "Required. Social Isolation Imposes -20% to all Stats" },
    { label: "Age Rating", value: "E for Everyone (Enrollment Begins at Birth)" },
    { label: "Input Device", value: "Hands Recommended; Optional for Some Builds" },
    { label: "DRM", value: "Always Online (Non-Negotiable)" },
  ];

  const recommended = [
    { label: "OS", value: "Human Body (Legacy Build 1970–1990)" },
    { label: "Processor", value: "Brain (Both Hemispheres, Neuroplasticity Enabled)" },
    { label: "Memory", value: "64 GB RAM (Pre-Stress Build Recommended)" },
    { label: "Storage", value: "Full 37 Trillion Cells + Optimized Mitochondria" },
    { label: "Network", value: "High-Speed Social Network (3+ Trusted Companions)" },
    { label: "Age Rating", value: "Mature Themes Unlock Progressively (No Opt-Out)" },
    { label: "Wealth",   value: "Upper Percentile (Enables Pay-to-Win Mechanics)" },
    { label: "Luck Stat", value: "High (Not Configurable — Seeded at Spawn)" },
  ];

  return (
    <section id="sysreq" className="relative py-24 section-darker">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="divider-ornament justify-center">
            <span className="font-cinzel-decorative text-amber-600/60 text-sm tracking-widest">✦ SYSTEM REQUIREMENTS ✦</span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold mt-4 mb-4">
            <span className="gold-gradient">Can You Run Life™?</span>
          </h2>
          <p className="font-garamond text-lg text-amber-100/50 max-w-xl mx-auto">
            You already are. There was never a choice. But here are the specs anyway.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card-glow rounded-lg overflow-hidden">
            <div className="bg-amber-950/40 border-b border-amber-800/30 px-6 py-4">
              <h3 className="font-cinzel text-amber-300 font-bold tracking-widest uppercase text-sm">Minimum Requirements</h3>
              <p className="font-garamond text-amber-600/50 text-sm italic mt-1">"Technically Alive"</p>
            </div>
            <div className="divide-y divide-amber-800/15">
              {minimum.map((req, i) => (
                <div key={i} className="flex gap-4 px-6 py-3">
                  <div className="font-cinzel text-[11px] tracking-wider text-amber-700/60 uppercase w-28 flex-shrink-0 pt-0.5">{req.label}</div>
                  <div className="font-garamond text-amber-100/70 text-base">{req.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-glow rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-amber-950/60 to-amber-900/30 border-b border-amber-700/30 px-6 py-4">
              <h3 className="font-cinzel text-amber-300 font-bold tracking-widest uppercase text-sm">Recommended Requirements</h3>
              <p className="font-garamond text-amber-600/50 text-sm italic mt-1">"Actually Enjoying the Game"</p>
            </div>
            <div className="divide-y divide-amber-800/15">
              {recommended.map((req, i) => (
                <div key={i} className="flex gap-4 px-6 py-3">
                  <div className="font-cinzel text-[11px] tracking-wider text-amber-700/60 uppercase w-28 flex-shrink-0 pt-0.5">{req.label}</div>
                  <div className="font-garamond text-amber-100/70 text-base">{req.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 card-glow rounded-lg p-6">
          <h3 className="font-cinzel text-amber-400 font-bold mb-4 tracking-widest uppercase text-sm">Platform Availability</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { platform: "Earth (Standard)", available: true, note: "Default Spawn" },
              { platform: "Space", available: false, note: "Very Limited Access" },
              { platform: "The Afterlife", available: false, note: "Unconfirmed DLC" },
              { platform: "VR / Metaverse", available: false, note: "Please No" },
            ].map((p, i) => (
              <div key={i} className="text-center p-4 rounded border border-amber-800/20">
                <div className={`font-cinzel text-sm font-bold mb-1 ${p.available ? "text-green-400" : "text-amber-700/60"}`}>
                  {p.available ? "✓" : "✗"} {p.platform}
                </div>
                <div className="font-garamond text-xs text-amber-600/50 italic">{p.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
