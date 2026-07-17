"use client";

import { services } from "@/lib/content";
import { useLocale } from "@/context/locale-context";
import { Reveal } from "@/components/reveal";

export function Services() {
  const { copy, locale } = useLocale();

  return (
    <section
      id="services"
      className="border-t border-ivory/10 bg-ink px-5 py-24 text-ivory md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-balance text-4xl tracking-[-0.02em] md:text-5xl">
            {copy.services.title}
          </h2>
          <p className="mt-4 max-w-lg text-pretty text-ivory/65">{copy.services.subtitle}</p>
        </Reveal>

        <ul className="mt-12 divide-y divide-ivory/10 border-y border-ivory/10">
          {services.map((service, i) => (
            <Reveal key={service.en} as="li" delay={Math.min(i * 0.04, 0.2)}>
              <div className="flex items-baseline justify-between gap-6 py-5 md:py-6">
                <span className="font-display text-2xl tracking-[-0.01em] md:text-3xl">
                  {locale === "en" ? service.en : service.zh}
                </span>
                <span className="hidden text-[0.7rem] tracking-[0.18em] text-stone uppercase sm:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
