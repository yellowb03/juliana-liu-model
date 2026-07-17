"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import type { PortfolioItem } from "@/lib/content";
import { useLocale } from "@/context/locale-context";

type LightboxProps = {
  items: PortfolioItem[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const { locale } = useLocale();
  const reduce = useReducedMotion();
  const open = index !== null;
  const item = index !== null ? items[index] : null;

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index !== null) {
        onChange((index + 1) % items.length);
      }
      if (e.key === "ArrowLeft" && index !== null) {
        onChange((index - 1 + items.length) % items.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, items.length, onClose, onChange]);

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/94 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={item.alt[locale]}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-ivory/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
            aria-label="Close"
          >
            <X size={20} weight="light" />
          </button>

          <button
            type="button"
            className="absolute top-1/2 left-3 z-10 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/20 text-ivory md:inline-flex hover:border-ivory/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              if (index !== null) onChange((index - 1 + items.length) % items.length);
            }}
          >
            <CaretLeft size={20} weight="light" />
          </button>

          <button
            type="button"
            className="absolute top-1/2 right-3 z-10 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/20 text-ivory md:inline-flex hover:border-ivory/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              if (index !== null) onChange((index + 1) % items.length);
            }}
          >
            <CaretRight size={20} weight="light" />
          </button>

          <motion.div
            key={item.id}
            className="relative max-h-[85dvh] w-full max-w-3xl overflow-hidden rounded-sm"
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={item.src}
              alt={item.alt[locale]}
              width={1200}
              height={1600}
              className="mx-auto max-h-[85dvh] w-auto object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
