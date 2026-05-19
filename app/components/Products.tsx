"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Flourish, StarMark, TileMotif } from "./Ornaments";
import { PRODUCT_PHOTOS } from "./photos";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Catalog data ─────────────────────────────────────────────────── */

type Item = {
  name: string;
  spanish?: string;
  detail: string;
  texture: string;
  use: string;
  badge?: string;
};

type Category = {
  id: string;
  cap: string;
  spanish: string;
  english: string;
  intro: string;
  note: string;
  banner: "left" | "right";
  photoKey: string;
  items: Item[];
};

const CATEGORIES: Category[] = [
  {
    id: "maiz",
    cap: "I",
    spanish: "Tortillas de Maíz",
    english: "Corn Tortillas",
    intro:
      "The cornerstone of our table. White, yellow and blue corn nixtamalized overnight with hydrated lime, stone-ground at dawn, pressed by hand and finished on a cast-iron comal — ten variations for every kind of taco, fold, and family meal.",
    note: "Made fresh daily · 10 sizes · delivered cold",
    banner: "left",
    photoKey: "corn",
    items: [
      {
        name: "Mini Taquera",
        detail: "3.5\" · 24 ct",
        texture: "Thin, pliable, faintly toasted at the rim.",
        use: "Bite-sized street tacos, antojitos, catering trays.",
        badge: "Taquera",
      },
      {
        name: "Street Taco",
        detail: "4.5\" · 24 ct",
        texture: "Soft middle with lightly comaled edges.",
        use: "Carne asada, al pastor — the classic curbside taco.",
        badge: "La señora",
      },
      {
        name: "Traditional Comal",
        detail: "5.5\" · 18 ct",
        texture: "Light, supple, faintly speckled from the iron.",
        use: "The everyday tortilla for soups, picadas, and home cooking.",
        badge: "Casa",
      },
      {
        name: "Soft Taco",
        detail: "6\" · 18 ct",
        texture: "A touch thicker — holds its shape under heat.",
        use: "Hearty fillings: carnitas, barbacoa, slow-cooked beans.",
      },
      {
        name: "Burrera de Maíz",
        detail: "8\" · 12 ct",
        texture: "Wide, pliable, generous to the hand.",
        use: "Corn enchiladas, large-format tacos, family platters.",
        badge: "Familia",
      },
      {
        name: "Tostada Cut",
        detail: "5\" · 16 ct",
        texture: "Pressed flatter and lightly dried for the fryer.",
        use: "Tostadas, ceviche, refried-bean canapés.",
      },
      {
        name: "Jumbo Corn",
        detail: "9\" · 10 ct",
        texture: "Oversized, soft, generous in every direction.",
        use: "Chilaquiles, casseroles, table-size servings.",
        badge: "Mesa grande",
      },
      {
        name: "White Corn Artisan",
        detail: "5.5\" · 18 ct",
        texture: "Sweet, golden, finely textured from sun-dried white corn.",
        use: "The everyday white-corn round, brighter and lighter on the palate.",
        badge: "Maíz blanco",
      },
      {
        name: "Yellow Corn Heritage",
        detail: "5.5\" · 18 ct",
        texture: "Deeper aroma, toasted finish, soulful and rustic.",
        use: "A heritage harvest — for tables that ask for the old way.",
        badge: "Cosecha",
      },
      {
        name: "Blue Corn Reserve",
        detail: "5.5\" · 12 ct",
        texture: "Earthy, complex, soft purple-grey from native blue maíz.",
        use: "Reserved for tlacoyos, sopes, and special-occasion tacos.",
        badge: "Edición · Azul",
      },
    ],
  },
  {
    id: "harina",
    cap: "II",
    spanish: "Tortillas de Harina",
    english: "Flour Tortillas",
    intro:
      "Hand-stretched flour tortillas, folded with cultured lard and unbleached flour for the supple chew of a Northern Mexican kitchen. Five sizes — each one made for a different table, a different meal, a different way of gathering.",
    note: "Hand-stretched · cultured lard · five styles",
    banner: "right",
    photoKey: "flour",
    items: [
      {
        name: "Sonora Thin Pressed",
        detail: "10\" · 8 ct",
        texture: "Stretched until light passes through — blistered at the edges.",
        use: "Carne asada, machaca, Sonoran-style burritos.",
        badge: "Sonora",
      },
      {
        name: "Handmade Burrera",
        detail: "12\" · 8 ct",
        texture: "Pliable, generous, hand-stretched to a full round.",
        use: "Full-size burritos, family wraps, restaurant kitchens.",
        badge: "A mano",
      },
      {
        name: "Homestyle Comal",
        detail: "8\" · 10 ct",
        texture: "Soft middle, lightly browned — the weekday round.",
        use: "Tacos de guisado, scrambled-egg mornings, lunchboxes.",
      },
      {
        name: "Northern Style Flour",
        detail: "9\" · 10 ct",
        texture: "Slightly chewy, faintly buttery, with a deeper aroma.",
        use: "Carnitas, chicharrón, the Norteño table.",
        badge: "Norteño",
      },
      {
        name: "Large Family Table",
        detail: "14\" · 6 ct",
        texture: "Oversized, soft, generous — meant to be shared.",
        use: "Birthdays, baptisms, Sunday comidas, the table that doesn't sit quietly.",
        badge: "Familia",
      },
    ],
  },
  {
    id: "masa",
    cap: "III",
    spanish: "Masa Fresca",
    english: "Stone-Ground Masa",
    intro:
      "The first ingredient of everything that follows. Fresh masa, milled the same morning we deliver it, in five textures — for tortillas, tamales, sopes and every hand-shaped antojito a traditional kitchen still makes by feel.",
    note: "Ground at sunrise · refrigerated · use within five days",
    banner: "left",
    photoKey: "masa",
    items: [
      {
        name: "Traditional Nixtamal Masa",
        detail: "2 lb · refrigerado",
        texture: "Slow-cooked white corn, smooth and faintly sweet.",
        use: "Daily tortillas, sopes, gorditas — the foundation of every meal.",
        badge: "Diaria",
      },
      {
        name: "Tamal Masa",
        detail: "3 lb · refrigerado",
        texture: "Coarser grind whipped with lard and warm broth.",
        use: "Tamales — pork, chicken, sweet, savory.",
        badge: "Para tamales",
      },
      {
        name: "Blue Corn Masa",
        detail: "2 lb · refrigerado",
        texture: "Native blue corn — earthy, complex, soft violet-grey.",
        use: "Tlacoyos, blue-corn tortillas, pre-Hispanic flavors.",
        badge: "Maíz azul",
      },
      {
        name: "Fine Ground Masa",
        detail: "2 lb · refrigerado",
        texture: "Silky, smooth, almost cream-like in the hand.",
        use: "Tetelas, delicate antojitos, hand-shaped masa work.",
      },
      {
        name: "Stone-Milled Heritage Masa",
        detail: "2 lb · refrigerado · small batch",
        texture: "Ground on volcanic stone in small batches — the closest thing to the molino.",
        use: "Restaurant kitchens, special orders, the chefs who know the difference.",
        badge: "Edición",
      },
    ],
  },
  {
    id: "tamales",
    cap: "IV",
    spanish: "Tamales Tradicionales",
    english: "Hand-Wrapped Tamales",
    intro:
      "Wrapped by hand in corn husks, tied with a single knot, and steamed slowly the way our grandmothers taught us. Ten flavors — every one a recipe with a story, a holiday, a kitchen at the center of it.",
    note: "Hand-wrapped · steamed · ready to warm",
    banner: "right",
    photoKey: "tamal",
    items: [
      {
        name: "Red Chile Pork",
        spanish: "Puerco al Chile Rojo",
        detail: "6 ct · vapor",
        texture: "Slow-braised pork shoulder in guajillo and ancho.",
        use: "The centerpiece of every Cervantes Christmas.",
        badge: "Casa",
      },
      {
        name: "Chicken Verde",
        spanish: "Pollo Verde",
        detail: "6 ct · vapor",
        texture: "Pulled chicken in a bright tomatillo and serrano salsa.",
        use: "Lighter table, weekend lunches, garden meals.",
      },
      {
        name: "Rajas con Queso",
        spanish: "Rajas y Queso",
        detail: "6 ct · vapor",
        texture: "Roasted poblano strips folded into Oaxaca cheese.",
        use: "Vegetarian, deeply savory, never an afterthought.",
        badge: "Vegetariano",
      },
      {
        name: "Sweet Corn",
        spanish: "Elote Dulce",
        detail: "6 ct · vapor",
        texture: "Tender corn kernels, a touch of cream, lightly sweet.",
        use: "The dessert of the tamalada, with café de olla.",
        badge: "Dulce",
      },
      {
        name: "Beef Birria",
        spanish: "Birria de Res",
        detail: "6 ct · vapor",
        texture: "Long-cooked beef shank in dried chiles and warm spices.",
        use: "Pulls apart with a spoon — for the cold-weather table.",
      },
      {
        name: "Mole Chicken",
        spanish: "Pollo en Mole",
        detail: "6 ct · vapor",
        texture: "Shredded chicken beneath a slow mole negro with chocolate and sesame.",
        use: "A celebration tamal — weddings, baptisms, December evenings.",
        badge: "Edición",
      },
      {
        name: "Jalapeño & Cheese",
        spanish: "Jalapeño con Queso",
        detail: "6 ct · vapor",
        texture: "Sliced jalapeños and Monterey jack — heat in every bite.",
        use: "The spice runs through the masa itself.",
      },
      {
        name: "Bean & Cheese",
        spanish: "Frijol con Queso",
        detail: "6 ct · vapor",
        texture: "Refried pinto beans with queso fresco.",
        use: "The everyday tamal — simple, honest, beloved.",
      },
      {
        name: "Chile Colorado",
        spanish: "Chile Colorado",
        detail: "6 ct · vapor",
        texture: "Shredded beef in a deep red ancho sauce.",
        use: "Northern Mexico's quiet favorite.",
      },
      {
        name: "Piña con Pasas",
        spanish: "Piña con Pasas",
        detail: "6 ct · vapor",
        texture: "Sweet pineapple and raisins folded into masa with cinnamon.",
        use: "Finished on the comal — pair with café de olla.",
        badge: "Dulce",
      },
    ],
  },
];

/* ─── Especias data ────────────────────────────────────────────────── */

type SpiceTint =
  | "red"
  | "redDeep"
  | "brick"
  | "brown"
  | "tan"
  | "olive"
  | "gold"
  | "cream";

type SpiceMotif = "chile" | "leaf" | "stick" | "dot";

const SPICE_TINTS: Record<SpiceTint, string> = {
  red: "#ad4826",
  redDeep: "#7d2f17",
  brick: "#9a3e26",
  brown: "#5a3f24",
  tan: "#a87431",
  olive: "#7a5a2c",
  gold: "#c79030",
  cream: "#d9b97b",
};

type Spice = {
  name: string;
  detail: string;
  body: string;
  tint: SpiceTint;
  motif: SpiceMotif;
};

const SPICES: Spice[] = [
  {
    name: "Chile Ancho Molido",
    detail: "Polvo · 4 oz",
    body: "Sun-dried poblanos, slow-ground to a deep mahogany powder — the soul of red mole.",
    tint: "red",
    motif: "chile",
  },
  {
    name: "Comino Tradicional",
    detail: "Tostado y molido · 3 oz",
    body: "Whole cumin toasted on a clay comal, then milled — earthy, warm, indispensable.",
    tint: "brown",
    motif: "dot",
  },
  {
    name: "Orégano Mexicano",
    detail: "Hojas secas · 2 oz",
    body: "Wild-harvested oregano from the Jalisco highlands — sharper and brighter than its European cousin.",
    tint: "olive",
    motif: "leaf",
  },
  {
    name: "Adobo Rojo",
    detail: "Mezcla casera · 5 oz",
    body: "Our family adobo — ancho, guajillo, garlic and oregano in a deep red rub for pork and chicken.",
    tint: "brick",
    motif: "chile",
  },
  {
    name: "Mole Negro Blend",
    detail: "Receta de la casa · 6 oz",
    body: "Twenty ingredients toasted, milled, and blended — chocolate, chiles, and seeds for authentic mole negro.",
    tint: "redDeep",
    motif: "chile",
  },
  {
    name: "Smoked Chile Mix",
    detail: "Mezcla ahumada · 4 oz",
    body: "Chipotle morita, pasilla, and a whisper of mesquite — for stews that taste like an open fire.",
    tint: "red",
    motif: "chile",
  },
  {
    name: "Birria Seasoning",
    detail: "Mezcla tradicional · 5 oz",
    body: "Dried chiles, oregano, cumin, and bay leaf — the traditional cure for slow-braised birria.",
    tint: "brick",
    motif: "chile",
  },
  {
    name: "Pozole Spice Base",
    detail: "Base para caldo · 5 oz",
    body: "Guajillo, ancho, and toasted garlic — the foundation of red pozole, ready in one pot.",
    tint: "brick",
    motif: "chile",
  },
  {
    name: "Tamal Spice Blend",
    detail: "Para masa · 4 oz",
    body: "Annatto, cumin, and a hint of clove — the warm undertone our family folds into tamal masa.",
    tint: "tan",
    motif: "dot",
  },
  {
    name: "Salsa Roja Mix",
    detail: "Seca · 4 oz",
    body: "Toasted chiles, tomato and onion in a dry blend — pour over hot water for a fresh salsa in minutes.",
    tint: "red",
    motif: "chile",
  },
  {
    name: "Chile de Árbol Molido",
    detail: "Polvo picante · 3 oz",
    body: "A fiery red chile ground fine — for table salsas and the brave-of-heart.",
    tint: "redDeep",
    motif: "chile",
  },
  {
    name: "Pasta de Achiote",
    detail: "En pasta · 8 oz",
    body: "Annatto seeds stone-ground with bitter orange and spices — the soul of cochinita pibil.",
    tint: "brick",
    motif: "dot",
  },
  {
    name: "Chile Pasilla Polvo",
    detail: "Polvo · 3 oz",
    body: "Dried, smoke-sweet chilaca — milled for moles, adobos, and gentle heat.",
    tint: "redDeep",
    motif: "chile",
  },
  {
    name: "Salsa Verde Seca",
    detail: "Mezcla · 4 oz",
    body: "Tomatillo, jalapeño, and herbs in a dry mix — reconstitute for an instant verde.",
    tint: "olive",
    motif: "leaf",
  },
  {
    name: "Tajín Casero",
    detail: "Sal con chile · 4 oz",
    body: "Sea salt, chile piquín, and dehydrated lime — our house finishing salt for fruit and elote.",
    tint: "gold",
    motif: "dot",
  },
  {
    name: "Hierbas para Caldo",
    detail: "Atado seco · 2 oz",
    body: "Bay, marjoram, thyme, and Mexican oregano — the bouquet for slow-cooked broths.",
    tint: "olive",
    motif: "leaf",
  },
  {
    name: "Café de Olla Spice",
    detail: "Especias de olla · 3 oz",
    body: "Cinnamon, clove, and piloncillo flecks — for café de olla and pan dulce mornings.",
    tint: "brown",
    motif: "stick",
  },
  {
    name: "Canela Mexicana",
    detail: "Rama tostada · 3 oz",
    body: "True Ceylon-style cinnamon bark, lightly toasted — for chocolate, mole, and arroz con leche.",
    tint: "tan",
    motif: "stick",
  },
  {
    name: "Sal de Mar de Colima",
    detail: "Sal en escamas · 4 oz",
    body: "Hand-harvested sea salt from the Colima coast — flaky, mineral, finishing-only.",
    tint: "cream",
    motif: "dot",
  },
  {
    name: "Chipotle Polvo",
    detail: "Polvo ahumado · 3 oz",
    body: "Smoked-and-dried jalapeño ground fine — for sauces, rubs, beans and Tuesday's pot of frijoles.",
    tint: "red",
    motif: "chile",
  },
];

/* ─── Section ──────────────────────────────────────────────────────── */

export function Products() {
  return (
    <section id="products" className="relative bg-talavera py-32 md:py-40 overflow-hidden">
      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        <SectionHeader />

        <CategoryRail />

        <div className="mt-24 md:mt-28 space-y-32 md:space-y-40">
          {CATEGORIES.map((c) => (
            <CategorySection key={c.id} category={c} />
          ))}
          <SpiceSection />
        </div>

        <CatalogCTA />
      </div>
    </section>
  );
}

/* ─── Header ───────────────────────────────────────────────────────── */

function SectionHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease }}
        className="flex items-center gap-3"
      >
        <span className="h-px w-12 bg-gold/70" />
        <span className="eyebrow">Capítulo II — La Cosecha</span>
        <span className="h-px w-12 bg-gold/70" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease, delay: 0.1 }}
        className="mt-8 font-serif text-[2.6rem] md:text-[3.8rem] leading-[1.04] tracking-[-0.018em]"
      >
        El catálogo artesanal
        <br />
        <span className="font-display italic font-light text-gold-deep">
          de La Carreta.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease, delay: 0.2 }}
        className="mt-6 font-display italic text-[1.15rem] text-muted leading-relaxed"
      >
        Five pillars of the Mexican kitchen — tortillas de maíz, tortillas de
        harina, masa, tamales, and especias — each one made from original
        family recipes since 1939.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease, delay: 0.3 }}
        className="mt-8"
      >
        <Flourish className="w-56 h-5" tone="#a87431" />
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease, delay: 0.4 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[0.62rem] uppercase tracking-[0.36em] text-gold-deep"
      >
        {[
          "Simple ingredients",
          "Traditional nixtamal",
          "No artificial preservatives",
          "Handcrafted fresh daily",
        ].map((c) => (
          <li key={c} className="flex items-center gap-3">
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rotate-45 bg-gold"
            />
            {c}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

/* ─── Category browser rail ────────────────────────────────────────── */

const RAIL: Array<{ id: string; cap: string; label: string; en: string }> = [
  { id: "cat-maiz", cap: "I", label: "Tortillas de Maíz", en: "Corn" },
  { id: "cat-harina", cap: "II", label: "Tortillas de Harina", en: "Flour" },
  { id: "cat-masa", cap: "III", label: "Masa", en: "Stone-ground" },
  { id: "cat-tamales", cap: "IV", label: "Tamales", en: "Hand-wrapped" },
  { id: "cat-especias", cap: "V", label: "Especias Mexicanas", en: "Apothecary" },
];

function CategoryRail() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease }}
      aria-label="Catalog categories"
      className="relative"
    >
      <div className="flex flex-wrap items-stretch justify-center gap-px bg-gold/30 border border-gold/30 max-w-5xl mx-auto">
        {RAIL.map((r) => (
          <Link
            key={r.id}
            href={`#${r.id}`}
            className="group flex-1 min-w-[10rem] bg-paper hover:bg-paper-deep transition-colors duration-500 px-5 py-5 flex flex-col items-center text-center"
          >
            <span className="font-display italic text-[0.92rem] text-gold-deep">
              Cap. {r.cap}
            </span>
            <span className="mt-1 font-serif text-[1.02rem] text-foreground leading-tight">
              {r.label}
            </span>
            <span className="mt-1.5 text-[0.55rem] uppercase tracking-[0.32em] text-subtle">
              {r.en}
            </span>
            <span className="mt-3 block h-px w-6 bg-gold/0 group-hover:bg-gold transition-colors duration-500" />
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}

/* ─── Category section (food categories with photo banner) ─────────── */

function CategorySection({ category }: { category: Category }) {
  const photo = PRODUCT_PHOTOS[category.photoKey];

  const gridCols =
    category.items.length > 6
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div id={`cat-${category.id}`} className="scroll-mt-28">
      <CategoryBanner category={category} photo={photo} />

      <div className={`mt-14 md:mt-16 grid grid-cols-1 ${gridCols} gap-6 lg:gap-8`}>
        {category.items.map((item, i) => (
          <ProductCard
            key={item.name}
            item={item}
            index={i}
            photoKey={category.photoKey}
            cap={category.cap}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryBanner({
  category,
  photo,
}: {
  category: Category;
  photo: { src: string; alt: string; position?: string } | undefined;
}) {
  const photoFirst = category.banner === "left";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease }}
        className={`lg:col-span-6 ${photoFirst ? "lg:order-1" : "lg:order-2"}`}
      >
        {photo && (
          <div className="relative aspect-[5/4] overflow-hidden vignette border border-line/60">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: photo.position }}
            />
            <BannerOverlay />
            <div className="absolute inset-3 border border-paper/30 pointer-events-none" />
            <div className="absolute inset-5 border border-gold/40 pointer-events-none" />
            <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-paper/90 backdrop-blur-sm border border-line">
              <span className="h-px w-4 bg-gold-deep" />
              <span className="text-[0.58rem] uppercase tracking-[0.32em] text-gold-deep">
                Cap. {category.cap} · {category.english}
              </span>
            </div>
            <div className="absolute bottom-5 right-5 font-display italic text-[0.9rem] text-paper drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              La Cosecha
            </div>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease, delay: 0.1 }}
        className={`lg:col-span-6 ${photoFirst ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold/70" />
          <span className="eyebrow">Capítulo {category.cap}</span>
        </div>

        <h3 className="mt-6 font-serif text-[2.2rem] md:text-[3rem] leading-[1.04] tracking-[-0.018em]">
          {category.spanish}
          <span className="block mt-1 font-display italic font-light text-gold-deep text-[1.5rem] md:text-[1.9rem]">
            {category.english}
          </span>
        </h3>

        <p className="mt-6 text-[1.02rem] text-muted leading-relaxed max-w-xl">
          {category.intro}
        </p>

        <div className="mt-7 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.36em] text-gold-deep">
          <span aria-hidden className="inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
          {category.note}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="font-display italic text-sm text-subtle">
            {category.items.length} variations · made daily
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function BannerOverlay() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-multiply opacity-25"
        style={{
          background:
            "linear-gradient(180deg, rgba(214,178,122,0) 30%, rgba(58,31,12,0.55) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-soft-light opacity-55"
        style={{
          background:
            "radial-gradient(ellipse at 50% 28%, rgba(255,222,170,0.55), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(40,18,6,0.40) 0.7px, transparent 1.2px)",
          backgroundSize: "20px 20px",
        }}
      />
    </>
  );
}

/* ─── Product card (food) ──────────────────────────────────────────── */

function ProductCard({
  item,
  index,
  photoKey,
  cap,
}: {
  item: Item;
  index: number;
  photoKey: string;
  cap: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col overflow-hidden bg-paper border border-line/60 hover:border-gold/60 transition-all duration-500 shadow-[0_2px_0_var(--color-line-soft),0_24px_50px_-30px_rgba(40,18,6,0.25)]"
    >
      <div className="pointer-events-none absolute inset-3 border border-line-soft z-10" />
      <div className="pointer-events-none absolute inset-4 border border-gold/30 z-10" />

      <div className="relative aspect-[4/5] overflow-hidden vignette">
        <ProductArt variant={photoKey} />

        <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
          <TileMotif className="w-3.5 h-3.5" tone="#7a4f1c" />
          <span className="text-[0.58rem] uppercase tracking-[0.4em] text-gold-deep bg-paper/85 px-2.5 py-1 backdrop-blur-sm">
            {item.badge ?? `Cap. ${cap}`}
          </span>
        </div>
        <div className="absolute top-5 right-5 z-20 font-display italic text-[0.85rem] text-paper drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
          № {String(index + 1).padStart(2, "0")}
        </div>

        <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between">
          <span className="font-display italic text-[0.95rem] text-paper drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)]">
            {item.detail}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-7 pt-7 relative z-20">
        <div className="font-display italic text-[1.55rem] leading-tight text-gold-deep">
          {item.name}
        </div>
        {item.spanish && (
          <div className="smallcaps text-[0.85rem] text-subtle mt-0.5">
            {item.spanish}
          </div>
        )}

        <div className="mt-4 flex items-center gap-2">
          <span className="h-px w-8 bg-gold" />
          <StarMark className="w-2.5 h-2.5" tone="#a87431" />
          <span className="h-px w-8 bg-gold" />
        </div>

        <p className="mt-4 text-[0.96rem] text-muted leading-relaxed">
          {item.texture}
        </p>
        <p className="mt-3 font-display italic text-[0.95rem] text-foreground/85 leading-relaxed">
          {item.use}
        </p>

        <div className="mt-6 pt-5 border-t border-line-soft flex items-center justify-between gap-3">
          <span className="text-[0.65rem] uppercase tracking-[0.34em] text-subtle">
            {item.detail}
          </span>
          <Link
            href="#partner"
            className="group/cta inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-foreground hover:text-gold-deep transition-colors"
          >
            Stock
            <span aria-hidden className="transition-transform duration-500 group-hover/cta:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function ProductArt({ variant }: { variant: string }) {
  const photo = PRODUCT_PHOTOS[variant];
  if (!photo) return null;
  return (
    <>
      <div className="absolute inset-0 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: photo.position }}
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-multiply opacity-25"
        style={{
          background:
            "linear-gradient(180deg, rgba(214,178,122,0) 30%, rgba(58,31,12,0.55) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-soft-light opacity-55"
        style={{
          background:
            "radial-gradient(ellipse at 50% 28%, rgba(255,222,170,0.55), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(40,18,6,0.40) 0.7px, transparent 1.2px)",
          backgroundSize: "20px 20px",
        }}
      />
    </>
  );
}

/* ─── Especias section (illustrated apothecary tiles) ──────────────── */

function SpiceSection() {
  return (
    <div id="cat-especias" className="scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease }}
          className="lg:col-span-5 lg:order-1"
        >
          <SpiceApothecary />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease, delay: 0.1 }}
          className="lg:col-span-7 lg:order-2"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold/70" />
            <span className="eyebrow">Capítulo V</span>
          </div>
          <h3 className="mt-6 font-serif text-[2.2rem] md:text-[3rem] leading-[1.04] tracking-[-0.018em]">
            Especias Mexicanas
            <span className="block mt-1 font-display italic font-light text-gold-deep text-[1.5rem] md:text-[1.9rem]">
              The apothecary.
            </span>
          </h3>
          <p className="mt-6 text-[1.02rem] text-muted leading-relaxed max-w-xl">
            A small apothecary of Mexican spice — single ingredients milled
            fresh and signature blends built from family recipes. Twenty
            essentials for the home kitchen and the comercial table alike,
            stored in clay and weighed by hand.
          </p>
          <div className="mt-7 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.36em] text-gold-deep">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
            Toasted &amp; milled in small batches · sealed by hand
          </div>
          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="font-display italic text-sm text-subtle">
              {SPICES.length} variations · house blends &amp; single chiles
            </span>
          </div>
        </motion.div>
      </div>

      <div className="mt-14 md:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-gold/25 border border-gold/30">
        {SPICES.map((s, i) => (
          <SpiceCard key={s.name} spice={s} index={i} />
        ))}
      </div>
    </div>
  );
}

function SpiceCard({ spice, index }: { spice: Spice; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease, delay: (index % 4) * 0.06 }}
      className="group relative flex flex-col bg-paper hover:bg-paper-deep transition-colors duration-500"
    >
      <span aria-hidden className="absolute top-3 left-3 w-3 h-3 border-l border-t border-gold/40" />
      <span aria-hidden className="absolute top-3 right-3 w-3 h-3 border-r border-t border-gold/40" />
      <span aria-hidden className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-gold/40" />
      <span aria-hidden className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-gold/40" />

      <div className="relative aspect-[5/4] flex items-center justify-center bg-paper-deep/70 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(40,18,6,0.16) 1px, transparent 1.6px)",
            backgroundSize: "22px 22px",
          }}
        />
        <SpiceTile tint={spice.tint} motif={spice.motif} />
        <div className="absolute top-3 left-3 font-display italic text-[0.7rem] text-gold-deep">
          № {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="relative p-5 pt-4">
        <div className="font-display italic text-[1.15rem] leading-tight text-gold-deep">
          {spice.name}
        </div>
        <div className="mt-1 text-[0.6rem] uppercase tracking-[0.32em] text-subtle">
          {spice.detail}
        </div>
        <p className="mt-3 text-[0.86rem] text-muted leading-relaxed">
          {spice.body}
        </p>
        <div className="mt-4 pt-3 border-t border-line-soft flex items-center justify-between">
          <span className="flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.32em] text-subtle">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
            Casa Cervantes
          </span>
          <Link
            href="#partner"
            className="group/cta inline-flex items-center gap-1.5 text-[0.62rem] uppercase tracking-[0.3em] text-foreground hover:text-gold-deep transition-colors"
          >
            Stock
            <span aria-hidden className="transition-transform duration-500 group-hover/cta:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function SpiceTile({ tint, motif }: { tint: SpiceTint; motif: SpiceMotif }) {
  const fill = SPICE_TINTS[tint];
  return (
    <svg
      viewBox="0 0 200 160"
      className="relative w-[78%] h-[78%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      aria-hidden
    >
      <SpiceBowl x={100} y={92} scale={1.45} tint={fill} motif={motif} />
      <g transform="translate(150,30) rotate(18)" opacity="0.65">
        <rect x="0" y="0" width="36" height="4" rx="1.4" fill="#7a4f1c" />
      </g>
      <DriedChile x={22} y={22} rotate={-20} />
    </svg>
  );
}

/* ─── Illustrated spice apothecary (banner artwork) ────────────────── */

function SpiceApothecary() {
  return (
    <div className="relative aspect-[5/4] overflow-hidden vignette border border-line/60 bg-paper-deep/70">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(40,18,6,0.18) 1px, transparent 1.6px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 28%, rgba(255,222,170,0.55), transparent 65%)",
        }}
      />
      <svg
        viewBox="0 0 500 400"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <SpiceBowl x={90} y={140} scale={1.1} tint={SPICE_TINTS.red} motif="chile" />
        <SpiceBowl x={250} y={120} scale={1.4} tint={SPICE_TINTS.brown} motif="dot" />
        <SpiceBowl x={400} y={150} scale={1.0} tint={SPICE_TINTS.olive} motif="leaf" />
        <SpiceBowl x={160} y={260} scale={1.2} tint={SPICE_TINTS.gold} motif="dot" />
        <SpiceBowl x={340} y={270} scale={1.15} tint={SPICE_TINTS.redDeep} motif="chile" />

        {/* Cinnamon sticks */}
        <g opacity="0.85" transform="translate(50,340) rotate(-12)">
          <rect x="0" y="0" width="60" height="6" rx="2" fill="#7a4f1c" />
          <rect x="0" y="0" width="60" height="6" rx="2" fill="none" stroke="#3a1f0c" strokeWidth="0.6" />
        </g>
        <g opacity="0.85" transform="translate(360,360) rotate(10)">
          <rect x="0" y="0" width="70" height="7" rx="2" fill="#7a4f1c" />
          <rect x="0" y="0" width="70" height="7" rx="2" fill="none" stroke="#3a1f0c" strokeWidth="0.6" />
        </g>

        {/* Dried chile pods scattered */}
        <DriedChile x={30} y={70} rotate={-18} />
        <DriedChile x={440} y={60} rotate={22} />
        <DriedChile x={230} y={30} rotate={-4} />
      </svg>

      <div className="absolute inset-3 border border-paper/30 pointer-events-none" />
      <div className="absolute inset-5 border border-gold/40 pointer-events-none" />
      <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-paper/90 backdrop-blur-sm border border-line">
        <span className="h-px w-4 bg-gold-deep" />
        <span className="text-[0.58rem] uppercase tracking-[0.32em] text-gold-deep">
          Cap. V · Apothecary
        </span>
      </div>
      <div className="absolute bottom-5 right-5 font-display italic text-[0.9rem] text-gold-deep">
        El recetario
      </div>
    </div>
  );
}

function SpiceBowl({
  x,
  y,
  scale,
  tint,
  motif,
}: {
  x: number;
  y: number;
  scale: number;
  tint: string;
  motif: SpiceMotif;
}) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      {/* Bowl outline */}
      <ellipse cx="0" cy="0" rx="50" ry="12" fill="#efe1be" stroke="#7a4f1c" strokeWidth="0.9" />
      <path
        d="M -50 0 Q 0 38 50 0 Q 30 16 0 16 Q -30 16 -50 0 Z"
        fill="#c7825c"
        fillOpacity="0.35"
        stroke="#7a4f1c"
        strokeWidth="0.9"
      />
      {/* Spice mound */}
      <path
        d="M -42 -2 Q 0 -28 42 -2 Q 20 -4 0 -4 Q -20 -4 -42 -2 Z"
        fill={tint}
        opacity="0.95"
        stroke={tint}
        strokeWidth="0.6"
      />
      {/* Motif on top */}
      {motif === "chile" && (
        <path
          d="M -6 -14 q 10 -14 22 -8 q -2 8 -10 16 q -8 0 -12 -8 z"
          fill="#7d2f17"
          opacity="0.85"
        />
      )}
      {motif === "leaf" && (
        <path
          d="M -8 -16 q 10 -10 20 0 q -10 6 -20 0 z"
          fill="#7a5a2c"
          opacity="0.85"
        />
      )}
      {motif === "stick" && (
        <rect x="-12" y="-22" width="22" height="4" rx="1.4" fill="#7a4f1c" />
      )}
      {motif === "dot" && (
        <g fill="#3a1f0c" opacity="0.6">
          <circle cx="-8" cy="-14" r="1.6" />
          <circle cx="2" cy="-18" r="1.6" />
          <circle cx="12" cy="-12" r="1.6" />
        </g>
      )}
    </g>
  );
}

function DriedChile({ x, y, rotate }: { x: number; y: number; rotate: number }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate})`} opacity="0.7">
      <path
        d="M 0 0 q 12 -6 26 0 q -4 10 -14 18 q -10 -2 -12 -18 z"
        fill="#7d2f17"
        stroke="#3a1f0c"
        strokeWidth="0.5"
      />
      <path
        d="M 24 -2 q 6 -8 14 -4"
        stroke="#3a1f0c"
        strokeWidth="0.8"
        fill="none"
      />
    </g>
  );
}

/* ─── Catalog CTA ──────────────────────────────────────────────────── */

function CatalogCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1, ease }}
      className="mt-32 md:mt-40 flex flex-col items-center gap-6"
    >
      <Flourish className="w-64 h-5" tone="#a87431" />
      <span className="font-display italic text-[1.05rem] text-muted">
        Cincuenta artesanías de la cocina mexicana · fifty pieces of the Mexican kitchen
      </span>
      <StarMark className="w-4 h-4" tone="#a87431" />
      <Link
        href="#partner"
        className="group inline-flex items-center gap-3 text-[0.78rem] uppercase tracking-[0.32em] text-foreground"
      >
        <span className="border-b border-gold/70 pb-2 group-hover:border-clay-dark transition-colors">
          Request our wholesale catalog
        </span>
        <span
          aria-hidden
          className="transition-transform duration-500 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </motion.div>
  );
}
