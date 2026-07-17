"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import { projectTypes } from "@/lib/content";
import { useLocale } from "@/context/locale-context";
import { Reveal } from "@/components/reveal";

type Status = "idle" | "sending" | "success";

const fieldClass =
  "mt-2 w-full rounded-sm border border-ivory/15 bg-ink/40 px-4 py-3 text-[0.95rem] text-ivory placeholder:text-ivory/35 outline-none transition-[border-color,box-shadow] duration-300 focus:border-champagne/70 focus:shadow-[0_0_0_1px_rgba(185,154,104,0.35)]";

export function Booking() {
  const { copy, locale } = useLocale();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Prototype: simulate delivery. Wire Formspree / API in Phase 2.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  return (
    <section
      id="booking"
      className="relative overflow-hidden border-t border-ivory/10 bg-ink text-ivory"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/work-03.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/88 to-ink" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-12 md:gap-10 md:px-8 md:py-32">
        <div className="md:col-span-5">
          <Reveal>
            <h2 className="font-display text-[2.4rem] leading-[1.1] tracking-[-0.02em] md:text-5xl">
              {copy.booking.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href="#inquiry"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-ivory px-7 text-[0.78rem] tracking-[0.14em] text-ink uppercase transition-transform duration-300 hover:bg-champagne active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            >
              {copy.booking.cta}
            </a>
          </Reveal>
          <Reveal delay={0.12} className="mt-10">
            <p className="text-[0.72rem] tracking-[0.16em] text-stone uppercase">
              {copy.booking.secondary}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ivory/20 px-4 text-sm text-ivory/85 transition-colors hover:border-ivory/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
              >
                <InstagramLogo size={18} weight="light" />
                {copy.booking.instagram}
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ivory/20 px-4 text-sm text-ivory/85 transition-colors hover:border-ivory/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
              >
                <FacebookLogo size={18} weight="light" />
                {copy.booking.facebook}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="md:col-span-7" as="div">
          <div
            id="inquiry"
            className="rounded-sm border border-ivory/12 bg-ink/70 p-6 backdrop-blur-md md:p-8"
          >
            {status === "success" ? (
              <div className="py-8 text-center md:py-12">
                <p className="font-display text-3xl tracking-[-0.02em]">
                  {copy.booking.successTitle}
                </p>
                <p className="mx-auto mt-4 max-w-md text-ivory/70">
                  {copy.booking.successBody}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-ivory/25 px-6 text-[0.75rem] tracking-[0.14em] uppercase transition-colors hover:border-ivory/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                >
                  {copy.booking.another}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <h3 className="font-display text-2xl tracking-[-0.01em]">
                  {copy.booking.formTitle}
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm text-ivory/70">
                    {copy.booking.name}
                    <span className="sr-only"> ({copy.booking.required})</span>
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block text-sm text-ivory/70">
                    {copy.booking.email}
                    <input
                      name="contact"
                      required
                      autoComplete="email"
                      className={fieldClass}
                    />
                  </label>
                </div>

                <label className="block text-sm text-ivory/70">
                  {copy.booking.projectType}
                  <select name="projectType" required className={fieldClass} defaultValue="">
                    <option value="" disabled>
                      —
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {locale === "en" ? type.en : type.zh}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm text-ivory/70">
                    {copy.booking.dates}
                    <input name="dates" required className={fieldClass} />
                  </label>
                  <label className="block text-sm text-ivory/70">
                    {copy.booking.location}
                    <input name="location" required className={fieldClass} />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm text-ivory/70">
                    {copy.booking.duration}
                    <input name="duration" required className={fieldClass} />
                  </label>
                  <label className="block text-sm text-ivory/70">
                    {copy.booking.budget}
                    <input name="budget" className={fieldClass} />
                  </label>
                </div>

                <label className="block text-sm text-ivory/70">
                  {copy.booking.details}
                  <textarea
                    name="details"
                    required
                    rows={4}
                    className={`${fieldClass} resize-y`}
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-champagne px-7 text-[0.78rem] tracking-[0.14em] text-ink uppercase transition-transform duration-300 enabled:hover:brightness-110 enabled:active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivory sm:w-auto"
                >
                  {status === "sending" ? copy.booking.sending : copy.booking.submit}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
