import { BookOpen, Brain, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

function AnimatedCounter({
  target,
  suffix = "",
}: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const impactCards = [
  {
    icon: BookOpen,
    title: "Educational Tools",
    desc: "Built and distributed free digital learning tools that transformed how students in the local community study and practice mathematics.",
  },
  {
    icon: Brain,
    title: "AI Math Access",
    desc: "Genzthepixel — an AI-powered math solver — gives every student access to instant, accurate mathematical guidance, regardless of resources.",
  },
  {
    icon: Users,
    title: "Community Network",
    desc: "Connected 90% of the local population through a network of shared digital tools, creating a resilient, knowledge-sharing ecosystem.",
  },
];

export default function CommunitySection() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver();

  return (
    <section
      id="community"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-32 overflow-hidden mesh-gradient-community"
      aria-labelledby="community-heading"
    >
      {/* Decorative background elements + animated orbs */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/4 right-1/4 w-px h-48 opacity-20"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.58 0.26 340), transparent)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-px h-32 opacity-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.72 0.22 320), transparent)",
          }}
        />
        {/* Animated orbs */}
        <div
          className="animate-orb-1 absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "oklch(0.58 0.26 340 / 0.12)" }}
        />
        <div
          className="animate-orb-2 absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "oklch(0.72 0.22 320 / 0.10)" }}
        />
        <div className="animate-glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="font-syne text-xs tracking-[0.4em] uppercase mb-4 flex items-center justify-center gap-3"
            style={{ color: "oklch(0.72 0.22 320)" }}
          >
            <span
              className="inline-block w-8 h-px"
              style={{ background: "oklch(0.72 0.22 320)" }}
            />
            Impact
            <span
              className="inline-block w-8 h-px"
              style={{ background: "oklch(0.72 0.22 320)" }}
            />
          </p>
          <h2
            id="community-heading"
            className="font-playfair text-5xl md:text-6xl text-near-white"
          >
            The Village Family
          </h2>
        </div>

        {/* Big stat */}
        <div
          className={`text-center mb-20 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="inline-block relative"
            aria-label="90% of local population reached"
          >
            <span
              className="font-playfair text-[10rem] md:text-[14rem] leading-none font-black"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.58 0.26 340), oklch(0.72 0.22 320), oklch(0.65 0.18 60))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <AnimatedCounter target={90} suffix="%" />
            </span>
            {/* Decorative glow behind number */}
            <div
              className="absolute inset-0 blur-3xl -z-10"
              style={{ background: "oklch(0.58 0.26 340 / 0.15)" }}
              aria-hidden="true"
            />
          </div>

          <p
            className="font-syne text-xl max-w-2xl mx-auto mt-4 leading-relaxed"
            style={{ color: "oklch(0.97 0.01 60)" }}
          >
            Of the local population is connected, empowered, and informed
            through Shahed's technological work and community initiatives.
          </p>
        </div>

        {/* Impact cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {impactCards.map((card, i) => (
            <div
              key={card.title}
              className="p-8 relative overflow-hidden group transition-all duration-300 hover:translate-y-[-4px]"
              style={{
                background: "oklch(0.13 0.01 280 / 0.6)",
                border: "1px solid oklch(0.58 0.26 340 / 0.2)",
                backdropFilter: "blur(8px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "oklch(0.58 0.26 340 / 0.05)" }}
                aria-hidden="true"
              />
              <card.icon
                className="w-6 h-6 mb-4"
                style={{ color: "oklch(0.72 0.22 320)" }}
                aria-hidden="true"
              />
              <h3
                className="font-playfair text-2xl mb-3"
                style={{ color: "oklch(1 0 0)" }}
              >
                {card.title}
              </h3>
              <p
                className="font-syne text-sm leading-relaxed"
                style={{ color: "oklch(0.92 0.02 60)" }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
