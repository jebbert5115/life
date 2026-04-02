import { useState } from "react";

const faqs = [
  {
    q: "How do I get a refund?",
    a: "Life™ does not offer refunds. By being born, you agreed to the End User Life Agreement (EULA), which waives all rights to refunds, re-rolls, or alternate timelines. This agreement was non-negotiable and retroactively applied at the moment of conception. We appreciate your understanding.",
  },
  {
    q: "Is there a tutorial?",
    a: "Yes. It lasts approximately 18-25 years and is commonly referred to as 'childhood' and 'adolescence.' The tutorial cannot be skipped. Some players report the tutorial being more difficult than the main game. The developers consider this Working as Intended™.",
  },
  {
    q: "How do I pause the game?",
    a: "You cannot pause Life™. The game runs in real-time, always. Sleep mode reduces processing speed but does not pause time. Several players have requested a pause feature since approximately 1800 CE. The suggestion has been 'noted.'",
  },
  {
    q: "Can I change my character's starting stats?",
    a: "No. Starting stats including height, temperament, genetic predispositions, and birth location are randomly seeded at spawn and cannot be modified. The devs acknowledge this is deeply unfair and have no plans to change it.",
  },
  {
    q: "Why is the in-game economy so unbalanced?",
    a: "The economic system is functioning as designed by a small group of high-level players who had significant input during the early beta. The dev team is 'actively monitoring the situation.' This monitoring has been ongoing for approximately 300 years.",
  },
  {
    q: "Is there a final boss?",
    a: "Yes. All players encounter the same final boss at the end of their campaign. The boss is mandatory, non-optional, and scales to your character's age. No strategies have been found that result in a traditional 'win' state. The devs describe this as 'the intended ending.'",
  },
  {
    q: "What happens after the final boss?",
    a: "Unknown. The game's post-credits sequence has not been datamined. Several competing theories exist across multiple in-game religious factions, but none have been confirmed. Official dev comment: 'We'll let you know when we know.' They have not known since launch.",
  },
  {
    q: "Is there co-op?",
    a: "Yes — Life™ features robust co-op via the 'Friendship,' 'Family,' and 'Romance' mechanics. Co-op party members are limited to their own playthroughs and cannot fully share your experience. All co-op is asynchronous in the sense that your parties may end at different times.",
  },
  {
    q: "Why am I lagging?",
    a: "Lag (also called 'fatigue,' 'burnout,' or 'brain fog') is typically caused by overloaded memory buffers, insufficient sleep allocation, or excessive multitasking. Recommended fix: reduce active quest count. This is easier said than done. We're working on it.",
  },
  {
    q: "Can I make a new character?",
    a: "No. Your character is unique and permanent. You get one. Additional characters can only be created by existing players through the Reproduction mechanic, which introduces new accounts with their own randomized stats. These accounts are not under your control.",
  },
  {
    q: "How do I get more gold (money)?",
    a: "Gold is primarily obtained through the Labor Exchange mechanic, wherein you perform tasks for other players in exchange for currency. Alternative methods include investment, inheritance, and luck — the latter of which is configured at character creation and cannot be changed.",
  },
  {
    q: "Are there cheats?",
    a: "Various 'cheat codes' have been discovered throughout the game's history, primarily in the currency and social status systems. The developers have been 'aware of this exploit' since forever. Efforts to patch it have been met with significant resistance from high-level players who benefit from the cheats.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 section-darker">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="divider-ornament justify-center">
            <span className="font-cinzel-decorative text-amber-600/60 text-sm tracking-widest">✦ FAQ ✦</span>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold mt-4 mb-4">
            <span className="gold-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="font-garamond text-lg text-amber-100/50 max-w-xl mx-auto">
            Answers to questions you've probably asked out loud to no one in particular.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item"
            >
              <button
                className="w-full flex items-start justify-between gap-4 p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-cinzel text-amber-200 font-semibold text-sm sm:text-base leading-snug">{faq.q}</span>
                <span
                  className={`text-amber-500/60 text-lg flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 pt-0">
                  <div className="h-px bg-amber-800/20 mb-4" />
                  <p className="font-garamond text-amber-100/65 text-base sm:text-lg leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 card-glow rounded-lg p-6 text-center">
          <p className="font-cinzel text-amber-300 font-bold mb-2">Still have questions?</p>
          <p className="font-garamond text-amber-100/50 text-base">
            Contact our support team at <span className="text-amber-400/80">support@life.game</span> — average response time: approximately one lifetime.
          </p>
        </div>
      </div>
    </section>
  );
}
