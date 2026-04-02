export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 section-darker">
      <div className="max-w-6xl mx-auto px-4">
        <div className="divider-ornament">
          <span className="font-cinzel-decorative text-amber-600/60 text-sm tracking-widest">✦ ABOUT THE GAME ✦</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
          <div>
            <h2 className="font-cinzel text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              <span className="gold-gradient">The Most Anticipated</span>
              <br />
              <span className="text-amber-100">Game Since 4 Billion BC</span>
            </h2>

            <div className="space-y-5 font-garamond text-lg text-amber-100/70 leading-relaxed">
              <p>
                Originally released in <strong className="text-amber-300">approximately 300,000 BCE</strong> as a limited Early Access title,
                <em> Life™</em> has since grown into the world's most populated — and only — mandatory massively multiplayer
                open-world role-playing game.
              </p>
              <p>
                The <strong className="text-amber-300">Legacy Edition</strong> represents the culmination of billions of years
                of iterative development, featuring updated physics, dramatically improved graphics over the original single-celled
                organism release, and a fully procedurally-generated narrative that is <em>unique to every player.</em>
              </p>
              <p>
                With over <strong className="text-amber-300">8.28 billion concurrent players</strong> and a server capacity of exactly
                8.28 billion, new accounts are currently unavailable. We apologize for the inconvenience.
              </p>
              <p className="text-amber-500/50 text-base italic">
                * Life™ is not responsible for the quality of your procedurally generated narrative. All character builds are final.
                The developers reserve the right to end your session without notice.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Open World", "Procedural Narrative", "Permadeath", "No Saves", "Mandatory PvP", "Pay-to-Win Optional", "No Tutorial"].map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-glow rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🌍</div>
                <div>
                  <h3 className="font-cinzel text-amber-300 font-bold mb-2">Procedurally Generated World</h3>
                  <p className="font-garamond text-amber-100/60 text-base leading-relaxed">
                    No two playthroughs are alike. Your biome, starting stats, and NPC roster are determined at character creation
                    using our proprietary <em>DNA Seeding Algorithm™</em>. Re-rolls are not available.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glow rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="font-cinzel text-amber-300 font-bold mb-2">True Multiplayer Experience</h3>
                  <p className="font-garamond text-amber-100/60 text-base leading-relaxed">
                    Interact with billions of other players across a seamless shared world. Form guilds (families), engage in
                    faction warfare (politics), and trade resources in our dynamic economy system (capitalism).
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glow rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⏱️</div>
                <div>
                  <h3 className="font-cinzel text-amber-300 font-bold mb-2">Real-Time Progression</h3>
                  <p className="font-garamond text-amber-100/60 text-base leading-relaxed">
                    Unlike other games, <em>Life™</em> runs in real-time, 24/7, with no pause function. Your character ages
                    continuously regardless of whether you are actively playing. We consider this a feature.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glow rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💀</div>
                <div>
                  <h3 className="font-cinzel text-amber-300 font-bold mb-2">Permadeath (Mandatory)</h3>
                  <p className="font-garamond text-amber-100/60 text-base leading-relaxed">
                    Life™ features a permanent, non-negotiable permadeath system. Upon session termination, your character and
                    all acquired inventory become permanently inaccessible. This is intended behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
