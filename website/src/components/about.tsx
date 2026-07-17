"use client";

import Image from "next/image";
import { useLocale } from "@/context/locale-context";
import { Reveal } from "@/components/reveal";

export function About() {
  const { copy } = useLocale();

  return (
    <section
      id="about"
      className="border-t border-ivory/10 bg-ink px-5 py-24 text-ivory md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:items-center md:gap-14">
        <Reveal className="md:col-span-5">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-sm md:mx-0">
            <Image
              src="/images/work-05.jpg"
              alt={copy.brand}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pl-4">
          <Reveal>
            <h2 className="font-display text-4xl tracking-[-0.02em] md:text-5xl">
              {copy.about.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.75] text-ivory/78 md:mt-8 md:text-lg">
              {copy.about.bio}
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-8 text-[0.78rem] tracking-[0.16em] text-champagne uppercase">
              {copy.role}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
