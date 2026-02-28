import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
}

const navLinks = [
  { label: "Work", anchor: "work" },
  { label: "About", anchor: "about" },
  { label: "Contact", anchor: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-darker-bg/90 backdrop-blur-md border-b border-primary/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          aria-label="Go to top"
        >
          <img
            src="/assets/generated/shahed-logo-transparent.dim_200x200.png"
            alt="Shahed logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-playfair text-xl text-near-white hidden sm:block tracking-wide">
            Shahed
          </span>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.anchor}
              type="button"
              onClick={() => scrollTo(link.anchor)}
              className="font-syne text-sm tracking-[0.15em] uppercase text-near-white/70 hover:text-primary transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-near-white/80 hover:text-primary transition-colors p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-darker-bg/95 backdrop-blur-md border-t border-primary/10">
          <nav
            className="flex flex-col py-4 px-6 gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.anchor}
                type="button"
                onClick={() => {
                  scrollTo(link.anchor);
                  setMenuOpen(false);
                }}
                className="font-syne text-sm tracking-[0.15em] uppercase text-near-white/70 hover:text-primary transition-colors duration-200 text-left py-3 px-2 border-b border-primary/5 last:border-0"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
