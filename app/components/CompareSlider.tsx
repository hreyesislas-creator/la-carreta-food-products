"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface CompareSliderProps {
  beforeSrc: string;
  beforeAlt: string;
  beforeLabel: string;
  afterSrc: string;
  afterAlt: string;
  afterLabel: string;
  /**
   * CSS aspect-ratio string, e.g. "16/7". When provided the container sets
   * its own height via the aspect-ratio style. When omitted, the container
   * fills whatever height the parent gives it (use this when the parent
   * already defines the height / aspect ratio via Tailwind classes).
   */
  aspectRatio?: string;
  /** Starting divider position 0–100. Default: 50 */
  initialPosition?: number;
  /**
   * Extra classes merged onto the root div.
   * NOTE: rounding is NOT applied by default — pass e.g. "rounded-2xl" here.
   */
  className?: string;
}

export function CompareSlider({
  beforeSrc,
  beforeAlt,
  beforeLabel,
  afterSrc,
  afterAlt,
  afterLabel,
  aspectRatio,
  initialPosition = 50,
  className = "",
}: CompareSliderProps) {
  const [pos, setPos] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const clampPos = (v: number) => Math.max(2, Math.min(98, v));

  const calcPos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPos(clampPos(((clientX - left) / width) * 100));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMouseMove = (e: MouseEvent) => calcPos(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      calcPos(e.touches[0].clientX);
    };
    const onEnd = () => setDragging(false);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [dragging, calcPos]);

  const startDrag = (clientX: number) => {
    setDragging(true);
    calcPos(clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none touch-none ${className}`}
      style={{
        cursor: "col-resize",
        ...(aspectRatio ? { aspectRatio } : {}),
      }}
      onMouseDown={(e) => { e.preventDefault(); startDrag(e.clientX); }}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
    >
      {/* "After" layer — full-size background */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          unoptimized
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          draggable={false}
        />
      </div>

      {/* "Before" layer — clipped to the left of the divider */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${(100 - pos).toFixed(2)}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          unoptimized
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 w-[2px] bg-white/90 pointer-events-none"
        style={{
          left: `${pos}%`,
          transform: "translateX(-50%)",
          boxShadow: "0 0 14px rgba(0,0,0,0.28)",
        }}
      />

      {/* Drag handle */}
      <div
        role="slider"
        aria-label="Drag to compare before and after"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={2}
        aria-valuemax={98}
        tabIndex={0}
        className="absolute z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-white/50 hover:scale-110 active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
        style={{
          left: `${pos}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.26), 0 1px 4px rgba(0,0,0,0.14)",
          cursor: "col-resize",
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft")  setPos((p) => clampPos(p - 3));
          if (e.key === "ArrowRight") setPos((p) => clampPos(p + 3));
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-green-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M9 4L2 12L9 20" />
          <path d="M15 4L22 12L15 20" />
        </svg>
      </div>

      {/* Corner labels */}
      <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
        <span className="inline-flex items-center rounded-md bg-black/60 backdrop-blur-sm px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.2em] font-bold text-white leading-none">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
        <span className="inline-flex items-center rounded-md bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.2em] font-bold text-green-700 leading-none shadow-sm">
          {afterLabel}
        </span>
      </div>
    </div>
  );
}
