"use client";

import { DownloadSimple } from "@phosphor-icons/react";
import { measureValue, measurements } from "@/lib/content";
import { useLocale } from "@/context/locale-context";
import { Reveal } from "@/components/reveal";

export function Details() {
  const { copy, locale } = useLocale();

  return (
    <section
      id="details"
      className="border-t border-ivory/10 bg-ink px-5 py-24 text-ivory md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-balance text-4xl tracking-[-0.02em] md:text-5xl">
            {copy.details.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {measurements.map((row, i) => (
            <Reveal
              key={row.key}
              delay={Math.min(i * 0.04, 0.2)}
              className="rounded-sm border border-ivory/10 bg-ivory/[0.03] px-5 py-6"
            >
              <p className="text-[0.68rem] tracking-[0.16em] text-stone uppercase">
                {locale === "en" ? row.en : row.zh}
              </p>
              <p className="mt-3 font-display text-2xl tracking-[-0.01em] text-ivory md:text-[1.65rem]">
                {measureValue(row.value, locale)}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#booking"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-champagne/50 px-6 text-[0.78rem] tracking-[0.14em] text-champagne uppercase transition-colors duration-300 hover:bg-champagne/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
          >
            <DownloadSimple size={16} weight="light" />
            {copy.details.download}
          </a>
          <p className="text-sm text-pretty text-ivory/55 sm:max-w-md">{copy.details.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
