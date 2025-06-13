// app/page.tsx
"use client";

import { useState } from "react";
import styles from "./Landing.module.css";
import { Product, products } from "./components/Dummydata";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import ProductCard from "./components/ProductCard";
import Section from "./components/Section";
const currentYear = new Date().getFullYear();

const getRandomProducts = (arr: Product[], count: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const randomProducts = getRandomProducts(products, 8);

const getCategoryProducts = (
  arr: Product[],
  category: string,
  count: number
) => {
  return arr.filter((p) => p.category === category).slice(0, count);
};

const electronicsProducts = getCategoryProducts(products, "electronics", 8);
const fitnessProducts = getCategoryProducts(products, "fitness", 8);
const kitchenProducts = getCategoryProducts(products, "kitchen", 8);
const fashionBeautyProducts = getCategoryProducts(products, "fashion", 8);

export default function HomePage() {
  const [flashSales, setFlashSales] = useState<Product[]>([]);

  // useEffect(() => {
  //   axios
  //     .get<Product[]>("/api/flash-sales")
  //     .then((r) => setFlashSales(r.data))
  //     .catch(() => {});
  // }, []);

  return (
    <main className="">
      <div
        className={`${styles.hero} mx-4 lg:mx-8 min-h-64 h-95 md:h-90 lg:h-85 flex p-16 mb-8 rounded-lg items-center justify-center lg:items-start lg:justify-start bg-cover bg-no-repeat`}
      >
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Shop erubaba
        </h1>
      </div>

      {/* <Section title="Featured Products" seeAllHref="/products/featured">
        {featured.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </Section> */}

      <Section title="Featured Products" seeAllHref="/products/featured">
        {randomProducts.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </Section>

      <Section title="Electronics" seeAllHref="/products/electronics">
        {electronicsProducts.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </Section>

      <Section title="Fitness" seeAllHref="/products/fitness">
        {fitnessProducts.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </Section>

      <Section title="Flash Sales!!!">
        {flashSales.length
          ? flashSales.map((p) => <ProductCard key={p.id} item={p} />)
          : Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 animate-pulse" />
            ))}
      </Section>

      <Section title="Kitchen" seeAllHref="/products/kitchen">
        {kitchenProducts.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </Section>

      <Section title="Fashion/Beauty" seeAllHref="/products/fashionBeauty">
        {fashionBeautyProducts.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </Section>

      {/* add Kitchen, Fashion/Beauty etc. */}
      <FAQSection />

      {/* Newsletter Subscription Section */}

      <section
        className={`container flex items-center justify-center lg:items-start lg:justify-start lg:grid py-8 px-4 lg:px-8 mx-auto ${styles.moreThanHalf}`}
      >
        <div className="text-center lg:text-left">
          <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mb-4">
            Subscribe to Our News Letter
          </h2>
          <p className="text-gray-600 mb-4">
            Subscribe to our newsletter and receive updates on sales, discounts,
            valuable content and more.
          </p>
          <div className="flex items-center gap-2 w-full">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="border p-2 rounded w-full"
            />
            <button className="bg-black text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
        <div className=""></div>
      </section>

      <FooterSection />

      <div className="text-white bg-stone-950 p-5 text-center lg:text-left">
        ©{currentYear} Erubaba. All Rights Reserved
      </div>
    </main>
  );
}
