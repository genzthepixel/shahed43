const items = [
  "C LANGUAGE",
  "PHYSICS SIMULATION",
  "GCC COMPILER",
  "IDA PRO",
  "REVERSE ENGINEERING",
  "WIND PHYSICS",
  "GENZTHEPIXEL",
  "100% ACCURACY",
  "FASHIONISTA",
];

const tickerText = [...items, ...items].map((item) => `${item} · `).join("");

export default function MarqueeTicker() {
  return (
    <div
      className="relative overflow-hidden py-3 select-none"
      style={{ background: "oklch(0.07 0.01 280)" }}
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.07 0.01 280), transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(270deg, oklch(0.07 0.01 280), transparent)",
        }}
      />

      <div className="marquee-track inline-flex whitespace-nowrap">
        <span
          className="font-syne text-xs tracking-[0.35em] uppercase"
          style={{ color: "oklch(0.58 0.26 340)" }}
        >
          {tickerText}
        </span>
        {/* Duplicate for seamless loop */}
        <span
          className="font-syne text-xs tracking-[0.35em] uppercase"
          style={{ color: "oklch(0.58 0.26 340)" }}
        >
          {tickerText}
        </span>
      </div>
    </div>
  );
}
