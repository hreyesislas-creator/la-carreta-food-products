/* Photography references for La Carreta.
 *
 * These are sourced from Unsplash and served from images.unsplash.com.
 * Swap each `src` with your own brand photography once available —
 * the rest of the UI (frames, vignettes, captions, ornaments) will
 * stay exactly as designed.
 *
 * To use your own photos:
 *  1. Drop the file into /public/images/
 *  2. Replace `src` with the local path, e.g. "/images/hero.jpg"
 *  3. Optionally remove the images.unsplash.com remote pattern in
 *     next.config.ts once all photos are local.
 */

export type Photo = {
  src: string;
  alt: string;
  /* object-position fine-tunes the crop inside the frame */
  position?: string;
};

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=85&auto=format&fit=crop`;

export const HERO_PHOTO: Photo = {
  src: unsplash("1591266123515-46149ea0b0a9", 1800),
  alt: "Stack of warm corn tortillas in a hand-woven basket",
  position: "center 45%",
};

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

export const PRODUCT_PHOTOS: Record<string, Photo> = {
  corn: {
    src: unsplash("1599232288126-7dbd2127db14", 1200),
    alt: "Warm corn tortillas in a basket",
    position: "center 50%",
  },
  flour: {
    src: unsplash("1545505005-0a09f804dcf6", 1200),
    alt: "Soft flour tortillas on a kitchen towel",
    position: "center 55%",
  },
  tamal: {
    src: unsplash("1548078835-cb7d27702c1f", 1200),
    alt: "Hand-wrapped tamales steaming in the pot",
    position: "center 50%",
  },
  masa: {
    src: unsplash("1583898791652-5e8b960710bd", 1200),
    alt: "Fresh masa dough on a wooden board",
    position: "center 50%",
  },
  chips: {
    src: unsplash("1613919113640-25732ec5e61f", 1200),
    alt: "Artisan tortilla chips on warm linen",
    position: "center 50%",
  },
  chilaquiles: {
    src: unsplash("1648437595584-62d15da353b7", 1200),
    alt: "Plated chilaquiles with salsa and toppings",
    position: "center 50%",
  },
};

export const WHOLESALE_PHOTO: Photo = {
  src: unsplash("1697471578744-feed1837f739", 1600),
  alt: "Traditional Mexican kitchen with clay cookware and copper pans",
  position: "center 45%",
};
