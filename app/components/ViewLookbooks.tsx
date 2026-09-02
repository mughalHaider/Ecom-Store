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
    title: "AUTUMN STYLING",
    image: "/carousel/slider1.jpg",
    href: "#autumn-styling",
    description:
      "We took our latest autumn collection to the streets of London, shooting just around the corner from our Spitalfields store to show the collection as it was designed to be worn. Styled in layers and brought together through different textures, colours and shapes, the shoot puts the collection into action......",
  },
  {
    id: 2,
    title: "MT. REGENT NATURE RESERVE",
    image: "/carousel/slider2.jpg",
    href: "#mt-regent",
    description:
      "28.08.26 | Our autumn collection takes inspiration from the landscapes of the great outdoors. Taking its roots from heritage workwear and traditional outdoor clothing, it brings together hardwearing ripstop, waxed canvas, heavyweight denim, brushed flannel and textured knits, built around the layers needed as the seasons change....",
  },
  {
    id: 3,
    title: "P&CO SAILING CLUB",
    image: "/carousel/slider3.jpg",
    href: "#sailing-club",
    description:
      "31.07.26 | This collection marks the transition into the months ahead. Still inspired by the coast, this campaign moves beyond summer, introducing hardwearing canvas, hickory stripe, heavyweight denim and soft flannel alongside lighter transitional layers designed to carry you into the new season....",
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
