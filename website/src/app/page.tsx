import { About } from "@/components/about";
import { Booking } from "@/components/booking";
import { Details } from "@/components/details";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBook } from "@/components/sticky-book";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Details />
        <Services />
        <Booking />
      </main>
      <SiteFooter />
      <StickyBook />
    </>
  );
}
