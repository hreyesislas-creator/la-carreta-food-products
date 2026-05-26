import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Retained for API compatibility with existing call sites (e.g. footer). */
  tone?: "dark" | "light";
  /** Preload + eager-load — use in the navbar to avoid LCP delay. */
  preload?: boolean;
};

/* Image-based wordmark. The artwork lives at /public/logo.svg and carries its
   own 900×240 (3.75:1) intrinsic ratio, so the width/height props below only
   establish that ratio — visible size is driven by the responsive classes. */
export function Logo({ className = "", preload = false }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="La Carreta Mexican Food"
      width={900}
      height={240}
      unoptimized
      preload={preload}
      loading={preload ? "eager" : "lazy"}
      sizes="(max-width: 768px) 150px, 200px"
      className={`h-auto w-[150px] object-contain md:w-[200px] ${className}`}
    />
  );
}
