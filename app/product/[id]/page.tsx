"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Bookmark, ShoppingBag, ArrowLeft } from "lucide-react";
import { allProducts, getProductById } from "../../lib/products";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useCart } from "../../context/CartContext";
import { useCurrency } from "../../context/CurrencyContext";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { formatPrice } = useCurrency();
  const product = getProductById(Number(id));

  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(
    product?.sizes && product.sizes.length === 1 ? product.sizes[0] : null
  );
  const [isSaved, setIsSaved] = useState(false);
  const [qty, setQty] = useState(1);
  const [innerSwiper, setInnerSwiper] = useState<SwiperType | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const { addToCart, openCart, cartCount } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-[#EBE9E4] flex flex-col items-center justify-center gap-6">
        <p className="font-black tracking-[0.2em] uppercase text-black text-lg">
          Product not found.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.14em] uppercase underline underline-offset-4"
        >
          <ArrowLeft size={14} /> Return Home
        </Link>
      </div>
    );
  }

  const handlePrev = () => {
    if (innerSwiper) innerSwiper.slidePrev();
  };

  const handleNext = () => {
    if (innerSwiper) innerSwiper.slideNext();
  };

  const handleAddToCart = () => {
    if (!selectedSize) return;
    setAddedToCart(true);
    addToCart({
      id: `${product.id}-${selectedSize}`,
      productId: product.id,
      title: product.title,
      price: parseFloat(product.price.replace(/[^\d.]/g, "")) || 95,
      image: product.images[0],
      size: selectedSize,
      style: "STANDARD",
      quantity: qty,
    });
    setTimeout(() => setAddedToCart(false), 2200);
  };

  // Related products (exclude current)
  const related = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#EBE9E4] text-black font-sans select-none">
      {/* ─── Top Nav Bar ─── */}
      <div className="sticky top-0 z-40 w-full border-b border-black bg-[#EBE9E4]/95 backdrop-blur-sm px-6 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[10.5px] font-mono font-bold tracking-[0.14em] uppercase text-black hover:text-[#8f6f4d] transition-colors"
        >
          <ArrowLeft size={13} />
          <span>BACK</span>
        </Link>

        {/* P&CO Logo */}
        <Link href="/" className="flex items-center gap-0 font-black tracking-tight text-black text-lg leading-none select-none">
          <span className="font-black text-[22px] tracking-tight">P&amp;</span>
          <span className="relative font-black text-[22px] tracking-tight">
            C
            <span className="absolute -top-[5px] -right-[5px] w-[13px] h-[13px] rounded-full border-[1.5px] border-black pointer-events-none" />
          </span>
          <span className="relative font-black text-[22px] tracking-tight ml-[8px]">
            O
            <span className="absolute -bottom-[3px] left-0 w-full h-[2px] bg-black" />
          </span>
        </Link>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            aria-label="Save product"
            className={`w-7 h-7 rounded-full border border-black flex items-center justify-center transition-all cursor-pointer ${isSaved ? "bg-black text-white" : "bg-transparent text-black hover:bg-black hover:text-white"}`}
          >
            <Bookmark size={13} strokeWidth={1.8} className={isSaved ? "fill-white" : ""} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open shopping bag (${cartCount} items)`}
            className="relative w-7 h-7 rounded-full border border-black flex items-center justify-center transition-all cursor-pointer hover:bg-black hover:text-white text-black group"
          >
            <ShoppingBag size={13} strokeWidth={1.8} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#a27b53] text-[8px] font-bold text-white shadow-xs">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ─── Breadcrumb ─── */}
      <div className="px-6 sm:px-10 lg:px-16 py-3 border-b border-black/20 bg-white/50">
        <p className="text-[9.5px] font-mono tracking-[0.14em] uppercase text-stone-500">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span className="mx-1.5">/</span>
          <span className="capitalize">{product.category === "mens" ? "MEN'S" : "WOMEN'S"}</span>
          <span className="mx-1.5">/</span>
          <span className="text-black font-bold">{product.title}</span>
        </p>
      </div>

      {/* ─── Main Product Grid ─── */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16">

          {/* ── Left: Image Gallery ── */}
          <div className="flex flex-col gap-4">
            {/* Main Image Gallery */}
            <div className="relative aspect-[3/4] w-full bg-stone-200 border border-black overflow-hidden">
              {product.images.length > 1 ? (
                <Swiper
                  modules={[Navigation]}
                  allowTouchMove={true}
                  slidesPerView={1}
                  speed={350}
                  onSwiper={setInnerSwiper}
                  onSlideChange={(swiper) => setActiveImg(swiper.activeIndex)}
                  className="w-full h-full"
                >
                  {product.images.map((imgSrc, idx) => (
                    <SwiperSlide key={idx} className="relative w-full h-full">
                      <Image
                        src={imgSrc}
                        alt={`${product.title} — view ${idx + 1}`}
                        fill
                        priority={idx === 0}
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Prev/Next Arrows - Only displayed if more than one image */}
              {product.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={activeImg === 0}
                    className={`absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full border border-black bg-white/90 flex items-center justify-center transition-all ${activeImg === 0 ? "opacity-20 cursor-not-allowed" : "opacity-80 hover:opacity-100 hover:bg-black hover:text-white cursor-pointer"}`}
                  >
                    <ChevronLeft size={16} strokeWidth={2} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={activeImg === product.images.length - 1}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full border border-black bg-white/90 flex items-center justify-center transition-all ${activeImg === product.images.length - 1 ? "opacity-20 cursor-not-allowed" : "opacity-80 hover:opacity-100 hover:bg-black hover:text-white cursor-pointer"}`}
                  >
                    <ChevronRight size={16} strokeWidth={2} />
                  </button>

                  {/* Dot Indicator */}
                  <div className="absolute bottom-3 inset-x-0 z-20 flex justify-center gap-1.5">
                    {product.images.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => { innerSwiper?.slideTo(idx); }}
                        className={`h-[2.5px] w-7 transition-all cursor-pointer ${activeImg === idx ? "bg-black" : "bg-black/25 hover:bg-black/50"}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-3 left-3 z-20 flex gap-1.5">
                {product.isNew && (
                  <span className="text-[9px] font-bold tracking-[0.12em] uppercase px-2 py-0.5 bg-white border border-black text-black">
                    NEW
                  </span>
                )}
                {product.isTrending && (
                  <span className="text-[9px] font-bold tracking-[0.12em] uppercase px-2 py-0.5 bg-black text-white">
                    TRENDING
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Tray - Only displayed if more than one image */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => { innerSwiper?.slideTo(idx); setActiveImg(idx); }}
                    className={`relative flex-1 aspect-[3/4] border overflow-hidden transition-all cursor-pointer ${activeImg === idx ? "border-black" : "border-black/20 opacity-60 hover:opacity-90"}`}
                  >
                    <Image
                      src={imgSrc}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover object-top"
                      sizes="15vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Right: Product Details ── */}
          <div className="flex flex-col gap-6 lg:gap-7 lg:pt-2">

            {/* Category Pill */}
            <p className="text-[9.5px] font-mono font-bold tracking-[0.18em] uppercase text-[#8f6f4d] border border-[#8f6f4d]/50 inline-flex px-2.5 py-1 self-start">
              {product.category === "mens" ? "MEN'S" : "WOMEN'S"}
            </p>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-[0.1em] uppercase text-black leading-tight">
                {product.title}
              </h1>
              <p className="text-[11px] font-mono tracking-[0.12em] uppercase text-stone-500">
                SKU: {product.sku}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 border-y border-black/15 py-4">
              <span className="text-3xl font-black text-black tracking-tight">
                {formatPrice(product.price)}
              </span>
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-[0.12em]">
                Incl. VAT
              </span>
            </div>

            {/* Description */}
            <p className="font-mono text-[12.5px] text-stone-700 leading-relaxed max-w-[480px]">
              {product.description}
            </p>

            {/* Colour */}
            <div className="space-y-2">
              <p className="text-[10px] font-mono font-bold tracking-[0.16em] uppercase text-black">
                COLOUR: <span className="text-stone-600">{product.colour}</span>
              </p>
            </div>

            {/* Size Selector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-mono font-bold tracking-[0.16em] uppercase text-black">
                  SIZE: <span className="text-stone-600">{selectedSize || "SELECT A SIZE"}</span>
                </p>
                <button type="button" className="text-[9.5px] font-mono tracking-[0.12em] uppercase text-stone-500 underline underline-offset-4 hover:text-black transition-colors cursor-pointer">
                  SIZE GUIDE
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-11 h-11 border text-[10.5px] font-black tracking-[0.1em] uppercase transition-all cursor-pointer ${selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-black/30 bg-white text-black hover:border-black"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Qty Stepper */}
              <div className="flex items-stretch border border-black shrink-0">
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3.5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors cursor-pointer text-base font-bold"
                >
                  −
                </button>
                <span className="px-4 flex items-center justify-center text-[13px] font-black tracking-[0.1em] border-x border-black min-w-[44px] text-center">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty(qty + 1)}
                  className="px-3.5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors cursor-pointer text-base font-bold"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-[11px] font-black tracking-[0.18em] uppercase transition-all cursor-pointer ${selectedSize
                  ? addedToCart
                    ? "bg-[#8f6f4d] text-white border border-[#8f6f4d]"
                    : "bg-black text-white border border-black hover:bg-[#1a1a1a]"
                  : "bg-stone-200 text-stone-400 border border-stone-300 cursor-not-allowed"
                  }`}
              >
                <ShoppingBag size={14} />
                {addedToCart ? "ADDED TO BAG ✓" : selectedSize ? "ADD TO BAG" : "SELECT A SIZE"}
              </button>
            </div>

            {/* Product Meta Details */}
            <div className="border-t border-black/15 pt-5 space-y-3">
              {[
                { label: "MATERIAL", value: product.material },
                { label: "FIT", value: product.fit },
                { label: "CARE", value: product.care },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3 text-[11.5px] font-mono">
                  <span className="font-bold tracking-[0.12em] uppercase text-black shrink-0 w-20">
                    {label}
                  </span>
                  <span className="text-stone-700 leading-relaxed">{value}</span>
                </div>
              ))}
            </div>

            {/* Trust Signals */}
            <div className="border-t border-black/15 pt-5 grid grid-cols-2 gap-3">
              {[
                { icon: "🚚", label: "FREE WORLDWIDE DELIVERY" },
                { icon: "↩", label: "30 DAY RETURNS" },
                { icon: "✦", label: "15% OFF YOUR FIRST ORDER" },
                { icon: "✔", label: "EASY EXCHANGES" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-[9.5px] font-mono font-bold tracking-[0.12em] uppercase text-stone-700 leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Related Products ─── */}
        {related.length > 0 && (
          <div className="mt-20 border-t border-black pt-10 space-y-8">
            <h2 className="text-base sm:text-lg font-black tracking-[0.2em] uppercase text-black">
              YOU MAY ALSO LIKE
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/product/${rel.id}`}
                  className="group flex flex-col border border-black bg-white overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[3/4] w-full bg-stone-100 overflow-hidden">
                    <Image
                      src={rel.images[0]}
                      alt={rel.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute top-2 left-2 flex gap-1">
                      {rel.isNew && (
                        <span className="text-[8px] font-bold tracking-[0.1em] uppercase px-1.5 py-0.5 bg-white border border-black text-black">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="border-t border-black px-3 py-3 bg-[#EBE9E4] space-y-1">
                    <h3 className="text-[9.5px] font-black tracking-[0.12em] uppercase text-black line-clamp-1">
                      {rel.title}
                    </h3>
                    <p className="text-[11px] font-bold text-black">{formatPrice(rel.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ─── Footer Bar ─── */}
      <div className="w-full border-t border-black/20 bg-[#1C1A19] text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[9.5px] font-mono tracking-[0.14em] uppercase">
        <div className="flex items-center gap-2">
          <span className="text-amber-500 text-sm">★★★★★</span>
          <span>4.8/5 STARS ON REVIEWS.IO</span>
        </div>
        <Link href="/" className="underline underline-offset-4 hover:text-[#c28b5b] transition-colors">
          ← CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
}
