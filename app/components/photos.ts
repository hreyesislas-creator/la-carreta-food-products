/* ─────────────────────────────────────────────────────────────────────────
 * Photography manifest for La Carreta Mexican Food
 *
 * STATUS: Using Unsplash placeholders. Real brand photography should
 * replace these as soon as it is available.
 *
 * SWAP INSTRUCTIONS:
 *   1. Drop your file into the path shown in each `localPath` comment.
 *   2. Replace the `src` value with the local path string, e.g. "/images/hero/la-carreta-hero.jpg"
 *   3. Once all photos are local you can remove the `remotePatterns` entry
 *      for images.unsplash.com in next.config.ts.
 *
 * REQUIRED IMAGE DIMENSIONS:
 *   Hero    → 2400 × 1600 px  (localPath: /public/images/hero/la-carreta-hero.jpg)
 *   Products → 1600 × 1200 px (localPath: /public/images/products/<slug>.jpg)
 *
 * PHOTOGRAPHY NOTES:
 *   hero         — Tortillas + masa + tamales + corn, warm professional lighting
 *   corn         — Stacked corn tortillas only (no tacos/plates)
 *   flour        — Stacked flour tortillas, soft texture visible
 *   masa         — Fresh masa in artisan presentation, wooden surface
 *   tamal        — Wrapped tamales with corn husks visible
 *   spices       — Traditional Mexican spices: dried chiles, clay bowls, wooden spoons
 * ───────────────────────────────────────────────────────────────────────── */

export type Photo = {
  src: string;
  alt: string;
  position?: string;
};

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=88&auto=format&fit=crop`;

/* ── Hero ──────────────────────────────────────────────────────────────── */
// localPath: /public/images/hero/la-carreta-hero.jpg  (2400 × 1600)
export const HERO_PHOTO: Photo = {
  src: unsplash("1591266123515-46149ea0b0a9", 2400),
  alt: "Stack of warm corn tortillas in a hand-woven basket — La Carreta Mexican Food",
  position: "center 40%",
};

/* ── Heritage / editorial (unused in current layout, kept for future) ──── */
export const HERITAGE_MASA: Photo = {
  src: unsplash("1546853845-3145109496a8", 1400),
  alt: "Hands kneading fresh masa on a wooden surface",
  position: "center 55%",
};

export const HERITAGE_COMAL: Photo = {
  src: unsplash("1693193433392-da83457dff20", 1600),
  alt: "Handmade tortillas resting on a linen napkin",
  position: "center 50%",
};

/* ── Product photography ───────────────────────────────────────────────── */
export const PRODUCT_PHOTOS: Record<string, Photo> = {
  // localPath: /public/images/products/corn-tortillas.jpg  (1600 × 1200)
  corn: {
    src: unsplash("1599232288126-7dbd2127db14", 1600),
    alt: "Stacked corn tortillas — La Carreta Mexican Food",
    position: "center 50%",
  },

  // localPath: /public/images/products/flour-tortillas.jpg  (1600 × 1200)
  flour: {
    src: unsplash("1545505005-0a09f804dcf6", 1600),
    alt: "Soft flour tortillas on a kitchen towel — La Carreta Mexican Food",
    position: "center 45%",
  },

  // localPath: /public/images/products/tamales.jpg  (1600 × 1200)
  tamal: {
    src: unsplash("1548078835-cb7d27702c1f", 1600),
    alt: "Hand-wrapped tamales with corn husks — La Carreta Mexican Food",
    position: "center 50%",
  },

  // localPath: /public/images/products/masa.jpg  (1600 × 1200)
  masa: {
    src: unsplash("1583898791652-5e8b960710bd", 1600),
    alt: "Fresh masa dough on a wooden board — La Carreta Mexican Food",
    position: "center 50%",
  },

  // localPath: /public/images/products/spices.jpg  (1600 × 1200)
  // Spices photo: dried chiles, clay bowls, wooden spoons on rustic surface
  spices: {
    src: unsplash("1638429347-6a5b1a0ec4a1", 1600),
    alt: "Traditional Mexican spices with dried chiles and clay bowls — La Carreta Mexican Food",
    position: "center 50%",
  },

  // Legacy key — kept to avoid runtime errors if referenced elsewhere
  chips: {
    src: unsplash("1613919113640-25732ec5e61f", 1200),
    alt: "Artisan tortilla chips",
    position: "center 50%",
  },
};

/* ── Wholesale / editorial ─────────────────────────────────────────────── */
export const WHOLESALE_PHOTO: Photo = {
  src: unsplash("1697471578744-feed1837f739", 1600),
  alt: "Traditional Mexican kitchen with clay cookware",
  position: "center 45%",
};
