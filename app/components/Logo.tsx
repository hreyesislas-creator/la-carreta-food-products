type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

/* Engraved-style wordmark — a wagon wheel monogram and editorial wordmark
   with "Casa Artesanal" suspended underneath in small caps. */
export function Logo({ className = "", tone = "dark" }: LogoProps) {
  const ink = tone === "dark" ? "#2a1607" : "#fbf3df";
  const accent = "#a87431";
  const muted = tone === "dark" ? "#7a5a2c" : "#d6b27a";

  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <svg width="44" height="44" viewBox="0 0 56 56" fill="none" aria-hidden>
        {/* Outer engraved ring */}
        <circle cx="28" cy="28" r="26" stroke={accent} strokeWidth="0.7" />
        <circle cx="28" cy="28" r="23" stroke={ink} strokeWidth="0.5" />
        {/* Wagon wheel spokes */}
        <g stroke={ink} strokeWidth="0.6">
          <line x1="28" y1="6" x2="28" y2="50" />
          <line x1="6" y1="28" x2="50" y2="28" />
          <line x1="12" y1="12" x2="44" y2="44" />
          <line x1="44" y1="12" x2="12" y2="44" />
        </g>
        <circle cx="28" cy="28" r="14" stroke={ink} strokeWidth="0.5" fill="none" />
        <circle cx="28" cy="28" r="3" fill={accent} />
        {/* Tick ornaments at cardinal points */}
        {[0, 90, 180, 270].map((deg) => {
          const r = (deg * Math.PI) / 180;
          const x1 = 28 + Math.cos(r) * 26;
          const y1 = 28 + Math.sin(r) * 26;
          const x2 = 28 + Math.cos(r) * 28;
          const y2 = 28 + Math.sin(r) * 28;
          return (
            <line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={accent}
              strokeWidth="1"
            />
          );
        })}
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-serif text-[1.15rem] tracking-[0.22em] uppercase"
          style={{ color: ink }}
        >
          La&nbsp;Carreta
        </span>
        <span className="flex items-center gap-2 mt-1.5">
          <span
            className="h-px w-3"
            style={{ background: accent }}
          />
          <span
            className="text-[0.54rem] tracking-[0.5em] uppercase"
            style={{ color: muted }}
          >
            Casa Artesanal
          </span>
          <span
            className="h-px w-3"
            style={{ background: accent }}
          />
        </span>
      </span>
    </span>
  );
}
