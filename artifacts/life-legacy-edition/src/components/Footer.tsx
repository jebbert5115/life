interface FooterProps {
  onDownload: () => void;
}

export default function Footer({ onDownload }: FooterProps) {
  return (
    <footer className="relative bg-[#050304] border-t border-amber-900/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Life™ Legacy Edition" className="h-16 w-auto mb-4" />
            <p className="font-garamond text-amber-100/40 text-sm leading-relaxed">
              The definitive edition of the world's only mandatory massively-multiplayer RPG.
            </p>
            <div className="flex gap-4 mt-4">
              {["Discord", "Twitter/X", "Reddit"].map((s) => (
                <a key={s} href="#" className="font-cinzel text-[10px] tracking-widest text-amber-700/50 hover:text-amber-500/70 transition-colors uppercase">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-cinzel text-xs tracking-widest text-amber-700/70 uppercase mb-4">Game</h4>
            <ul className="space-y-2">
              {["About", "Features", "Patch Notes", "Roadmap (Unavailable)", "Soundtrack"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-garamond text-amber-100/40 hover:text-amber-300/60 transition-colors text-sm">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-xs tracking-widest text-amber-700/70 uppercase mb-4">Support</h4>
            <ul className="space-y-2">
              {["FAQ", "Known Issues", "Bug Report", "Refund Policy (None)", "Contact Us"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-garamond text-amber-100/40 hover:text-amber-300/60 transition-colors text-sm">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-xs tracking-widest text-amber-700/70 uppercase mb-4">Newsletter</h4>
            <p className="font-garamond text-amber-100/40 text-sm mb-3">
              Subscribe for patch notes and existential updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-amber-950/20 border border-amber-800/30 rounded px-3 py-2 text-sm font-garamond text-amber-200/70 placeholder:text-amber-800/50 outline-none focus:border-amber-600/50"
              />
              <button className="gold-btn px-4 py-2 rounded text-xs">GO</button>
            </div>
            <p className="font-garamond text-amber-800/40 text-xs italic mt-2">
              By subscribing, you agree to continue existing.
            </p>
          </div>
        </div>

        <div className="border-t border-amber-900/30 pt-8">
          <div className="text-center mb-4">
            <button onClick={onDownload} className="gold-btn px-10 py-3 rounded text-sm">
              DOWNLOAD LIFE™ — LEGACY EDITION (FREE)
            </button>
            <p className="font-cinzel text-[10px] tracking-widest text-amber-800/40 mt-2 uppercase">"Free" as in you had no say in it</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-cinzel tracking-widest text-amber-900/50 uppercase mt-6">
            <span>© Life™ Development LLC — Established ~300,000 BCE</span>
            <a href="#" className="hover:text-amber-700/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-700/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-700/60 transition-colors">EULA (Mandatory)</a>
            <a href="#" className="hover:text-amber-700/60 transition-colors">Cookie Policy</a>
          </div>
          <p className="text-center font-garamond text-amber-900/40 text-xs italic mt-3">
            Life™ and all related content is a trademark of The Universe, Inc. All rights reserved. Mortality not guaranteed to be bug-free.
            Playing Life™ may cause emotional distress, meaning, joy, suffering, love, taxes, and eventual permadeath. We are not liable.
          </p>
        </div>
      </div>
    </footer>
  );
}
