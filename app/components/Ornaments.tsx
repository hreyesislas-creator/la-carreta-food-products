/* Hand-drawn ink ornaments — single-color line illustrations
   inspired by old Mexican cookbook engravings. Kept thin and quiet
   so they layer well over aged paper. */

type Common = { className?: string; tone?: string };

const DEFAULT_TONE = "#7a4f1c";

/* Decorative section divider — gold rule with center diamond + leaves */
export function Flourish({ className = "", tone = DEFAULT_TONE }: Common) {
  return (
    <svg
      viewBox="0 0 320 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <line x1="0" y1="12" x2="120" y2="12" stroke={tone} strokeWidth="0.6" />
      <line x1="200" y1="12" x2="320" y2="12" stroke={tone} strokeWidth="0.6" />
      <path
        d="M120 12 Q 140 4 160 12 Q 180 20 200 12"
        stroke={tone}
        strokeWidth="0.7"
        fill="none"
      />
      <path
        d="M155 8 L 160 4 L 165 8 L 160 12 Z M155 16 L 160 12 L 165 16 L 160 20 Z"
        stroke={tone}
        strokeWidth="0.6"
        fill={tone}
        fillOpacity="0.3"
      />
      <circle cx="120" cy="12" r="1.4" fill={tone} />
      <circle cx="200" cy="12" r="1.4" fill={tone} />
      <path
        d="M108 12 q -6 -3 -12 0 q 6 3 12 0 z M212 12 q 6 -3 12 0 q -6 3 -12 0 z"
        fill={tone}
        fillOpacity="0.55"
      />
    </svg>
  );
}

/* An ear of corn (mazorca) — vertical illustration for accents */
export function CornEar({ className = "", tone = DEFAULT_TONE }: Common) {
  return (
    <svg
      viewBox="0 0 80 220"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Husk leaves */}
      <path
        d="M40 30 C 14 18 6 50 14 78 C 20 100 30 110 40 110"
        stroke={tone}
        strokeWidth="0.9"
        fill="none"
      />
      <path
        d="M40 35 C 64 22 76 52 68 80 C 62 102 50 112 40 112"
        stroke={tone}
        strokeWidth="0.9"
        fill="none"
      />
      <path
        d="M18 50 Q 24 70 36 80"
        stroke={tone}
        strokeWidth="0.6"
        fill="none"
      />
      <path
        d="M62 50 Q 56 70 44 80"
        stroke={tone}
        strokeWidth="0.6"
        fill="none"
      />
      {/* Cob body */}
      <ellipse cx="40" cy="148" rx="20" ry="56" stroke={tone} strokeWidth="0.9" fill="none" />
      {/* Kernel grid */}
      <g stroke={tone} strokeWidth="0.55" fill="none">
        {Array.from({ length: 9 }).map((_, row) => (
          <g key={row}>
            {Array.from({ length: 5 }).map((_, col) => {
              const cx = 24 + col * 8 + ((row % 2) * 4);
              const cy = 98 + row * 12;
              return (
                <ellipse
                  key={col}
                  cx={cx}
                  cy={cy}
                  rx="3.2"
                  ry="4.5"
                />
              );
            })}
          </g>
        ))}
      </g>
      {/* Silk strands */}
      <path
        d="M36 30 C 30 14 26 6 22 0 M40 28 V 4 M44 30 C 50 14 54 6 58 0"
        stroke={tone}
        strokeWidth="0.55"
        fill="none"
      />
    </svg>
  );
}

/* Agave / maguey plant silhouette */
export function Agave({ className = "", tone = DEFAULT_TONE }: Common) {
  return (
    <svg viewBox="0 0 220 220" fill="none" className={className} aria-hidden>
      <g stroke={tone} strokeWidth="0.9" fill="none" strokeLinecap="round">
        {[
          "M110 198 C 70 170 50 130 30 70",
          "M110 198 C 86 168 76 128 70 60",
          "M110 198 C 100 168 100 124 108 50",
          "M110 198 C 120 170 124 128 132 56",
          "M110 198 C 138 170 156 128 178 64",
          "M110 198 C 152 174 174 138 200 84",
          "M110 198 C 88 178 56 158 18 134",
          "M110 198 C 132 178 168 158 202 134",
        ].map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      {/* spikes at tips */}
      <g fill={tone}>
        {[
          [30, 70],
          [70, 60],
          [108, 50],
          [132, 56],
          [178, 64],
          [200, 84],
          [18, 134],
          [202, 134],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.6" />
        ))}
      </g>
    </svg>
  );
}

/* Clay olla / pot illustration */
export function ClayOlla({ className = "", tone = DEFAULT_TONE }: Common) {
  return (
    <svg viewBox="0 0 160 180" fill="none" className={className} aria-hidden>
      <ellipse cx="80" cy="40" rx="38" ry="8" stroke={tone} strokeWidth="0.9" fill="none" />
      <path
        d="M42 42 C 22 70 18 110 38 142 C 58 168 102 168 122 142 C 142 110 138 70 118 42"
        stroke={tone}
        strokeWidth="0.9"
        fill="none"
      />
      <ellipse cx="80" cy="40" rx="30" ry="5" stroke={tone} strokeWidth="0.6" fill={tone} fillOpacity="0.07" />
      <path
        d="M40 90 C 80 96 120 96 142 90"
        stroke={tone}
        strokeWidth="0.5"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M44 110 C 80 115 120 115 138 110"
        stroke={tone}
        strokeWidth="0.5"
        fill="none"
        opacity="0.5"
      />
      {/* small handle hints */}
      <path d="M26 78 q -6 8 0 18" stroke={tone} strokeWidth="0.8" fill="none" />
      <path d="M134 78 q 6 8 0 18" stroke={tone} strokeWidth="0.8" fill="none" />
    </svg>
  );
}

/* Molcajete (3-legged stone grinder) */
export function Molcajete({ className = "", tone = DEFAULT_TONE }: Common) {
  return (
    <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden>
      {/* bowl */}
      <path
        d="M30 60 C 30 30 190 30 190 60 C 188 92 168 116 110 116 C 52 116 32 92 30 60 Z"
        stroke={tone}
        strokeWidth="0.9"
        fill="none"
      />
      <ellipse cx="110" cy="58" rx="78" ry="14" stroke={tone} strokeWidth="0.6" fill="none" />
      {/* legs */}
      <path d="M50 110 L 42 144" stroke={tone} strokeWidth="0.9" />
      <path d="M110 116 L 110 152" stroke={tone} strokeWidth="0.9" />
      <path d="M170 110 L 178 144" stroke={tone} strokeWidth="0.9" />
      <ellipse cx="42" cy="146" rx="6" ry="2" stroke={tone} strokeWidth="0.6" fill="none" />
      <ellipse cx="110" cy="154" rx="6" ry="2" stroke={tone} strokeWidth="0.6" fill="none" />
      <ellipse cx="178" cy="146" rx="6" ry="2" stroke={tone} strokeWidth="0.6" fill="none" />
      {/* pestle */}
      <path d="M134 38 L 148 6" stroke={tone} strokeWidth="1.2" strokeLinecap="round" />
      <ellipse cx="148" cy="4" rx="6" ry="3" fill={tone} />
      {/* pitted texture */}
      <g fill={tone} fillOpacity="0.4">
        {[
          [70, 60], [90, 70], [120, 64], [150, 72], [80, 84], [130, 84], [108, 78],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.4" />
        ))}
      </g>
    </svg>
  );
}

/* Stack of tortillas wrapped in cloth */
export function TortillaBundle({ className = "", tone = DEFAULT_TONE }: Common) {
  return (
    <svg viewBox="0 0 240 180" fill="none" className={className} aria-hidden>
      {/* basket / cloth */}
      <path
        d="M20 100 Q 120 60 220 100 L 210 150 Q 120 170 30 150 Z"
        stroke={tone}
        strokeWidth="0.9"
        fill="none"
      />
      <path
        d="M40 110 Q 120 80 200 110"
        stroke={tone}
        strokeWidth="0.55"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M40 124 Q 120 96 200 124"
        stroke={tone}
        strokeWidth="0.55"
        fill="none"
        opacity="0.5"
      />
      {/* stitched edge */}
      <g stroke={tone} strokeWidth="0.4" strokeDasharray="2 3">
        <path d="M28 102 Q 120 64 212 102" fill="none" />
      </g>
      {/* tortilla stack */}
      <ellipse cx="120" cy="76" rx="58" ry="9" stroke={tone} strokeWidth="0.8" fill="none" />
      <ellipse cx="120" cy="68" rx="56" ry="8" stroke={tone} strokeWidth="0.7" fill="none" />
      <ellipse cx="120" cy="60" rx="54" ry="7" stroke={tone} strokeWidth="0.6" fill="none" />
      <ellipse cx="120" cy="52" rx="52" ry="6" stroke={tone} strokeWidth="0.55" fill="none" />
      {/* speckles on top tortilla */}
      <g fill={tone} fillOpacity="0.5">
        <circle cx="98" cy="52" r="0.8" />
        <circle cx="118" cy="49" r="0.7" />
        <circle cx="138" cy="53" r="0.8" />
        <circle cx="128" cy="56" r="0.6" />
      </g>
    </svg>
  );
}

/* Comal disc seen from above with tortilla */
export function ComalDisc({ className = "", tone = DEFAULT_TONE }: Common) {
  return (
    <svg viewBox="0 0 220 220" fill="none" className={className} aria-hidden>
      <circle cx="110" cy="110" r="100" stroke={tone} strokeWidth="0.9" fill="none" />
      <circle cx="110" cy="110" r="92" stroke={tone} strokeWidth="0.4" fill="none" opacity="0.5" />
      <circle cx="110" cy="110" r="58" stroke={tone} strokeWidth="0.7" fill="none" />
      <g fill={tone} fillOpacity="0.5">
        {[
          [90, 90], [120, 92], [140, 108], [98, 124], [128, 128], [110, 110],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.2" />
        ))}
      </g>
      {/* handle hints */}
      <line x1="14" y1="110" x2="0" y2="110" stroke={tone} strokeWidth="1" />
      <line x1="206" y1="110" x2="220" y2="110" stroke={tone} strokeWidth="1" />
    </svg>
  );
}

/* Hecho en México round seal */
export function MexicoSeal({ className = "", tone = DEFAULT_TONE }: Common) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden>
      <circle cx="80" cy="80" r="76" fill="none" stroke={tone} strokeWidth="0.9" />
      <circle cx="80" cy="80" r="68" fill="none" stroke={tone} strokeWidth="0.5" />
      <circle cx="80" cy="80" r="48" fill="none" stroke={tone} strokeWidth="0.5" strokeDasharray="2 3" />
      {/* curved text suggestion via ticks */}
      <g stroke={tone} strokeWidth="0.7">
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const x1 = 80 + Math.cos(a) * 72;
          const y1 = 80 + Math.sin(a) * 72;
          const x2 = 80 + Math.cos(a) * 76;
          const y2 = 80 + Math.sin(a) * 76;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      <text
        x="80"
        y="68"
        textAnchor="middle"
        fontFamily="var(--font-playfair)"
        fontStyle="italic"
        fontSize="13"
        fill={tone}
      >
        Hecho en
      </text>
      <text
        x="80"
        y="92"
        textAnchor="middle"
        fontFamily="var(--font-playfair)"
        fontWeight="600"
        fontSize="20"
        letterSpacing="3"
        fill={tone}
      >
        MÉXICO
      </text>
      <line x1="50" y1="100" x2="110" y2="100" stroke={tone} strokeWidth="0.6" />
      <text
        x="80"
        y="116"
        textAnchor="middle"
        fontFamily="var(--font-playfair)"
        fontSize="9"
        letterSpacing="3"
        fill={tone}
      >
        EST · 1939
      </text>
    </svg>
  );
}

/* Heritage 5-pointed star ornament */
export function StarMark({ className = "", tone = DEFAULT_TONE }: Common) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 2 L13.8 8.2 L20 8.6 L15 12.6 L17 19 L12 15.2 L7 19 L9 12.6 L4 8.6 L10.2 8.2 Z"
        stroke={tone}
        strokeWidth="0.7"
        fill={tone}
        fillOpacity="0.18"
      />
    </svg>
  );
}

/* Talavera-inspired square tile motif (used as small accent badge) */
export function TileMotif({ className = "", tone = DEFAULT_TONE }: Common) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden>
      <rect x="2" y="2" width="56" height="56" stroke={tone} strokeWidth="0.6" fill="none" />
      <rect x="6" y="6" width="48" height="48" stroke={tone} strokeWidth="0.4" fill="none" />
      <path d="M30 6 L 38 30 L 30 54 L 22 30 Z" stroke={tone} strokeWidth="0.5" fill="none" />
      <path d="M6 30 L 30 22 L 54 30 L 30 38 Z" stroke={tone} strokeWidth="0.5" fill="none" />
      <circle cx="30" cy="30" r="3" fill={tone} fillOpacity="0.4" />
      {[[18,18],[42,18],[18,42],[42,42]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="1.2" fill={tone} />
      ))}
    </svg>
  );
}
