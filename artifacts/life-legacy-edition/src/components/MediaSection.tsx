export default function MediaSection() {
  const screenshots = [
    {
      bg: "from-amber-900/30 to-red-950/30",
      label: "Childhood Questline",
      desc: "The Tutorial You Never Asked For",
    },
    {
      bg: "from-blue-950/30 to-slate-950/30",
      label: "School Dungeon",
      desc: "12-Year Mandatory Grind Zone",
    },
    {
      bg: "from-green-950/30 to-amber-950/30",
      label: "Career Skill Tree",
      desc: "Multiple Paths, Most Disappointing",
    },
    {
      bg: "from-purple-950/30 to-indigo-950/30",
      label: "Retirement Endgame",
      desc: "Unlocked at Age 65 (Level Cap)",
    },
    {
      bg: "from-red-950/30 to-orange-950/30",
      label: "Tax Season Event",
      desc: "Returning Annually. Cannot Be Skipped.",
    },
    {
      bg: "from-teal-950/30 to-blue-950/30",
      label: "Friendship Faction",
      desc: "NPC Loyalty System (Volatile)",
    },
  ];

  const awards = [
    { org: "Game of the Eon Awards", award: "Best Unfinishable Game", year: "2024" },
    { org: "The Rotten Tomatoes of Life", award: "100% Audience Score (Mandatory Participation)", year: "2024" },
    { org: "IGN", award: "10/10 — Would Not Choose Not To Play", year: "2023" },
    { org: "Time Magazine", award: "Game of the Year (Every Year)", year: "2024" },
    { org: "The Existentialists' Guild", award: "Most Impactful Open-Ended Narrative", year: "2024" },
    { org: "Steam Awards", award: "Outstanding Achievement in Unavoidability", year: "2023" },
  ];

  return (
    <section id="media" className="relative py-24 section-darker">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="divider-ornament justify-center">
            <span className="font-cinzel-decorative text-amber-600/60 text-sm tracking-widest">✦ MEDIA & AWARDS ✦</span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold mt-4 mb-4">
            <span className="gold-gradient">Screenshots & Accolades</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {screenshots.map((shot, i) => (
            <div
              key={i}
              className={`relative aspect-video rounded-lg bg-gradient-to-br ${shot.bg} border border-amber-800/20 overflow-hidden group cursor-pointer hover:border-amber-600/40 transition-all`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 rounded-full border border-amber-700/40 flex items-center justify-center mb-3 group-hover:border-amber-500/60 transition-all">
                  <span className="text-amber-600/60 text-xl">▶</span>
                </div>
                <div className="font-cinzel text-xs font-bold text-amber-300/80 tracking-wider">{shot.label}</div>
                <div className="font-garamond text-xs text-amber-100/40 mt-1 italic">{shot.desc}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-cinzel text-center text-xl text-amber-400/80 mb-8 tracking-widest uppercase">Critics' Accolades</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((award, i) => (
              <div key={i} className="review-card flex flex-col gap-2">
                <div className="star-rating text-sm">★★★★★</div>
                <div className="font-cinzel text-amber-200 font-bold text-sm leading-snug">"{award.award}"</div>
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-amber-800/20">
                  <span className="font-cinzel text-[10px] tracking-widest text-amber-600/70 uppercase">{award.org}</span>
                  <span className="font-cinzel text-[10px] text-amber-800/60">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
