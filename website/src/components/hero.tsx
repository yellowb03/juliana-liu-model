"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "@phosphor-icons/react";
import { useLocale } from "@/context/locale-context";

export function Hero() {
  const { copy } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden bg-ink text-ivory"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 origin-center will-change-transform"
          initial={reduce ? false : { scale: 1.04 }}
          animate={reduce ? undefined : { scale: 1.08 }}
          transition={{ duration: 14, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src="/images/hero.jpg"
            alt={copy.brand}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_18%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-ink/20" />
      </div>

      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-5 pb-28 pt-28 md:px-8 md:pb-20 lg:justify-center lg:pb-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.p
            className="mb-4 text-[0.72rem] tracking-[0.22em] text-champagne uppercase md:text-[0.78rem]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {copy.role}
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-balance text-[3.35rem] leading-[1.02] tracking-[-0.02em] text-ivory sm:text-6xl md:text-7xl lg:text-[5.25rem]"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {copy.brand}
            </motion.h1>
          </div>

          <motion.p
            className="mt-5 max-w-md text-pretty text-[0.98rem] leading-relaxed text-ivory/78 md:mt-6 md:text-base"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {copy.tagline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3 md:mt-10"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#booking"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ivory px-7 text-[0.78rem] tracking-[0.14em] text-ink uppercase transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-champagne active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            >
              {copy.book}
            </a>
            <a
              href="#work"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-ivory/30 px-6 text-[0.78rem] tracking-[0.14em] text-ivory uppercase transition-colors duration-300 hover:border-ivory/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            >
              {copy.portfolio}
              <ArrowDown
                size={16}
                weight="light"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
