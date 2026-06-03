import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { BrandRibbon } from "./components/BrandRibbon";
import { Products } from "./components/Products";
import { Ingredients } from "./components/Ingredients";
import { RetailerReasons } from "./components/RetailerReasons";
import { Wholesale } from "./components/Wholesale";
import { Partners } from "./components/Partners";
import { Heritage } from "./components/Heritage";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col flex-1">
        <Hero />
        <BrandRibbon />
        <Products />
        <Ingredients />
        <RetailerReasons />
        <Wholesale />
        <Partners />
        <Heritage />
      </main>
      <Footer />
    </>
  );
}
