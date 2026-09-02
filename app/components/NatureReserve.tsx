"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NatureReserve() {
  return (
    <section className="w-full bg-white text-black border-b border-black overflow-hidden select-none">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: Editorial Lookbook Image */}
        <div className="relative w-full min-h-[360px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[600px] border-b md:border-b-0 md:border-r border-black bg-stone-100 overflow-hidden">
          <Image
            src="/lookbook/hat-pic.jpg"
            alt="Mt. Regent Nature Reserve"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: Editorial Narrative Story */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-12 sm:p-12 md:p-14 lg:p-20 bg-white">
          <div className="max-w-[480px] space-y-5 sm:space-y-6">
            {/* Title */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-black tracking-[0.18em] uppercase text-black font-sans leading-tight">
              MT. REGENT NATURE RESERVE
            </h2>

            {/* Narrative Description */}
            <p className="font-mono text-xs sm:text-[13px] text-stone-800 leading-relaxed max-w-[440px] mx-auto">
              Our autumn collection takes inspiration from the landscapes of
              the great outdoors. Taking its roots from heritage workwear and
              traditional outdoor clothing, it brings together hardwearing
              ripstop, waxed canvas, heavyweight denim, brushed flannel and
              textured knits, built around the layers needed as the seasons
              change.
            </p>

            {/* CTA Link */}
            <div className="pt-2">
              <Link
                href="#lookbook"
                className="group inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#8f6f4d] hover:text-black transition-colors font-mono cursor-pointer"
              >
                <span className="underline underline-offset-4">
                  VIEW THE LOOKBOOK
                </span>
                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
