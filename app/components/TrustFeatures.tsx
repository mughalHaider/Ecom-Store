"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { useCurrency } from "../context/CurrencyContext";

// Swiper styles
import "swiper/css";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: "15% OFF FIRST ORDER",
    description: "Subscribe to our mailing list for 15% off your first order",
  },
  {
    id: 2,
    title: "EASY RETURNS & INSTANT EXCHANGES",
    description: "Get your new items sent out straight away on UK & EU orders",
  },
  {
    id: 3,
    title: "FREE WORLDWIDE DELIVERY",
    description: "Free worldwide delivery on all orders over ₦100",
  },
  {
    id: 4,
    title: "30 DAY RETURNS",
    description:
      "Orders are eligible for returns within 30 days of dispatch from our UK warehouse",
  },
];

export default function TrustFeatures() {
  const { formatPrice } = useCurrency();
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileSwiper, setMobileSwiper] = useState<SwiperType | null>(null);

  const goToSlide = (idx: number) => {
    if (mobileSwiper) {
      mobileSwiper.slideTo(idx);
    }
  };

  return (
    <section className="w-full bg-[#F5F3ED] text-black border-b border-black overflow-hidden select-none">
      {/* ================= MOBILE SLIDER (matches screenshot) ================= */}
      <div className="block md:hidden py-8 px-6">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          speed={400}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSwiper={setMobileSwiper}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          className="w-full"
        >
          {features.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center justify-center text-center space-y-3.5 min-h-[165px]">
                {/* Title */}
                <h3 className="text-base font-black tracking-[0.16em] uppercase text-black font-sans max-w-[240px] leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-mono text-xs sm:text-sm text-stone-800 leading-relaxed max-w-[260px]">
                  {item.id === 3
                    ? `Free worldwide delivery on all orders over ${formatPrice(100)}`
                    : item.description}
                </p>

                {/* Information Circle Icon */}
                <button
                  type="button"
                  aria-label={`More details on ${item.title}`}
                  className="w-5 h-5 rounded-full border border-black/80 flex items-center justify-center text-black/80 hover:text-black hover:border-black transition-colors cursor-pointer mt-1"
                >
                  <span className="font-mono text-[11px] leading-none">i</span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 4 Circular Pagination Dots matching screenshot */}
        <div className="flex items-center justify-center gap-2 mt-4 pt-2">
          {features.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => goToSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full border border-black transition-all duration-200 cursor-pointer ${activeSlide === idx
                ? "bg-[#8f6f4d] scale-110"
                : "bg-transparent hover:bg-black/20"
                }`}
            />
          ))}
        </div>
      </div>

      {/* ================= DESKTOP 4-COLUMN GRID ================= */}
      <div className="hidden md:grid md:grid-cols-4 divide-x divide-black">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between text-center px-6 py-10 min-h-[240px] group hover:bg-[#eceae2] transition-colors"
          >
            {/* Title */}
            <h3 className="text-base lg:text-md font-black tracking-[0.16em] uppercase text-black font-sans max-w-[240px] leading-snug">
              {item.title}
            </h3>

            {/* Description */}
            <p className="font-mono text-xs md:text-sm text-stone-700 leading-relaxed max-w-[270px] my-4">
              {item.id === 3
                ? `Free worldwide delivery on all orders over ${formatPrice(100)}`
                : item.description}
            </p>

            {/* Information Circle Icon */}
            <button
              type="button"
              aria-label={`More details on ${item.title}`}
              className="w-5 h-5 rounded-full border border-black/60 flex items-center justify-center text-stone-600 hover:text-black hover:border-black transition-colors cursor-pointer"
            >
              <span className="font-mono text-[11px] leading-none">i</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
