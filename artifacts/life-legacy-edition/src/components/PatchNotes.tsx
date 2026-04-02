export default function PatchNotes() {
  const patches = [
    {
      version: "v150,392.33.19",
      date: "Today",
      type: "HOTFIX",
      typeColor: "text-red-400 border-red-800/40 bg-red-950/20",
      notes: [
        "Fixed critical bug where some players were \"finding meaning.\" Status reverted.",
        "Increased coffee dependency scaling curve by 34%.",
        "Nerfed the 'Youth' buff — now expires 3-7 years earlier than intended.",
        "Fixed exploit allowing some players to enjoy Mondays.",
        "Added new 'Sudden Existential Crisis' random event during commute.",
        "Patch notes themselves are no longer readable without glasses (Level 40+ players only).",
      ],
    },
    {
      version: "v149,871.00.00",
      date: "2024",
      type: "MAJOR UPDATE",
      typeColor: "text-amber-400 border-amber-800/40 bg-amber-950/20",
      notes: [
        "Introduced 'AI Companion' NPC in the Career Zone — behavior is erratic.",
        "Increased housing costs in most server regions. No compensation provided.",
        "Expanded the Anxiety skill tree with 47 new passive nodes.",
        "Climate change event has been promoted from 'sidequest' to 'main storyline'.",
        "Fixed bug where some players could access work-life balance. This was unintended.",
        "Legacy players (Age 60+) now receive 'Grandparent' title and NPC summoning ability.",
      ],
    },
    {
      version: "v100,000.00.01",
      date: "1800 CE",
      type: "BALANCE PATCH",
      typeColor: "text-blue-400 border-blue-800/40 bg-blue-950/20",
      notes: [
        "Major rebalancing of Industrial sector. Worker wellbeing stat reduced by 40%.",
        "Introduced 'Factory' zone. Attendance now mandatory for lower-bracket players.",
        "Session length increased to 16+ hours for certain character classes.",
        "Added 'Steam Engine' landmark. Pollution mechanic introduced (effects delayed 200 years).",
        "Philosopher NPCs nerfed. Metaphysics quest rewards no longer include practical resources.",
      ],
    },
    {
      version: "v0.0.1",
      date: "~300,000 BCE",
      type: "INITIAL RELEASE",
      typeColor: "text-green-400 border-green-800/40 bg-green-950/20",
      notes: [
        "First stable build of Life™. Early Access over.",
        "Homo sapiens model released. Previous builds deprecated.",
        "Added: fire, language, cooperative hunting, and fashion (animal hides).",
        "Known issue: no in-game tutorial. Players must figure it out themselves.",
        "Known issue: mortality. Fix scheduled. ETA: Unknown.",
        "Servers are filling fast. No expansion planned at this time.",
      ],
    },
  ];

  return (
    <section id="patchnotes" className="relative py-24 section-dark">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="divider-ornament justify-center">
            <span className="font-cinzel-decorative text-amber-600/60 text-sm tracking-widest">✦ PATCH NOTES ✦</span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold mt-4 mb-4">
            <span className="gold-gradient">Update History</span>
          </h2>
          <p className="font-garamond text-lg text-amber-100/50 max-w-xl mx-auto">
            A brief record of changes made to reality by the development team.
          </p>
        </div>

        <div className="space-y-6">
          {patches.map((patch, i) => (
            <div key={i} className="card-glow rounded-lg overflow-hidden">
              <div className="flex flex-wrap items-center gap-3 px-6 py-4 border-b border-amber-800/20 bg-amber-950/20">
                <h3 className="font-cinzel text-amber-200 font-bold text-base flex-1">{patch.version}</h3>
                <span className={`font-cinzel text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border ${patch.typeColor}`}>
                  {patch.type}
                </span>
                <span className="font-cinzel text-amber-700/50 text-xs">{patch.date}</span>
              </div>
              <ul className="px-6 py-4 space-y-2">
                {patch.notes.map((note, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-amber-600/60 mt-1.5 flex-shrink-0 text-xs">▸</span>
                    <span className="font-garamond text-amber-100/65 text-base leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="font-garamond text-amber-700/40 italic text-sm">
            View full patch history at store.life/patchnotes — Requires authentication via birth certificate.
          </p>
        </div>
      </div>
    </section>
  );
}
