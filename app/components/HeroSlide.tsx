"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideItem {
  id: number;
  image: string;
  title: string;
  buttons: {
    label: string;
    href: string;
  }[];
}

const slidesData: SlideItem[] = [
  {
    id: 1,
    image: "/carousel/slider1.jpg",
    title: "AUTUMN 2026",
    buttons: [
      { label: "SHOP MEN'S", href: "#mens" },
      { label: "SHOP WOMEN'S", href: "#womens" },
    ],
  },
  {
    id: 2,
    image: "/carousel/slider2.jpg",
    title: "WINTER EXPEDITION",
    buttons: [
      { label: "SHOP MEN'S", href: "#mens" },
      { label: "SHOP WOMEN'S", href: "#womens" },
    ],
  },
  {
    id: 3,
    image: "/carousel/slider3.jpg",
    title: "NEW ARRIVALS 2026",
    buttons: [
      { label: "SHOP MEN'S", href: "#mens" },
      { label: "SHOP WOMEN'S", href: "#womens" },
    ],
  },
  {
    id: 4,
    image: "/carousel/slider1.jpg",
    title: "HERITAGE GOODS",
    buttons: [
      { label: "SHOP MEN'S", href: "#mens" },
      { label: "SHOP WOMEN'S", href: "#womens" },
    ],
  },
  {
    id: 5,
    image: "/carousel/slider2.jpg",
    title: "ROAD & TRAIL",
    buttons: [
      { label: "SHOP MEN'S", href: "#mens" },
      { label: "SHOP WOMEN'S", href: "#womens" },
    ],
  },
];

export default function HeroSlide() {
  return (
    <div className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-black select-none">
      <Swiper
        modules={[Navigation, Pagination]}
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        speed={600}
        loop={true}
        navigation={{
          prevEl: ".hero-prev-arrow",
          nextEl: ".hero-next-arrow",
        }}
        pagination={{
          clickable: true,
          el: ".hero-pagination-dots",
          bulletClass: "hero-dot",
          bulletActiveClass: "hero-dot-active",
        }}
        className="w-full h-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                quality={90}
                className="object-cover object-center"
                sizes="100vw"
              />
              {/* Subtle vintage overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* Slide Text Content & CTA Buttons */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-14 lg:p-20 pointer-events-none">
              <div className="space-y-4 max-w-2xl">
                {/* Title */}
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-sm font-sans">
                  {slide.title}
                </h2>

                {/* Stacked CTA Buttons */}
                <div className="flex flex-col items-start gap-2.5 pt-1 pointer-events-auto">
                  {slide.buttons.map((btn, btnIdx) => (
                    <Link
                      key={btnIdx}
                      href={btn.href}
                      className="inline-block bg-white text-black text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase px-3 py-2.5 rounded-[4px] shadow-sm hover:bg-stone-200 transition-colors"
                    >
                      {btn.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows aligned exactly with Navbar (px-8) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-between px-8 pointer-events-none">
        <button
          type="button"
          aria-label="Previous Slide"
          className="hero-prev-arrow pointer-events-auto text-white/75 hover:text-white transition-opacity cursor-pointer focus:outline-none p-0 flex items-center justify-center"
        >
          <svg
            className="w-3 h-5 md:w-3.5 md:h-6"
            viewBox="0 0 8 14"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M7 1L1 7L7 13"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Next Slide"
          className="hero-next-arrow pointer-events-auto text-white/75 hover:text-white transition-opacity cursor-pointer focus:outline-none p-0 flex items-center justify-center"
        >
          <svg
            className="w-3 h-5 md:w-3.5 md:h-6"
            viewBox="0 0 8 14"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M1 1L7 7L1 13"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Pagination Dots at Bottom Center */}
      <div className="hero-pagination-dots absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2" />
    </div>
  );
}
