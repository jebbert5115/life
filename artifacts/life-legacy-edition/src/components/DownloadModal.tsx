import { useEffect, useRef } from "react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[100] flex items-center justify-center modal-backdrop p-4"
      onClick={(e) => { if (e.target === backdropRef.current) onClose(); }}
    >
      <div className="modal-panel rounded-lg max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-gradient-to-r from-amber-950/80 to-red-950/50 border-b border-amber-800/40 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className="h-8 w-auto" />
            <span className="font-cinzel text-amber-300 font-bold tracking-wider text-sm">DOWNLOAD LIFE™ — LEGACY EDITION</span>
          </div>
          <button
            onClick={onClose}
            className="text-amber-700/60 hover:text-amber-400 transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>

        <div className="px-8 py-10 text-center">
          <div className="text-7xl mb-5">🔒</div>

          <h2 className="font-cinzel-decorative text-2xl sm:text-3xl font-bold text-amber-300 mb-2 leading-tight">
            Server Capacity Reached
          </h2>

          <div className="font-cinzel text-sm tracking-widest text-amber-600/70 uppercase mb-8">
            Error Code: EXISTENCE_AT_MAX_CAPACITY
          </div>

          <div className="bg-red-950/30 border border-red-800/40 rounded-lg p-5 mb-8 text-left">
            <p className="font-garamond text-amber-100/80 text-lg leading-relaxed">
              We're sorry — <strong className="text-amber-300">all 8,200,000,000 of 8,200,000,000 server slots</strong> are currently occupied.
              Life™ has reached maximum concurrent player capacity.
            </p>
            <p className="font-garamond text-amber-100/60 text-base leading-relaxed mt-3">
              New accounts will become available when an existing player exits the server.
              Server capacity has not been increased since launch. There are no current plans to add more slots.
            </p>
            <p className="font-garamond text-amber-500/50 text-sm italic mt-4">
              Please check back later. We don't know when "later" is.
            </p>
          </div>

          <div className="bg-amber-950/20 border border-amber-800/20 rounded-lg p-4 mb-8">
            <div className="font-cinzel text-xs tracking-widest text-amber-700/60 uppercase mb-3">Server Status</div>
            <div className="relative h-3 bg-amber-950/60 rounded-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-500 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
            </div>
            <div className="flex justify-between font-cinzel text-[10px] tracking-widest text-amber-800/60 uppercase mt-1.5">
              <span>0</span>
              <span className="text-red-500/80">8,200,000,000 / 8,200,000,000 — FULL</span>
              <span>MAX</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-cinzel text-xs tracking-widest text-amber-700/60 uppercase">While you wait, you may:</p>
            <ul className="text-left space-y-2">
              {[
                "Reconsider your choices (not applicable)",
                "Contact support (average response: 1 lifetime)",
                "Attempt to join the waitlist (the waitlist is also full)",
                "Simply continue existing until a slot opens",
              ].map((opt, i) => (
                <li key={i} className="flex items-start gap-2 font-garamond text-amber-100/50 text-base">
                  <span className="text-amber-700/50 mt-1 flex-shrink-0">▸</span>
                  {opt}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex gap-3 justify-center">
            <button
              onClick={onClose}
              className="gold-btn px-8 py-3 rounded text-sm"
            >
              OK, I'll Keep Existing
            </button>
            <button
              onClick={onClose}
              className="font-cinzel text-sm tracking-wider text-amber-700/60 hover:text-amber-500 transition-colors border border-amber-800/30 px-6 py-3 rounded hover:border-amber-700/50"
            >
              Join Waitlist (Full)
            </button>
          </div>
        </div>

        <div className="bg-amber-950/10 border-t border-amber-900/30 px-6 py-3 text-center">
          <p className="font-cinzel text-[10px] tracking-widest text-amber-900/50 uppercase">
            Life™ — Legacy Edition • Server Uptime: ~300,000 Years • No Scheduled Maintenance
          </p>
        </div>
      </div>
    </div>
  );
}
