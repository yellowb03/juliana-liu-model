"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { useLocale } from "@/context/locale-context";

const links = [
  { href: "#work", key: "work" as const },
  { href: "#about", key: "about" as const },
  { href: "#details", key: "details" as const },
  { href: "#services", key: "services" as const },
  { href: "#booking", key: "book" as const },
];

export function SiteHeader() {
  const { locale, setLocale, copy } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background,backdrop-filter,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled || open
            ? "border-b border-ivory/10 bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
          <a
            href="#top"
            className="font-display text-[1.35rem] tracking-[0.02em] text-ivory md:text-[1.5rem]"
          >
            {copy.brand}
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.78rem] tracking-[0.14em] text-ivory/72 uppercase transition-colors duration-300 hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
              >
                {copy.nav[link.key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div
              className="flex items-center rounded-full border border-ivory/15 p-0.5 text-[0.7rem] tracking-[0.12em]"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`min-h-9 min-w-10 rounded-full px-2.5 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne ${
                  locale === "en"
                    ? "bg-ivory text-ink"
                    : "text-ivory/70 hover:text-ivory"
                }`}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale("zh")}
                className={`min-h-9 min-w-11 rounded-full px-2.5 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne ${
                  locale === "zh"
                    ? "bg-ivory text-ink"
                    : "text-ivory/70 hover:text-ivory"
                }`}
                aria-pressed={locale === "zh"}
              >
                中文
              </button>
            </div>

            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-ivory/15 text-ivory md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? copy.nav.close : copy.nav.menu}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} weight="light" /> : <List size={20} weight="light" />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-30 bg-ink/96 backdrop-blur-xl transition-opacity duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="flex h-full flex-col justify-center gap-2 px-8 pt-16"
          aria-label="Mobile"
        >
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-ivory/10 py-5 font-display text-4xl text-ivory transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              {copy.nav[link.key]}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
