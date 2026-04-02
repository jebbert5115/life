export default function FeaturesSection() {
  const features = [
    {
      icon: "🧬",
      title: "Character Customization",
      description:
        "Choose from over 8 billion unique character combinations at birth. Customize your starting stats including Intelligence, Charisma, Constitution, and Luck — all rolled randomly with no player input whatsoever.",
      badge: "NEW IN LEGACY EDITION",
    },
    {
      icon: "🗺️",
      title: "Open World Exploration",
      description:
        "Explore a massive 510 million km² open world across 7 continents and 5 oceans. Most areas are freely accessible, though some zones require grinding significant gold or are simply locked behind geopolitical factions.",
      badge: null,
    },
    {
      icon: "📊",
      title: "Deep Skill Tree",
      description:
        "Unlock thousands of passive and active skills across dozens of career paths. Skill points are earned via experience grind and cannot be refunded. Some branches unlock entirely new questlines.",
      badge: "EXPANDED",
    },
    {
      icon: "💰",
      title: "Dynamic Economy",
      description:
        "Participate in a real-time global economy with millions of tradeable goods and services. The in-game currency system is intentionally cryptic and subject to inflation. Pay-to-win mechanics are present but socially frowned upon.",
      badge: null,
    },
    {
      icon: "💘",
      title: "Romance & Relationships",
      description:
        "Form meaningful bonds with up to billions of NPCs and players. Romance options vary by region and culture. Some relationships unlock exclusive quests, buffs, and debuffs. The companion AI is notoriously unpredictable.",
      badge: null,
    },
    {
      icon: "🏆",
      title: "Achievement System",
      description:
        "Thousands of hidden and visible achievements. Most are awarded posthumously. No in-game notification confirms you've completed one. External validation from other players is the only reward system.",
      badge: "NO REWARD",
    },
    {
      icon: "🌦️",
      title: "Dynamic Weather & Seasons",
      description:
        "Experience fully dynamic weather including sunshine, rain, snowstorms, and the occasional unscheduled natural disaster. The weather system has no settings panel and cannot be disabled.",
      badge: null,
    },
    {
      icon: "🧠",
      title: "Mental Load System",
      description:
        "Life™ features a sophisticated 'Mental Load' mechanic that increases steadily over time. Exceeding your Mental Load cap applies debuffs to Productivity, Focus, and Joy. This system cannot be turned off in settings.",
      badge: "LEGACY FEATURE",
    },
    {
      icon: "⚔️",
      title: "PvP & PvE Zones",
      description:
        "Most of the map is technically a PvP zone. Some regions have guards (police) but their effectiveness varies wildly by server region. PvE-only areas are rare and heavily taxed. PvP losses are permanent.",
      badge: null,
    },
  ];

  return (
    <section id="features" className="relative py-24 section-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="divider-ornament justify-center">
            <span className="font-cinzel-decorative text-amber-600/60 text-sm tracking-widest">✦ FEATURES ✦</span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold mt-4 mb-4">
            <span className="gold-gradient">Everything Life™ Has to Offer</span>
          </h2>
          <p className="font-garamond text-lg text-amber-100/50 max-w-2xl mx-auto">
            Thousands of hours of content, none of which can be skipped, paused, or returned for a refund.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="card-glow rounded-lg p-6 relative">
              {feature.badge && (
                <div className="absolute top-4 right-4 tag-pill text-[9px]">{feature.badge}</div>
              )}
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-cinzel text-amber-200 font-bold text-lg mb-3">{feature.title}</h3>
              <p className="font-garamond text-amber-100/55 text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
