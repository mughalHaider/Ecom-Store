"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LookbookArticle {
  id: number;
  title: string;
  image: string;
  href: string;
  description: string;
}

const articles: LookbookArticle[] = [
  {
    id: 1,
    title: "4D CULTURE CAMPAIGN",
    image: "https://pappyneedles.co.uk/wp-content/uploads/2026/03/IMG-20260301-WA0059.jpg",
    href: "#4d-culture-campaign",
    description:
      "A celebration of collective identity and contemporary Afrocentric streetwear. Shot on location, our latest 4D Culture campaign explores bold structured outerwear, relaxed bomber silhouettes, and signature handwoven Aso-Oke accessories designed for modern everyday utility......",
  },
  {
    id: 2,
    title: "ASO-OKE CRAFTSMANSHIP",
    image: "https://pappyneedles.co.uk/wp-content/uploads/2026/01/IMG-20260120-WA0022.jpg",
    href: "#aso-oke-craftsmanship",
    description:
      "Rooted in generations of West African artisanal weaving, our signature backpack blends hand-loomed indigo and terracotta Aso-Oke textiles with genuine leather flap closures and custom brass hardware, built to endure every journey......",
  },
  {
    id: 3,
    title: "ARTISAN WOVEN GOODS",
    image: "https://pappyneedles.co.uk/wp-content/uploads/2026/01/IMG-20260120-WA00731.jpg",
    href: "#artisan-woven-goods",
    description:
      "Meticulously handcrafted from natural coiled fiber, this statement basket bag highlights sculptural texture and raw minimalist elegance. Finished with dual reinforced handles and our engraved 4D Culture wooden brand plate......",
  },
];

export default function ViewLookbooks() {
  return (
    <section className="w-full bg-white text-black border-t border-b border-black select-none">
      {/* Top Header Bar */}
      <div className="px-6 py-5 sm:py-6 flex items-center justify-between border-b border-black bg-white">
        <h2 className="text-sm sm:text-lg font-black tracking-[0.2em] uppercase text-black font-sans">
          VIEW LOOKBOOKS
        </h2>

        <Link
          href="#lookbook"
          className="group inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold tracking-[0.14em] uppercase text-black hover:text-[#8f6f4d] transition-colors"
        >
          <span className="underline underline-offset-4">VIEW LOOKBOOK</span>
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>

      {/* 3 Fixed Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black bg-white">
        {articles.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col h-full bg-white transition-colors"
          >
            {/* Article Editorial Image */}
            <Link
              href={item.href}
              className="relative aspect-[4/3.1] w-full bg-stone-100 overflow-hidden block"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </Link>

            {/* Article Content Area */}
            <div className="border-t border-black p-6 sm:p-7 md:p-8 flex flex-col justify-between flex-1 space-y-5 bg-white">
              <div className="space-y-3.5">
                {/* Title */}
                <h3 className="text-sm sm:text-[15px] font-black tracking-[0.16em] uppercase text-black font-sans line-clamp-1">
                  <Link href={item.href} className="hover:text-[#8f6f4d] transition-colors">
                    {item.title}
                  </Link>
                </h3>

                {/* Body Text */}
                <p className="font-mono text-xs sm:text-[12px] text-stone-800 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Read More Link */}
              <div className="pt-2">
                <Link
                  href={item.href}
                  className="group/btn inline-flex items-center gap-1.5 text-[10.5px] sm:text-xs font-mono font-bold tracking-[0.14em] uppercase text-black hover:text-[#8f6f4d] transition-colors cursor-pointer"
                >
                  <span className="underline underline-offset-4">READ MORE</span>
                  <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
