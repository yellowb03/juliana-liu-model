"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { portfolio, type PortfolioItem } from "@/lib/content";
import { useLocale } from "@/context/locale-context";
import { Reveal } from "@/components/reveal";
import { Lightbox } from "@/components/lightbox";

type Filter = "all" | PortfolioItem["category"];

const filters: Filter[] = ["all", "editorial", "beauty", "lifestyle"];

export function SelectedWork() {
  const { copy, locale } = useLocale();
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () =>
      filter === "all"
        ? portfolio
        : portfolio.filter((item) => item.category === filter),
    [filter],
  );

  const filterLabel = (key: Filter) => {
    if (key === "all") return copy.work.all;
    if (key === "editorial") return copy.work.editorial;
    if (key === "beauty") return copy.work.beauty;
    return copy.work.lifestyle;
  };

  return (
    <section id="work" className="bg-ink px-5 py-24 text-ivory md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-balance text-4xl tracking-[-0.02em] md:text-5xl">
            {copy.work.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-2">
          {filters.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`min-h-10 rounded-full border px-4 text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne ${
                filter === key
                  ? "border-champagne bg-champagne/15 text-champagne"
                  : "border-ivory/15 text-ivory/65 hover:border-ivory/40 hover:text-ivory"
              }`}
              aria-pressed={filter === key}
            >
              {filterLabel(key)}
            </button>
          ))}
        </Reveal>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory overflow-x-auto px-5 pb-8 [scrollbar-width:none] md:-mx-8 md:px-8 [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-4 lg:gap-5">
            {items.map((item, i) => {
              const heightClass =
                item.aspect === "tall"
                  ? "aspect-[3/4.4]"
                  : item.aspect === "square"
                    ? "aspect-square"
                    : "aspect-[3/4]";

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  className="group relative block w-[85vw] shrink-0 snap-center overflow-hidden rounded-sm bg-stone/10 text-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne sm:w-[42vw] lg:w-[30vw]"
                  initial={reduce ? false : { opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: Math.min(i * 0.05, 0.25),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => {
                    const fullIndex = portfolio.findIndex((p) => p.id === item.id);
                    setActive(fullIndex >= 0 ? fullIndex : i);
                  }}
                >
                  <div className={`relative w-full ${heightClass}`}>
                    <Image
                      src={item.src}
                      alt={item.alt[locale]}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 42vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-[0.7rem] tracking-[0.16em] text-ivory uppercase">
                        {filterLabel(item.category)}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <Lightbox
        items={portfolio}
        index={active}
        onClose={() => setActive(null)}
        onChange={setActive}
      />
    </section>
  );
}
