"use client";

/**
 * Brutalist Indigo Neural Topology background.
 *
 * Five stacked CSS/SVG layers — no external images, no WebGL:
 *   1. Asymmetric radial atmospheric glow (violet ↖ + fuchsia ↘)
 *   2. Isometric micro-grid via repeating-linear-gradient (60°/−60°/0°)
 *   3. Conic starburst texture from two off-center focal points
 *   4. SVG circuit topology — bus traces, signal traces, glowing nodes
 *   5. Radial vignette — keeps the centre readable
 */

// ── Circuit data ──────────────────────────────────────────────────────────────

/** Main horizontal "bus" traces — thick, high-level */
const BUSES = [
  "M0 160 L280 160 L280 120 L560 120 L560 180 L880 180 L880 140 L1160 140 L1160 200 L1440 200",
  "M0 450 L200 450 L200 420 L480 420 L480 460 L760 460 L760 440 L1000 440 L1000 480 L1280 480 L1280 450 L1440 450",
  "M0 720 L160 720 L160 700 L420 700 L420 740 L720 740 L720 720 L960 720 L960 760 L1200 760 L1200 720 L1440 720",
];

/** Signal traces — thin branches and vertical column connectors */
const SIGNALS = [
  // Top-bus upward spurs
  "M280 120 L280 56 L120 56",
  "M560 120 L560 72 L700 72 L700 32",
  "M880 140 L880 56 L1040 56",
  "M1160 140 L1160 60 L1320 60",
  // Vertical: top → mid bus
  "M280 160 L280 420",
  "M560 180 L560 420",
  "M880 180 L880 460",
  "M1160 200 L1160 440 L1000 440",
  // Mid-bus branches
  "M200 420 L200 300 L80 300 L80 220",
  "M760 460 L760 540 L640 540 L640 620",
  "M1280 480 L1280 560 L1400 560",
  // Vertical: mid → lower bus
  "M200 450 L200 700",
  "M480 460 L480 580 L420 580 L420 700",
  "M760 460 L760 620 L720 620 L720 740",
  "M1000 480 L1000 580 L960 580 L960 720",
  "M1280 480 L1280 720",
  // Lower spurs downward
  "M160 720 L160 840 L320 840",
  "M720 740 L720 860 L580 860",
  "M960 760 L960 868 L1120 868",
  "M1200 760 L1200 840 L1360 840",
];

/** Fuchsia accent traces for colour variation */
const ACCENTS = [
  "M640 540 L640 700 L720 700 L720 740",
  "M80 300 L80 720 L160 720",
  "M1400 560 L1400 720 L1280 720",
  "M320 840 L320 900",
  "M1120 868 L1120 900",
];

/** Small junction nodes (right-angle intersections) */
const SMALL_NODES: [number, number][] = [
  [280, 160], [560, 120], [880, 180], [1160, 140],
  [280, 120], [560, 180], [700, 72], [1040, 56],
  [200, 450], [480, 420], [760, 460], [1000, 440], [1280, 480],
  [280, 420], [560, 420], [880, 460], [1160, 440],
  [160, 720], [420, 700], [720, 740], [960, 760], [1200, 720],
  [200, 700], [480, 580], [960, 580], [1280, 720],
  [640, 540], [80, 300], [760, 540], [1400, 560],
];

/** Large glowing junction nodes — visual anchors */
const LARGE_NODES = [
  { x: 560, y: 420,  r: 5, color: "rgba(139,92,246,0.9)"  },
  { x: 880, y: 460,  r: 5, color: "rgba(217,70,239,0.85)" },
  { x: 280, y: 420,  r: 4, color: "rgba(139,92,246,0.80)" },
  { x: 1160, y: 440, r: 4, color: "rgba(217,70,239,0.75)" },
  { x: 640, y: 620,  r: 4, color: "rgba(139,92,246,0.75)" },
  { x: 720, y: 860,  r: 4, color: "rgba(217,70,239,0.65)" },
  { x: 200, y: 300,  r: 3, color: "rgba(139,92,246,0.60)" },
  { x: 1280, y: 560, r: 3, color: "rgba(217,70,239,0.55)" },
  { x: 960, y: 868,  r: 3, color: "rgba(139,92,246,0.55)" },
];

// ─────────────────────────────────────────────────────────────────────────────

export function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">

      {/* ── Layer 1: Atmospheric radial glow ── */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 75% 55% at 10% 8%,  rgba(109,40,217,0.28)  0%, transparent 62%)",
            "radial-gradient(ellipse 55% 70% at 92% 94%, rgba(217,70,239,0.13)  0%, transparent 58%)",
            "radial-gradient(ellipse 45% 35% at 58% 42%, rgba(80,20,180,0.07)   0%, transparent 55%)",
            "#121019",
          ].join(","),
        }}
      />

      {/* ── Layer 2: Isometric micro-grid ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "repeating-linear-gradient( 60deg, transparent 0px, transparent 34px, rgba(139,92,246,0.048) 34px, rgba(139,92,246,0.048) 35px)",
            "repeating-linear-gradient(-60deg, transparent 0px, transparent 34px, rgba(139,92,246,0.048) 34px, rgba(139,92,246,0.048) 35px)",
            "repeating-linear-gradient(  0deg, transparent 0px, transparent 59px, rgba(109,40,217,0.028) 59px, rgba(109,40,217,0.028) 60px)",
          ].join(","),
        }}
      />

      {/* ── Layer 3: Conic starburst texture — two asymmetric focal points ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "repeating-conic-gradient(from 30deg at  8% 12%, transparent 0deg, transparent 1.8deg, rgba(139,92,246,0.028) 1.8deg, rgba(139,92,246,0.028) 2.8deg, transparent 2.8deg)",
            "repeating-conic-gradient(from  0deg at 91% 87%, transparent 0deg, transparent 2.2deg, rgba(217,70,239,0.018) 2.2deg, rgba(217,70,239,0.018) 3.2deg, transparent 3.2deg)",
          ].join(","),
        }}
      />

      {/* ── Layer 4: SVG circuit topology ── */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow for lines */}
          <filter id="bg-line-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Strong glow for large nodes */}
          <filter id="bg-node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Thick bus "backbone" strokes — barely-there structural lines */}
        <g stroke="rgba(99,30,200,0.06)" strokeWidth="4" fill="none">
          {BUSES.map((d, i) => <path key={i} d={d} />)}
        </g>

        {/* Bus traces — normal weight with glow */}
        <g stroke="rgba(139,92,246,0.13)" strokeWidth="1" fill="none" filter="url(#bg-line-glow)">
          {BUSES.map((d, i) => <path key={i} d={d} />)}
        </g>

        {/* Signal traces */}
        <g stroke="rgba(139,92,246,0.10)" strokeWidth="1" fill="none" filter="url(#bg-line-glow)">
          {SIGNALS.map((d, i) => <path key={i} d={d} />)}
        </g>

        {/* Fuchsia accent traces */}
        <g stroke="rgba(217,70,239,0.10)" strokeWidth="1.5" fill="none" filter="url(#bg-line-glow)">
          {ACCENTS.map((d, i) => <path key={i} d={d} />)}
        </g>

        {/* Small junction nodes */}
        <g fill="rgba(139,92,246,0.40)">
          {SMALL_NODES.map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={2.5} />
          ))}
        </g>

        {/* Large glowing nodes — visual anchors */}
        <g filter="url(#bg-node-glow)">
          {LARGE_NODES.map(({ x, y, r, color }, i) => (
            <circle key={i} cx={x} cy={y} r={r} fill={color} />
          ))}
        </g>
      </svg>

      {/* ── Layer 5: Readability vignette ── */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 85% 65% at 50% 45%, transparent 25%, rgba(9,6,18,0.60) 100%)",
          ].join(","),
        }}
      />

    </div>
  );
}
