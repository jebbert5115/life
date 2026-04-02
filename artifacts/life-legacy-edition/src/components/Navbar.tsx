import { useState, useEffect } from "react";

interface NavbarProps {
  onDownload: () => void;
}

export default function Navbar({ onDownload }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Media", href: "#media" },
    { label: "Reviews", href: "#reviews" },
    { label: "System Req.", href: "#sysreq" },
    { label: "Patch Notes", href: "#patchnotes" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.png" alt="Life™ Legacy Edition" className="h-10 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-cinzel text-xs tracking-widest text-amber-200/70 hover:text-amber-300 transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onDownload}
              className="gold-btn px-5 py-2 rounded text-sm"
            >
              DOWNLOAD NOW
            </button>
          </div>

          <button
            className="lg:hidden text-amber-300 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 space-y-1.5">
              <span className={`block h-px bg-amber-300 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px bg-amber-300 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-amber-300 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-amber-800/30 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block font-cinzel text-xs tracking-widest text-amber-200/70 hover:text-amber-300 transition-colors uppercase py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onDownload(); }}
              className="gold-btn w-full px-5 py-2 rounded text-sm mt-2"
            >
              DOWNLOAD NOW
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
