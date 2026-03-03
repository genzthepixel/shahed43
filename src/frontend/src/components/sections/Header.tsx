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

const allSectionIds = [
  "hero",
  "about",
  "work",
  "community",
  "toolkit",
  "testimonials",
  "awards",
  "contact",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (const id of allSectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    }
    return () => {
      for (const obs of observers) obs.disconnect();
    };
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
          className="flex items-center gap-3 hover:opacity-90 transition-opacity group/logo"
          aria-label="Go to top"
          data-ocid="nav.link"
        >
          <div className="relative">
            <img
              src="/assets/generated/shahed-logo-transparent.dim_200x200.png"
              alt="Shahed logo"
              className="h-10 w-10 object-contain relative z-10 transition-all duration-300 group-hover/logo:drop-shadow-[0_0_12px_oklch(0.58_0.26_340)]"
            />
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-400 blur-md -z-0"
              style={{ background: "oklch(0.58 0.26 340 / 0.5)" }}
              aria-hidden="true"
            />
          </div>
          <span className="font-playfair text-xl text-near-white hidden sm:block tracking-wide">
            Shahed
          </span>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.anchor;
            return (
              <button
                key={link.anchor}
                type="button"
                onClick={() => scrollTo(link.anchor)}
                className="font-syne text-sm tracking-[0.15em] uppercase transition-colors duration-200 relative group"
                style={{
                  color: isActive
                    ? "oklch(0.72 0.22 320)"
                    : "oklch(0.97 0.01 60 / 0.7)",
                }}
                data-ocid="nav.link"
              >
                {link.label}
                {/* Active indicator */}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                  style={{
                    width: isActive ? "100%" : "0%",
                    background:
                      "linear-gradient(90deg, oklch(0.58 0.26 340), oklch(0.72 0.22 320))",
                    boxShadow: isActive
                      ? "0 0 6px oklch(0.58 0.26 340 / 0.8)"
                      : "none",
                  }}
                />
                {/* Hover fallback for non-active */}
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-near-white/80 hover:text-primary transition-colors p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          data-ocid="nav.toggle"
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
            {navLinks.map((link) => {
              const isActive = activeSection === link.anchor;
              return (
                <button
                  key={link.anchor}
                  type="button"
                  onClick={() => {
                    scrollTo(link.anchor);
                    setMenuOpen(false);
                  }}
                  className="font-syne text-sm tracking-[0.15em] uppercase transition-colors duration-200 text-left py-3 px-2 border-b border-primary/5 last:border-0"
                  style={{
                    color: isActive
                      ? "oklch(0.72 0.22 320)"
                      : "oklch(0.97 0.01 60 / 0.7)",
                  }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
