import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Heritage } from "./components/Heritage";
import { Manifesto } from "./components/Manifesto";
import { Products } from "./components/Products";
import { Wholesale } from "./components/Wholesale";
import { Partners } from "./components/Partners";
import { PartnerCTA } from "./components/PartnerCTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col flex-1">
        <Hero />
        <Heritage />
        <Manifesto />
        <Products />
        <Wholesale />
        <Partners />
        <PartnerCTA />
      </main>
      <Footer />
    </>
  );
}
