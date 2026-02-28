import { useEffect, useRef, useState } from "react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
}

interface Particle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 3,
    opacity: Math.random() * 0.6 + 0.2,
  }));
}

export default function HeroSection() {
  const [particles] = useState(() => generateParticles(20));
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen mesh-gradient-hero flex items-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Ambient floating particles */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bottom-0 rounded-full"
            style={{
              left: `${p.x}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: `oklch(0.58 0.26 ${320 + p.x * 0.5})`,
              opacity: p.opacity,
              animation: `float-up ${p.duration}s ease-out ${p.delay}s infinite`,
            }}
          />
        ))}
        {/* Animated drifting orbs — section animation */}
        <div
          className="animate-orb-1 absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "oklch(0.58 0.26 340 / 0.10)" }}
        />
        <div
          className="animate-orb-2 absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "oklch(0.42 0.16 345 / 0.14)" }}
        />
        <div
          className="animate-orb-3 absolute top-2/3 right-1/5 w-64 h-64 rounded-full blur-3xl"
          style={{ background: "oklch(0.72 0.22 320 / 0.08)" }}
        />
        {/* Slow pulsing glow ring */}
        <div className="animate-glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text content */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className="font-syne text-xs tracking-[0.4em] uppercase mb-6 inline-flex items-center gap-3"
            style={{ color: "oklch(0.72 0.22 320)" }}
          >
            <span
              className="inline-block w-8 h-px"
              style={{ background: "oklch(0.72 0.22 320)" }}
            />
            Junior Programmer · Fashionista
          </p>

          <h1 className="font-playfair leading-none mb-8">
            <span
              className="block text-7xl md:text-8xl xl:text-9xl font-black"
              style={{ color: "oklch(0.97 0.01 60)" }}
            >
              Shahed
            </span>
            <span
              className="block text-5xl md:text-6xl xl:text-7xl font-normal italic"
              style={{ color: "oklch(0.72 0.22 320)" }}
            >
              Programming
            </span>
            <span
              className="block text-6xl md:text-7xl xl:text-8xl font-bold"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.72 0.22 320), oklch(0.65 0.18 60))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              is Art.
            </span>
          </h1>

          <p className="font-syne text-lg text-near-white/60 mb-10 max-w-md leading-relaxed">
            Merging the precision of low-level C programming with the elegance
            of high fashion. Building physics engines, one line at a time.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollTo("work")}
              className="shimmer-btn font-syne font-semibold tracking-widest uppercase text-sm px-8 py-4 text-white rounded-none transition-all duration-300 hover:scale-[1.02] hover:shadow-pink-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-darker-bg"
            >
              View Work
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="font-syne font-semibold tracking-widest uppercase text-sm px-8 py-4 rounded-none border border-near-white/30 text-near-white/80 hover:border-primary hover:text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-darker-bg"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right: Profile image */}
        <div
          className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Decorative ring */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border border-primary/20 animate-spin-slow" />
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="w-72 h-72 lg:w-80 lg:h-80 rounded-full border border-primary/10"
              style={{
                animation: "spin-slow 30s linear infinite reverse",
              }}
            />
          </div>

          {/* Profile image with clip */}
          <div className="relative z-10 group/photo">
            {/* Pink glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-2xl"
              style={{ background: "oklch(0.58 0.26 340 / 0.5)" }}
              aria-hidden="true"
            />
            <div
              className="profile-clip overflow-hidden w-72 h-96 lg:w-80 lg:h-[420px] transition-all duration-500 group-hover/photo:shadow-[0_0_40px_oklch(0.58_0.26_340/0.6)]"
              style={{ background: "oklch(0.13 0.01 280)" }}
            >
              <img
                src="/assets/uploads/Untitled-1.png"
                alt="Shahed — Junior Programmer & Fashionista"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Corner decoration */}
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2"
              style={{ borderColor: "oklch(0.58 0.26 340)" }}
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2"
              style={{ borderColor: "oklch(0.72 0.22 320)" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        aria-hidden="true"
      >
        <span className="font-syne text-xs tracking-[0.3em] uppercase text-near-white/30">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
}
