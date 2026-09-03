"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryCard {
  id: number;
  title: string;
  image: string;
  href: string;
}

const categories: CategoryCard[] = [
  {
    id: 1,
    title: "MEN'S",
    image: "http://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-9.43.13-AM.jpeg",
    href: "#mens",
  },
  {
    id: 2,
    title: "WOMEN'S",
    image: "https://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-6.32.56-PM.jpeg",
    href: "#womens",
  },
  {
    id: 3,
    title: "GOODS",
    image: "http://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-16-at-10.11.19-PM-1.jpeg",
    href: "#goods",
  },
];

export default function ExploreCategory() {
  return (
    <section className="w-full bg-[#EBE9E4] text-black border-b border-black py-16 sm:py-20 md:py-24 px-6 sm:px-10 lg:px-36 select-none overflow-hidden flex flex-col justify-center items-center">
      <div className="w-full mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-black uppercase text-black font-sans text-center mb-10 md:mb-14">
          EXPLORE BY CATEGORY
        </h2>

        {/* 3 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 w-full">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group flex flex-col border border-black bg-white overflow-hidden transition-shadow shadow-xs hover:shadow-md cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative aspect-square w-full bg-stone-200 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Card Footer */}
              <div className="border-t border-black px-4 sm:px-5 py-3.5 sm:py-4 bg-[#EBE9E4] flex items-center justify-between text-black shrink-0">
                <span className="font-black text-xs sm:text-[13px] tracking-[0.16em] uppercase font-sans">
                  {cat.title}
                </span>
                <span className="font-mono text-xs text-black font-bold group-hover:translate-x-1 transition-transform">
                  &gt;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
