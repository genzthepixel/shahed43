import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const [progress, setProgress] = useState(0);
  const [showTagline, setShowTagline] = useState(false);
  const [showSubTagline, setShowSubTagline] = useState(false);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Ease in: fast at start, slow near end
        const increment = prev < 60 ? 2.5 : prev < 85 ? 1.2 : 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    // Staggered text reveals
    const taglineTimer = setTimeout(() => setShowTagline(true), 700);
    const subTaglineTimer = setTimeout(() => setShowSubTagline(true), 1100);

    // Begin exit after 2.3s
    const exitTimer = setTimeout(() => {
      setPhase("exit");
      setTimeout(onComplete, 700);
    }, 2300);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(taglineTimer);
      clearTimeout(subTaglineTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `
          radial-gradient(ellipse 70% 55% at 15% 25%, oklch(0.58 0.26 340 / 0.55), transparent),
          radial-gradient(ellipse 55% 45% at 88% 75%, oklch(0.42 0.16 345 / 0.65), transparent),
          radial-gradient(ellipse 60% 55% at 55% 5%, oklch(0.62 0.20 300 / 0.38), transparent),
          oklch(0.09 0.01 280)
        `,
        opacity: phase === "exit" ? 0 : 1,
        transition:
          phase === "exit"
            ? "opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
        overflow: "hidden",
      }}
    >
      {/* Animated background orbs */}
      <div
        className="animate-orb-1"
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "oklch(0.58 0.26 340 / 0.18)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="animate-orb-2"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "8%",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "oklch(0.42 0.16 345 / 0.20)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="animate-orb-3"
        style={{
          position: "absolute",
          top: "50%",
          left: "55%",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "oklch(0.65 0.18 300 / 0.14)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Pulsing outer ring */}
      <div
        className="animate-glow-pulse"
        style={{
          position: "absolute",
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          border: "1px solid oklch(0.58 0.26 340 / 0.3)",
          pointerEvents: "none",
        }}
      />
      <div
        className="animate-glow-pulse"
        style={{
          position: "absolute",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          border: "1px solid oklch(0.58 0.26 340 / 0.12)",
          pointerEvents: "none",
          animationDelay: "1.2s",
        }}
      />

      {/* Spinning arc ring */}
      <div
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          border: "2px solid transparent",
          borderTopColor: "oklch(0.58 0.26 340 / 0.7)",
          borderRightColor: "oklch(0.42 0.16 345 / 0.4)",
          animation: "spin-slow 3s linear infinite",
          pointerEvents: "none",
        }}
      />

      {/* Inner counter-rotating arc */}
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "1.5px solid transparent",
          borderBottomColor: "oklch(0.62 0.20 300 / 0.6)",
          borderLeftColor: "oklch(0.58 0.26 340 / 0.3)",
          animation: "spin-slow 5s linear infinite reverse",
          pointerEvents: "none",
        }}
      />

      {/* Center dot */}
      <div
        style={{
          position: "absolute",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "oklch(0.72 0.22 320)",
          boxShadow: "0 0 12px 4px oklch(0.58 0.26 340 / 0.6)",
          animation: "pulse-glow 2s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {/* S H A H E D — letter-by-letter stagger */}
        <div
          style={{
            display: "flex",
            gap: "0.12em",
            alignItems: "baseline",
          }}
        >
          {(
            [
              { char: "S", delay: 0 },
              { char: "H", delay: 80 },
              { char: "A", delay: 160 },
              { char: "H", delay: 240 },
              { char: "E", delay: 320 },
              { char: "D", delay: 400 },
            ] as { char: string; delay: number }[]
          ).map(({ char, delay }) => (
            <span
              key={`${char}-${delay}`}
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "clamp(3.5rem, 12vw, 7rem)",
                fontWeight: 700,
                letterSpacing: "0.18em",
                background:
                  "linear-gradient(135deg, oklch(0.72 0.22 320), oklch(0.58 0.26 340), oklch(0.42 0.16 345))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                opacity: 0,
                transform: "translateY(30px)",
                animation: `letter-rise 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms forwards`,
                lineHeight: 1.1,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Tagline: "Programming is Art." */}
        <div
          style={{
            fontFamily: '"Syne", sans-serif',
            fontSize: "clamp(0.85rem, 2.5vw, 1.05rem)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "oklch(0.78 0.08 340)",
            opacity: showTagline ? 1 : 0,
            transform: showTagline ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
            marginTop: "0.4rem",
          }}
        >
          Programming is Art.
        </div>

        {/* Sub-tagline */}
        <div
          style={{
            fontFamily: '"Syne", sans-serif',
            fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
            letterSpacing: "0.2em",
            color: "oklch(0.60 0.05 340)",
            opacity: showSubTagline ? 0.7 : 0,
            transform: showSubTagline ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          Junior Programmer · Fashionista · Physics Enthusiast
        </div>
      </div>

      {/* Progress bar container */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(320px, 60vw)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.6rem",
        }}
      >
        {/* Track */}
        <div
          style={{
            width: "100%",
            height: "2px",
            background: "oklch(0.58 0.26 340 / 0.15)",
            borderRadius: "2px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Fill */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, oklch(0.42 0.16 345), oklch(0.58 0.26 340), oklch(0.72 0.22 320))",
              transformOrigin: "left center",
              transform: `scaleX(${progress / 100})`,
              transition: "transform 0.08s linear",
              borderRadius: "2px",
              boxShadow: "0 0 8px oklch(0.58 0.26 340 / 0.6)",
            }}
          />
          {/* Shimmer overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, transparent 0%, oklch(1 0 0 / 0.3) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s linear infinite",
              width: `${progress}%`,
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Percentage */}
        <span
          style={{
            fontFamily: '"Syne", sans-serif',
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            color: "oklch(0.58 0.26 340 / 0.6)",
          }}
        >
          {Math.round(progress)}%
        </span>
      </div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes letter-rise {
          from {
            opacity: 0;
            transform: translateY(30px) skewY(3deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) skewY(0deg);
          }
        }
      `}</style>
    </div>
  );
}
