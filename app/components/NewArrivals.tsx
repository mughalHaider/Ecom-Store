"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Mousewheel } from "swiper/modules";
import { Bookmark, ChevronLeft, ChevronRight } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface ProductItem {
  id: number;
  title: string;
  category: "mens" | "womens";
  price: string;
  isNew?: boolean;
  isTrending?: boolean;
  images: [string, string, string]; // 3 images per product
}

// Products using images from public/products/
const productsData: ProductItem[] = [
  {
    id: 1,
    title: "HAWTHORNE SHIRT - BROWN PLAID",
    category: "mens",
    price: "£90",
    isNew: true,
    isTrending: true,
    images: [
      "/products/p1.jpg",
      "/products/p2.jpg",
      "/products/p3.jpg",
    ],
  },
  {
    id: 2,
    title: "BELLA REVERSIBLE MINI DENIM DRESS",
    category: "womens",
    price: "£95",
    isNew: true,
    isTrending: true,
    images: [
      "/products/p4.jpg",
      "/products/p5.jpg",
      "/products/p6.jpg",
    ],
  },
  {
    id: 3,
    title: "P&CO OVERSIZED DOUBLE ZIP HOODIE",
    category: "mens",
    price: "£100",
    isNew: true,
    isTrending: false,
    images: [
      "/products/p7.jpg",
      "/products/p8.jpg",
      "/products/p9.jpg",
    ],
  },
  {
    id: 4,
    title: "YAMA DENIM SMOCK JACKET",
    category: "womens",
    price: "£120",
    isNew: true,
    isTrending: true,
    images: [
      "/products/p10.jpg",
      "/products/p11.jpg",
      "/products/p12.jpg",
    ],
  },
  {
    id: 5,
    title: "VINTAGE WASH CHORE COAT",
    category: "mens",
    price: "£135",
    isNew: true,
    isTrending: false,
    images: [
      "/products/p13.jpg",
      "/products/p14.jpg",
      "/products/p15.jpg",
    ],
  },
  {
    id: 6,
    title: "YAMA BALLOON DENIM PANT",
    category: "womens",
    price: "£95",
    isNew: true,
    isTrending: true,
    images: [
      "/products/p16.jpg",
      "/products/p17.jpg",
      "/products/p18.jpg",
    ],
  },
  {
    id: 7,
    title: "FIELD HEAVYWEIGHT CANVAS JACKET",
    category: "mens",
    price: "£145",
    isNew: false,
    isTrending: true,
    images: [
      "/products/p19.jpg",
      "/products/p20.jpg",
      "/products/p21.jpg",
    ],
  },
  {
    id: 8,
    title: "CLASSIC UTILITY WORKSHIRT",
    category: "womens",
    price: "£85",
    isNew: false,
    isTrending: true,
    images: [
      "/products/p22.jpg",
      "/products/p23.jpg",
      "/products/p24.jpg",
    ],
  },
];

function ProductCard({ product }: { product: ProductItem }) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [innerSwiper, setInnerSwiper] = useState<SwiperType | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (innerSwiper) {
      innerSwiper.slidePrev();
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (innerSwiper) {
      innerSwiper.slideNext();
    }
  };

  const goToSlide = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (innerSwiper) {
      innerSwiper.slideTo(index);
    }
  };

  return (
    <div className="group relative flex flex-col h-full bg-white border-r border-black select-none">
      {/* Product 3-Image Slider Area */}
      <div className="relative flex-1 w-full bg-[#f4f3f0] overflow-hidden">
        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 pointer-events-none">
          {product.isNew && (
            <span className="text-[8.5px] font-bold tracking-[0.14em] uppercase px-1.5 py-0.5 border border-black bg-white text-black">
              NEW
            </span>
          )}
          {product.isTrending && (
            <span className="text-[8.5px] font-bold tracking-[0.14em] uppercase px-1.5 py-0.5 border border-black bg-white text-black">
              TRENDING
            </span>
          )}
        </div>

        {/* Wishlist Bookmark Button */}
        <button
          type="button"
          aria-label="Save item"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsSaved(!isSaved);
          }}
          className={`absolute top-2.5 right-2.5 z-20 w-6 h-6 rounded-full border border-black flex items-center justify-center transition-colors cursor-pointer ${isSaved
            ? "bg-black text-white"
            : "bg-white text-black hover:bg-black hover:text-white"
            }`}
        >
          <Bookmark size={11} strokeWidth={1.8} className={isSaved ? "fill-white" : ""} />
        </button>

        {/* 3-Image Inner Swiper (allowTouchMove disabled so outer horizontal scroll is fluid) */}
        <Swiper
          modules={[Navigation]}
          allowTouchMove={false}
          slidesPerView={1}
          speed={300}
          onSwiper={setInnerSwiper}
          onSlideChange={(swiper) => setActiveImgIdx(swiper.activeIndex)}
          className="w-full h-full"
        >
          {product.images.map((imgSrc, idx) => (
            <SwiperSlide key={idx} className="relative w-full h-full min-h-[300px]">
              <Image
                src={imgSrc}
                alt={`${product.title} view ${idx + 1}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 75vw, (max-width: 1024px) 35vw, 25vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left / Right Inner Chevrons - ALWAYS DISPLAYED */}
        <button
          type="button"
          aria-label="Previous image"
          onClick={handlePrev}
          disabled={activeImgIdx === 0}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white/90 border border-black/30 flex items-center justify-center text-black shadow-xs transition-all ${activeImgIdx === 0
            ? "opacity-25 cursor-not-allowed"
            : "opacity-85 hover:opacity-100 hover:bg-black hover:text-white cursor-pointer"
            }`}
        >
          <ChevronLeft size={14} strokeWidth={2} />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={handleNext}
          disabled={activeImgIdx === product.images.length - 1}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white/90 border border-black/30 flex items-center justify-center text-black shadow-xs transition-all ${activeImgIdx === product.images.length - 1
            ? "opacity-25 cursor-not-allowed"
            : "opacity-85 hover:opacity-100 hover:bg-black hover:text-white cursor-pointer"
            }`}
        >
          <ChevronRight size={14} strokeWidth={2} />
        </button>

        {/* 3-Segment Dash Indicator at Bottom of Image */}
        <div className="absolute bottom-2 inset-x-0 z-20 flex justify-center items-center gap-1.5">
          {product.images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Jump to slide ${idx + 1}`}
              onClick={(e) => goToSlide(e, idx)}
              className={`h-[2.5px] cursor-pointer transition-all duration-200 ${activeImgIdx === idx
                ? "w-7 bg-black"
                : "w-7 bg-black/25 hover:bg-black/50"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Product Information Card Footer */}
      <Link
        href={`/product/${product.id}`}
        className="border-t border-black px-3.5 py-3 bg-white flex flex-col justify-between shrink-0 space-y-2 hover:bg-stone-50 transition-colors"
      >
        {/* Title */}
        <h3 className="text-[10.5px] font-black tracking-[0.14em] uppercase text-black line-clamp-1 font-sans">
          {product.title}
        </h3>

        {/* Price & Quick Add */}
        <div className="flex items-center justify-between pt-0.5">
          <span className="text-[12px] font-bold text-black tracking-tight font-sans">
            {product.price}
          </span>
          <span className="text-[10px] font-black tracking-[0.16em] uppercase text-[#8f6f4d]">
            VIEW →
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function NewArrivals() {
  const [activeTab, setActiveTab] = useState<"ALL" | "MENS" | "WOMENS">("ALL");
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  const filteredProducts = productsData.filter((item) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "MENS") return item.category === "mens";
    if (activeTab === "WOMENS") return item.category === "womens";
    return true;
  });

  return (
    <section className="relative w-full min-h-[75vh] h-[720px] bg-white text-black flex flex-col justify-between overflow-hidden border-t border-b border-black">
      {/* Top Header Bar */}
      <div className="px-6 py-6 flex items-center justify-between border-b border-black bg-white shrink-0">
        <h2 className="text-sm sm:text-lg font-black tracking-[0.2em] uppercase text-black font-sans">
          NEW ARRIVALS
        </h2>

        {/* Filter Tabs Box */}
        <div className="inline-flex items-stretch border border-black text-[8px] sm:text-[9.5px] font-bold tracking-[0.14em] uppercase">
          <button
            type="button"
            onClick={() => setActiveTab("ALL")}
            className={`px-2 py-1 transition-colors cursor-pointer border-r border-black ${activeTab === "ALL"
              ? "bg-stone-300 text-black font-black"
              : "bg-white text-black hover:bg-stone-100"
              }`}
          >
            ALL
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("MENS")}
            className={`px-2 py-1 transition-colors cursor-pointer border-r border-black ${activeTab === "MENS"
              ? "bg-stone-300 text-black font-black"
              : "bg-white text-black hover:bg-stone-100"
              }`}
          >
            MEN&apos;S
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("WOMENS")}
            className={`px-2 py-1 transition-colors cursor-pointer ${activeTab === "WOMENS"
              ? "bg-stone-300 text-black font-black"
              : "bg-white text-black hover:bg-stone-100"
              }`}
          >
            WOMEN&apos;S
          </button>
        </div>
      </div>

      {/* Main Products Grid with Swiper (fits 75vh with smooth drag/freeMode) */}
      <div className="flex-1 w-full relative overflow-hidden border-l border-black">
        <Swiper
          modules={[FreeMode, Mousewheel]}
          slidesPerView={1.2}
          spaceBetween={0}
          grabCursor={true}
          onSwiper={setMainSwiper}
          preventClicks={false}
          preventClicksPropagation={false}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.8,
            momentumVelocityRatio: 0.8,
          }}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 4.2,
            },
            1440: {
              slidesPerView: 4.5,
            },
          }}
          className="w-full h-full"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id} className="h-full">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Reviews Banner */}
      <div className="w-full border-t border-black/10 py-1 text-center text-[9px] font-bold tracking-[0.2em] text-stone-600 uppercase flex items-center justify-center gap-2 bg-[#1C1A19] text-white shrink-0">
        <span className="text-amber-500 text-xs sm:text-lg">★★★★★</span> <span className="text-[10px] sm:text-xs">4.8/5 STARS ON REVIEWS.IO</span>
      </div>
    </section>
  );
}
