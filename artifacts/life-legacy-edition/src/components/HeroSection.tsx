import { useEffect, useState } from "react";

interface HeroSectionProps {
  onDownload: () => void;
}

export default function HeroSection({ onDownload }: HeroSectionProps) {
  const [playersOnline, setPlayersOnline] = useState(8280000000);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-bg parallax-stars">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-12 max-w-5xl mx-auto">
        <div className="mb-2">
          <span className="tag-pill">MASSIVELY MULTIPLAYER EXISTENTIAL RPG</span>
        </div>

        <div className="float-anim mt-6 mb-8">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Life™ - Legacy Edition"
            className="w-auto max-w-sm sm:max-w-md md:max-w-lg mx-auto drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 40px rgba(200,151,42,0.3))" }}
          />
        </div>

        <p className="font-garamond text-xl sm:text-2xl text-amber-100/80 max-w-2xl mb-2 leading-relaxed italic">
          "The definitive edition of the award-winning game you were enrolled in at birth."
        </p>
        <p className="font-cinzel text-xs tracking-widest text-amber-500/60 mb-10 uppercase">
          — PC Gamer, 10/10 "Inescapable"
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <button
            onClick={onDownload}
            className="gold-btn px-10 py-4 rounded-sm text-lg pulse-glow"
          >
            DOWNLOAD FREE
          </button>
          <a
            href="#about"
            className="font-cinzel text-sm tracking-widest text-amber-300/70 hover:text-amber-300 transition-colors uppercase border border-amber-800/40 px-8 py-4 rounded-sm hover:border-amber-600/60"
          >
            LEARN MORE
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-cinzel tracking-wider text-amber-600/60 uppercase">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✦</span>
            <span>8,280,000,000 players online</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✦</span>
            <span>150,392 hours played</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✦</span>
            <span>No refunds</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✦</span>
            <span>Rated E for Everyone (mandatory)</span>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-cinzel text-xs tracking-widest text-amber-600/40 uppercase">Scroll to learn your fate</span>
          <svg className="w-5 h-5 text-amber-600/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
