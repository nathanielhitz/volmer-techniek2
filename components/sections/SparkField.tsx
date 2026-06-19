/**
 * SparkField — subtiele vonken/ember-laag voor de hero.
 *
 * Pure CSS/SVG, geen canvas of WebGL. Vonken stijgen op uit de "hot zone"
 * (rechtsonder, waar het warme keylicht zit), lichten kort op en vervagen —
 * als vonkenregen bij verspaning of een laspunt in een donkere werkplaats.
 *
 * - Art-directed: vaste set configs (geen Math.random → geen hydration-risk).
 * - Performant: alleen transform + opacity animeren (GPU), ~16 DOM-nodes.
 * - Toegankelijk: aria-hidden, respecteert prefers-reduced-motion.
 * - Mobile-lite: minder vonken + zachter arc-licht op kleine schermen.
 */

type Spark = {
  /** horizontale positie binnen de hot zone (%) */
  left: number;
  /** start-offset vanaf de bodem (%) */
  bottom: number;
  /** diameter in px */
  size: number;
  /** hoe ver de vonk opstijgt (px) */
  travel: number;
  /** horizontale drift tijdens het opstijgen (px) */
  drift: number;
  /** animatieduur (s) */
  dur: number;
  /** start-vertraging (s) */
  delay: number;
  /** glow-radius (px) */
  glow: number;
};

// Rechts-gebiaste verdeling rond de hot zone; gevarieerde timing voelt organisch.
const SPARKS: Spark[] = [
  { left: 72, bottom: 8, size: 2.5, travel: 320, drift: 28, dur: 3.4, delay: 0.0, glow: 7 },
  { left: 80, bottom: 4, size: 1.8, travel: 260, drift: -18, dur: 4.1, delay: 0.7, glow: 5 },
  { left: 64, bottom: 12, size: 3.0, travel: 380, drift: 40, dur: 3.0, delay: 1.6, glow: 9 },
  { left: 88, bottom: 6, size: 1.6, travel: 230, drift: 22, dur: 4.6, delay: 0.3, glow: 4 },
  { left: 76, bottom: 2, size: 2.2, travel: 300, drift: -34, dur: 3.7, delay: 2.2, glow: 6 },
  { left: 58, bottom: 10, size: 1.5, travel: 210, drift: 16, dur: 5.0, delay: 1.1, glow: 4 },
  { left: 84, bottom: 14, size: 2.8, travel: 360, drift: -26, dur: 3.2, delay: 2.8, glow: 8 },
  { left: 68, bottom: 5, size: 1.9, travel: 270, drift: 34, dur: 4.3, delay: 0.5, glow: 5 },
  { left: 92, bottom: 9, size: 1.4, travel: 200, drift: -14, dur: 5.4, delay: 1.9, glow: 4 },
  { left: 60, bottom: 3, size: 2.4, travel: 330, drift: 24, dur: 3.6, delay: 3.3, glow: 7 },
  { left: 78, bottom: 16, size: 1.7, travel: 250, drift: -30, dur: 4.8, delay: 0.9, glow: 5 },
  { left: 86, bottom: 1, size: 2.1, travel: 290, drift: 18, dur: 4.0, delay: 2.5, glow: 6 },
  { left: 54, bottom: 7, size: 1.3, travel: 190, drift: 30, dur: 5.6, delay: 1.4, glow: 3 },
  { left: 70, bottom: 11, size: 3.2, travel: 410, drift: -22, dur: 2.9, delay: 3.7, glow: 10 },
  { left: 82, bottom: 13, size: 1.6, travel: 240, drift: 26, dur: 4.9, delay: 0.2, glow: 4 },
  { left: 66, bottom: 4, size: 2.0, travel: 280, drift: -38, dur: 3.9, delay: 2.0, glow: 6 },
];

export function SparkField() {
  return (
    <div className="spark-field" aria-hidden="true">
      {/* Las-arc: zacht warm licht dat onregelmatig flikkert (intermitterende boog) */}
      <span className="spark-arc" />

      {SPARKS.map((s, i) => (
        <span
          key={i}
          className={`spark${s.size >= 2.6 ? " spark--ember" : ""}`}
          style={
            {
              left: `${s.left}%`,
              bottom: `${s.bottom}%`,
              "--s": `${s.size}px`,
              "--travel": `${s.travel}px`,
              "--drift": `${s.drift}px`,
              "--dur": `${s.dur}s`,
              "--delay": `${s.delay}s`,
              "--glow": `${s.glow}px`,
            } as React.CSSProperties
          }
        />
      ))}

      <style>{`
        .spark-field {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          overflow: hidden;
        }

        /* ── Las-arc glow ─────────────────────────────────────────────── */
        .spark-arc {
          position: absolute;
          right: 22%;
          bottom: 28%;
          width: 320px;
          height: 320px;
          transform: translate(50%, 50%);
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 214, 160, 0.30) 0%,
            rgba(217, 74, 31, 0.20) 32%,
            transparent 68%
          );
          filter: blur(8px);
          opacity: 0.5;
          animation: arcFlicker 6.5s ease-in-out infinite;
          will-change: opacity, transform;
        }

        /* ── Vonken ───────────────────────────────────────────────────── */
        .spark {
          position: absolute;
          width: var(--s);
          height: var(--s);
          border-radius: 50%;
          background: radial-gradient(
            circle,
            #ffe6c2 0%,
            var(--color-molten) 55%,
            rgba(217, 74, 31, 0) 78%
          );
          box-shadow: 0 0 var(--glow) rgba(217, 74, 31, 0.55);
          opacity: 0;
          will-change: transform, opacity;
          animation: sparkRise var(--dur) var(--delay) cubic-bezier(0.33, 0.1, 0.25, 1) infinite;
        }
        /* Embers gloeien iets warmer en houden langer adem */
        .spark--ember {
          background: radial-gradient(
            circle,
            #fff1d6 0%,
            var(--color-molten) 48%,
            rgba(122, 31, 10, 0) 80%
          );
        }

        @keyframes sparkRise {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.2);
          }
          7% {
            opacity: 1;
            transform: translate(calc(var(--drift) * 0.1), calc(var(--travel) * -0.05)) scale(1);
          }
          70% {
            opacity: 0.85;
          }
          100% {
            opacity: 0;
            transform: translate(var(--drift), calc(var(--travel) * -1)) scale(0.45);
          }
        }

        @keyframes arcFlicker {
          0%   { opacity: 0.42; transform: translate(50%, 50%) scale(1); }
          12%  { opacity: 0.60; }
          18%  { opacity: 0.40; }
          26%  { opacity: 0.68; transform: translate(50%, 50%) scale(1.04); }
          40%  { opacity: 0.46; }
          55%  { opacity: 0.62; }
          63%  { opacity: 0.44; transform: translate(50%, 50%) scale(0.98); }
          80%  { opacity: 0.58; }
          100% { opacity: 0.42; transform: translate(50%, 50%) scale(1); }
        }

        /* ── Mobile-lite: minder vonken, zachter licht ────────────────── */
        @media (max-width: 767px) {
          .spark-field .spark:nth-child(even) { display: none; }
          .spark-arc {
            width: 220px;
            height: 220px;
            right: 14%;
            opacity: 0.34;
          }
        }

        /* ── Reduced motion: alle beweging uit, statisch zacht gloeien ── */
        @media (prefers-reduced-motion: reduce) {
          .spark { animation: none; opacity: 0; }
          .spark-arc {
            animation: none;
            opacity: 0.34;
          }
        }
      `}</style>
    </div>
  );
}
