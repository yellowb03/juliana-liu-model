"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/context/locale-context";

export function StickyBook() {
  const { copy } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const booking = document.getElementById("booking");
    if (!hero) return;

    const io = new IntersectionObserver(
      (entries) => {
        const heroEntry = entries.find((e) => e.target.id === "top");
        const bookingEntry = entries.find((e) => e.target.id === "booking");
        const heroOut = heroEntry ? !heroEntry.isIntersecting : true;
        const bookingIn = bookingEntry?.isIntersecting ?? false;
        setVisible(heroOut && !bookingIn);
      },
      { threshold: 0.12 },
    );

    io.observe(hero);
    if (booking) io.observe(booking);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!visible}
    >
      <a
        href="#booking"
        tabIndex={visible ? 0 : -1}
        className="pointer-events-auto inline-flex min-h-12 min-w-[9.5rem] items-center justify-center rounded-full bg-ivory px-8 text-[0.78rem] tracking-[0.16em] text-ink uppercase shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
      >
        {copy.booking.sticky}
      </a>
    </div>
  );
}
