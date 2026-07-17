"use client";

import { useLocale } from "@/context/locale-context";

export function SiteFooter() {
  const { copy } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ivory/10 bg-ink px-5 py-10 text-ivory/55 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl text-ivory/80">{copy.brand}</p>
          <p className="mt-2 text-sm">
            © {year} {copy.brand}. {copy.footer.rights}
          </p>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-ivory/40">
          {copy.footer.placeholder}
        </p>
      </div>
    </footer>
  );
}
