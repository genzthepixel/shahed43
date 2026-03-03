import { useEffect, useRef, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface WaveBurst {
  id: number;
  x: number;
  y: number;
}

export default function PinkCursor() {
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [waves, setWaves] = useState<WaveBurst[]>([]);

  // Refs so the rAF loop never has stale closure issues
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const ringElRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const sparkleIdRef = useRef(0);
  const waveIdRef = useRef(0);

  const isTouchDevice =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (isTouchDevice) return undefined;

    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setDotPos({ x: e.clientX, y: e.clientY });

      // Spawn sparkle randomly (~35% chance per move)
      if (Math.random() < 0.35) {
        const id = ++sparkleIdRef.current;
        const size = 3 + Math.random() * 2;
        const offsetX = (Math.random() - 0.5) * 14;
        const offsetY = (Math.random() - 0.5) * 14;
        setSparkles((prev) => [
          ...prev.slice(-18),
          { id, x: e.clientX + offsetX, y: e.clientY + offsetY, size },
        ]);
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== id));
        }, 650);
      }

      // Hover detection
      const target = e.target as Element;
      const hoverable = target.closest(
        'a, button, [role="button"], input, textarea, select, label',
      );
      setIsHovering(!!hoverable);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      // Spawn click wave burst
      const id = ++waveIdRef.current;
      setWaves((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setWaves((prev) => prev.filter((w) => w.id !== id));
      }, 600);
    };
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Smooth ring lerp via rAF — reads mouseRef, never stale
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      ringPosRef.current.x = lerp(
        ringPosRef.current.x,
        mouseRef.current.x,
        0.12,
      );
      ringPosRef.current.y = lerp(
        ringPosRef.current.y,
        mouseRef.current.y,
        0.12,
      );
      if (ringElRef.current) {
        ringElRef.current.style.transform = `translate(${ringPosRef.current.x}px, ${ringPosRef.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  const _dotScale = isClicking ? 2.5 : isHovering ? 1.5 : 1;
  const _ringScale = isClicking ? 2.2 : isHovering ? 1.8 : 1;

  return (
    <>
      {/* Click wave bursts */}
      {waves.map((w) => (
        <div
          key={w.id}
          aria-hidden="true"
          style={{
            position: "fixed",
            left: w.x,
            top: w.y,
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: "2px solid oklch(0.58 0.26 340 / 0.8)",
            boxShadow: "0 0 12px oklch(0.58 0.26 340 / 0.6)",
            pointerEvents: "none",
            zIndex: 9995,
            animation:
              "wave-burst 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
          }}
        />
      ))}

      {/* Sparkle dots */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          aria-hidden="true"
          style={{
            position: "fixed",
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: "oklch(0.72 0.22 320)",
            boxShadow: "0 0 6px oklch(0.58 0.26 340 / 0.9)",
            pointerEvents: "none",
            zIndex: 9996,
            transform: "translate(-50%, -50%)",
            animation:
              "cursor-sparkle 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
          }}
        />
      ))}

      {/* Cursor ring (lagged, positioned by rAF) */}
      <div
        ref={ringElRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovering ? 52 : 36,
          height: isHovering ? 52 : 36,
          borderRadius: "50%",
          border: isHovering
            ? "2px solid oklch(0.72 0.22 320)"
            : "1.5px solid oklch(0.58 0.26 340)",
          background: isHovering
            ? "oklch(0.58 0.26 340 / 0.18)"
            : "transparent",
          boxShadow: isHovering
            ? "0 0 24px oklch(0.58 0.26 340 / 0.9), 0 0 48px oklch(0.58 0.26 340 / 0.5), 0 0 80px oklch(0.72 0.22 320 / 0.3)"
            : "0 0 8px oklch(0.58 0.26 340 / 0.4)",
          pointerEvents: "none",
          zIndex: 9997,
          transition:
            "width 0.2s cubic-bezier(0.22, 1, 0.36, 1), height 0.2s cubic-bezier(0.22, 1, 0.36, 1), background 0.2s ease, box-shadow 0.2s ease, border 0.2s ease",
        }}
      />

      {/* Main cursor dot (instant follow) */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: dotPos.y,
          left: dotPos.x,
          width: isHovering ? 8 : 10,
          height: isHovering ? 8 : 10,
          borderRadius: "50%",
          background: isHovering
            ? "oklch(0.95 0.08 320)"
            : "oklch(0.58 0.26 340)",
          boxShadow: isHovering
            ? "0 0 20px oklch(0.58 0.26 340 / 1), 0 0 40px oklch(0.58 0.26 340 / 0.7), 0 0 60px oklch(0.72 0.22 320 / 0.4)"
            : "0 0 8px oklch(0.58 0.26 340 / 0.8), 0 0 16px oklch(0.58 0.26 340 / 0.3)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: `translate(-50%, -50%) scale(${isClicking ? 2.5 : isHovering ? 1.2 : 1})`,
          transition:
            "transform 0.18s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.18s ease, background 0.18s ease, width 0.18s ease, height 0.18s ease",
        }}
      />
    </>
  );
}
