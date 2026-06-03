/* Thin scrolling brand-message ribbon — sits between Hero and Products.
   Uses a CSS marquee animation (defined in globals.css) that duplicates
   the text track so the loop is invisible. Respects prefers-reduced-motion. */

const ITEMS = [
  "No Artificial Preservatives",
  "No Chemicals to Extend Shelf Life",
  "Made with Original Recipes Since 1939",
  "100% Natural Ingredients",
  "Tortillas · Masa · Tamales · Spices",
];

const DOT = (
  <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-green-700/50 mx-6 translate-y-[-1px]" />
);

export function BrandRibbon() {
  return (
    <div
      className="relative overflow-hidden border-y border-line-soft bg-white py-3 select-none"
      aria-label="Brand promise: no artificial preservatives, original recipes since 1939"
    >
      {/* Left + right fade masks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
        style={{ background: "linear-gradient(90deg, #fff, transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
        style={{ background: "linear-gradient(270deg, #fff, transparent)" }}
      />

      {/* Scrolling track — duplicated so loop is seamless */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1].map((pass) => (
          <span key={pass} className="flex items-center shrink-0" aria-hidden={pass === 1}>
            {ITEMS.map((item, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="text-[0.67rem] uppercase tracking-[0.22em] font-semibold text-foreground/60">
                  {item}
                </span>
                {DOT}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
