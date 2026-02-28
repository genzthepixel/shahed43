import { Code2, Download, Shirt, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export default function AboutSection() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver();

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-32 overflow-hidden"
      style={{ background: "oklch(0.13 0.01 280)" }}
      aria-labelledby="about-heading"
    >
      {/* Background decoration + animated orbs */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 100% 50%, oklch(0.58 0.26 340 / 0.05), transparent)",
          }}
        />
        <div
          className="animate-orb-2 absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "oklch(0.42 0.16 345 / 0.09)" }}
        />
        <div
          className="animate-orb-1 absolute top-1/4 right-1/4 w-56 h-56 rounded-full blur-3xl"
          style={{ background: "oklch(0.58 0.26 340 / 0.06)" }}
        />
        <div
          className="animate-glow-pulse absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full blur-2xl"
          style={{ background: "oklch(0.72 0.22 320 / 0.07)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div
            className={`transition-all duration-800 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p
              className="font-syne text-xs tracking-[0.4em] uppercase mb-4 flex items-center gap-3"
              style={{ color: "oklch(0.72 0.22 320)" }}
            >
              <span
                className="inline-block w-8 h-px"
                style={{ background: "oklch(0.72 0.22 320)" }}
              />
              About
            </p>

            <h2
              id="about-heading"
              className="font-playfair text-5xl md:text-6xl text-near-white mb-8 leading-tight"
            >
              Beyond
              <br />
              <em className="text-gradient-pink not-italic">Imagination</em>
            </h2>

            <div
              className="space-y-5 font-syne text-base leading-relaxed"
              style={{ color: "oklch(0.96 0.02 60)" }}
            >
              <p>
                It started in Class 9 — a curious student picking up C, drawn
                not by assignments but by a hunger to solve problems that felt
                impossible. What began as simple programs evolved into something
                far more ambitious.
              </p>
              <p>
                The obsession?{" "}
                <strong style={{ color: "oklch(1 0 0)" }}>
                  Physics simulation
                </strong>
                . Not the approximated, close-enough physics that most games
                settle for — but 100% accurate, mathematically precise physical
                reality rendered in real time. Wind that behaves like actual
                wind. Gravity that mirrors the universe's laws exactly.
              </p>
              <p>
                But Shahed isn't just a programmer. The same eye that spots
                elegance in a well-optimized algorithm finds it in a perfectly
                cut garment. Code and fashion are not opposites — both are
                systems of precision and beauty.
              </p>
              <p>
                The belief:{" "}
                <strong style={{ color: "oklch(1 0 0)" }}>
                  humans are capable of going beyond imagination
                </strong>
                , when given the right tools, the right mindset, and the courage
                to build what doesn't yet exist.
              </p>
            </div>

            {/* Mission callout */}
            <div
              className="mt-10 p-6 relative"
              style={{
                borderLeft: "3px solid oklch(0.58 0.26 340)",
                background: "oklch(0.58 0.26 340 / 0.06)",
              }}
            >
              <p
                className="font-syne text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: "oklch(0.72 0.22 320)" }}
              >
                Mission
              </p>
              <p className="font-playfair text-2xl text-near-white italic">
                "100% Accurate Physics in Gaming"
              </p>
            </div>

            {/* Download CV */}
            <a
              href="/assets/shahed-cv.pdf"
              download
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 font-syne font-semibold text-sm tracking-widest uppercase text-white transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.58 0.26 340), oklch(0.42 0.16 345))",
              }}
              aria-label="Download Shahed's CV"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Right: Decorative card */}
          <div
            className={`transition-all duration-800 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: Code2,
                    label: "Languages",
                    value: "C / ASM",
                    desc: "Core expertise",
                  },
                  {
                    icon: Sparkles,
                    label: "Physics Sims",
                    value: "100%",
                    desc: "Accuracy goal",
                  },
                  {
                    icon: Shirt,
                    label: "Identity",
                    value: "Dev + Fashion",
                    desc: "Dual aesthetic",
                  },
                  {
                    icon: Code2,
                    label: "Community",
                    value: "90%",
                    desc: "Local reach",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 relative overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: "oklch(0.17 0.01 280)",
                      border: "1px solid oklch(0.25 0.02 340)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "oklch(0.58 0.26 340 / 0.05)" }}
                      aria-hidden="true"
                    />
                    <stat.icon
                      className="w-4 h-4 mb-3"
                      style={{ color: "oklch(0.72 0.22 320)" }}
                    />
                    <p
                      className="font-playfair text-2xl font-bold mb-1"
                      style={{ color: "oklch(0.97 0.01 60)" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="font-syne text-xs tracking-wider uppercase mb-1"
                      style={{ color: "oklch(0.72 0.22 320)" }}
                    >
                      {stat.label}
                    </p>
                    <p
                      className="font-syne text-xs"
                      style={{ color: "oklch(0.75 0.02 280)" }}
                    >
                      {stat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Decorative quote */}
              <div
                className="p-8 relative overflow-hidden"
                style={{
                  background: "oklch(0.17 0.01 280)",
                  border: "1px solid oklch(0.25 0.02 340)",
                }}
              >
                <div
                  className="absolute top-4 left-6 font-playfair text-8xl leading-none select-none"
                  style={{ color: "oklch(0.58 0.26 340 / 0.15)" }}
                  aria-hidden="true"
                >
                  "
                </div>
                <p
                  className="font-playfair text-xl italic relative z-10 leading-relaxed"
                  style={{ color: "oklch(1 0 0)" }}
                >
                  The universe runs on physics. I just want to simulate it
                  perfectly.
                </p>
                <p
                  className="font-syne text-xs tracking-widest uppercase mt-4"
                  style={{ color: "oklch(0.72 0.22 320)" }}
                >
                  — Shahed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
