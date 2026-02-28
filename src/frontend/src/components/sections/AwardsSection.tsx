import { Medal, Star, Trophy } from "lucide-react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const awards = [
  {
    icon: Trophy,
    title: "1st Place",
    subtitle: "School Robotics Competition",
    desc: "Designed and programmed the winning robot with custom C firmware for real-time sensor processing and motor control.",
    year: "2023",
    color: "oklch(0.65 0.18 60)",
  },
  {
    icon: Medal,
    title: "Best Code Architecture",
    subtitle: "Annual Hackathon",
    desc: "Recognized for an exceptionally clean, optimized C codebase that demonstrated mastery of data structures and memory management.",
    year: "2023",
    color: "oklch(0.72 0.22 320)",
  },
  {
    icon: Star,
    title: "Innovation Award",
    subtitle: "Programming Contest",
    desc: "Awarded for creating a novel physics simulation algorithm that reduced computational load while maintaining mathematical accuracy.",
    year: "2024",
    color: "oklch(0.58 0.26 340)",
  },
];

export default function AwardsSection() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver();

  return (
    <section
      id="awards"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-32 overflow-hidden"
      aria-labelledby="awards-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/assets/generated/awards-gallery-bg.dim_1200x600.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "oklch(0.09 0.01 280 / 0.92)" }}
        />
        {/* Gradient mesh overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 80% 50%, oklch(0.65 0.18 60 / 0.06), transparent)",
          }}
        />
        {/* Animated elements */}
        <div
          className="animate-orb-3 absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "oklch(0.65 0.18 60 / 0.07)" }}
        />
        <div
          className="animate-orb-1 absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "oklch(0.58 0.26 340 / 0.06)" }}
        />
        {/* Floating diamonds */}
        <div
          className="animate-diamond-1 absolute top-1/4 left-1/5 w-16 h-16 border border-yellow-300/10"
          style={{ transform: "rotate(45deg)" }}
        />
        <div
          className="animate-diamond-2 absolute bottom-1/3 right-1/3 w-10 h-10 border border-primary/10"
          style={{ transform: "rotate(45deg)" }}
        />
        <div
          className="animate-diamond-3 absolute top-2/3 left-2/3 w-8 h-8 border border-primary/8"
          style={{ transform: "rotate(45deg)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="font-syne text-xs tracking-[0.4em] uppercase mb-4 flex items-center justify-center gap-3"
            style={{ color: "oklch(0.65 0.18 60)" }}
          >
            <span
              className="inline-block w-8 h-px"
              style={{ background: "oklch(0.65 0.18 60)" }}
            />
            Recognition
            <span
              className="inline-block w-8 h-px"
              style={{ background: "oklch(0.65 0.18 60)" }}
            />
          </p>
          <h2
            id="awards-heading"
            className="font-playfair text-5xl md:text-6xl text-near-white mb-4"
          >
            Recognition &amp; Awards
          </h2>
          <p
            className="font-playfair text-2xl italic"
            style={{ color: "oklch(0.65 0.18 60)" }}
          >
            School Robotics Coding — Champion
          </p>
        </div>

        {/* Awards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <div
              key={award.title}
              className={`relative overflow-hidden group transition-all duration-700 hover:translate-y-[-4px] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${i * 150}ms`,
              }}
            >
              {/* Award frame */}
              <div
                className="relative p-8 award-frame h-full"
                style={{
                  background: "oklch(0.13 0.01 280 / 0.8)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Corner ornaments */}
                <div
                  className="absolute top-3 left-3 w-4 h-4 border-t border-l"
                  style={{ borderColor: `${award.color}60` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute top-3 right-3 w-4 h-4 border-t border-r"
                  style={{ borderColor: `${award.color}60` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-3 left-3 w-4 h-4 border-b border-l"
                  style={{ borderColor: `${award.color}60` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-3 right-3 w-4 h-4 border-b border-r"
                  style={{ borderColor: `${award.color}60` }}
                  aria-hidden="true"
                />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 60% 60% at 50% 0%, ${award.color}10, transparent)`,
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="mb-6">
                  <award.icon
                    className="w-8 h-8"
                    style={{ color: award.color }}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <p
                  className="font-syne text-xs tracking-widest uppercase mb-1"
                  style={{ color: `${award.color}` }}
                >
                  {award.year}
                </p>
                <h3 className="font-playfair text-3xl text-near-white mb-1">
                  {award.title}
                </h3>
                <p
                  className="font-syne text-sm mb-4"
                  style={{ color: award.color }}
                >
                  {award.subtitle}
                </p>
                <p
                  className="font-syne text-sm leading-relaxed"
                  style={{ color: "oklch(0.92 0.02 60)" }}
                >
                  {award.desc}
                </p>

                {/* Bottom line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${award.color}, transparent)`,
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
